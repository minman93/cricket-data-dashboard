"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../lib/definitions";
import ChartTabs from "../ui/components/ChartTabs";

export default function T20Bowling() {
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
    <div className="flex flex-col py-4 w-full h-full bg-gray-800 rounded-md">
      <h1
        className={`${roboto.className} text-4xl font-extrabold text-white text-center`}
      >
        T20 Bowling
      </h1>
      <ChartTabs />
    </div>
  );
}
