"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../lib/definitions";
import BattingScatterGraph from "../ui/components/BattingScatterGraph";

export default function TestBowling() {
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
    <div className="flex justify-around py-4 w-full h-full bg-gray-800 rounded-md">
      <h1 className={`${roboto.className} text-4xl font-extrabold text-white`}>
        Test Bowling
      </h1>
    </div>
  );
}
