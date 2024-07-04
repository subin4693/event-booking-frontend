import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const CLientHeader = () => {
  return (
    <header className="border-gray-200 flex flex-row bg-[#24c690]">
      <div className="basis-[16.7%] bg-white p-4">
        <h1 className="text-2xl font-bold p-2">Qatar Event Hub</h1>
      </div>
      <div className="basis-[83%] flex flex-row p-6 gap-[750px] text-white">
        <p className="text-2xl font-bold">Welcome to Client Dashboard</p>
        <NavLink to="/" className="flex items-center">
          <div className="flex gap-2 ">
            <FaLocationDot className=" text-blue-500 text-xl" />
            <p className=" underline underline-offset-1">Michingam, US</p>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default CLientHeader;