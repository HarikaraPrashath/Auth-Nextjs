"use client";
import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
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
import { FaHeartPulse } from "react-icons/fa6";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip);

const BloodPressureCard = () => {
  const chartRef = useRef(null);

  const getGradient = (ctx: CanvasRenderingContext2D, chartArea: { top: number; bottom: number }) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(78, 2, 210, 0)");
    gradient.addColorStop(1, "rgba(73, 18, 168, 0.6)");
    return gradient;
  };

  const data = {
    labels: Array(9).fill(""),
    datasets: [
      {
        label: "",
        data: [100, 125, 56, 115, 80, 110, 90, 105, 56],
        fill: true,
        tension: 0.5,
        pointRadius: 0,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return undefined;
          return getGradient(ctx, chartArea);
        },
        borderWidth: 0.1,
        borderColor: "rgba(73, 18, 168, 0.9)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      line: { borderWidth: 0.1 },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-3 rounded-xl  w-[210px] flex flex-col gap-1">
      {/* Title */}
      <div className="flex items-center gap-1 text-gray-800 text-xs font-semibold">
        <FaHeartPulse className="text-purple-700 text-sm" />
        <span>Blood Pressure</span>
      </div>

      {/* Value and Chart */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg  text-gray-800">120/80</div>
          <div className="text-xs text-gray-500 -mt-0.5">mmHg</div>
        </div>

        <div className="h-12 w-22 ml-1">
          <Line data={data} options={options} ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default BloodPressureCard;
