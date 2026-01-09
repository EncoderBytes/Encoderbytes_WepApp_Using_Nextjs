"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function WeProvideSection({
  services,
  loading,
  fallbackServices,
}) {
  const showServices = services.length > 0 ? services : fallbackServices;

  return (
    <div className="flex flex-col md:px-12 pb-16 bg-greybg">
      {/* Heading */}
      <div className="flex flex-col md:flex-row mt-20 md:justify-between items-center w-5/7">
        <div className="text-4xl text-center md:text-left font-bebas tracking-custom leading-8">
          <p>WE PROVIDE THE PERFECT</p>
          <p className="text-custom-blue">
            IT SOLUTIONS<span className="text-black">.</span>
          </p>
        </div>

        <Link href="/Services">
          <button className="mt-3 md:mt-0 text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue">
            View All Services
          </button>
        </Link>
      </div>

      {/* Description */}
      <div className="mt-3 ml-4 md:ml-0 md:w-8/12">
        <p className="text-paraClr leading-tight">
          Encoder Bytes (Pvt.) Ltd. is a leading software development company.
          We build robust software for startups and established businesses
          since 2019.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full gap-5 mx-auto">
        {loading
          ? showServices.map((_, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-4 md:w-100 mt-4 md:mt-0"
              >
                <div className="flex justify-between">
                  <Skeleton width={50} height={50} />
                  <Skeleton width={70} height={70} />
                </div>

                <div className="ml-2 mt-4 md:mt-10">
                  <Skeleton width="60%" height={30} className="mb-2" />
                  <Skeleton width="40%" height={25} />
                  <Skeleton count={3} height={15} className="mt-2" />
                </div>
              </div>
            ))
          : showServices.map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-4 md:w-100 mt-4 md:mt-0"
              >
                <div className="flex justify-between">
                  <span className="text-4xl md:text-7xl font-bebas text-paraClr opacity-20">
                    {service.id < 10 ? 0 : ""}
                    {service.OrderNumber}
                  </span>

                  <Image
                    src={service.image || service.icon}
                    alt={service.title}
                    width={70}
                    height={70}
                  />
                </div>

                <div className="ml-2 mt-4 md:mt-10">
                  <h2 className="font-bebas tracking-custom text-3xl">
                    <p className="-mb-2">{service.title}</p>
                    <span className="text-custom-blue">
                      {service.subtitle}
                    </span>
                  </h2>

                  <p className="mt-1 text-paraClr opacity-50 leading-tight">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
