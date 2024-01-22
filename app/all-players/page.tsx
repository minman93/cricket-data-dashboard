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
        console.log(response, "<--------- RESPONSE");
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
            <div key={player.id}>{player.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
