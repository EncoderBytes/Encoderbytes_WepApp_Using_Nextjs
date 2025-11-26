import { connect } from "@/app/config/db";
import WeProvideModel from "@/app/models/WeProvideModel";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



// export async function POST(request) {
//   try {
//     await connectMongo();                          // connect MongoDB

//     const data = await request.formData();

//     /* ---------- Image Upload ---------- */
//     const file = data.get("image");
//     let imageUrl = "";

//     if (file && typeof file === "object") {
//       const buffer = Buffer.from(await file.arrayBuffer());

//       const { secure_url } = await new Promise((resolve, reject) => {
//         cloudinary.v2.uploader
//           .upload_stream({ resource_type: "auto" }, (err, res) =>
//             err ? reject(err) : resolve(res)
//           )
//           .end(buffer);
//       });

//       imageUrl = secure_url;
//     } else {
//       imageUrl =
//         "https://res.cloudinary.com/dpj2ewekx/image/upload/v1725603041/samples/smile.jpg";
//     }

//     /* ---------- Other Fields ---------- */
//     const entries = Object.fromEntries(data.entries());

//     const {
//       OrderNumber,
//       title,
//       sub_title,
//       description,
//     } = entries;

//     /* ---------- Unique Check ---------- */
//     const existing = await WeProvideModel.findOne({ OrderNumber });
//     if (existing) {
//       return NextResponse.json({
//         error: "Item with this OrderNumber already exists",
//         status: 400,
//       });
//     }

//     /* ---------- Insert New Document ---------- */
//     const newItem = await WeProvideModel.create({
//       OrderNumber,
//       title,
//       sub_title,
//       description,
//       image: imageUrl,
//     });

//     return NextResponse.json({
//       message: "Card created successfully",
//       success: true,
//       data: newItem,
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error creating card:", error);
//     return NextResponse.json({ error: error.message, status: 500 });
//   }
// }

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

