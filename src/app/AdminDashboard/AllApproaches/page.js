"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import dynamic from "next/dynamic";
import axios from "axios";
import { isAuthenticated } from "@/app/helper/verifytoken";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_OurApproaches } from "../components/ShowApidatas/apiUrls";
import { useRouter } from "next/navigation";

const AddNewApproachModal = dynamic(
  () => import("../components/AddNewApproachModal"),
  { ssr: false }
);
const UpdateApproachModal = dynamic(
  () => import("../components/Updates/UpdateModelForApproaches"),
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
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }
    fetchApproaches();
  }, [router]);

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

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const f = approaches.filter((item) =>
      item.heading.toLowerCase().includes(value)
    );

    setFiltered(f);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_OurApproaches}/${id}`);
      toast.success("Approches deleted successfully!");
      fetchApproaches();
    } catch (err) {
      console.error("Error deleting Approches:", err);
      toast.error("Failed to delete Approches.");
    }
  };

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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Our Approaches</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add New Approach
            </button>
          </div>

          <input
            type="text"
            placeholder="Search by Title"
            className="border border-gray-300 px-3 py-2 rounded-md mb-3"
            value={searchTerm}
            onChange={handleSearch}
          />

          <div className="">
            <table className="min-w-[900px] border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-8 py-2">S.no</th>
                  <th className="px-8 py-2">Image</th>
                  <th className="px-8 py-2">Title</th>
                  <th className="px-8 py-2">Description</th>
                  <th className="px-8 py-2">Edit</th>
                  <th className="px-8 py-2">Delete</th>
                </tr>
              </thead>

              <tbody>
                {(searchTerm ? filtered : approaches).map((approach) => (
                  <tr key={approach._id} className="border-b border-gray-400">
                    <td className="px-4 py-2">{approach.no}</td>

                    <td className="px-4 py-2">
                      <Image
                        src={approach.image}
                        alt={approach.heading}
                        width={64}
                        height={64}
                        className="h-16 w-16 object-cover"
                        unoptimized
                      />
                    </td>

                    <td className="px-4 py-2">{approach.heading}</td>

                    <td className="px-4 py-2">
                      <div>
                        {approach.description}
                      </div>
                    </td>

                    <td className="px-4 py-2 text-center">
                      <button
                        className="text-green-500 hover:underline"
                        onClick={() => handleEdit(approach.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        className="text-red-500 hover:underline ml-2"
                        onClick={() => handleDelete(approach.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showModal && (
            <AddNewApproachModal
              isclose={() => setShowModal(false)}
              getAll={fetchApproaches}
            />
          )}

          {showUpdateModal && (
            <UpdateApproachModal
              isclose={() => setShowUpdateModal(false)}
              editId={selectedId}
              getAll={fetchApproaches}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OurApproachesTable;
