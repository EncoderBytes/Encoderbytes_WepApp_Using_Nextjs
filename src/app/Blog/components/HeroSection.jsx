"use client";
import React from "react";
import Top from "../../Utils/Top";

const HeroSection = () => {
  return (
    <div>
      <Top />
      <div
        className="max-w-full h-[400px] flex justify-center items-center mt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24">
          <div className="text-custom-blue text-4xl md:text-6xl flex justify-center items-center font-bebas tracking-custom">
            BLOGS
          </div>
          <div className="flex m-auto py-6">
            <p className="flex m-auto justify-center items-center text-center text-gray-700 w-3/4 md:w-2/3 text-sm md:text-base leading-relaxed">
              Discover valuable insights, industry updates, and expert knowledge through our blogs. We share 
              perspectives on technology, design, and development to keep you informed and inspired.
            </p>
          </div>
          <div className="text-gray-700 font-medium text-center md:text-left mt-8 text-sm">
            <a href="/" className="hover:text-custom-blue transition-colors">Home</a>
            <span className="mx-2">→</span>
            <span className="text-custom-blue">Blogs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
