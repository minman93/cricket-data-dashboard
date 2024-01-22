const db = require("../app/lib/connection");
const format = require("pg-format");

const seed = async (players) => {
  try {
    await db.query("DROP TABLE IF EXISTS players CASCADE;");
    console.log("Dropped players table");
    await db.query(
      `CREATE TABLE players (id SERIAL PRIMARY KEY, name VARCHAR(100), batting_hand VARCHAR (100), bowling_arm VARCHAR (100), bowling_type VARCHAR (100) );`
    );
    console.log("Created players table");
    const insertPlayers = format(
      "INSERT INTO players (name, batting_hand, bowling_arm, bowling_type) VALUES %L RETURNING *;",

      players.map(({ name, batting_hand, bowling_arm, bowling_type }) => [
        name,
        batting_hand,
        bowling_arm,
        bowling_type,
      ])
    );
    await db.query(insertPlayers);
    console.log("Inserted players data");

    console.log("Seed completed");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = seed;
