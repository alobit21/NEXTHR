"use client";
import Link from "next/link";
import React, { useState } from "react";
import {  AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare} from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

const Usersidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/userdashboard/userdashbpage", icon: MdOutlineDashboard },
    { name: "Application", link: "/userdashboard/myapplication", icon: AiOutlineUser },
    { name: "Feedback", link: "/userdashboard/feedback", icon: TbReportAnalytics },

    { name: "Opportunities", link: "/userdashboard/opportunities", icon: FiMessageSquare },

    { name: "Setting", link: "/userdashboard/settings", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);
  return (
    <div className="flex gap-6">
      <div
        className={`bg-black min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          {menus?.map((menu, i) => (
            <Link
              href={menu.link}
              key={i}
              className=' group flex items-center text-xl gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } `}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre
    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0
    group-hover:left-14 group-hover:duration-300 group-hover:w-fit  overflow-hidden group-hover:px-2 group-hover:py-1 `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usersidebar;
