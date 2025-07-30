"use client";

import { Line } from "react-chartjs-2";
import React, { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  ScriptableContext,
} from "chart.js";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
);

const Temper = () => {
  const chartRef = useRef(null);

  const getGradient = (ctx: CanvasRenderingContext2D, chartArea: { top: number; bottom: number }) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(238, 223, 11, 0.1)");
    gradient.addColorStop(1, "rgba(255, 253, 130, 0.8)");
    return gradient;
  };

  const data = {
    labels: Array(10).fill(""),
    datasets: [
      {
        label: "Temperature Trend",
        data: [36.5, 37.0, 37.2, 37.5, 37.1, 36.8, 36.9, 37.3, 37.4, 36.7],
        fill: true,
        tension: 0.7,
        borderColor: "rgba(238, 223, 11, 1)",
        pointRadius: 0,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return undefined;
          return getGradient(ctx, chartArea);
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      line: { borderWidth: 1 },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-3 rounded-xl  w-[210px] flex flex-col gap-1">
      {/* Header */}
      <div className="flex items-center gap-1 text-gray-800 text-xs font-semibold">
        <FaTemperatureThreeQuarters className="text-yellow-700 text-sm" />
        <span>Temperature</span>
      </div>

      {/* Value & Chart */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg  text-gray-800">98.6</div>
          <div className="text-xs text-gray-500 -mt-0.5">°F</div>
        </div>

        <div className="h-12 w-22 ml-1">
          <Line data={data} options={options} ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default Temper;
