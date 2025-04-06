import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { month: "Jan", thisYear: 12000, lastYear: 15000 },
  { month: "Feb", thisYear: 9000, lastYear: 14000 },
  { month: "Mar", thisYear: 13000, lastYear: 17000 },
  { month: "Apr", thisYear: 22000, lastYear: 12000 },
  { month: "May", thisYear: 28000, lastYear: 16000 },
  { month: "Jun", thisYear: 21000, lastYear: 19000 },
  { month: "Jul", thisYear: 23000, lastYear: 27000 },
];

export default function TotalUsersChart() {
  const [activeTab, setActiveTab] = useState("Total Users");

  const tabs = ["Total Users", "Total Projects", "Operating Status"];

  return (
    <div>
      <div className="flex gap-6 mb-4 text-sm text-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${activeTab === tab ? "text-black font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-black inline-block" />
            This year
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
            Last year
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="thisYearGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#111" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="lastYearGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Axes */}
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            ticks={[0, 10000, 20000, 30000]}
            tickFormatter={(value) => (value !== 0 ? `${value / 1000}K` : "0")}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          {/* Area Shadows - render BEFORE lines so they go under */}
          <Area
            type="monotone"
            dataKey="thisYear"
            fill="url(#thisYearGradient)"
            stroke="none"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="lastYear"
            fill="url(#lastYearGradient)"
            stroke="none"
            dot={false}
          />

          {/* Lines */}
          <Line
            type="monotone"
            dataKey="thisYear"
            stroke="#111"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#445a68"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}