import { connect } from "@/app/config/db";
// import BlogModel from "@/app/models/BlogModel";
import cloudinary from "cloudinary";
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
    const db = await connect();

    // Fetch all rows from ourapproaches table
    const [rows] = await db.query("SELECT * FROM ourapproaches");

    return NextResponse.json({
      Result: rows,
      count: rows.length,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching approaches:", error);
    return NextResponse.json(
      { Message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const db = await connect();
    const data = await request.formData();

    // --- IMAGE UPLOAD TO CLOUDINARY ---
    const file = data.get("image");
    let imageURL = "";
    let publicId = "";

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File too large. Max 5MB allowed.", status: 400 },
          { status: 400 }
        );
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

    // --- Extract Form Fields ---
    const fields = {};
    for (const [key, value] of data.entries()) {
      fields[key] = value;
    }

    const { no, heading, description } = fields;

    // --- Validation ---
    if (!no || !heading || !description) {
      return NextResponse.json(
        { error: "No, Heading and Description are required!", status: 400 },
        { status: 400 }
      );
    }

    // --- Insert Into Database ---
    const [result] = await db.query(
      `INSERT INTO ourapproaches (no, image, heading, description)
       VALUES (?, ?, ?, ?)`,
      [no, imageURL, heading, description]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Approach Not Added", status: 400 }, { status: 400 });
    }

    return NextResponse.json({
      message: "Approach Created Successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 }, { status: 500 });
  }
}
