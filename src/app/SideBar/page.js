import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { MdOutlineElectricBike } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#B80304] text-white w-64 h-screen">
      <div className="p-4 mt-2 flex space-x-4">
        <div>
          <MdDashboard className="text-4xl" color="white" />
        </div>
        <h1 className="text-xl font-semibold mt-1">DashBoard</h1>
      </div>
      <nav className=" mt-16 ">
        <ul className="space-y-6">
          <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <FiTruck className="text-4xl" color="white" />
            </div>
            <a href="#" className="text-2xl">
              Order
            </a>
          </li>
          <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <MdOutlineElectricBike className="text-4xl" color="white" />
            </div>
            <a href="#" className="text-2xl">
              Rider
            </a>
          </li>
          <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <FiSettings className="text-4xl" color="white" />
            </div>
            <a href="#" className=" text-2xl">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
