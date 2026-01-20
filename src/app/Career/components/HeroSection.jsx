"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="max-w-full h-[350px] flex justify-center items-center mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center py-24">
        <div className="text-custom-blue text-2xl md:text-4xl font-bebas tracking-custom">
          CAREERS
        </div>
        <p className="flex m-auto justify-center items-center text-paraClr leading-tight text-center w-3/4 py-3">
          We are providing best jobs opportunities for people who want to
          grow their skills and career in different fields of the IT industry.
          Also we provide internship for fresh graduates.
        </p>
        <a
          href="/"
          className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
        >
          Home - <span className="text-custom-blue">Careers</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
