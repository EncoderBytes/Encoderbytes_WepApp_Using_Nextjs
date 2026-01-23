"use client";
import React, { useEffect, useState, useCallback } from "react";
import { BlogsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
import HeroSection from "./components/HeroSection";
import BlogGrid from "./components/BlogGrid";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [loading, setLoading] = useState(true);

  const toggleBlogExpand = useCallback((idx) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  }, []);

  const getBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const { admins } = await BlogsCount();
      setBlogs(admins || []);
    } catch (error) {
      console.log(`Failed to fetch blog: ${error}`);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div className="bg-white">
      <HeroSection />
      <BlogGrid
        blogs={blogs}
        loading={loading}
        expandedBlogs={expandedBlogs}
        toggleBlogExpand={toggleBlogExpand}
      />
    </div>
  );
};

export default Page;
