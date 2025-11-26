import { connect } from "@/app/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connect();
    const [rows] = await db.query("SELECT value FROM stats ORDER BY id ASC");

    // rows = [{ value: 120 }, { value: 85 }, ... ]
    const values = rows.map((row) => row.value);

    return NextResponse.json({
      Result: values,
      count: values.length,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { Message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
