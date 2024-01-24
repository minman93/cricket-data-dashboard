"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../lib/definitions";
import BattingScatterGraph from "../ui/components/BattingScatterGraph";

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
        {" "}
        <BattingScatterGraph
          data={players}
          xAxisKey={players}
          yAxisKey={players}
        />
      </div>
    </div>
  );
}
