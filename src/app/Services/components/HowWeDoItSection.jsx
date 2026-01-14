import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowWeDoItSection = () => {
  return (
    <div className="
      flex flex-col md:flex-row 
      justify-center items-center 
      px-4 sm:px-6 md:px-12 
      mt-14 md:mt-14 
      gap-y-10 md:gap-x-8 
      mb-14
    ">
      {/* Text Section */}
      <div className="
        flex flex-col 
        justify-center items-center md:items-start 
        gap-y-4 
        text-center md:text-left 
        md:w-[50%]
      ">
        <div className="
          text-3xl sm:text-[34px] md:text-[40px] 
          font-bebas tracking-custom
        ">
          <span>HOW WE</span>
          <span className="text-custom-blue"> DO IT?</span>
        </div>

        <p className="
          text-sm sm:text-base 
          text-paraClr 
          leading-relaxed md:leading-tight
          max-w-[520px] md:max-w-none
        ">
          EncoderBytes follows the methodical waterfall strategy of SDLC while developing applications. We engage you with executives to pick your requirements for developing applications. Then by utilizing an efficient globally followed strategy, we shape/ visualize your idea. Then the Product Manager and Scrum Master engage the Designing and Development team in parallel. While also engaging you to review the design and development in every sprint review meeting, in order to shape the application to best fit your requirements and ensure your business growth productivity. Customer satisfaction is our utmost duty, we also entertain Post-delivery revisions in our developed applications.
        </p>

        <Link
          href="#form"
          className="
            text-white font-semibold transition-all 
            w-[142px] h-11 
            border-2 bg-custom-blue border-custom-blue 
            rounded-md 
            hover:bg-transparent hover:text-custom-blue 
            flex items-center justify-center 
            mt-2 md:mt-4
          "
        >
          Let&apos;s Discuss
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] relative">
        <Image
          src="/backgrounds/Rectangle-29.png"
          alt="How we do it"
          className="object-cover rounded-[10px] w-full h-auto"
          width={636}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default HowWeDoItSection;
