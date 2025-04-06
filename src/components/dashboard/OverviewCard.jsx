import React from "react";
import { PiTrendUp, PiTrendDown } from "../../../utils/icons";

const OverviewCard = () => {
  const stats = [
    { title: "Views", value: "7,265", change: "11.01", isPositive: true },
    { title: "Visits", value: "3,671", change: "0.03", isPositive: false },
    { title: "New Users", value: "156", change: "15.03", isPositive: true },
    { title: "Active Users", value: "2,318", change: "6.08", isPositive: true },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 text-primary">
        <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
        <span className="text-sm text-gray-500">Today</span>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 w-full max-w-[180px] shadow-sm ${
              index % 2 === 0 ? "bg-gray-100" : "bg-green-50"
            }`}
          >
            <h4 className="text-sm font-semibold mb-1">{stat.title}</h4>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold text-gray-800">
                {stat.value}
              </span>
              <div className="flex items-center space-x-1 text-sm">
                <span

                >
                  {stat.isPositive ? "+" : "-"}
                  {stat.change}%
                </span>
                {stat.isPositive ? (
                  <PiTrendUp size={16} />
                ) : (
                  <PiTrendDown size={16} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
