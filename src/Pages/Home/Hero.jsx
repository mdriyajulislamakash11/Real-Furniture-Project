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


   
    </div>
  );
};

export default Hero;
