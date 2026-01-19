"use client";
import React from "react";


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
ARTIFICIAL INTELLIGENCE
</div>
<div className="flex m-auto py-3">
<p className="flex m-auto justify-center items-center text-center">
Build and launch software platforms that bring you revenue.
</p>
</div>
<a
href="/"
className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
>
Home - Services -&nbsp;{" "}
<span className="text-custom-blue">
&nbsp;Artificial-Intelligence
</span>
</a>
</div>
</div>
);
};


export default HeroSection;