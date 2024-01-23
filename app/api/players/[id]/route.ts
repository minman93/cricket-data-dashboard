import { fetchPlayerById } from "../../../lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const player = await fetchPlayerById(params.id);

    return NextResponse.json(player);
  } catch (error) {
    console.error("Database Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
