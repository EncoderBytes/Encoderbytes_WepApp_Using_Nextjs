import { API_URL_WeProvide } from "@/app/AdminDashboard/components/ShowApidatas/apiUrls";
import { connect } from "@/app/config/db";
import WeProvideModel from "@/app/models/WeProvideModel";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await connect(); // MySQL connect
    const [rows] = await db.query("SELECT * FROM weprovide");

    return NextResponse.json({
      Result: rows,
      count: rows.length,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { Message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(Request) {
  try {
    const db = await connect();
    const data = await Request.formData();

    // ---- IMAGE UPLOAD TO CLOUDINARY ----
    const file = data.get("image");
    let imageURL = "";
    let publicId = "";

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json({
          error: "File too large. Max 5MB allowed.",
          status: 400,
        });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream(
          { resource_type: "auto" },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        );
        stream.end(buffer);

        setTimeout(() => reject(new Error("Cloudinary upload timeout")), 30000);
      });

      imageURL = upload.secure_url;
      publicId = upload.public_id;
    }

    // ---- Extract Form Fields ----
    const fields = {};
    for (const [key, value] of data.entries()) {
      fields[key] = value;
    }

    const { OrderNumber, title, subtitle, description } = fields;

    // ---- Insert Into Database ----
    const [result] = await db.query(
      `INSERT INTO weprovide (OrderNumber, image, publicId, title, subtitle, description)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [OrderNumber, imageURL, publicId, title, subtitle, description]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Service Not Added", status: 400 });
    }

    // ---- Revalidate page to fetch latest data ----
    revalidatePath(API_URL_WeProvide); 

    return NextResponse.json({
      message: "Service Created Successfully",
      success: true,
      status: 200,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
