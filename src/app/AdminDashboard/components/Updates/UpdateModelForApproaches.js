"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL_OurApproaches } from "../ShowApidatas/apiUrls";

const UpdateApproachModal = ({ isclose, getAll, editId }) => {
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
    if (!editId) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/OurApproaches/${editId}`);
        const data = res.data.Result;

        setFormData({
          no: data.no,
          heading: data.heading,
          description: data.description,
          file: null,
        });

        setImagePreview(data.image || "");

        // Word count
        const words =
          data.description.trim() === ""
            ? 0
            : data.description.trim().split(/\s+/).length;
        setWordCount(words);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load approach");
      }
    };

    fetchData();
  }, [editId]);

  // TEXT CHANGE
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "description") {
      const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
      setWordCount(words);
      setError(words < 10 ? "Minimum 10 words required" : "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // FILE UPLOAD
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // UPDATE API
  const updateApproach = async () => {
    const formDataToSend = new FormData();

    formDataToSend.append("no", formData.no);
    formDataToSend.append("heading", formData.heading);
    formDataToSend.append("description", formData.description);

    // If user selected a new image
    if (formData.image && typeof formData.image !== "string") {
      formDataToSend.append("image", formData.image);
    } else {
      // keep old cloudinary URL
      formDataToSend.append("oldImage", formData.image);
    }

    try {
      const res = await axios.put(
        `${API_URL_OurApproaches}/${editId}`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Approach updated successfully");
      getAll();
      isclose();
    } catch (error) {
      toast.error("Error updating Approach");
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
        <h2 className="text-xl font-semibold text-gray-900">Update Approach</h2>

        <section className="grid grid-cols-2 gap-4">
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

          <div className="col-span-2">
            <label className="text-black">Upload New Image :</label>
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
          onClick={updateApproach}
          className="bg-white text-black p-2 rounded-md border hover:shadow-md hover:shadow-blue-300"
        >
          Update Approach
        </button>
      </div>
    </div>
  );
};

export default UpdateApproachModal;
