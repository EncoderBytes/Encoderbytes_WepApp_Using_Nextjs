"use client";
import axios from "axios";
import React, { useEffect, useRef, useState, useCallback } from "react";

const AddServiceModal = ({ isclose, getAllServices }) => {
  const modalRef = useRef();

  const handleClose = (e) => {
    if (modalRef.current === e.target) isclose();
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") isclose();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [imagePreview, setImagePreview] = useState("");

  const [formData, setFormData] = useState({
    serialNo: "",
    title: "",
    subtitle: "",
    description: "",
    file: null,
  });

  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "description") {
      const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
      setWordCount(words);
      setError(words < 50 ? "Minimum 50 words required" : "");
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const sendService = async () => {
    if (wordCount < 50) {
      setError("Minimum 50 words required.");
      return;
    }

    try {
      const sendData = new FormData();
      sendData.append("serialNo", formData.serialNo);
      sendData.append("title", formData.title);
      sendData.append("subtitle", formData.subtitle);
      sendData.append("description", formData.description);
      if (formData.file) sendData.append("image", formData.file);

      await axios.post(`/api/services`, sendData);

      getAllServices();
      isclose();
    } catch (err) {
      alert("Service could not be added");
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

        <h2 className="text-xl font-semibold text-gray-900">Add New Service</h2>

        <section className="grid grid-cols-2 gap-4">
          {/* S.NO */}
          <div>
            <label className="text-black">S.No :</label>
            <input
              type="number"
              name="serialNo"
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
              value={formData.serialNo}
              onChange={handleInputChange}
            />
          </div>

          {/* Title */}
          <div>
            <label className="text-black">Title :</label>
            <input
              type="text"
              name="title"
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          {/* Subtitle */}
          <div className="col-span-2">
            <label className="text-black">Subtitle :</label>
            <input
              type="text"
              name="subtitle"
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
              value={formData.subtitle}
              onChange={handleInputChange}
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
              className="mt-1 px-3 py-1.5 w-full rounded-md border border-gray-400 text-black"
              value={formData.description}
              onChange={handleInputChange}
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
