import React from "react";
import Link from "next/link";
import Image from "next/image";

const IntroSection = () => {
  return (
    <div className="bg-[#fbfbfc] flex flex-col md:flex-row justify-center items-center px-6 md:px-12 py-12 md:py-14 gap-8">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
        <div className="font-bold text-paraClr text-lg">
          <span className="border-b-4 border-custom-blue">U s e r </span>
          <span>&nbsp;e x p e r i e n c e &nbsp;d e s i g n i n g.</span>
        </div>
        <div className="text-4xl font-bebas tracking-custom">
          <span className="text-paraClr">IMPROVE YOUR </span>
          <span className="text-custom-blue">USER EXPERIENCE?</span>
        </div>
        <p className="text-sm md:text-base text-paraClr leading-tight">
          Grabbing the market by your brands depends on the sophisticated
          aesthetic UI/UX designs of your product. One of the leading expertise
          of Encoderbytes is the strong UI/UX designing background with a skilled
          workforce. Our UI/UX designs are focused on efficient solutions to
          user problems. We apply design thinking to product design, therefore
          we categorize the UX process to 5 key phases : Product definition,
          Research, Analysis, Design and validation. Our systematic approach
          results in an unconventional UI and UX design – a user friendly
          solution.
        </p>
        <Link
          href="#form"
          className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
        >
          Let’s Discuss
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
        <Image
          src="/UIUX.png"
          alt="UI UX"
          className="object-cover w-full h-full rounded-lg"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default IntroSection;
