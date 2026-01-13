"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TeamCount } from "../../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

const AboutTeam = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { admins } = await TeamCount();
        setEmployees(admins || []);
      } catch (error) {
        console.log("Failed to fetch team:", error);
      }
    };
    fetchTeam();
  }, []);

  const sortedEmployees = useMemo(
    () => [...employees].sort((a, b) => a.order - b.order),
    [employees]
  );

  return (
    <div className="px-4 md:px-10 pt-10 pb-14">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-4xl font-bebas tracking-custom text-center">
          MEET OUR <span className="text-custom-blue">TEAM.</span>
        </h2>
        <p className="mt-2 text-center w-5/6 md:w-5/6 text-paraClr leading-tight">
          Our team consists of super programmers, world-class business analysts, creative designers, and problem solvers. There’s hardly a software app development challenge that our team cannot tackle.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        {sortedEmployees.map((team) => (
          <div key={team._id} className="border-2 border-gray-300 relative rounded-xl shadow-md text-center h-[425px] py-10 hover:border-custom-blue transition duration-300">
            
            {/* Profile Image */}
            <div className="flex justify-center rounded-full">
              <Image
                src={team.image}
                alt={`${team.username}'s profile`}
                width={170}
                height={170}
                className="rounded-full w-52 h-52 grayscale hover:grayscale-0 transition duration-300"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Name & Designation */}
            <h3 className="py-3 px-4 mt-2">
              <span className="font-extrabold text-custom-blue text-xl uppercase">{team.username}</span>
              <p className="text-xs text-paraClr opacity-50">{team.designation}</p>
            </h3>

            {/* Social Icons */}
            {team.LinkedIn && team.Github && (
              <div className="flex justify-center gap-1 bg-gray-300 w-32 h-8 m-auto items-center rounded-md text-gray-500 hover:bg-blue-100 transition duration-300">
                <a href={team.LinkedIn} aria-label={`LinkedIn profile of ${team.username}`} target="_blank" rel="noreferrer">
                  <FaLinkedin size={25} />
                </a>
                <a href={team.Github} aria-label={`GitHub profile of ${team.username}`} target="_blank" rel="noreferrer" className="hover:text-custom-blue">
                  <FaGithubSquare size={25} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
