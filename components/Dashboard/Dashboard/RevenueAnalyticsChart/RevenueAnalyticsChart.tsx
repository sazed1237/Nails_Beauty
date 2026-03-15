"use client";

import React from "react";
import { CardWrapper } from "../../ui/DashboardStatCard";
import dynamic from "next/dynamic";
import type { ApexAxisChartSeries } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const data: ApexAxisChartSeries = [
  {
    name: "Revenue",
    data: [300, 1200, 700, 1800, 900, 1600, 1100],
  },
];

const options: ApexCharts.ApexOptions = {
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#228573"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      const value = series[seriesIndex][dataPointIndex];
      const date = w.globals.labels[dataPointIndex];

      // Format date (e.g., "Oct 13, 2025")
      const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      return `
      <div class="px-4 py-3">
        <div class="text-sm inline-block pb-1 text-gray-500 mb-1 border-b-2 border-gray-200">${formattedDate}</div>
        <div class="flex items-baseline gap-2">
          <span class="text-xl font-semibold text-gray-900">
            $${value.toLocaleString()}
          </span>
          <span class="text-sm text-gray-600">Revenue</span>
        </div>
      </div>
    `;
    },
  },
  xaxis: {
    tooltip: { enabled: false },
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: {
      style: { fontSize: "12px" },
    },
  },
  yaxis: {
    min: 0,
    max: 2000,
    tickAmount: 4,
    labels: {
      formatter: (val: number) => `${val / 1000}k`,
      style: { fontSize: "12px" },
    },
  },
};

export default function RevenueAnalyticsChart() {
  return (
    <CardWrapper className="h-full">
      <p className="text-heading text-base font-semibold leading-5">
        Revenue Analytics
      </p>
      <div className="mt-3 gap-2.5 flex flex-col">
        <ReactApexChart
          options={options}
          series={data}
          type="area"
          height={350}
        />
      </div>
    </CardWrapper>
  );
}
