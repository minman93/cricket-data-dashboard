"use client";

import { roboto } from "../../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../../lib/definitions";

export default function SinglePlayer({ params }: { params: { id: number } }) {
  const { id } = params;
  const [player, setPlayer] = useState<
    | Player
    | {
        id: string;
        name: string;
        country: string;
        batting_hand: string;
        bowling_arm: string;
        bowling_style: string;
      }
  >({
    id: "",
    name: "",
    country: "",
    batting_hand: "",
    bowling_arm: "",
    bowling_style: "",
  });

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/players/${id}`
        );

        setPlayer(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayer();
  });
  return (
    <div className={`${roboto.className} text-2xl`}>
      {player && (
        <div>
          <div>
            <div
              className="max-w-sm rounded overflow-hidden shadow-md"
              key={player.id}
            >
              {" "}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">ID: {params.id}</div>
                <p className="text-gray-700 text-base"></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
