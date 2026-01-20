import React, { useState } from "react";
import Image from "next/image";

const categories = [
  { key: "All", label: "ALL" },
  { key: "mobileapplication", label: "MOBILE APP" },
  { key: "webapplication", label: "WEB APP" },
  { key: "artificialintelligence", label: "ARTIFICIAL INTELLIGENCE" },
  { key: "blockchain", label: "BLOCKCHAIN" },
  { key: "uiux", label: "UI/UX DESIGNING" },
];

const ProjectsFilter = ({ activeCategory, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (value) => {
    setSearchTerm(value);
    // You can also do filtering here if needed
    console.log("Searching for:", value);
  };

  return (
    <div className="mt-14 w-full md:w-4/6 mx-auto">
      <div className="flex justify-center mb-6">
        <div className="flex w-full max-w-xl h-10">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="flex-1 px-4 text-sm border border-[#454544] rounded-l-md focus:outline-none"
          />
          <button
            type="button"
            className="w-12 bg-[#454544] flex items-center justify-center rounded-r-md border border-l-0 border-[#454544]"
          >
            <Image
              src="/icons/searchicon.png"
              alt="Search"
              width={14}
              height={14}
              className="invert"
            />
          </button>
        </div>
      </div>

      <div className="bg-gray-200 p-5 rounded-md font-bold">
        <ul className="flex flex-wrap gap-2 md:gap-5 justify-center">
          {categories.map((cat) => (
            <li
              key={cat.key}
              className={`cursor-pointer text-xs sm:text-sm md:text-md ${
                activeCategory === cat.key
                  ? "text-custom-blue"
                  : "text-gray-400"
              } hover:text-custom-blue`}
              onClick={() => onSelect(cat.key)}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsFilter;
