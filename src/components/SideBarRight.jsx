import React from "react";
import { PiBugBeetle , AiOutlineUser, HiOutlineSignal} from "../../utils/icons";
const notifications = [
  { icon: <PiBugBeetle/>, text: "You fixed a bug.", time: "Just now" },
  { icon: <AiOutlineUser/>, text: "New user registered.", time: "59 minutes ago" },
  { icon: <PiBugBeetle/>, text: "You fixed a bug.", time: "12 hours ago" },
  { icon: <HiOutlineSignal/>, text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
];

const activities = [
  { iconColor: "bg-gradient-to-r from-pink-400 to-purple-500", text: "Changed the style.", time: "Just now" },
  { iconColor: "bg-blue-500", text: "Released a new version.", time: "59 minutes ago" },
  { iconColor: "bg-yellow-500", text: "Submitted a bug.", time: "12 hours ago" },
  { iconColor: "bg-amber-800", text: "Modified A data in Page X.", time: "Today, 11:59 AM" },
  { iconColor: "bg-blue-300", text: "Deleted a page in Project X.", time: "Feb 2, 2025" },
];

const contacts = [
  "Natali Craig",
  "Drew Cano",
  "Andi Lane",
  "Koray Okumus",
  "Kate Morrison",
  "Melody Macy",
];

const SideBarRight = () => {
  return (
    <aside className="w-72 p-4  space-y-6 text-sm border-l border-gray-200 bg-white text-primary hide-scrollbar h-screen overflow-y-auto">
      {/* Notifications */}
      <div>
        <h2 className="font-semibold text-gray-700 mb-3">Notifications</h2>
        <ul className="space-y-3">
          {notifications.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-lg text-black bg-bg-blue p-0.5 rounded-sm ">{item.icon}</span>
              <div className="hover:cursor-pointer">
                <p className="font-semibold">{item.text}</p>
                <p className="text-xs text-secondary">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div>
        <h2 className="font-semibold mb-3">Activities</h2>
        <ul className="">
          {activities.map((item, idx) => (
            <>
            <li key={idx} className="flex items-start gap-2">
               <img
                src={`https://i.pravatar.cc/150?img=${idx + 10}`}
                alt={name}
                className="w-6 h-6 rounded-full"
              />
              <div  className="hover:cursor-pointer">
                <p className="font-semibold">{item.text}</p>
                <p className="text-xs text-secondary">{item.time}</p>
              </div>
            </li>
            
                <div className="w-[1px] h-4 ml-2.5 mb-2 bg-secondary rounded-sm"></div>
          
            </>
          ))}
        </ul>
      </div>

      {/* Contacts */}
      <div>
        <h2 className="font-semibold mb-3">Contacts</h2>
        <ul className="space-y-3">
          {contacts.map((name, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <img
                src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                alt={name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold hover:cursor-pointer">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBarRight;
