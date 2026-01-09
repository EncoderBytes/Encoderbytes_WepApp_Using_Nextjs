"use client";

import Link from "next/link";

export default function LetsDiscussSection() {
  return (
    <section
      className="flex flex-col md:flex-row md:h-80 bg-gradient-to-b from-black via-black to-transparent w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/backgrounds/Rectangle2.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="my-10 flex flex-col md:flex-row justify-between items-center md:px-16 w-9/12 m-auto">
        {/* Text Content */}
        <div>
          <div className="mb-4 md:mb-0 font-bebas text-[40px] tracking-custom">
            <h1 className="text-white -mb-6">
              Let’s discuss. <span className="text-custom-blue">How much</span>
            </h1>
            <h2 className="text-custom-blue">Your App Costs?</h2>
          </div>
          <p className="text-[#e5e5e5] md:flex md:justify-start">
            Send us the features you are looking to build, and we shall advise
            on the next steps.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-0">
          <Link
            href="#form"
            className="text-white font-semibold transition-all w-[142px] h-11 border-2 bg-custom-blue border-custom-blue rounded-md hover:bg-transparent hover:text-custom-blue flex items-center justify-center"
          >
            Let's Discuss
          </Link>
        </div>
      </div>
    </section>
  );
}
