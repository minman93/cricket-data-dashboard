import type { NextApiRequest, NextApiResponse } from "next";
import { fetchPlayers } from "../lib/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const players = await fetchPlayers();
    res.status(200).json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
