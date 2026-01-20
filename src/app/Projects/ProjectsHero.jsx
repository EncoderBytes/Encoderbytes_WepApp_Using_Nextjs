import React from "react";
import Top from "../Utils/Top";

const HeroSection = () => {
return (
<div
className="max-w-full h-[350px] flex justify-center items-center mt-20"
style={{
backgroundImage:
"linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
backgroundSize: "100% 100%",
backgroundBlendMode: "overlay",
backgroundRepeat: "no-repeat",
}}
>
<div className="flex flex-col justify-center items-center py-24">
<div className="text-custom-blue text-2xl md:text-4xl flex justify-center items-center font-bebas tracking-custom">
Our Portfolio
</div>
<div className="flex m-auto py-3">
<p className="flex m-auto justify-center items-center text-center">
We have developed many web and mobile applications for the last four years. Some of them are the following.
</p>
</div>

<a 
          href="/"
          className="text-black font-bold mt-20 text-center md:text-left text-md"
        >
          Home - <span className="text-custom-blue">Our Portfolio</span>
        </a>
</div>
</div>
);
};


export default HeroSection;