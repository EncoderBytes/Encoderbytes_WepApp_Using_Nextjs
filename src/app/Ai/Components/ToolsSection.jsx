"use client";
import React from "react";
import { Aiappslogo } from "../../components/Mobileapps";


const ToolsSection = () => {
return (
<>
<div id="section5"></div>
<div className="w-full bg-[#F5F5F6] my-14">
<div className="flex justify-center items-center flex-col ">
<div className="text-[40px] font-bebas tracking-custom text-center mt-14">
<span className="">TOOLS & </span>
<span className="text-custom-blue">TECHNOLOGIES</span>
</div>
<p className="w-4/5 md:w-3/4 mt-3 text-center text-paraClr leading-tight">
To launch and grow successful digital business as a leading web
development company in Pakistan we cover every technology to choose
the right platform for you that perfectly serves your requirements.
</p>
<div className=" grid grid-cols-2 md:grid-cols-6 gap-8 my-14 w-5/6">
{Aiappslogo.map((items) => {
return (
<div
key={items.image}
className="border-2 border-gray-200 w-47 h-47 text-center flex flex-col gap-6 justify-center items-center rounded-lg "
>
<img src={items.image} className="rounded-lg" alt="image" />
<span className="font-semibold text-lg">{items.name}</span>
</div>
);
})}
</div>
</div>
</div>
</>
);
};


export default ToolsSection;