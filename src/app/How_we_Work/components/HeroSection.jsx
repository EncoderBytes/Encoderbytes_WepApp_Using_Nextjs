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
      <div className="flex flex-col justify-center items-center py-24 text-center">
        <h1 className="text-custom-blue text-4xl font-bebas tracking-custom">
          HOW DO WE WORK?
        </h1>
        <p className="w-5/6 md:w-3/6 leading-tight text-paraClr my-3">
          We follow the state of the art software development process , initiating
          from requirement gathering from user till completion and deployment.
          Each phase during development of a software is valuable for us.
        </p>
        <a href="/" className="text-paraClr font-semibold mt-20 text-xs">
          Home &nbsp;-{" "}
          <span className="text-custom-blue">&nbsp;How We Work</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
