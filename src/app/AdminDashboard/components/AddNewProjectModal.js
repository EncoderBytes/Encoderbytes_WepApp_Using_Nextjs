"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "./ShowApidatas/apiUrls";

const AddNewProModal = ({ isclose, getallprojects }) => {
  const modalRef = useRef();

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
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState({
    ProName: "",
    ProCategory: "",
    ProDiscription: "",
    file: null,
    ProProblem: "",
    ProSolution: "",
    ProImpact: "",
    ProTeam: "",
    ProTechnology: "",
    ProTimeline: "",
    ProProccess: "",
    latestProject: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file || null,
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const [timeline, setTimeline] = useState({
    start: "",
    end: "",
    inProgress: false,
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleTimelineChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "inProgress") {
      setTimeline((prev) => ({
        ...prev,
        inProgress: checked,
        end: checked ? "In Progress" : "",
      }));
      setFormData((prev) => ({
        ...prev,
        ProTimeline: checked
          ? `${formatDate(timeline.start)} - In Progress`
          : `${formatDate(timeline.start)} - ${formatDate(timeline.end)}`,
      }));
    } else {
      setTimeline((prev) => ({ ...prev, [name]: value }));
      setFormData((prev) => ({
        ...prev,
        ProTimeline:
          name === "start"
            ? `${formatDate(value)} - ${timeline.inProgress ? "In Progress" : formatDate(timeline.end)}`
            : `${formatDate(timeline.start)} - ${name === "end" ? formatDate(value) : formatDate(timeline.end)}`,
      }));
    }
  };

  const sendMessage = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("ProjectName", formData.ProName);
      formDataToSend.append("ProjectCategory", formData.ProCategory);
      formDataToSend.append("ProjectDescription", formData.ProDiscription);
      if (formData.file) formDataToSend.append("Image", formData.file);
      formDataToSend.append("ProjectProblem", formData.ProProblem);
      formDataToSend.append("ProjectSolution", formData.ProSolution);
      formDataToSend.append("ProjectImpact", formData.ProImpact);
      formDataToSend.append("ProjectTeam", formData.ProTeam);
      formDataToSend.append("ProjectTechnology", formData.ProTechnology);
      formDataToSend.append("ProjectTimeline", formData.ProTimeline);
      formDataToSend.append("ProjectProccess", formData.ProProccess);
      formDataToSend.append("LatestProject", formData.latestProject);

      await axios.post(`${url}/api/Project`, formDataToSend);

      getallprojects();
      isclose();
      toast.success("Project created successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to create project");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <button className="self-end" onClick={isclose}>✖️</button>
        <h2 className="text-xl font-semibold text-gray-950">Add New Project</h2>

        <section className="grid grid-cols-2 gap-4">
          {[
            { label: "Project Name", name: "ProName" },
            { label: "Category", name: "ProCategory" },
            { label: "Project Team", name: "ProTeam", placeholder: "Names separated by ," },
            { label: "Project Technologies", name: "ProTechnology", placeholder: "React, Firebase" },
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label htmlFor={name} className="text-gray-950">{label}:</label>
              <input
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
                value={formData[name]}
                onChange={handleInputChange}
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-950">Upload file</label>
            <input
              onChange={handleFileChange}
              name="file"
              type="file"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded-md border" />
            )}
          </div>

          {["ProDiscription", "ProProblem", "ProSolution", "ProProccess", "ProImpact"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="text-gray-950">{field.replace("Pro", "Project ")}:</label>
              <textarea
                id={field}
                name={field}
                className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
                value={formData[field]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </section>

        <div>
          <label className="text-gray-950">Project Timeline :</label>
          <div className="flex items-center gap-2 mt-1">
            <input type="date" name="start" value={timeline.start} onChange={handleTimelineChange} className="px-2 py-1 rounded border border-gray-400 text-black" />
            <span>to</span>
            <input type="date" name="end" value={timeline.inProgress ? "" : timeline.end} onChange={handleTimelineChange} disabled={timeline.inProgress} className="px-2 py-1 rounded border border-gray-400 text-black" />
            <label className="flex items-center ml-2 text-sm text-gray-800">
              <input type="checkbox" name="inProgress" checked={timeline.inProgress} onChange={handleTimelineChange} className="mr-1" />
              In Progress
            </label>
          </div>
        </div>

        <label className="flex items-center ml-2 text-md text-black">
          Is this a Latest Project ?
          <input type="checkbox" name="latestProject" className="ml-2 w-6" checked={formData.latestProject} onChange={handleInputChange} />
        </label>

        <button className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400" onClick={sendMessage}>
          Add New Project
        </button>
      </div>
    </div>
  );
};

export default AddNewProModal;
