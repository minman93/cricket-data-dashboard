import { Player } from "./definitions";
import db from "./connection";

export async function fetchPlayers(): Promise<Player[]> {
  try {
    const query = `
    SELECT 
      players.id, 
      players.name, 
      players.country, 
      players.batting_hand, 
      players.bowling_arm, 
      players.bowling_type,
      t20_batting.matches AS "t20BattingMatches", 
      t20_batting.innings AS "t20BattingInnings", 
      t20_batting.not_out AS "t20BattingNotOut", 
      t20_batting.runs AS "t20BattingRuns", 
      t20_batting.high_score AS "t20BattingHighScore", 
      t20_batting.average AS "t20BattingAverage", 
      t20_batting.balls_faced AS "t20BattingBallsFaced", 
      t20_batting.strike_rate AS "t20BattingStrikeRate", 
      t20_batting.centuries AS "t20BattingCenturies", 
      t20_batting.half_centuries AS "t20BattingHalfCenturies", 
      t20_batting.ducks AS "t20BattingDucks", 
      t20_batting.fours AS "t20BattingFours", 
      t20_batting.sixes AS "t20BattingSixes"
    FROM 
      players
    LEFT JOIN 
      t20_batting ON players.id = t20_batting.player_id;
  `;

    const players = await db.query(query);
    console.log(players.rows);
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

export async function fetchPlayersWithT20Data() {
  const query = `
  SELECT 
  players.id, 
  players.name, 
  players.country, 
  players.batting_hand, 
  players.bowling_arm, 
  players.bowling_type,
  t20_batting.matches AS "t20BattingMatches", 
  t20_batting.innings AS "t20BattingInnings", 
  t20_batting.not_out AS "t20BattingNotOut", 
  t20_batting.runs AS "t20BattingRuns", 
  t20_batting.high_score AS "t20BattingHighScore", 
  t20_batting.average AS "t20BattingAverage", 
  t20_batting.balls_faced AS "t20BattingBallsFaced", 
  t20_batting.strike_rate AS "t20BattingStrikeRate", 
  t20_batting.centuries AS "t20BattingCenturies", 
  t20_batting.half_centuries AS "t20BattingHalfCenturies", 
  t20_batting.ducks AS "t20BattingDucks", 
  t20_batting.fours AS "t20BattingFours", 
  t20_batting.sixes AS "t20BattingSixes"
    FROM 
      players
    LEFT JOIN 
      t20_batting ON players.id = t20_batting.player_id
    WHERE 
      t20_batting.matches IS NOT NULL;
  `;

  try {
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}
