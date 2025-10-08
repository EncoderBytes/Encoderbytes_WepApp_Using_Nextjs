"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../ShowApidatas/apiUrls";

const UpdateVacancyModal = ({ isclose, vacId, getVacancies }) => {
  console.log(vacId);
  const [formData, setFormData] = useState({
    VacancyName: "",
    VacancyDiscription: "",
    Experience: "",
    totalVacancies: ""
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const API_URL = "/api/Vacancies";
  const showalladmins = useCallback(() => {
    axios
      .get(`${API_URL}/${vacId}`)
      .then((res) => {
        const vacData = res.data.Result;
        console.log(vacData);
        setFormData({
          VacancyName: vacData.VacancyTitle,
          VacancyDiscription: vacData.Requireds,
          Experience: vacData.Experience,
          totalVacancies: vacData.totalVacancies
        });
      })
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  }, [vacId]);
  
  useEffect(() => {
    showalladmins();
  }, [showalladmins]);

  const sendMessage = async () => {
    const _obj = {
      VacancyTitle: formData.VacancyName,
      Requireds: formData.VacancyDiscription,
      Experience: formData.Experience,
      totalVacancies: formData.totalVacancies
    };

    console.log(_obj);

    try {
      const response = await axios.put(`${API_URL}/${vacId}`, _obj);

      console.log(response.data);
      getVacancies();
      isclose(); // Close the popup window
      toast.success("Vacancy updated successfully!");
    } catch (error) {
      console.error("Error updating vacancy:", error);
      toast.error("Error updating vacancy");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4"
    >
      <div className="flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <button className="self-end" onClick={isclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-950">Update Vacancy</h2>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="VacancyName" className="text-gray-950">
              Vacancy Title :
            </label>
            <br />
            <input
              type="text"
              id="VacancyName"
              name="VacancyName"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.VacancyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Experience" className="text-gray-950">
              Experience :
            </label>
            <br />
            <input
              type="number"
              id="Experience"
              name="Experience"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Experience}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="totalVacancies" className="text-gray-950">
              Total Vacancies :
            </label>
            <br/>
            <input
              type="number"
              id="totalVacancies"
              name="totalVacancies"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.totalVacancies}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="VacancyDiscription" className="text-gray-950">
              Job Requirements (one per line):
            </label>
            <br />
            <textarea
              id="VacancyDiscription"
              name="VacancyDiscription"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.VacancyDiscription}
              onChange={handleInputChange}
              rows="6"
              placeholder="Enter each requirement on a new line:
2 Years of experience working on cutting edge web development technologies
Work with the latest technologies in JavaScript Stack
Expected to have full stack knowledge & experience
Should be strong with logic & algorithms"
            />
            <p className="text-sm text-gray-700 mt-1">
              Tip: Write each requirement on a separate line for better formatting
            </p>
            
            {/* Preview Section */}
            {formData.VacancyDiscription && (
              <div className="mt-4 p-3 bg-gray-100 rounded-md">
                <h4 className="text-gray-950 font-semibold mb-2">Preview:</h4>
                <div className="text-gray-800">
                  <strong className="text-blue-600">DESIRED SKILLS</strong>
                  <ul className="list-disc pl-5 mt-2">
                    {formData.VacancyDiscription.split('\n').filter(item => item.trim() !== '').map((requirement, index) => (
                      <li key={index} className="mb-1">{requirement.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Update Vacancy
        </button>
      </div>
    </div>
  );
};

export default UpdateVacancyModal;
