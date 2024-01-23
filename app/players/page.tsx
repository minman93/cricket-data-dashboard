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
        const response = await axios.get("http://localhost:3000/api/players");
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);
  return (
    <div className={`${roboto.className} text-2xl`}>
      All Players!
      <div>
        <div>
          {players.map((player) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-md"
              key={player.id}
            >
              {" "}
              <Link href={`/players/${player.id}`}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{player.name}</div>
                  <p className="text-gray-700 text-base">{player.country}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
