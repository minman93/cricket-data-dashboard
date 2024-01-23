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
export async function fetchPlayerById(id: number): Promise<Player> {
  try {
    const player = await db.query(`SELECT * FROM players where id = $1;`, [id]);
    return player.rows[0] as unknown as Player;
  } catch (error) {
    console.error("Database error:", error);
  }
  return <Player>{};
}
