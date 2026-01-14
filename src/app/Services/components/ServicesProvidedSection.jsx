import React from "react";
import Image from "next/image";
import { Serviceslogo } from "../../components/Mobileapps";
import { BiDownArrowCircle } from "react-icons/bi";
import Link from "next/link";

const ServicesProvidedSection = () => {
  return (
    <div className="w-full bg-custom">
      <div className="flex flex-col justify-center items-center pt-14">
        <div className="text-[40px] text-center font-bebas tracking-normal">
          <span>SERVICES </span>
          <span className="text-custom-blue">WE PROVIDE</span>
        </div>
        <p className="w-4/5 md:w-3/5 text-center text-paraClr leading-tight">
          Our software development services will enable your business to leverage digital trends, expand SAM, address market need, and build competitive advantage
        </p>

        <div className="flex items-center md:flex-row flex-col justify-center my-14 gap-3">
          {React.useMemo(() => Serviceslogo.map((items) => (
            <div
              key={items.image}
              className="border-2 flex flex-col w-[306px] h-[403px] gap-10 justify-center items-center text-white rounded-lg bg-custom-blue"
            >
              <Image src={items.image} alt="image" width={88} height={112} className="w-[88px] h-28 object-contain" />
              <p className="text-[40px] font-bebas text-center leading-9">{items.name}</p>
              <Link href={items.href}>
                <BiDownArrowCircle size={40} />
              </Link>
            </div>
          )), [Serviceslogo])}
        </div>
      </div>
    </div>
  );
};

export default ServicesProvidedSection;
