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
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let tempErrors = {};
    
    // Username/Name validation
    if (!formData.username) {
      tempErrors.username = "Name is required";
    } else if (formData.username.trim().length < 2) {
      tempErrors.username = "Name must be at least 2 characters long";
    } else if (formData.username.trim().length > 50) {
      tempErrors.username = "Name must be less than 50 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.username.trim())) {
      tempErrors.username = "Enter a valid name (only letters and spaces allowed)";
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Invalid email format";
    }

    // Phone validation
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      tempErrors.phone = "Phone number must contain only digits";
    } else if (formData.phone.trim().length < 10 || formData.phone.trim().length > 15) {
      tempErrors.phone = "Phone number must be between 10-15 digits";
    }

    // Message validation
    if (!formData.message) {
      tempErrors.message = "Message is required";
    } else {
      const wordCount = formData.message.trim().split(/\s+/).length;
      if (wordCount < 5 || wordCount > 100) {
        tempErrors.message = "Message must be between 5 and 100 words";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Always run validation before submitting
    const isValid = validate();
    
    if (!isValid) {
      toast.error("Please fix all validation errors before submitting");
      return; // Prevent submission
    }

    try {
      const response = await axios.post(API_URL_GetInTouch, formData);
      
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        
        // Clear form and errors on successful submission
        setFormData({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.error("There was an error sending the message!", error);
      
      // Handle server-side validation errors
      if (error.response && error.response.status === 400 && error.response.data.errors) {
        setErrors(error.response.data.errors);
        toast.error("Please fix the validation errors");
      } else {
        toast.error("There was an error sending the message!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center m-auto px-4 md:px-12" id="form">
      <div className="flex justify-center flex-col lg:flex-row md:flex-row sm:flex-col m-auto  my-20 bg-custom-color w-full rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-center bg-paraClr rounded-lg">
          <div className="w-full md:w-3/5 px-12 text-white my-10">
            <form onSubmit={handleSubmit} className="overflow-hidden">
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
                className={`w-full border-b-2 mb-2 px-3 py-2 focus:outline-none bg-transparent ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mb-2 ml-3">{errors.username}</p>
              )}

              <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col mt-6 pb-3 gap-4">
                <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-b-2 px-3 py-2 focus:outline-none bg-transparent mb-4 md:mb-0 sm:mb-2 md:mr-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm ml-3">{errors.email}</p>}
                </div>

                <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full">
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border-b-2 px-3 py-2 focus:outline-none bg-transparent sm:ml-0 md:ml-2 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm ml-3">{errors.phone}</p>}
                </div>
              </div>

              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border-[1px] px-4 py-2 mt-5 focus:outline-none bg-transparent resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm ml-3">{errors.message}</p>
              )}

              <button
                type="submit"
                disabled={Object.keys(errors).length > 0}
                className={`w-[134px] h-11 font-semibold rounded mt-6 transition-colors ${
                  Object.keys(errors).length > 0 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-custom-blue text-white hover:bg-blue-700'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className="mt-5 md:mt-0 w-full md:w-2/5 h-full rounded-r-lg flex items-center justify-center"
            style={{
              backgroundImage: "url('/backgrounds/Rectangle-17.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col gap-3 p-5">
              <div className="text-white text-[40px] font-bebas tracking-custom leading-none -mb-2">
                <p className="mb-0">HAVE A PROJECT?</p>
                <p>GET IN TOUCH.</p>
              </div>
              <div className="font-bold text-2xl text-paraClr">
                THINK WE DO NEXT.
              </div>
              <div className="text-md text-white pl-4">
                <ul className="list-disc tracking-custom" id="list">
                  <li>Our team contacts you within one business day</li>
                  <li className="py-2">We engage in an initial discussion to understand your requirements</li>
                  <li>Our team of analysts and developers assess the scope and propose a way forward with mutual consultation</li>
                  <li className="py-2">All information exchange is protected via a mutual NDA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
