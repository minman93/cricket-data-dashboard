import { Player } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import db from "./connection";

export async function fetchPlayers(): Promise<Player[]> {
  noStore();
  try {
    const players = await db.query("SELECT * FROM players;");
    return players.rows as Player[];
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}
