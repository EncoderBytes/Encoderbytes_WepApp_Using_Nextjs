"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import axios from "axios";
import dynamic from "next/dynamic";
import { API_URL_Stats } from "../components/ShowApidatas/apiUrls";

const UpdateStatsModal = dynamic(
  () => import("../components/Updates/UpdateModelForStats"),
  { ssr: false }
);

const StatsTable = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      const res = await axios.get(API_URL_Stats);
      const data = res.data.Result;

      if (data && data.length > 0) {
        setStats(data[0]); // single row
      } else {
        setStats(null);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data.");
      setStats(null);
    } finally {
      setLoading(false);
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
            <h2 className="text-xl font-semibold">Stats Overview</h2>
            {/* <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add New Stats
            </button> */}
          </div>

          <div className="overflow-x-auto h-[500px]">
            <table className="min-w-[700px] border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-8 py-2">Projects Delivered</th>
                  <th className="px-8 py-2">Happy Clients</th>
                  <th className="px-8 py-2">Global Office</th>
                  <th className="px-8 py-2">Years In Business</th>
                  <th className="px-8 py-2">Expert Team</th>
                  <th className="px-8 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      Loading stats...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      {error}
                    </td>
                  </tr>
                ) : stats ? (
                  <tr className="border-b border-gray-400 text-center">
                    <td className="px-4 py-2">
                      {stats.projectsDelivered + "+"}
                    </td>
                    <td className="px-4 py-2">{stats.happyClients}</td>
                    <td className="px-4 py-2">{0 + stats.globalOffice}</td>
                    <td className="px-4 py-2">{0 + stats.yearsInBusiness}</td>
                    <td className="px-4 py-2">{stats.expertTeam}</td>
                    <td className="px-4 py-2 cursor-pointer">
                      <button
                        className="text-green-500 hover:underline"
                        onClick={() => handleEdit(stats.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showUpdateModal && (
        <UpdateStatsModal
          isclose={() => setShowUpdateModal(false)}
          selectedId={selectedId}
          refresh={fetchStats}
        />
      )}
    </>
  );
};

export default StatsTable;
