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

