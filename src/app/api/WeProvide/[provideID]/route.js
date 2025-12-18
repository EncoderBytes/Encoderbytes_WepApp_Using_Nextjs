import { connect } from "@/app/config/db";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";

// GET SINGLE SERVICE BY ID
export async function GET(request, { params }) {
  try {
    const db = await connect();
    const id = params.provideID;

    const [rows] = await db.query("SELECT * FROM weprovide WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ result: "No Service Available" });
    }

    return NextResponse.json({ Result: rows[0] });
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json(
      { Message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE SERVICE + DELETE CLOUDINARY IMAGE
export async function DELETE(request, { params }) {
  try {
    const id = params.provideID;
    const db = await connect();

    // Find service first
    const [rows] = await db.query("SELECT * FROM weprovide WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "Service not found", status: 404 });
    }

    const service = rows[0];
    const oldPublicId = service.publicId;

    // Delete from MySQL
    const [deleteResult] = await db.query(
      "DELETE FROM weprovide WHERE id = ?",
      [id]
    );

    if (deleteResult.affectedRows === 0) {
      return NextResponse.json({
        message: "Failed to delete service",
        status: 500,
      });
    }

    // Delete Cloudinary image
    if (oldPublicId) {
      try {
        await cloudinary.v2.uploader.destroy(oldPublicId);
        console.log("Old Cloudinary image deleted.");
      } catch (error) {
        console.error("Error deleting Cloudinary image:", error);
      }
    }

    return NextResponse.json({
      message: "Service deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 }
    );
  }
}

// UPDATE SERVICE (WITH OPTIONAL IMAGE)
export async function PUT(request, { params }) {
  try {
    const id = params.provideID;
    const db = await connect();

    const form = await request.formData();
    const newFile = form.get("image");

    let newImageURL = null;
    let newPublicId = null;

    // Upload new image if provided
    if (newFile && typeof newFile === "object" && newFile.name) {
      const bytes = await newFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ resource_type: "auto" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          })
          .end(buffer);
      });

      newImageURL = upload.secure_url;
      newPublicId = upload.public_id;
    }

    // Extract fields
    const { OrderNumber, title, subtitle, description } = Object.fromEntries(
      form.entries()
    );

    // Fetch old record
    const [rows] = await db.query("SELECT * FROM weprovide WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const old = rows[0];

    // If new image uploaded → delete old
    if (newImageURL && old.publicId) {
      try {
        await cloudinary.v2.uploader.destroy(old.publicId);
      } catch (error) {
        console.error("Error deleting old image:", error);
      }
    }

    // Update DB
    const [updateRes] = await db.query(
      `UPDATE weprovide 
       SET OrderNumber=?, title=?, subtitle=?, description=?, image=?, publicId=? 
       WHERE id = ?`,
      [
        OrderNumber || old.OrderNumber,
        title || old.title,
        subtitle || old.subtitle,
        description || old.description,
        newImageURL || old.image,
        newPublicId || old.publicId,
        id,
      ]
    );

    if (updateRes.affectedRows === 0) {
      return NextResponse.json(
        { error: "Failed to update service" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Service updated successfully",
      updatedService: {
        id,
        OrderNumber: OrderNumber || old.OrderNumber,
        title: title || old.title,
        subtitle: subtitle || old.subtitle,
        description: description || old.description,
        image: newImageURL || old.image,
        publicId: newPublicId || old.publicId,
      },
    });
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { error: "Failed to update service" },
      { status: 500 }
    );
  }
}
