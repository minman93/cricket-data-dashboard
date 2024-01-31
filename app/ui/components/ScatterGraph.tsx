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

export function ScatterGraph({ data }: GraphDataPoints) {
  const scatterData = {
    datasets: [
      {
        label: "T20 Batting Data",
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
          color: "#000000",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "#000000",
          font: {
            size: 16,
          },
        },
        grid: {
          color: "#000000",
          lineWidth: 0.25,
        },
      },
      y: {
        type: "linear" as "linear",
        position: "left",
        title: {
          display: true,
          text: "Sixes",
          color: "#000000",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "000000",
          font: {
            size: 16,
          },
        },
        grid: {
          color: "#000000",
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
    <Scatter
      data={scatterData}
      options={scatterOptions}
      style={{ height: 400, width: 400 }}
    />
  );
}
