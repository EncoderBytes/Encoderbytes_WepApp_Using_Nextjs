"use client";
import React, { useState } from "react";
import { API_URL_GetInTouch } from "../AdminDashboard/components/ShowApidatas/apiUrls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contactform = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.username) {
      tempErrors.username = "Name is required";
    } else if (formData.username.trim().length < 2) {
      tempErrors.username = "Name must be at least 2 characters long";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      tempErrors.phone = "Phone number must contain only digits";
    }

    if (!formData.message) {
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix all validation errors");
      return;
    }

    try {
      const response = await axios.post(API_URL_GetInTouch, formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ username: "", email: "", phone: "", message: "" });
        setErrors({});
      }
    } catch {
      toast.error("There was an error sending the message!");
    }
  };

  return (
    <section
      id="form"
      className="w-full px-4 md:px-12 py-10 md:py-12 lg:py-14"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row bg-custom-color rounded-lg overflow-hidden">
          
          {/* ================= FORM ================= */}
          <div className="w-full md:w-3/5 px-6 md:px-12 py-10 md:py-14 bg-paraClr">
            <form onSubmit={handleSubmit} className="text-white">
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
                className={`w-full border-b-2 mb-2 px-3 py-2 bg-transparent focus:outline-none ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mb-2 ml-3">
                  {errors.username}
                </p>
              )}

              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full md:w-1/2 border-b-2 px-3 py-2 bg-transparent focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full md:w-1/2 border-b-2 px-3 py-2 bg-transparent focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border mt-6 px-4 py-2 bg-transparent resize-none focus:outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>

              <button
                type="submit"
                className="mt-6 w-[140px] h-11 bg-custom-blue text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ================= INFO ================= */}
          <div
            className="w-full md:w-2/5 flex items-center justify-center px-6 py-10 md:py-14"
            style={{
              backgroundImage: "url('/backgrounds/Rectangle-17.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-white">
              <h3 className="text-[40px] font-bebas leading-none">
                HAVE A PROJECT?
                <br />
                GET IN TOUCH.
              </h3>

              <p className="mt-4 font-bold text-2xl text-paraClr">
                THINK WE DO NEXT.
              </p>

              <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                <li>Our team contacts you within one business day</li>
                <li>Initial discussion to understand requirements</li>
                <li>Scope assessment & proposal</li>
                <li>Protected via mutual NDA</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contactform;
