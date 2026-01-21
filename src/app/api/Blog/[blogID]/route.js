import { connect } from "@/app/config/db";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";

// GET a specific blog post from MySQL
export async function GET(request, context) {
  try {
    const db = await connect();
    const id = context.params.blogID;

    // Fetch the blog from MySQL by ID
    const [rows] = await db.query("SELECT * FROM blog WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "No Blog Available" }, { status: 404 });
    } else {
      return NextResponse.json({ Result: rows[0] }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return NextResponse.json({ Message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}

// DELETE a blog post from MySQL
export async function DELETE(request, context) {
  try {
    const id = context.params.blogID;
    const db = await connect();

    // Find the blog first to get image publicId
    const [rows] = await db.query("SELECT * FROM blog WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    const blog = rows[0];
    const imagePublicId = blog.publicId;

    // Delete the blog from the MySQL database
    const [deleteResult] = await db.query("DELETE FROM blog WHERE id = ?", [id]);

    if (deleteResult.affectedRows === 0) {
      return NextResponse.json({ message: "Failed to delete blog" }, { status: 500 });
    }

    // Delete the image from Cloudinary if publicId exists
    if (imagePublicId) {
      try {
        await cloudinary.v2.uploader.destroy(imagePublicId);
      } catch (error) {
        console.error("Failed to delete image from Cloudinary:", error);
      }
    }

    return NextResponse.json({ message: "Blog and associated image deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog", message: error.message }, { status: 500 });
  }
}

// UPDATE a blog post in MySQL
export async function PUT(request, context) {
  try {
    const id = context.params.blogID;
    const db = await connect();

    const data = await request.formData();
    const file = data.get("image");

    // Fetch existing blog
    const [rows] = await db.query("SELECT * FROM blog WHERE id = ?", [id]);
    if (rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    const oldBlog = rows[0];

    let newImageUrl = oldBlog.image;
    let newImagePublicId = oldBlog.publicId;

    // Upload new image if provided
    if (file && typeof file === "object" && file.name) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => (error ? reject(error) : resolve(result))
        ).end(buffer);
      });

      newImageUrl = uploadResponse.secure_url;
      newImagePublicId = uploadResponse.public_id;

      // Delete old image if it existed
      if (oldBlog.publicId) {
        try {
          await cloudinary.v2.uploader.destroy(oldBlog.publicId);
        } catch (error) {
          console.error("Failed to delete old image from Cloudinary:", error);
        }
      }
    }

    // Extract fields from form data
    const fields = Object.fromEntries(data.entries());
    const blogtitle = fields.blogtitle || oldBlog.blogtitle;
    const author = fields.author || oldBlog.author;
    const datetime = fields.datetime || oldBlog.datetime;
    const description = fields.description || oldBlog.description;

    // Update blog in DB
    const [updateResult] = await db.query(
      `UPDATE blog SET blogtitle = ?, author = ?, datetime = ?, description = ?, image = ?, publicId = ? WHERE id = ?`,
      [blogtitle, author, datetime, description, newImageUrl, newImagePublicId, id]
    );

    if (updateResult.affectedRows === 0) {
      return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
    }

    return NextResponse.json({
      message: "Blog updated successfully",
      blog: {
        id,
        blogtitle,
        author,
        datetime,
        description,
        image: newImageUrl,
        publicId: newImagePublicId,
      },
    }, { status: 200 });
  } catch (error) {
    console.error("Error Updating Blog:", error);
    return NextResponse.json({ error: "Failed to update blog", message: error.message }, { status: 500 });
  }
}