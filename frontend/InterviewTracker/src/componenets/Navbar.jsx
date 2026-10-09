import React from "react";
import logo from "../assets/icon/laptop.png";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-300 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4">
        <img
          src={logo}
          alt="Logo"
          className="h-8 w-8 rounded-lg object-cover"
        />

        <h1 className="text-xl font-semibold tracking-tight text-[#1F2937]">
          Interview Practice Tracker
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;