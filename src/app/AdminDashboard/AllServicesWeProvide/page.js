"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import dynamic from "next/dynamic";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { API_URL_WeProvide } from "../components/ShowApidatas/apiUrls";



const AddNewServiceModal = dynamic(
  () => import("../components/AddNewServicesModal"),
  { ssr: false }
);

const UpdateServiceModal = dynamic(
  () => import("../components/Updates/UpdateModelForServices"),
  { ssr: false }
);

const WeProvideTable = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL_WeProvide);
      setServices(res.data.Result || []);
    } catch (err) {
      console.error("Error fetching services:", err);
      setError("Failed to fetch services.");
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = services.filter((service) =>
      service.title.toLowerCase().includes(value)
    );
    setFilteredServices(filtered);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_WeProvide}/${id}`);
      toast.success("Service deleted successfully!");
      fetchServices();
    } catch (err) {
      console.error("Error deleting service:", err);
      toast.error("Failed to delete service.");
    }
  };

  const handleEdit = (id) => {
    setSelectedServiceId(id);
    setShowUpdateModal(true);
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container overflow-x-auto w-full p-4 mt-10 md:mt-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Services We Provide</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add New Service
            </button>
          </div>

          <input
            type="text"
            placeholder="Search by Title"
            className="border border-gray-300 px-3 py-2 rounded-md mr-2 mb-3"
            value={searchTerm}
            onChange={handleSearch}
          />

          <div className="overflow-x-auto h-[500px]">
            <table className="min-w-[800px] border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.no</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Subtitle</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      Loading services...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      {error}
                    </td>
                  </tr>
                ) : (searchTerm ? filteredServices : services).length > 0 ? (
                  (searchTerm ? filteredServices : services).map((service, idx) => (
                    <tr key={service.id} className="border-b border-gray-400">
                      <td className="px-4 py-2">{idx + 1}</td>
                      <td className="px-4 py-2">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={64}
                          height={64}
                          className="h-16 w-16 object-cover"
                          loading="lazy"
                          unoptimized
                        />
                      </td>
                      <td className="px-4 py-2">{service.title}</td>
                      <td className="px-4 py-2">{service.subtitle}</td>
                      <td className="px-4 py-2">{service.description}</td>
                      <td className="px-4 py-2 text-center">
                        <button
                          className="text-green-500 px-2 py-1 rounded hover:underline"
                          onClick={() => handleEdit(service.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 px-2 py-1 rounded hover:underline ml-2"
                          onClick={() => handleDelete(service.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      No services available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

           {showModal && (
            <AddNewServiceModal
              isclose={() => setShowModal(false)}
              fetchServices={fetchServices}
            />
          )}
          {showUpdateModal && (
            <UpdateServiceModal
              isclose={() => setShowUpdateModal(false)}
              serviceId={selectedServiceId}
              fetchServices={fetchServices}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default WeProvideTable;
