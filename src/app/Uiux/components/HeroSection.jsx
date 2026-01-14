import React from "react";

const HeroSection = () => {
  return (
    <div
      className="max-w-full h-[350px] flex justify-center items-center mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url('/backgrounds/banner_Facebook Cover copy.png')",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center py-24">
        <div className="text-custom-blue text-2xl md:text-4xl font-bebas tracking-custom">
          USER EXPERIENCE DESIGNING
        </div>
        <p className="text-center mt-3">
          We design clean and aesthetic user experiences for businesses.
        </p>
        <a
          href="/"
          className="text-paraClr font-semibold text-xs mt-4 text-center"
        >
          Home - Services - <span className="text-custom-blue">UI / UX</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
