"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs, loading, expandedBlogs, toggleBlogExpand }) => {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-14">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden">
              <Skeleton height={250} className="rounded-lg"/>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Skeleton circle width={40} height={40}/>
                  <div className="ml-3">
                    <Skeleton width={100} height={16}/>
                    <Skeleton width={80} height={14}/>
                  </div>
                </div>
                <Skeleton width="80%" height={24} className="mb-3"/>
                <Skeleton count={3} height={16}/>
                <Skeleton width={80} height={16} className="mt-4"/>
              </div>
            </div>
          ))}
        </div>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, idx) => (
            <BlogCard
              key={blog._id || idx}
              blog={blog}
              idx={idx}
              expanded={expandedBlogs[idx]}
              toggleExpand={toggleBlogExpand}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-14">
          <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
