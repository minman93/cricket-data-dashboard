"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../lib/definitions";
import Link from "next/link";

export default function AllPlayers() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/players`);

        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      {" "}
      <div className="flex flex-col justify-around py-4 px-24 w-full h-32 bg-gray-800 rounded-md ">
        <h1
          className={`${roboto.className} text-4xl font-extrabold text-white`}
        >
          All Players
        </h1>{" "}
        <h2 className="text-white text-2xl">
          Click on a player to see their stats
        </h2>
      </div>
      <div className="flex flex-wrap justify-start gap-1 bg-gray-800 px-24">
        {players.map((player) => (
          <Link
            href={`players/${player.id}`}
            key={player.id}
            className="flex flex-col bg-gray-200 h-32 w-36 rounded-md p-4 justify start"
          >
            <h2 className="text-lg font-semibold">{player.name}</h2>

            <p>{player.country}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
