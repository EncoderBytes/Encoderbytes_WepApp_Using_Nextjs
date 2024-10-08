// const { connect } = require("@/app/config/db");
// const { default: BlogModel } = require("@/app/models/BlogModel");
// const { NextResponse } = require("next/server");

import { connect } from "@/app/config/db";
import BlogModel from "@/app/models/BlogModel";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(Request) {
  try {
    // Connect to the database
    await connect();

    // Retrieve form data
    const data = await Request.formData();

    // Extract the image file from the form data
    const file = data.get("image");
    let imageUrl = "";
    let publicId = "";

    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Upload the image to Cloudinary
      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ resource_type: "auto" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      imageUrl = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;
      console.log(`Uploaded image URL: ${imageUrl}`);
      console.log(`Uploaded image ID: ${publicId}`);
    } else {
      // Use a default image URL if no file is uploaded
      imageUrl =
        "https://res.cloudinary.com/dpj2ewekx/image/upload/v1725603041/samples/smile.jpg"; // Replace with your default image URL
    }

    // return;
    // Extract other form data fields
    const { blogtitle, author, datetime, description } = Object.fromEntries(
      data.entries()
    );

    // Check if a blog with the same title already exists
    const existingBlog = await BlogModel.findOne({ blogtitle });

    if (existingBlog) {
      return NextResponse.json({
        error: "Blog already exists",
        status: 400,
      });
    }

    // Create a new blog entry
    const newBlog = new BlogModel({
      blogtitle,
      author,
      datetime,
      description,
      image: imageUrl,
      publicId, // Save the Cloudinary image URL
    });

    // Save the blog to the database
    const savedBlog = await newBlog.save();

    // Return success or failure message based on the result
    if (!savedBlog) {
      return NextResponse.json({ message: "Blog not added", status: 500 });
    } else {
      return NextResponse.json({
        message: "Blog created successfully",
        success: true,
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}

// get all team members
export async function GET() {
  try {
    await connect();
    const All_Blog = await BlogModel.find();
    console.log(All_Blog);
    const BlogCount = await BlogModel.countDocuments();
    if (!All_Blog || All_Blog.length === 0) {
      return NextResponse.json({ Result: All_Blog });
    } else {
      return NextResponse.json({ Result: All_Blog, count: BlogCount });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}
