import { connect } from "@/app/config/db";
import { NextResponse } from "next/server";

// GET SINGLE STATS BY ID
export async function GET(request, { params }) {
  try {
    const db = await connect();
    const id = params.statsID;

    const [rows] = await db.query("SELECT * FROM stats WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "No Stats Data Found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ Result: rows[0] });
  } catch (error) {
    console.error("GET Stats Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// DELETE STATS BY ID
// export async function DELETE(request, { params }) {
//   try {
//     const id = params.statsID;
//     const db = await connect();

//     const [result] = await db.query("DELETE FROM stats WHERE id = ?", [id]);

//     if (result.affectedRows === 0) {
//       return NextResponse.json(
//         { message: "Failed to delete stats" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       message: "Stats deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete Stats Error:", error);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// UPDATE STATS
export async function PUT(request, { params }) {
  try {
    const id = params.statsID;
    const db = await connect();

    const body = await request.json();

    const {
      projectsDelivered,
      happyClients,
      globalOffice,
      yearsInBusiness,
      expertTeam,
    } = body;

    // Fetch old data
    const [rows] = await db.query("SELECT * FROM stats WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Stats not found" },
        { status: 404 }
      );
    }

    const old = rows[0];

    // Update Query
    const [updateRes] = await db.query(
      `UPDATE stats 
       SET 
       projectsDelivered = ?, 
       happyClients = ?, 
       globalOffice = ?, 
       yearsInBusiness = ?, 
       expertTeam = ?
       WHERE id = ?`,
      [
        projectsDelivered ?? old.projectsDelivered,
        happyClients ?? old.happyClients,
        globalOffice ?? old.globalOffice,
        yearsInBusiness ?? old.yearsInBusiness,
        expertTeam ?? old.expertTeam,
        id,
      ]
    );

    if (updateRes.affectedRows === 0) {
      return NextResponse.json(
        { message: "Failed to update stats" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Stats Updated Successfully",
      updatedStats: {
        id,
        projectsDelivered: projectsDelivered ?? old.projectsDelivered,
        happyClients: happyClients ?? old.happyClients,
        globalOffice: globalOffice ?? old.globalOffice,
        yearsInBusiness: yearsInBusiness ?? old.yearsInBusiness,
        expertTeam: expertTeam ?? old.expertTeam,
      },
    });
  } catch (error) {
    console.error("PUT Stats Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}



