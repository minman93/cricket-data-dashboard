const db = require("../app/lib/connection");
const format = require("pg-format");

const seed = async ({ players, t20Batting }) => {
  try {
    await db.query("DROP TABLE IF EXISTS players CASCADE;");
    console.log("Dropped players table");
    await db.query("DROP TABLE IF EXISTS t20_batting CASCADE;");
    console.log("Dropped t20_batting table");
    await db.query(
      `CREATE TABLE players (id SERIAL PRIMARY KEY, name VARCHAR(100), country VARCHAR (100), batting_hand VARCHAR (100), bowling_arm VARCHAR (100), bowling_type VARCHAR (100) );`
    );
    console.log("Created players table");
    await db.query(
      `CREATE TABLE t20_batting (id SERIAL PRIMARY KEY, player_id INT REFERENCES players(id), name VARCHAR (255), matches INT, innings INT, not_out INT, runs INT, high_score VARCHAR(10), average DECIMAL (5, 2), balls_faced INT, strike_rate DECIMAL (5, 2), centuries INT, half_centuries INT, ducks INT, fours INT, sixes INT );`
    );
    console.log("Created t20_batting table");
    const insertPlayers = format(
      "INSERT INTO players (name, country, batting_hand, bowling_arm, bowling_type) VALUES %L RETURNING *;",

      players.map(
        ({ name, country, batting_hand, bowling_arm, bowling_type }) => [
          name,
          country,
          batting_hand,
          bowling_arm,
          bowling_type,
        ]
      )
    );
    await db.query(insertPlayers);
    console.log("Inserted players data");

    const insertT20Batting = format(
      "INSERT INTO t20_batting (player_id, name, matches, innings, not_out, runs, high_score, average, balls_faced, strike_rate, centuries, half_centuries, ducks, fours, sixes) VALUES %L RETURNING *;",
      t20Batting.map(
        ({
          player_id,
          name,
          matches,
          innings,
          not_out,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          centuries,
          half_centuries,
          ducks,
          fours,
          sixes,
        }) => [
          player_id,
          name,
          matches,
          innings,
          not_out,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          centuries,
          half_centuries,
          ducks,
          fours,
          sixes,
        ]
      )
    );

    await db.query(insertT20Batting);
    console.log("Inserted t20 batting data");

    console.log("Seed completed");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = seed;
