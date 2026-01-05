"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_WeProvide } from "../ShowApidatas/apiUrls";

const UpdateServiceModal = ({ isclose, serviceId, fetchServices }) => {
  const modalRef = useRef();

  const [imagePreview, setImagePreview] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      isclose();
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        isclose();
      }
    },
    [isclose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Input Change
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Fetch Service Data
  const fetchServiceData = () => {
    axios
      .get(`${API_URL_WeProvide}/${serviceId}`)
      .then((res) => {
        const data = res.data.Result;

        setFormData({
          title: data.title,
          subtitle: data.subtitle,
          description: data.description,
          image: data.image,
        });
        
        if (data.image) {
          setImagePreview(data.image);
        }
      })
      .catch(() => toast.error("Failed to fetch service data"));
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  // Update Service
  const UpdateService = async () => {
    const formDataToSend = new FormData();

    formDataToSend.append("title", formData.title);
    formDataToSend.append("subtitle", formData.subtitle);
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
        `${API_URL_WeProvide}/${serviceId}`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Service updated successfully");
      fetchServices();
      isclose();
    } catch (error) {
      toast.error("Error updating service");
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

        <h2 className="text-xl font-semibold text-gray-950">Update Service</h2>

        <section className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-950">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 px-3 py-1.5 w-full border rounded text-black"
            />
          </div>

          <div>
            <label className="text-gray-950">Sub Title:</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              className="mt-1 px-3 py-1.5 w-full border rounded text-black"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-gray-950">Upload Image</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="mt-1 block w-full text-sm text-gray-500 
                file:mr-4 file:py-2 file:px-4 file:rounded-full 
                file:border-0 file:text-sm file:font-semibold 
                file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="w-[120px] h-[120px]">
            {imagePreview ? (
              <img
                src={imagePreview}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded"></div>
            )}
          </div>
        </section>

        {/* Description */}
        <div>
          <label className="text-gray-950">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 px-3 py-1.5 w-full border rounded text-black"
          />
        </div>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-blue-400"
          onClick={UpdateService}
        >
          Update Service
        </button>
      </div>
    </div>
  );
};

export default UpdateServiceModal;
