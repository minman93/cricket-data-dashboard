"use client";

import { ScatterDataPoint, GraphDataPoints } from "../../lib/definitions";

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

export function ScatterGraph({ data }: GraphDataPoints) {
  const scatterData = {
    datasets: [
      {
        label: "Batting",
        data: data,
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 5,
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
          text: "Fours",
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
        grid: {
          color: "#FFFFFF",
          lineWidth: 0.25,
        },
      },
      y: {
        type: "linear" as "linear",
        position: "left",
        title: {
          display: true,
          text: "Sixes",
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
        grid: {
          color: "#FFFFFF",
          lineWidth: 0.25,
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
          size: 24,
        },
      },
    },
  };
  return (
    <div className="w-full h-full md:col-span-2 relative lg:h-[70vh] m-auto p-4 border border- rounded-lg bg-gray-800">
      <Scatter data={scatterData} options={scatterOptions} />{" "}
    </div>
  );
}
