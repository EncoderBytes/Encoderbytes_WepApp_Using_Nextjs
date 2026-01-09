"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Cartobj } from "../carts";

export default function OurApproachesSection({ approaches = [], loading }) {
  // Use backend data if available, otherwise fallback to Cartobj
  const cards = approaches.length > 0 ? approaches : Cartobj;

  return (
    <div className="md:px-0 mt-32 bg-greybg pb-14">
      {/* Heading */}
      <div className="px-4 mt-10 md:mt-32 md:px-12 pt-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="px-0 mt-8 md:mt-0 md:w-[50%] font-bebas tracking-custom">
            <p className="text-4xl -mb-2">OUR APPROACHES</p>
            <p className="text-4xl text-custom-blue">
              TO SOLVE A PROBLEM<span className="text-black">.</span>
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <Link
              href="/How_we_Work"
              className="text-custom-blue font-semibold transition-all w-[127px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center"
            >
              Read Details
            </Link>
          </div>
        </div>

        <div className="mt-4 md:mt-8 md:w-[60%] text-paraClr leading-tight">
          <p>
            We at Encoderbytes follow every possible method to solve problems
            for our clients and help them in their businesses.
          </p>
        </div>
      </div>

      {/* Dynamic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 md:px-12 m-auto">
        {loading
          ? Cartobj.map((_, index) => (
              <div className="rounded-lg bg-white p-4" key={index}>
                <div className="flex justify-between">
                  <Skeleton width={80} height={60} />
                  <Skeleton width={70} height={70} />
                </div>

                <div className="mt-6 ml-2">
                  <Skeleton width={"70%"} height={35} className="mb-4" />
                  <Skeleton count={3} height={15} />
                </div>
              </div>
            ))
          : cards.map((cart, index) => (
              <div className="rounded-lg bg-white p-4" key={index}>
                <div className="flex justify-between">
                  <span className="text-4xl md:text-7xl font-bold text-[#454544] opacity-20 font-bebas tracking-custom">
                    {cart.no < 10 ? 0 : ""}
                    {cart.no}
                  </span>

                  <Image
                    src={cart.image}
                    alt={cart.heading || "Icon"}
                    width={70}
                    height={70}
                  />
                </div>

                <div className="flex flex-col md:w-full ml-2 mt-6">
                  {/* Black heading (static text) */}
                  <p className="text-4xl font-bebas tracking-custom -mb-2 text-black">
                    OUR APPROACHES
                  </p>

                  {/* Blue heading (dynamic based on cart.heading) */}
                  <p className="text-4xl font-bebas tracking-custom -mb-2 text-custom-blue">
                    TO {cart.heading}
                  </p>

                  {/* Description */}
                  <p className="mt-6 text-paraClr capitalize opacity-50 leading-tight">
                    {cart.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
