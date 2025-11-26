"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import dynamic from "next/dynamic";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_OurApproaches } from "../components/ShowApidatas/apiUrls";

const AddApproachModal = dynamic(
  () => import("../components/AddNewProjectModal"),
  { ssr: false }
);
const UpdateApproachModal = dynamic(
  () => import("../components/Updates/UpdateModelForProject"),
  { ssr: false }
);

const OurApproachesTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [approaches, setApproaches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Fetch Data
  useEffect(() => {
    fetchApproaches();
  }, []);

  const fetchApproaches = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL_OurApproaches);
      setApproaches(res.data.Result || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data.");
      setApproaches([]);
    } finally {
      setLoading(false);
    }
  };

  // Search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const f = approaches.filter((item) =>
      item.heading.toLowerCase().includes(value)
    );

    setFiltered(f);
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_OurApproaches}/${id}`);
      toast.success("Deleted successfully!");
      fetchApproaches();
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete.");
    }
  };

  // Edit
  const handleEdit = (id) => {
    setSelectedId(id);
    setShowUpdateModal(true);
  };

  return (
    <>
      <Header />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container overflow-x-auto w-full p-4 mt-10 md:mt-0">
          {/* TITLE + BUTTON */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Our Approaches</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add New Approach
            </button>
          </div>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search by Title"
            className="border border-gray-300 px-3 py-2 rounded-md mr-2 mb-3"
            value={searchTerm}
            onChange={handleSearch}
          />

          {/* TABLE */}
          <div className="overflow-x-auto h-[500px]">
            <table className="min-w-[900px] border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.no</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2 w-64">Description</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      Loading approaches...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      {error}
                    </td>
                  </tr>
                ) : (searchTerm ? filtered : approaches).length > 0 ? (
                  (searchTerm ? filtered : approaches).map((item, idx) => (
                    <tr key={item.id} className="border-b border-gray-400">
                      <td className="px-4 py-2">{item.no}</td>

                      <td className="px-4 py-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="h-16 w-16 object-cover"
                          unoptimized
                        />
                      </td>

                      <td className="px-4 py-2">{item.heading}</td>

                      <td className="px-4 py-2">
                        <div className="overflow-y-scroll max-h-[4rem]">
                          {item.description}
                        </div>
                      </td>

                      <td className="px-4 py-2 text-center">
                        <button
                          className="text-green-500 hover:underline"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 hover:underline ml-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* MODALS */}
          {showModal && (
            <AddApproachModal
              isclose={() => setShowModal(false)}
              refresh={fetchApproaches}
            />
          )}

          {showUpdateModal && (
            <UpdateApproachModal
              isclose={() => setShowUpdateModal(false)}
              approachId={selectedId}
              refresh={fetchApproaches}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OurApproachesTable;
