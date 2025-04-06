import React from "react";
import { RiLayoutLeftLine ,FaRegStar,IoSunnyOutline , PiClockCounterClockwise, GoBell,IoSearchOutline} from "../../../utils/icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b bg-white shadow-sm border-gray-200 text-primary">
      {/* Left Side */}
      <div className="flex items-center space-x-3">
        <RiLayoutLeftLine className="w-5 h-5" />
        <FaRegStar className="w-4 h-4" />
        <span className="text-sm text-secondary">Dashboards</span>
        <span className="text-sm text-secondary">/</span>
        <span className="text-sm font-medium">Default</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
            <IoSearchOutline className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-7 pr-6 py-1 rounded-md bg-gray-100 text-sm focus:outline-none"
          />
          <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-400">/</span>
        </div>

        {/* Icons */}
        <IoSunnyOutline className="w-5 h-5 text-gray-600 cursor-pointer" />
       
        <PiClockCounterClockwise className="w-5 h-5 text-gray-600 cursor-pointer" />
        <GoBell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <RiLayoutLeftLine className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
