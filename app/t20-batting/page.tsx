"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player, ScatterDataPoint } from "../lib/definitions";
import React from "react";
import ChartTabs from "../ui/components/ChartTabs";

export default function T20Batting() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [x, setX] = useState("");
  const [y, setY] = useState("");

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
    x: player.t20BattingRuns,
    y: player.t20BattingMatches,
    name: player.name,
  })) as ScatterDataPoint[];

  return (
    <div className="flex flex-col py-4 w-full h-full bg-gray-800 rounded-md">
      <h1
        className={`${roboto.className} text-4xl font-extrabold text-white text-center`}
      >
        T20 Batting!
      </h1>
      <ChartTabs data={graphData} />
    </div>
  );
}
