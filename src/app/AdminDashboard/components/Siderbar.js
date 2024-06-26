"use client";
import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"; // Import Link from Next.js
import { TiUserAdd } from "react-icons/ti";
import { FaHome, FaUsers, FaProjectDiagram, FaBlog } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Define menu items with titles, icons, and routes
  const menuItems = useMemo(
    () => [
      { title: "Dashboard", icon: <FaHome />, route: "/AdminDashboard/Home" },
      {
        title: "Registered Admin",
        icon: <TiUserAdd />,
        route: "/AdminDashboard/RegisterAdmin",
      },
      {
        title: "All Team",
        icon: <FaUsers />,
        route: "/AdminDashboard/ShowAllTeam",
      },
      {
        title: "All Projects",
        icon: <FaProjectDiagram />,
        route: "/AdminDashboard/AllProjects",
      },
      { title: "Blogs", icon: <FaBlog />, route: "/AdminDashboard/AllBlogs" },
      {
        title: "Vacancies",
        icon: <CiBoxList />,
        route: "/AdminDashboard/ShowVacancy",
      },
      {
        title: "Get In Touch",
        icon: <MdTouchApp />,
        route: "/AdminDashboard/GetInTouch",
      },
      {
        title: "Requests For Joining",
        icon: <FaPersonWalkingArrowRight />,
        route: "/AdminDashboard/RequestForJoining",
      },
    ],
    []
  );

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <aside className="bg-white-800 text-black h-screen w-20 sm:w-48 lg:w-72 flex flex-col shadow-xl border-2 mt-1 shadow-custom-blue">
      {/* Sidebar header */}
      {/* Menu items */}
      <nav className="flex-1">
        <ul>
          {menuItems.map(({ title, icon, route }, index) => (
            <Link
              href={route}
              className="flex flex-col items-center  cursor-pointer  justify-center hover:border-2 hover:border-gray-300 "
            >
              <li
                key={index}
                className={`cursor-pointer py-3 flex items-center justify-center  ${
                  pathname === route
                    ? "bg-custom-blue p-5 rounded-lg text-white w-full"
                    : ""
                }`}
                onClick={() => handleNavigation(route)}
              >
                {/* <a> */}
                {/* Show icon only on large screens */}
                <div className="flex  gap-3 justify-start items-center ">
                  <span className="lg:block sm:block">{icon}</span>
                  {/* Show title only on small screens */}
                  <span className="md:block sm:hidden xs:hidden">{title}</span>
                </div>
                {/* </a> */}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
