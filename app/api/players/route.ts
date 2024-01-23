import { fetchPlayers } from "../../lib/data";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    const players = await fetchPlayers();

    return NextResponse.json(players);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
