import { Player } from "./definitions";
import db from "./connection";

export async function fetchPlayers(): Promise<Player[]> {
  try {
    const players = await db.query("SELECT * FROM players;");
    return players.rows as Player[];
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}
