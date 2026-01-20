"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const IntroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-12 mt-14 md:gap-x-8 mb-14">
      <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
        <div className="font-bold text-paraClr text-lg">
          <span className="border-b-4 border-custom-blue">E n c o</span>
          d e r b y t e s .
        </div>
        <div className="text-4xl font-bebas tracking-custom">
          <span className="text-paraClr">CAREERS AT </span>
          <span className="text-custom-blue">ENCODERBYTES</span>
        </div>
        <p className="text-sm md:text-base text-paraClr leading-tight">
          We strive to hire the absolute best people. As a services organization,
          we firmly believe that it is the single most important reason for all
          the success the company has achieved to-date. And this is really the
          only way to move forward.
        </p>
        <Link
          href="/#form"
          className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
        >
          Let’s Discuss
        </Link>
      </div>

      <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
        <Image
          src="/Career.png"
          alt="Career Illustration"
          className="object-cover w-full h-full"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default IntroSection;
