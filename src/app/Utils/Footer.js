// "use client";
import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-custom-blue text-sm pt-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-start w-11/12 mx-auto mt-4 pb-2">
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-5/6 gap-2">
            <Image
              src="/logos/logo.png"
              className="mx-auto md:ml-0"
              alt="Logo"
              width={200}
              height={100}
            />
            <p className="text-white text-xs text-center md:text-left">
              Encoder Bytes is on a mission to provide the highest level of
              quality software products and services across the globe.
            </p>
            <div className="flex gap-2 justify-center md:justify-start items-center mt-3">
              <FaFacebookSquare color="white" size={20} />
              <FaLinkedin color="white" size={20} />
              <FaGithubSquare color="white" size={20} />
              <FaTwitterSquare color="white" size={20} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-4/6">
            <p className="text-white font-bold text-xl mb-3">Explore</p>
            <ul className="pl-3 text-xs text-center md:text-left">
              <li className="text-white">
                <Link href="#">Home</Link>
              </li>
              <li className="text-white">
                <Link href="#">About Us</Link>
              </li>
              <li className="text-white">
                <Link href="#">Projects</Link>
              </li>
              <li className="text-white">
                <Link href="#">How Do We Work</Link>
              </li>
              <li className="text-white">
                <Link href="#">Career</Link>
              </li>
              <li className="text-white">
                <Link href="#">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-4/6">
            <p className="text-white font-bold text-xl mb-3">Contact</p>
            <ul className="text-center md:text-left">
              <li className="text-white flex gap-3 items-center text-xs">
                <FaPhoneAlt color="white" size={13} />
                +23 4546576
              </li>
              <li className="text-white py-2 flex gap-3 items-center text-xs">
                <IoMdMail color="white" size={15} />
                info@encoderbytes.com
              </li>
              <li className="text-white flex gap-3 items-center text-xs">
                <TbWorld color="white" size={16} />
                www.encoderbytes.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-4/6">
            <p className="text-white font-bold text-xl mb-3">Address</p>
            <ul className="text-center md:text-left text-xs">
              <li className="text-white">
                EncoderBytes, IT Park, PTCL Training Center, Peshawar, KP,
                Pakistan
              </li>
              <li className="text-white">info@encoderbytes.com</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center text-white bg-custom-color text-xs p-4">
          © Copyright 2022, EncoderBytes
        </div>
      </footer>
    </>
  );
};

export default Footer;
