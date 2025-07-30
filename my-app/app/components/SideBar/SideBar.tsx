"use client";
import React from "react";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaUserAlt, FaNotesMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiStethoscopeFill, RiSettings5Fill } from "react-icons/ri";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { IoMdChatbubbles } from "react-icons/io";
import { PiNotepadFill } from "react-icons/pi";
import { useLogout } from "../../../hook/useLogout";
import { useRouter } from "next/navigation";

// Define the menu items with icons and labels
const menuItems = [
  { icon: <MdDashboard className="w-6 h-6" />, label: "Dashboard" },
  { icon: <FaUserAlt className="w-6 h-6" />, label: "Profile" },
  { icon: <RiStethoscopeFill className="w-6 h-6" />, label: "Medical Records" },
  { icon: <BsCalendar2WeekFill className="w-6 h-6" />, label: "Appointments" },
  { icon: <FaNotesMedical className="w-6 h-6" />, label: "Reports" },
  { icon: <IoMdChatbubbles className="w-6 h-6" />, label: "Messages" },
  { icon: <FaUserDoctor className="w-6 h-6" />, label: "Doctors" },
  { icon: <PiNotepadFill className="w-6 h-6" />, label: "Medical Bills" },
];

const SideBar = () => {
  const router = useRouter();
  const { logout } = useLogout();

  //Logout Method
  const handleClick = () => {
    logout();
    router.push("/login");
  };
  return (
    <div className="w-87 p-6 text-green-950 border-r border-green-200 ">
      <h1 className="text-center text-4xl font-bold">MediSync</h1>

      <div className="mt-10 space-y-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${index === 0 ? "bg-green-100 " : ""}`}
          >
            <button
              type="button"
              className="flex items-center gap-3 w-full px-2 py-2 text-xl"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-30 space-y-2">
        <div className="p-2 rounded-sm">
          <button
            type="button"
            className="flex items-center gap-3 w-full px-2 py-2 text-xl"
          >
            <RiSettings5Fill className="w-6 h-6" />
            <span className="cursor-focus">Setting</span>
          </button>
        </div>
        <div className="p-2 rounded-sm">
          <button
            type="button"
            onClick={handleClick}
            className="flex items-center gap-3 w-full px-2 py-2 text-xl"
          >
            <MdLogout className="w-6 h-6" />
            <span className="cursor-focus">Sign out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
