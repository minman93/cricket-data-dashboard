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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart({ data }: any) {
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
    <div className="w-full md:col-span-2 relative lg:h-[70vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
