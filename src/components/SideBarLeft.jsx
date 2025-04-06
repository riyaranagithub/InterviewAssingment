import { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  ImUser,
  IoPieChart,
  PiShoppingBagOpenDuotone,
  RiFolder6Line,
  PiUserCircleMinusDuotone,
  LuIdCard,
  PiUsersThree,
  PiNotebook,
  PiChatsCircle,
} from "../../utils/icons";


const SideBarLeft = () => {
  const [openUserProfile, setOpenUserProfile] = useState(true);

  return (
    <aside className="w-56 bg-white p-5 shadow-sm border-r border-gray-200 text-sm text-primary hide-scrollbar h-screen overflow-y-auto">
      {/* Top User */}
      <div className="mb-6">
        <div className="flex items-center space-x-3">
          <ImUser size={26} className="bg-blue-50 rounded-2xl" />
          <span className="font-semibold">ByeWind</span>
        </div>
      </div>

      {/* Favorites */}
      <div className="flex text-secondary">
        <div className="mb-2 mr-4">Favorites</div>
        <div className="mb-2">Recently</div>
      </div>
      <ul className="mb-4 space-y-2 font-semibold ml-4">
        <li><span className="text-secondary ">•</span> Overview</li>
        <li><span className="text-secondary">•</span> Projects</li>
      </ul>

      {/* Dashboards */}
      <div className="text-secondary mb-2 listItemClass">Dashboards</div>
      <ul className="mb-4 space-y-2 ml-2">
        <li className="listItemClass ml-3 bg-gray-100">
          <IoPieChart size={18} /> Overview
        </li>
        <li className="listItemClass">
          <FaChevronRight size={12} className="text-secondary" />
          <PiShoppingBagOpenDuotone size={18} /> eCommerce
        </li>
        <li className="listItemClass">
          <FaChevronRight size={12} className="text-secondary" />
          <RiFolder6Line size={18} /> Projects
        </li>
      </ul>

      {/* Pages */}
      <div className="text-secondary mb-2">Pages</div>
      <ul className="space-y-2 ml-2">
        {/* User Profile Dropdown */}
        <li>
          <div
            onClick={() => setOpenUserProfile(!openUserProfile)}
            className="listItemClass"
          >
            {openUserProfile ? (
              <FaChevronDown size={12} className="text-secondary" />
            ) : (
              <FaChevronRight size={12} className="text-secondary" />
            )}
            <PiUserCircleMinusDuotone size={18} />
            <span>User Profile</span>
          </div>
          {openUserProfile && (
            <ul className="ml-11 mt-1 space-y-2 font-semibold">
              <li className="hover:cursor-pointer hover:text-black">Overview</li>
              <li className="hover:cursor-pointer hover:text-black">Projects</li>
              <li className="hover:cursor-pointer hover:text-black">Campaigns</li>
              <li className="hover:cursor-pointer hover:text-black">Documents</li>
              <li className="hover:cursor-pointer hover:text-black">Followers</li>
            </ul>
          )}
        </li>

        {/* Other Pages */}
        <li className="listItemClass">
          <FaChevronRight size={12} className="text-secondary" /> <LuIdCard size={18} /> Account
        </li>
        <li className="listItemClass">
          <FaChevronRight size={12} className="text-secondary" /> <PiUsersThree size={18} /> Corporate
        </li>
        <li className="listItemClass">
          <FaChevronRight size={12} className="text-secondary" /> <PiNotebook size={18} /> Blog
        </li>
        <li className="listItemClass">
          <FaChevronRight size={12} className="text-secondary" /> <PiChatsCircle size={18} /> Social
        </li>
      </ul>
    </aside>
  );
};

export default SideBarLeft;

