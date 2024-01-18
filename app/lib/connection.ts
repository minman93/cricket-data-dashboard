import { Pool } from "pg";

const config = {
  connectionString: process.env.DATABASE_URL,
};

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set");
}

const pool = new Pool(config);

export default pool;
