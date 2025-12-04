"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL_Stats } from "../ShowApidatas/apiUrls";

const UpdateStatsModal = ({ isclose, selectedId, refresh }) => {
  const modalRef = useRef();

  const [formData, setFormData] = useState({
    projectsDelivered: "",
    happyClients: "",
    globalOffice: "",
    yearsInBusiness: "",
    expertTeam: "",
  });

  // BACKDROP CLOSE
  const handleClose = (e) => {
    if (modalRef.current === e.target) isclose();
  };

  // ESC CLOSE
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") isclose();
    },
    [isclose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // FETCH OLD DATA
  useEffect(() => {
    if (!selectedId) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL_Stats}/${selectedId}`);
        const data = res.data.Result;

        setFormData({
          projectsDelivered: data.projectsDelivered,
          happyClients: data.happyClients,
          globalOffice: data.globalOffice,
          yearsInBusiness: data.yearsInBusiness,
          expertTeam: data.expertTeam,
        });
      } catch (err) {
        toast.error("Failed to load stats");
      }
    };

    fetchData();
  }, [selectedId]);

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // UPDATE FUNCTION
  const updateStats = async () => {
    try {
      const res = await axios.put(`${API_URL_Stats}/${selectedId}`, formData);

      if (res.data.success) {
        toast.success("Stats Updated Successfully");

        if (refresh) await refresh();
        isclose();
      } else {
        toast.error("Failed to update stats");
      }
    } catch (err) {
      toast.error("Error updating stats");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px]">
        <button className="self-end" onClick={isclose}>
          ❌
        </button>

        <h2 className="text-xl font-semibold text-gray-900">Update Stats</h2>

        {/* FORM */}
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-black">Projects Delivered</label>
            <input
              type="number"
              name="projectsDelivered"
              value={formData.projectsDelivered}
              onChange={handleChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border text-black"
            />
          </div>

          <div>
            <label className="text-black">Happy Clients</label>
            <input
              type="number"
              name="happyClients"
              value={formData.happyClients}
              onChange={handleChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border text-black"
            />
          </div>

          <div>
            <label className="text-black">Global Office</label>
            <input
              type="number"
              name="globalOffice"
              value={formData.globalOffice}
              onChange={handleChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border text-black"
            />
          </div>

          <div>
            <label className="text-black">Years in Business</label>
            <input
              type="number"
              name="yearsInBusiness"
              value={formData.yearsInBusiness}
              onChange={handleChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border text-black"
            />
          </div>

          <div>
            <label className="text-black">Expert Team</label>
            <input
              type="number"
              name="expertTeam"
              value={formData.expertTeam}
              onChange={handleChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border text-black"
            />
          </div>
        </section>

        <button
          onClick={updateStats}
          className="bg-white text-black p-2 rounded-md border hover:shadow-md hover:shadow-blue-300"
        >
          Update Stats
        </button>
      </div>
    </div>
  );
};

export default UpdateStatsModal;
