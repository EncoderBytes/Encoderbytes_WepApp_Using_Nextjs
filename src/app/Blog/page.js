"use client";
import React, { useEffect, useState, useCallback } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { BlogsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; 

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [loading, setLoading] = useState(true);

  // Toggle expanded state for a blog
  const toggleBlogExpand = useCallback((idx) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  }, []);

  // Fetch blogs from API
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
    <div className="bg-white pb-20">
      <Top />
      {/* <div
        className="max-w-full h-auto flex justify-center items-center mt-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner-Facebook-Cover-copy.png')",
          backgroundSize: "100% 100vh", // Set background size to full width and full height of the viewport
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-36">
          <div className="text-custom-blue text-2xl md:text-6xl font-bold flex justify-center items-center">
            BLOGS
          </div>
          <div className="flex m-auto py-6">
            <p className="flex w-5/6 md:w-3/6 m-auto justify-center items-center text-center text-md font-medium">
              We are providing best jobs opportunities for people who want to
              grow their skills and career in different fields of the IT
              industry. Also we provide internship for fresh graduates.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold mt-14 text-center md:text-left text-md"
          >
            Home - <span className="text-custom-blue">Blogs</span>
          </a>
        </div>
      </div> */}

      <div
        className="max-w-full h-[400px] flex justify-center items-center mt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24">
          <div className="text-custom-blue text-4xl md:text-6xl flex justify-center items-center font-bebas tracking-custom">
            BLOGS
          </div>
          <div className="flex m-auto py-6">
            <p className="flex m-auto justify-center items-center text-center text-gray-700 w-3/4 md:w-2/3 text-sm md:text-base leading-relaxed">
              Discover valuable insights, industry updates, and expert knowledge through our blogs. We share 
              perspectives on technology, design, and development to keep you informed and inspired.
            </p>
          </div>
          <div className="text-gray-700 font-medium text-center md:text-left mt-8 text-sm">
            <a href="/" className="hover:text-custom-blue transition-colors">Home</a>
            <span className="mx-2">→</span>
            <span className="text-custom-blue">Blogs</span>
          </div>
        </div>
      </div>

          {/* <Link href={`/Blog/${blogData.slug}`} key={blogData.id}> under 2nd div */}


      {/* section 2 */}
      {/* <div className="w-12/12 m-auto">
        <div className="flex justify-center items-center flex-wrap gap-7">
          {blogs.map((blogData) => (
            <div
              className="relative my-5"
              style={{ width: "350px" }}
              key={blogData._id}
            >
              <img
                src={blogData.image} // Adjust the MIME type if needed
                alt={blogData.blogtitle}
                className="h-60"
              />

              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-3">
                  {blogData.blogtitle}
                </h2>

                <div className="w-11/12">
                  <div className="flex items-center justify-between">
                    <Image
                      src={`/uploads/${blogData.image}`}
                      alt="author Img"
                      width={31}
                      height={31}
                    />
                    <p className="text-base font-bold">{blogData.author}</p>
                    <div className=" w-6 border-1 border-gray-300"></div>
                    <p className="text-sm text-pClr">
                      {blogData.datetime
                        ? // Assuming blog.datetime is a string like "2024-06-28T00:00:00.000+00:00"
                        (() => {
                          let dt = new Date(blogData.datetime); // Convert to Date object

                          // Check if dt is a valid Date object before accessing its methods
                          return dt instanceof Date
                            ? `${dt.getDate()} ${dt.toLocaleString("en-US", {
                              month: "long",
                            })} ${dt.getFullYear()}`
                            : "Invalid Date";
                        })()
                        : "No Date Available"}
                    </p>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  </div>

                  <p className="my-5 text-pClr leading-6">
                    {expandedBlogs[blogData._id] ? (
                      blogData.description
                    ) : (
                      <>{blogData.description.substring(0, 70)}...</>
                    )}
                  </p>
                  <button
                    className="button-filled"
                    onClick={() => toggleContent(blogData._id)}
                  >
                    {expandedBlogs[blogData._id] ? "Show Less" : "Load More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      
      {/* Blogs Section */}
      <div className="container mx-auto px-6 lg:px-16 py-16">
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
              <div
                key={blog._id || idx}
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
                    <div className="  ">
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
                    {expandedBlogs[idx]
                      ? blog.description
                      : `${blog.description?.substring(0, 120)}...`}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center justify-between">
                    {blog.description && blog.description.length > 120 && (
                      <button
                        className="text-custom-blue hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                        onClick={() => toggleBlogExpand(idx)}
                      >
                        {expandedBlogs[idx] ? "Show Less" : "Read more →"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
