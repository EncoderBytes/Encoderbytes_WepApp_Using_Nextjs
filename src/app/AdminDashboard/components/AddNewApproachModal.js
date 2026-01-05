"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_OurApproaches } from "./ShowApidatas/apiUrls";

const AddApproachModal = ({ isclose, getAll }) => {
  const modalRef = useRef();

  const [formData, setFormData] = useState({
    no: "",
    heading: "",
    description: "",
    file: null,
  });

  const [imagePreview, setImagePreview] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState("");

  // Close modal on backdrop click
  const handleClose = (e) => {
    if (modalRef.current === e.target) isclose();
  };

  // Escape close
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

  // Handle input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "description") {
      const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
      setWordCount(words);
      setError(words < 10 ? "Minimum 10 words required" : "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file + preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  // Send to API
  const sendApproach = async () => {
    if (wordCount < 10) {
      setError("Minimum 10 words required.");
      return;
    }

    try {
      const sendData = new FormData();
      sendData.append("no", formData.no);
      sendData.append("heading", formData.heading);
      sendData.append("description", formData.description);
      if (formData.file) sendData.append("image", formData.file);

      const res = await axios.post("/api/OurApproaches", sendData);

      if (res.data.success) {
        toast.success("Approach added successfully!");
        if (getAll) await getAll();
        isclose();
      } else {
        toast.error(res.data.message || "Failed to add approach");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error adding approach");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <button className="self-end" onClick={isclose}>
          ❌
        </button>
        <h2 className="text-xl font-semibold text-gray-900">
          Add New Approach
        </h2>

        <section className="grid grid-cols-2 gap-4">
          {/* Order Number */}
          <div>
            <label className="text-black">Order Number :</label>
            <input
              type="number"
              name="no"
              value={formData.no}
              onChange={handleInputChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
            />
          </div>

          {/* Title */}
          <div>
            <label className="text-black">Title :</label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleInputChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
            />
          </div>

          {/* Image Upload */}
          <div className="col-span-2">
            <label className="text-black">Upload Image :</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full text-black"
            />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-24 h-24 object-cover rounded-md border"
              />
            )}
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="text-black">Description :</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
            />
            <p className="text-red-600 text-sm">{error}</p>
            <p className="text-gray-700 text-xs">Words: {wordCount}</p>
          </div>
        </section>

        <button
          onClick={sendApproach}
          className="bg-white text-black p-2 rounded-md border hover:shadow-md hover:shadow-blue-300"
        >
          Add Approach
        </button>
      </div>
    </div>
  );
};

export default AddApproachModal;
