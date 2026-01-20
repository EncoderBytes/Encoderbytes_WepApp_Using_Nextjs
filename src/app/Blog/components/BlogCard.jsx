"use client";
import React from "react";
import Image from "next/image";

const BlogCard = ({ blog, idx, expanded, toggleExpand }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Blog Image */}
      <div className="relative h-64 overflow-hidden">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.blogtitle || "Blog image"}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      
      {/* Blog Content */}
      <div className="p-6">
        {/* Author Info and Date */}
        <div className="flex items-center mb-4">
          <div>
            <p className="text-sm font-medium text-gray-900">
              {blog.author || "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500">
              {blog.datetime
                ? (() => {
                    let dt = new Date(blog.datetime);
                    return dt instanceof Date && !isNaN(dt)
                      ? `${dt.toLocaleString("en-US", { month: "short" })} ${dt.getDate()}, ${dt.getFullYear()}`
                      : "Invalid Date";
                  })()
                : "No Date Available"}
            </p>
          </div>
        </div>

        {/* Blog Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {blog.blogtitle}
        </h2>

        {/* Blog Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {expanded ? blog.description : `${blog.description?.substring(0, 120)}...`}
        </p>

        {/* Read More Button */}
        <div className="flex items-center justify-between">
          {blog.description && blog.description.length > 120 && (
            <button
              className="text-custom-blue hover:text-blue-600 text-sm font-medium transition-colors duration-200"
              onClick={() => toggleExpand(idx)}
            >
              {expanded ? "Show Less" : "Read more →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
