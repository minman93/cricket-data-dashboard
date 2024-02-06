"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { PlayerData } from "@/app/lib/definitions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "../../../components/ui/select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart({ data }: PlayerData) {
  const chartData = {
    labels: [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
    ],
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
  const chartOptions: ChartOptions<"bar"> = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Testy Test",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] m-auto p-4 bg-gray-800">
      <Bar data={chartData} options={chartOptions} />
      <div className="flex flex-row">
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
