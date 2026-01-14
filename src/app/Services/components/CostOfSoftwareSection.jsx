import React from "react";
import Image from "next/image";
import { CostOfSoftware } from "../../components/Mobileapps";

const CostOfSoftwareSection = () => {
  return (
    <section className="w-full bg-gray-100 py-14">
      <div className="max-w-8xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-bebas text-[28px] md:text-[40px] tracking-custom">
            COST OF SOFTWARE{" "}
            <span className="text-custom-blue">DEVELOPMENT SERVICES</span>
          </h2>
          <p className="mt-3 text-paraClr text-sm md:text-base max-w-4xl mx-auto leading-tight">
            We offer custom software development services at different price levels
            depending upon the scope and requirements of your software project.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CostOfSoftware.map((item) => (
            <div
              key={item.image}
              className="bg-white rounded-xl shadow-sm px-6 py-8 flex flex-col items-center text-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="object-contain mb-5"
              />

              <h3 className="font-bebas text-lg tracking-wide mb-3">
                {item.name}{" "}
                <span className="text-custom-blue">{item.name1}</span>
              </h3>

              <p className="text-sm text-center text-paraClr leading-tight">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostOfSoftwareSection;
