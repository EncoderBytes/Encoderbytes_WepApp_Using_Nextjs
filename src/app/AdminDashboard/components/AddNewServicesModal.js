"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddServiceModal = ({ isclose, getAllServices }) => {
  const modalRef = useRef();

  const [formData, setFormData] = useState({
    OrderNumber: "",
    title: "",
    subtitle: "",
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

  // Close modal on Escape key
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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "description") {
      const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
      setWordCount(words);
      setError(words < 10 ? "Minimum 10 words required" : "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload and preview
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

  // Send service to API
  const sendService = async () => {
    if (wordCount < 10) {
      setError("Minimum 10 words required.");
      return;
    }

    try {
      const sendData = new FormData();
      sendData.append("OrderNumber", formData.OrderNumber);
      sendData.append("title", formData.title);
      sendData.append("subtitle", formData.subtitle);
      sendData.append("description", formData.description);
      if (formData.file) sendData.append("image", formData.file);

      const res = await axios.post("/api/WeProvide", sendData);

      if (res.data.success) {
        toast.success("Service added successfully!");
        if (getAllServices) await getAllServices(); // call parent function to refresh list
        isclose(); // close modal
      } else {
        toast.error(res.data.message || "Service could not be added");
      }
    } catch (err) {
      console.error(err);
      toast.error("Service could not be added");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <button className="self-end" onClick={isclose}>❌</button>
        <h2 className="text-xl font-semibold text-gray-900">Add New Service</h2>

        <section className="grid grid-cols-2 gap-4">
          {/* OrderNumber */}
          <div>
            <label className="text-black">Order Number :</label>
            <input
              type="number"
              name="OrderNumber"
              value={formData.OrderNumber}
              onChange={handleInputChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
            />
          </div>

          {/* Title */}
          <div>
            <label className="text-black">Title :</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
            />
          </div>

          {/* Subtitle */}
          <div className="col-span-2">
            <label className="text-black">Subtitle :</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
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
          onClick={sendService}
          className="bg-white text-black p-2 rounded-md border hover:shadow-md hover:shadow-blue-300"
        >
          Add Service
        </button>
      </div>
    </div>
  );
};

export default AddServiceModal;
