"use client";

import { roboto } from "../ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player, ScatterDataPoint, GraphDataPoints } from "../lib/definitions";
import React from "react";
import {
  Chart,
  ScatterController,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
  PointElement,
  ChartOptions,
  Point,
} from "chart.js";

Chart.register(
  ScatterController,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
  PointElement
);

import { Scatter } from "react-chartjs-2";

export function T20BattingChart({ data }: GraphDataPoints) {
  const scatterData = {
    datasets: [
      {
        label: "T20 Batting Data",
        data: data,
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const scatterOptions: ChartOptions<"scatter"> = {
    scales: {
      x: {
        type: "linear" as "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Strike Rate",
          color: "#FFFFFF",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 16,
          },
        },
      },
      y: {
        type: "linear" as "linear",
        position: "left",
        title: {
          display: true,
          text: "Total Runs",
          color: "#FFFFFF",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const dataPoint: ScatterDataPoint = context.dataset.data[
              context.dataIndex
            ] as ScatterDataPoint;

            return `${dataPoint.name}: (${dataPoint.x}, ${dataPoint.y})`;
          },
        },
        bodyFont: {
          size: 16,
        },
      },
    },
  };
  return <Scatter data={scatterData} options={scatterOptions} />;
}
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
      <T20BattingChart data={graphData} />
    </div>
  );
}
