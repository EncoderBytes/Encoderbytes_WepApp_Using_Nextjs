import { connect } from "@/app/config/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// GET a specific vacancy by ID from MySQL
export async function GET(request, context) {
  try {
    const id = context.params.vacancyID;
    const db = await connect();

    const [rows] = await db.query("SELECT * FROM vacancy WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "Vacancy not found" }, { status: 404 });
    }

    return NextResponse.json({ Result: rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Error fetching vacancy:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}

// DELETE a vacancy by ID from MySQL
export async function DELETE(request, context) {
  try {
    const id = context.params.vacancyID;
    const db = await connect();

    const [result] = await db.query("DELETE FROM vacancy WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Vacancy not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Vacancy deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    return NextResponse.json({ error: "Failed to delete vacancy", message: error.message }, { status: 500 });
  }
}

// UPDATE a vacancy by ID in MySQL
export async function PUT(request, context) {
  try {
    const id = context.params.vacancyID;
    const db = await connect();
    const body = await request.json();

    // Check if vacancy exists
    const [existingRows] = await db.query("SELECT * FROM vacancy WHERE id = ?", [id]);
    if (existingRows.length === 0) {
      return NextResponse.json({ message: "Vacancy not found" }, { status: 404 });
    }
    const oldVacancy = existingRows[0];

    const VacancyTitle = body.VacancyTitle || oldVacancy.VacancyTitle;
    const Requireds = body.Requireds || oldVacancy.Requireds;
    const Experience = body.Experience || oldVacancy.Experience;

    const [result] = await db.query(
      "UPDATE vacancy SET VacancyTitle = ?, Requireds = ?, Experience = ? WHERE id = ?",
      [VacancyTitle, Requireds, Experience, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Failed to update vacancy" }, { status: 500 });
    }

    return NextResponse.json({
      message: "Vacancy updated successfully",
      result: { id, VacancyTitle, Requireds, Experience }
    }, { status: 200 });
  } catch (error) {
    console.error("Error updating vacancy:", error);
    return NextResponse.json({ error: "Failed to update vacancy", message: error.message }, { status: 500 });
  }
}