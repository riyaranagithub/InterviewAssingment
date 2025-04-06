import React from 'react'
import Header from '../components/dashboard/Header'
import OverviewCard from '../components/dashboard/OverviewCard'
import TotalUsersChart from '../components/dashboard/graph/TotalChart'
import TrafficByWebsite from '../components/dashboard/graph/TrafficByWebsite'
import TrafficByDevice from '../components/dashboard/graph/TrafficByDevice'
import TrafficByLocation from '../components/dashboard/graph/TrafficByLocation'

const DashBoard = () => {
  return (
    <div className="h-screen overflow-y-auto px-4 py-2 hide-scrollbar"> {/* scrollable container */}
      <Header />
      <OverviewCard />

      {/* Top Graphs Row - same height as tallest */}
      <div className="flex gap-4 mt-4 items-stretch">
        <div className="w-full max-w-[600px]">
          <div className="h-full bg-gray-100 p-4 rounded-xl shadow-md">
            <TotalUsersChart />
          </div>
        </div>
        <div className="w-full max-w-[300px]">
          <div className="h-full bg-gray-100 p-4 rounded-xl shadow-md">
            <TrafficByWebsite />
          </div>
        </div>
      </div>

      {/* Bottom Graphs Row - same height as tallest */}
      <div className="flex gap-4 mt-4 items-stretch">
        <div className="w-1/2">
          <div className="h-full bg-gray-100 p-4 rounded-xl shadow-md">
            <TrafficByDevice />
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-full bg-gray-100 p-4 rounded-xl shadow-md">
            <TrafficByLocation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
