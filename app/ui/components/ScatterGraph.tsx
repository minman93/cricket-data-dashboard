"use client";

import {
  ScatterDataPoint,
  GraphDataPoints,
  PlayerData,
} from "../../lib/definitions";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "../../../components/ui/select";

Chart.register(
  ScatterController,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
  PointElement
);

import { Scatter } from "react-chartjs-2";

export function ScatterGraph({ data }: PlayerData) {
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
    <div className="w-full h-full md:col-span-2 lg:h-[70vh] m-auto p-4 bg-gray-800">
      <div>
        <Scatter data={scatterData} options={scatterOptions} />{" "}
      </div>
      <div className="flex flex-row justify-start p-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Y Axis Metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Y Axis Metric</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select X Axis Metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select X Axis Metric</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
