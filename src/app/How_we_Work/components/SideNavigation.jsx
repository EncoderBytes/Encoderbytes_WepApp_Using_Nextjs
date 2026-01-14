import React from "react";
import Link from "next/link";

const SideNavigation = ({ activeLink, setActiveLink }) => {
  const links = [
    { id: "#01", label: "01. DISCUSSION & ANALYSIS" },
    { id: "#02", label: "02. PLANNING AND DESIGN" },
    { id: "#03", label: "03. SOFTWARE DESIGN" },
    { id: "#04", label: "04. SOFTWARE DEVELOPMENT" },
    { id: "#05", label: "05. QUALITY ASSURANCE" },
    { id: "#06", label: "06. MAINTENANCE" },
  ];

  return (
    <nav className="w-1/3 flex items-start justify-start md:justify-center sticky top-4 h-screen">
      <div className="w-full flex items-start justify-center">
        <div className="mt-16 w-8/12">
          <div className="relative w-full h-auto">
            <span className="absolute top-0 left-0 flex w-full opacity-50">
              <ul className="flex flex-col gap-12 text-paraClr mt-10 font-bebas text-xl tracking-custom z-30">
                {links.map((item) => (
                  <li key={item.id}>
                    <div className="flex justify-start items-center group hover:text-custom-blue transition-colors duration-300">
                      <span
                        className={`text-3xl cursor-pointer group-hover:text-custom-blue transition-colors duration-300 ${
                          activeLink === item.id ? "text-custom-blue" : ""
                        }`}
                      >
                        •
                      </span>
                      <span className="pl-10 cursor-pointer">
                        <Link
                          href={item.id}
                          onClick={() => setActiveLink(item.id)}
                          className={`group-hover:text-custom-blue transition-colors duration-300 ${
                            activeLink === item.id ? "text-custom-blue" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </span>
            <pre className="border-paraClr opacity-30 border-l-2 py-80 md:py-72 ml-1 absolute z-40"></pre>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNavigation;
