import React from "react";

const categories = [
  { key: "All", label: "ALL" },
  { key: "mobileapplication", label: "MOBILE APP" },
  { key: "webapplication", label: "WEB APP" },
  { key: "artificialintelligence", label: "ARTIFICIAL INTELLIGENCE" },
  { key: "blockchain", label: "BLOCKCHAIN" },
  { key: "uiux", label: "UI/UX DESIGNING" },
];

const ProjectsFilter = ({ activeCategory, onSelect }) => {
  return (
    <div className="mt-14 md:mt-14 w-full bg-gray-200 p-5 md:w-4/6 md:m-auto rounded-md font-bold h-auto">
      <ul className="flex flex-wrap gap-2 md:gap-5 justify-center h-auto">
        {categories.map((cat) => (
          <li
            key={cat.key}
            className={`cursor-pointer text-xs sm:text-sm md:text-md ${
              activeCategory === cat.key ? "text-custom-blue" : "text-gray-400"
            } hover:text-custom-blue`}
            onClick={() => onSelect(cat.key)}
          >
            {cat.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsFilter;
