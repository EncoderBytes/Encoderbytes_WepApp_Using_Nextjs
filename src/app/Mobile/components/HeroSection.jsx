import React from "react";
import Top from "../../Utils/Top"; // import your old Top component

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
      <div className="flex flex-col justify-center items-center py-24 text-center">
        <h1 className="text-custom-blue text-4xl font-bebas tracking-custom">
          MOBILE APP DEVELOPMENT
        </h1>

        <p className="w-5/6 leading-tight text-paraClr my-3">
          We develop user-centric mobile applications that solve real world
          problems.
        </p>

        <a
          href="/"
          className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
        >
          Home - Services -&nbsp;
          <span className="text-custom-blue">
            &nbsp;Mobile App Development
          </span>
        </a>
      </div>
    </div>
  );
};

const HeroWithTop = () => {
  return (
    <>
      <div className="bg-white">
        <Top />
      </div>
      <HeroSection />
    </>
  );
};

export default HeroWithTop;
