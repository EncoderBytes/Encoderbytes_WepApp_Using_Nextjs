import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_Services } from "../ShowApidatas/apiUrls";

const UpdateServiceModal = ({ isclose, serviceId, getAllServices }) => {
  const modalRef = useRef();

  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState({
    ServiceTitle: "",
    ServiceCategory: "",
    ShortDescription: "",
    LongDescription: "",
    ServicePoints: "",
    Image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, Image: file }));

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClose = (e) => {
    if (modalRef.current === e.target) isclose();
  };

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

  // Fetch service data
  const fetchServiceData = async () => {
    try {
      const res = await axios.get(`${API_URL_Services}/${serviceId}`);
      const data = res.data.Result;

      setFormData({
        ServiceTitle: data.ServiceTitle || "",
        ServiceCategory: data.ServiceCategory || "",
        ShortDescription: data.ShortDescription || "",
        LongDescription: data.LongDescription || "",
        ServicePoints: JSON.parse(data.ServicePoints)?.join(", ") || "",
        Image: data.Image || "",
      });

      // preview
      const imgUrl = data.Image?.startsWith("http")
        ? data.Image
        : `/uploads/${data.Image}`;

      setImagePreview(imgUrl);
    } catch (err) {
      toast.error("Failed to fetch service data");
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  // Send update
  const sendMessage = async () => {
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("ServiceTitle", formData.ServiceTitle);
      formDataToSend.append("ServiceCategory", formData.ServiceCategory);
      formDataToSend.append("ShortDescription", formData.ShortDescription);
      formDataToSend.append("LongDescription", formData.LongDescription);
      formDataToSend.append(
        "ServicePoints",
        JSON.stringify(
          formData.ServicePoints.split(",").map((item) => item.trim())
        )
      );

      if (formData.Image && typeof formData.Image !== "string") {
        formDataToSend.append("Image", formData.Image);
      } else {
        formDataToSend.append("OldImage", formData.Image);
      }

      await axios.put(`${API_URL_Services}/${serviceId}`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Service updated successfully");
      getAllServices();
      isclose();
    } catch (err) {
      toast.error("Failed to update service");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 bg-white rounded-md p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <button className="self-end" onClick={isclose}>
          ✖️
        </button>

        <h2 className="text-xl font-semibold text-gray-800">
          Update Service
        </h2>

        <section className="grid grid-cols-2 gap-4">
          <div>
            <label>Service Title:</label>
            <input
              type="text"
              name="ServiceTitle"
              className="mt-1 px-3 py-1.5 w-full border rounded"
              value={formData.ServiceTitle}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Service Category:</label>
            <input
              type="text"
              name="ServiceCategory"
              className="mt-1 px-3 py-1.5 w-full border rounded"
              value={formData.ServiceCategory}
              onChange={handleInputChange}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label>Upload Image</label>
            <input type="file" onChange={handleFileChange} className="mt-1" />
            {imagePreview && (
              <img
                src={imagePreview}
                className="mt-2 w-24 h-24 object-cover rounded"
              />
            )}
          </div>

          {/* Points */}
          <div className="col-span-2">
            <label>Service Points (comma separated):</label>
            <textarea
              name="ServicePoints"
              className="mt-1 px-3 py-1.5 w-full border rounded"
              value={formData.ServicePoints}
              onChange={handleInputChange}
            />
          </div>

          {/* Short Description */}
          <div className="col-span-2">
            <label>Short Description:</label>
            <textarea
              name="ShortDescription"
              className="mt-1 px-3 py-1.5 w-full border rounded"
              value={formData.ShortDescription}
              onChange={handleInputChange}
            />
          </div>

          {/* Long Description */}
          <div className="col-span-2">
            <label>Long Description:</label>
            <textarea
              name="LongDescription"
              className="mt-1 px-3 py-1.5 w-full border rounded"
              value={formData.LongDescription}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={sendMessage}
        >
          Update Service
        </button>
      </div>
    </div>
  );
};

export default UpdateServiceModal;
