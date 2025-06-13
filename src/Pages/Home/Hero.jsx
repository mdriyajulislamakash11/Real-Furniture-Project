import React from "react";
import bannerImage from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="h-screen relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* content section */}
      <div className="relative md:pt-48 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8">
        <h1 className="text-4xl lg:text-6xl lg:leading-tight leading-snug font-medium text-white">
          Make your interior more minimalistic & modern
        </h1>
        <p className=" md:text-xl lg:w-1/2 mx-auto text-gray-300">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        {/* Search field with input and icon */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2  bg-white/25 rounded-full border border-gray-300 text-white focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer">
            <FaSearch className="text-white " />
          </div>
        </div>
      </div>

      {/* bottom blure effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />

      {/* hover button for displaying box  */}
      {/* <BasicToolTip/> */}
      <div className="absolute bottom-40 left-24 group">
        <button className="relative p-4 bg-white/25 rounded-full border text-xl">
          🎨
          <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex gap-2">
            <div className="size-6 bg-red-700 border border-white rounded-full"></div>
            <div className="size-6 bg-green-700 border border-white rounded-full"></div>
            <div className="size-6 bg-blue-700 border border-white rounded-full"></div>

            {/* tooltip arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-1-8 border-r-8 border-l-transparent border-r-transparent border-t-8 border-t-white/35" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
