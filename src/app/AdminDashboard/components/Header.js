"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const [imagePreview, setImagePreview] = useState("");
  const API_URL = "/api/Users";

  const showalladmins = useCallback(() => {
    if (!userId) return;

    axios
      .get(`${API_URL}/${userId}`)
      .then((res) => {
        const adminData = res.data.Result;
        setImagePreview(adminData.Image);
      })
      .catch((error) => {
        console.error(`error : ${error}`);
      });
  }, [userId]);

  useEffect(() => {
    showalladmins();
  }, [showalladmins]);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await axios.get("/api/Users/logout");
    } catch (error) {
      console.error(error.message);
    }
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    router.push("/AdminDashboard/Login");
    toast.success("Logged out successfully");
  }, [router]);

  return (
    <header className="bg-custom-blue text-white py-4 px-6 flex items-center justify-between opacity-90 w-full">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <Image
          src="/logos/logo.png"
          alt="Logo"
          className="h-8 w-auto"
          height={200}
          width={200}
        />
      </div>

      {/* Middle: Encoderbytes */}
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="flex items-center">
        <div className="relative">
          <Image
            src={"/uploads/" + imagePreview}
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
            height={70}
            width={70}
            onClick={toggleDropdown}
          />
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 flex flex-col justify-center items-center bg-white rounded shadow-lg z-10 text-black">
              <ul className="py-1">
                <Link href="/AdminDashboard/Profile">
                  <li className="px-4 py-2 hover:bg-custom-blue cursor-pointer rounded-lg">
                    <CgProfile />
                  </li>
                </Link>
                <Link href="#">
                  <button onClick={handleLogout}>
                    <li className="px-4 py-2 hover:bg-custom-blue cursor-pointer rounded-lg ">
                      <IoIosLogOut />
                    </li>
                  </button>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
