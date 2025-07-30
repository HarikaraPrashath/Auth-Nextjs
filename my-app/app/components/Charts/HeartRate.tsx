"use client";

import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  ScriptableContext,
} from "chart.js";
import { LuActivity } from "react-icons/lu";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const HeartRateCard = () => {
  const chartRef = useRef(null);

  const getGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: { top: number; bottom: number }
  ) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(34,197,94,0.1)");
    gradient.addColorStop(1, "rgba(34,197,94,0.8)");
    return gradient;
  };

  const data = {
    labels: Array(7).fill(""),
    datasets: [
      {
        label: "Heart Rate",
        data: [60, 30, 20, 45, 35, 40, 25,55,12,30],
        borderRadius: 4,
        backgroundColor: (context: ScriptableContext<"bar">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
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
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-3 rounded-xl w-[210px] flex flex-col gap-1">
      {/* Header */}
      <div className="flex items-center gap-1 text-gray-800 text-xs font-semibold">
        <LuActivity className="text-green-950 text-sm" />
        <span>Heart Rate</span>
      </div>

      {/* Value & Chart */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg  text-gray-800">72</div>
          <div className="text-xs text-gray-500 -mt-0.5">bpm</div>
        </div>

        <div className="h-12 w-22 ml-1">
          <Bar data={data} options={options} ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default HeartRateCard;
