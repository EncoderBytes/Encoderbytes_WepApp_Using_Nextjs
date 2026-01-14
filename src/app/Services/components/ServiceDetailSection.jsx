import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ServiceDetailSection = () => {
  const serviceDetails = [
    {
      title: "IMPROVE YOUR USER EXPERIENCE",
      image: "/UIUX.png",
      href: "/Uiux",
      prefix: "u s e r",
      subPrefix: "  e x p e r i e n c e  d e s i g n i n g ",
      desc: "With over 2 years of experience in AI, EncoderBytes helps build software for businesses that can be a source of revenue for them. We deliver AI services to businesses to enhance and add value to their existing products.",
    },
    {
      title: "MAKE YOUR LIFE EASY WITH A MOBILE APP",
      image: "/backgrounds/Mask-group5.png",
      href: "/Mobile",
      prefix: "m o b",
      subPrefix: " i l e a p p d e v e l o p m e n t.",
      desc: "We offer all-round custom software application development services to develop stunning mobile apps that work across a variety of devices and engage large audiences.",
    },
    {
      title: "MAKE YOUR APP MORE INTELLEGENT AI",
      image: "/backgrounds/Mask-group6.png",
      href: "/Ai",
      prefix: "a r t i f",
      subPrefix: " i c i a l i n t e l l e g e n c e.",
      desc: "We are working with new business and startups. We provide IT solutions for businesses to get more income.",
    },
    {
      title: "REACH EVERYONE ARROUND THE WOULD",
      image: "/backgrounds/Mask-group7.png",
      href: "/WebApp",
      prefix: "w e b",
      subPrefix: " a p p l i c a t i o n d e v e l o p m e n t.",
      desc: "We offer all-round custom software application development services to develop stunning web applications designed with security, scalability, and usability in mind.",
    },
  ];

  return (
    <section className="pb-16 w-8/6 m-auto">
      {serviceDetails.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } justify-center items-center px-6 md:px-12 mt-20 gap-y-8 md:gap-x-8`}
        >
          {/* TEXT */}
          <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[50%]">
            <div className="text-xl font-bold">
              <span className="border-b-4 border-custom-blue">
                {item.prefix}
              </span>
              <span>{item.subPrefix}</span>
            </div>

            <div className="text-[40px] font-bebas text-custom-blue tracking-custom">
              {item.title}
            </div>

            <p className="text-paraClr leading-tight">
              {item.desc}
            </p>

            <Link href={item.href}>
              <div className="text-custom-blue hover:text-white rounded-md h-11 mt-5 border-2 hover:bg-custom-blue border-custom-blue flex items-center w-[157px] justify-center gap-4 cursor-pointer font-semibold">
                <span>Read More</span>
                <FaRegArrowAltCircleRight />
              </div>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-[50%] h-auto md:h-full relative">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover rounded-lg"
              width={636}
              height={400}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceDetailSection;
