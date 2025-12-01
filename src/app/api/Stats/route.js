import { connect } from "@/app/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connect();
    const [rows] = await db.query(
      `SELECT projectsDelivered,happyClients,globalOffice,yearsInBusiness,expertTeam FROM stats`
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        status: 200,
        Result: [],
        message: "No stats found",
      });
    }

    return NextResponse.json({
      status: 200,
      Result: rows,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}

export async function PUT(request) {
  try {
    const db = await connect();

    const body = await request.json();

    const {
      projectsDelivered,
      happyClients,
      globalOffice,
      yearsInBusiness,
      expertTeam,
    } = body;

    // Validation
    if (
      projectsDelivered === undefined ||
      happyClients === undefined ||
      globalOffice === undefined ||
      yearsInBusiness === undefined ||
      expertTeam === undefined
    ) {
      return NextResponse.json(
        { status: 400, message: "All fields are required!" },
        { status: 400 }
      );
    }

    // ✅ Correct UPDATE with parameters
    const [result] = await db.query(
      `UPDATE stats SET 
        projectsDelivered = ?, 
        happyClients = ?, 
        globalOffice = ?, 
        yearsInBusiness = ?, 
        expertTeam = ?`,
      [
        projectsDelivered,
        happyClients,
        globalOffice,
        yearsInBusiness,
        expertTeam,
      ]
    );

    return NextResponse.json({
      status: 200,
      message: "Stats Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}