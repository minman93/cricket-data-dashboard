"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../lib/definitions";

export default function AllPlayers() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/players");

        setPlayers(response.data);
        console.log(players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div className="flex justify-around py-4 w-full h-full bg-gray-800 rounded-md">
      <h1 className={`${roboto.className} text-4xl font-extrabold text-white`}>
        All Players
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex flex-col items-center bg-gray-200 rounded-md p-4"
          >
            <h2 className="text-lg font-semibold">{player.name}</h2>

            <p>Team: {player.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
