"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../lib/definitions";

export default function T20Batting() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/players/t20-batting"
        );
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div className={`${roboto.className} text-2xl`}>
      T20 Batting!
      <div>
        <div>
          {players.map((player) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-md"
              key={player.id}
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{player.name}</div>
                <p className="text-gray-700 text-base">
                  {player.t20BattingAverage}
                </p>
                <p className="text-gray-700 text-base">
                  {player.t20BattingMatches}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
