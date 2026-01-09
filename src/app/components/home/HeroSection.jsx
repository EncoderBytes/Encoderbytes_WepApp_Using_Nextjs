"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  //  Three backgrounds
  const backgrounds = [
    "/backgrounds/background-image.png",
    "/backgrounds/img1.png",
    "/backgrounds/img2.png",
  ];

  const totalSlides = backgrounds.length;

  const handlePrev = () => {
    setActiveSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="relative flex flex-col items-center h-[760px] bg-cover bg-no-repeat text-white transition-all duration-700"
      style={{
        backgroundImage: `url('${backgrounds[activeSlide]}')`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
        <span className="text-2xl">a bespoke</span>

        <h1 className="capitalize font-bebas text-7xl leading-[65px] tracking-custom">
          SOFTWARE development
          <span className="block text-custom-blue">
            company<span className="text-white">.</span>
          </span>
        </h1>

        <p className="text-xl mt-2">
          Software Development That Ensures Growth Of Your Business.
        </p>

        {/* CTA + Arrows Row */}
        <div className="mt-16 flex items-center justify-between w-full">
          {/* Button */}
          <Link
            href="/How_we_Work"
            className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-white w-[200px] py-3 px-2 rounded-md flex items-center justify-center gap-2"
          >
            See How we Work
            <FaArrowCircleRight />
          </Link>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-105 bg-custom-blue/50"
            >
              <Image
                src="/icons/Group 15 (1).png"
                alt="Previous"
                width={22}
                height={22}
              />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-105 bg-custom-blue/50"
            >
              <Image
                src="/icons/Group 15.png"
                alt="Next"
                width={22}
                height={22}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
