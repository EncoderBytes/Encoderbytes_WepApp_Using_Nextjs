import React from "react";
import Image from "next/image";
import { Uiuxappslogo } from "../../components/Mobileapps";

const ToolsSection = () => {
  return (
    <div className="w-full bg-custom">
      <div className="flex justify-center items-center flex-col pt-14">
        <div className="text-[40px] text-center font-bebas tracking-custom">
          <span>TOOLS & </span>
          <span className="text-custom-blue">TECHNOLOGIES</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-10 pb-20 w-5/6">
          {Uiuxappslogo.map((item) => (
            <div
              key={item.image}
              className="border-2 border-gray-300 text-center flex flex-col gap-4 w-47 h-47 justify-center items-center rounded-xl"
            >
              <Image src={item.image} alt={item.name} width={44} height={50} className="rounded-lg"/>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
