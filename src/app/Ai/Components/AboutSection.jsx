"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const AboutSection = () => {
return (
<>
<div id="section2"></div>
<div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-12 mt-14 md:gap-x-8 mb-14">
<div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
<div className="font-bold text-paraClr text-lg">
<span className="border-b-4 border-custom-blue">A r t i f</span>
<span className=""> &nbsp;i c i a l &nbsp;i n t e l l e g e n c e.</span>
</div>
<div className="text-4xl font-bebas tracking-custom">
<span className="text-paraClr">WHAT IS </span>
<span className="text-custom-blue">ARTIFICIAL INTELLIGENCE?</span>
</div>


<p className="text-sm md:text-base text-paraClr leading-tight">
Encoderbyte&apos;s helps you by building software,AI services to your
businesses.which help them in generating revenues for them and also
add value to their existing product .It also helps you by enhancing
your portfolio by making brand new software for your business.We have
over 2 years of experience in AI.
</p>


<Link
href="#form"
className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
>
Let’s Discuss
</Link>
</div>


<div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
<Image
src="/AI.png"
alt="Logo"
className="object-cover w-full h-full rounded-lg"
width={400}
height={400}
/>
</div>
</div>
</>
);
};


export default AboutSection;