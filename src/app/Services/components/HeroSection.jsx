import React from "react";

const HeroSection = () => {
  return (
    <div
      className="max-w-full h-[350px] flex justify-center items-center mt-16 md:mt-20 px-4 md:px-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center py-16 md:py-20 text-center">
        <div className="text-custom-blue text-xl sm:text-2xl md:text-4xl font-bebas tracking-custom">
          CUSTOM SOFTWARE DEVELOPMENT SERVICES
        </div>
        <p className="mt-3 text-sm sm:text-base md:text-base leading-snug md:leading-tight text-center">
          Web applications, mobile apps, integration projects and more. 100+ projects | Since 2019
        </p>
        <a
          href="/"
          className="text-paraClr font-semibold text-xs mt-6 md:mt-20 text-center"
        >
          Home - <span className="text-custom-blue"> Services</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
