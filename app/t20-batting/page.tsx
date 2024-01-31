"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player, ScatterDataPoint } from "../lib/definitions";
import React from "react";
import { BattingScatterGraph } from "../ui/components/BattingScatterGraph";

export default function T20Batting() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          "https://cricket-data-dashboard.vercel.app/api/players/t20-batting"
        );
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);

  const graphData = players.map((player) => ({
    x: player.t20BattingStrikeRate,
    y: player.t20BattingRuns,
    name: player.name,
  })) as ScatterDataPoint[];

  return (
    <div className="flex flex-col py-4 w-full h-full bg-gray-800 rounded-md">
      <h1
        className={`${roboto.className} text-4xl font-extrabold text-white text-center`}
      >
        T20 Batting
      </h1>

      <BattingScatterGraph data={graphData} />
    </div>
  );
}
