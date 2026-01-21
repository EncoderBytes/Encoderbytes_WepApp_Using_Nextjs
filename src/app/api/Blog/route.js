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

// GET all blog posts from MySQL
export async function GET() {
  try {
    const db = await connect();

    // Fetch all rows from blog table
    const [allItems] = await db.query("SELECT * FROM blog");

    // Get row count
    const [countRows] = await db.query("SELECT COUNT(*) AS count FROM blog");
    const itemCount = countRows[0].count;

    if (!allItems || allItems.length === 0) {
      return NextResponse.json({ Result: [], count: 0 }, { status: 200 });
    } else {
      return NextResponse.json({ Result: allItems, count: itemCount }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching blog items:", error);
    return NextResponse.json(
      { Message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// POST a new blog post to MySQL
export async function POST(request) {
  try {
    const db = await connect();
    const data = await request.formData();

    /* ---------- image upload ---------- */
    const file = data.get("image");
    let imageUrl = "";
    let publicId = "";

    if (file && typeof file === "object" && file.name) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { resource_type: "auto" },
          (err, res) => (err ? reject(err) : resolve(res))
        );
        uploadStream.end(buffer);
      });

      imageUrl = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;
    } else {
      // default image if none provided
      imageUrl = "https://res.cloudinary.com/dpj2ewekx/image/upload/v1725603041/samples/smile.jpg";
    }

    /* ---------- other fields ---------- */
    const { blogtitle, author, datetime, description } = Object.fromEntries(data.entries());

    /* ---------- ensure unique title (optional but recommended) ---------- */
    const [existing] = await db.query(
      "SELECT id FROM blog WHERE blogtitle = ?",
      [blogtitle]
    );
    if (existing.length > 0) {
      return NextResponse.json({ error: "Blog already exists" }, { status: 400 });
    }

    /* ---------- insert new blog ---------- */
    const [insertResult] = await db.query(
      `INSERT INTO blog (blogtitle, author, datetime, description, image, publicId) VALUES (?, ?, ?, ?, ?, ?)`,
      [blogtitle, author, datetime, description, imageUrl, publicId]
    );

    if (insertResult.affectedRows === 0) {
      return NextResponse.json({ message: "Blog not added" }, { status: 500 });
    }

    return NextResponse.json({
      message: "Blog created successfully",
      success: true,
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

