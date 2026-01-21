import { connect } from "@/app/config/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// GET All Vacancies from MySQL
export async function GET() {
  try {
    const db = await connect();

    // Fetch all vacancies
    const [allVacancies] = await db.query("SELECT * FROM vacancy");

    // Get total count
    const [countResult] = await db.query("SELECT COUNT(*) as count FROM vacancy");
    const vacancyCount = countResult[0].count;

    return NextResponse.json({
      Result: allVacancies,
      count: vacancyCount,
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    return NextResponse.json(
      { error: "Failed to fetch vacancies", message: error.message },
      { status: 500 }
    );
  }
}

// POST a new Vacancy to MySQL
export async function POST(request) {
  try {
    const db = await connect();
    const { VacancyTitle, Requireds, Experience } = await request.json();

    if (!VacancyTitle || !Requireds || !Experience) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [result] = await db.query(
      "INSERT INTO vacancy (VacancyTitle, Requireds, Experience) VALUES (?, ?, ?)",
      [VacancyTitle, Requireds, Experience]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Vacancy not added" }, { status: 500 });
    }

    return NextResponse.json({
      message: "Vacancy created successfully",
      result: {
        id: result.insertId,
        VacancyTitle,
        Requireds,
        Experience
      },
    }, { status: 201 });
  } catch (error) {
    console.error("Error saving vacancy:", error);
    return NextResponse.json(
      { error: "Failed to save vacancy", message: error.message },
      { status: 500 }
    );
  }
}