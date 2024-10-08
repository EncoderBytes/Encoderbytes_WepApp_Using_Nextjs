// const User = require("@/app/models/UserModel");
const User = require("@/app/models/UserModel").default;
import { connect } from "@/app/config/db";
import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connect();
//     const All_Users = await User.find();
//     const userCount = await User.countDocuments();
//     if (!All_Users || All_Users.length === 0) {
//       return NextResponse.json({ result: All_Users });
//     } else {
//       // return NextResponse.json({ Result: All_Users });
//       return NextResponse.json({ result: All_Users, count: userCount });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: "Internal Server Error " });
//   }
// }

export async function GET(request) {
  try {
    // Establish database connection
    await connect();

    // Implementing pagination with query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    // Fetching users with pagination
    const All_Users = await User.find().skip(skip).limit(limit);
    const userCount = await User.countDocuments();

    // Returning response with users and pagination info
    return NextResponse.json({
      result: All_Users,
      count: userCount,
      page: page,
      totalPages: Math.ceil(userCount / limit),
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
