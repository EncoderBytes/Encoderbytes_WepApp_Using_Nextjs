"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
const Blogs = () => {
  const router = useRouter();
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login"); // Redirect to login page if not authenticated
    }
  }, []);
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div>Blogs</div>
      </div>
    </>
  );
};

export default Blogs;
