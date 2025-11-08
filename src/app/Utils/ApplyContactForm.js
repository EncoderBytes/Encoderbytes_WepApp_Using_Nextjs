"use client";
// import React, { useState } from "react";
// import { API_URL_Request } from "../AdminDashboard/components/ShowApidatas/apiUrls";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const ApplyContactForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     experience: "",
//     expected_salary: "",
//     file_cv: null, // Store file object here
//   });
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] }); // Store the file object
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };
//   const [errors, setErrors] = useState({});
//   const validate = () => {
//     let tempErrors = {};
//     if (!formData.username) tempErrors.username = "Username is required";
//     if (!formData.email) tempErrors.email = "Email is required";
//     if (!formData.phone) tempErrors.phone = "Phone is required";
//     if (!formData.experience) tempErrors.experience = "experience is required";
//     if (!formData.expected_salary)
//       tempErrors.expected_salary = "expected_salary is required";
//     if (!formData.file_cv) tempErrors.file_cv = "Resume is required";
//     setErrors(tempErrors);
//     // toast.warning(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validate()) {
//       try {
//         const formDataToSend = new FormData();
//         formDataToSend.append("username", formData.username);
//         formDataToSend.append("email", formData.email);
//         formDataToSend.append("phone", formData.phone);
//         formDataToSend.append("experience", formData.experience);
//         formDataToSend.append("expected_salary", formData.expected_salary);
//         formDataToSend.append("file_cv", formData.file_cv);

//         await axios.post(API_URL_Request, formDataToSend);
//         toast.success("Application submitted successfully!");
//         setFormData({
//           username: "",
//           email: "",
//           phone: "",
//           experience: "",
//           expected_salary: "",
//           file_cv: null,
//         });
//       } catch (error) {
//         console.error("Error submitting application:", error);
//         toast.error("Error submitting application");
//       }
//     }
//   };
//   return (
//     <div
//       className="flex flex-col md:flex-row items-center justify-center"
//       id="Apply"
//     >
//       <div class="flex flex-col bg-black md:flex-row md:w-5/6 items-center justify-center mt-10 md:mt-20 rounded-md py-20 mb-28">
//         <div class="w-4/5 md:w-2/5">
//           <div class="flex flex-col justify-center items-start text-start m-6 md:m-16">
//             <span class="text-2xl md:text-3xl text-custom-blue  font-bold">
//               DO YOU WANT
//             </span>
//             <span class="text-2xl md:text-3xl text-white  md:mb-4 font-bold">
//               TO JOIN OUR TEAM?
//             </span>
//             <div class="text-sm md:text-md text-white w-full md:w-4/6">
//               Send us your CV to explore more professional opportunities and
//               build a strong career
//             </div>
//           </div>
//         </div>

//         <div class="w-4/5 md:w-3/5">
//           <div class="w-full py-6 px-4 md:px-10">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleInputChange}
//               class="w-full border-b mb-4 px-2 md:px-4 py-2 focus:outline-none bg-transparent text-white"
//             />
//             {errors.name && <p className="text-red-500">{errors.name}</p>}
//             <div class="flex items-center justify-center text-center mb-3 gap-3 py-7">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 class="w-full border-b px-2 md:px-4 py-2 focus:outline-none bg-transparent text-white"
//               />
//               {errors.email && <p className="text-red-500">{errors.email}</p>}

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 class="w-full border-b px-2 md:px-4 py-2 focus:outline-none bg-transparent text-white "
//               />
//               {errors.phone && <p className="text-red-500">{errors.phone}</p>}
//             </div>

//             <div class="flex items-center justify-center text-center mb-3 gap-3">
//               <input
//                 type="text"
//                 name="experience"
//                 placeholder="Experience"
//                 value={formData.experience}
//                 onChange={handleInputChange}
//                 class="w-full border-b px-2 md:px-4 focus:outline-none bg-transparent text-white"
//               />
//               {errors.experience && (
//                 <p className="text-red-500">{errors.experience}</p>
//               )}

//               <input
//                 type="text"
//                 name="expected_salary"
//                 value={formData.expected_salary}
//                 onChange={handleInputChange}
//                 placeholder="Expected Salary"
//                 class="w-full border-b px-2 md:px-4  focus:outline-none bg-transparent text-white"
//               />
//               {errors.expected_salary && (
//                 <p className="text-red-500">{errors.expected_salary}</p>
//               )}
//             </div>
//             <input
//               type="file"
//               name="file_cv"
//               accept=".pdf" // Specify accepted file types if necessary
//               onChange={handleInputChange}
//               className="w-full border-4 border-dotted rounded-md mb-4 px-2 md:px-4 py-6 focus:outline-none bg-transparent mt-10 text-white"
//             />
//             <button
//               type="submit"
//               class="w-f4/6 bg-custom-blue text-white font-bold py-2 px-4 rounded"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplyContactForm;

import React, { useState } from "react";
import { API_URL_Request } from "../AdminDashboard/components/ShowApidatas/apiUrls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ApplyContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    experience: "",
    expected_salary: "",
    file_cv: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      // Clear file error when new file is selected
      if (errors[name]) {
        setErrors({ ...errors, [name]: "" });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      
      // Real-time validation
      let newErrors = { ...errors };
      
      switch (name) {
        case 'username':
          if (value.trim() && !/^[a-zA-Z\s]+$/.test(value.trim())) {
            newErrors.username = "Please enter a valid name (letters and spaces only)";
          } else {
            newErrors.username = "";
          }
          break;
          
        case 'email':
          if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            newErrors.email = "Email format is incorrect";
          } else {
            newErrors.email = "";
          }
          break;
          
        case 'phone':
          if (value.trim() && !/^\d+$/.test(value.trim())) {
            newErrors.phone = "Only numbers are allowed in the phone field";
          } else if (value.trim() && (value.trim().length < 10 || value.trim().length > 15)) {
            newErrors.phone = "Phone number must be between 10-15 digits";
          } else {
            newErrors.phone = "";
          }
          break;
          
        case 'expected_salary':
          if (value.trim() && !/^\d+$/.test(value.trim())) {
            newErrors.expected_salary = "Expected salary must be a number";
          } else if (value.trim() && parseInt(value.trim()) <= 0) {
            newErrors.expected_salary = "Expected salary must be greater than 0";
          } else {
            newErrors.expected_salary = "";
          }
          break;
          
        default:
          if (newErrors[name]) {
            newErrors[name] = "";
          }
          break;
      }
      
      setErrors(newErrors);
    }
  };

  const validate = () => {
    let tempErrors = {};
    
    // Username validation
    if (!formData.username.trim()) {
      tempErrors.username = "Username is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.username.trim())) {
      tempErrors.username = "Please enter a valid name (letters and spaces only)";
    } else if (formData.username.trim().length < 2) {
      tempErrors.username = "Name must be at least 2 characters long";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Email format is incorrect";
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone is required";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      tempErrors.phone = "Only numbers are allowed in the phone field";
    } else if (formData.phone.trim().length < 10 || formData.phone.trim().length > 15) {
      tempErrors.phone = "Phone number must be between 10-15 digits";
    }
    
    // Experience validation
    if (!formData.experience.trim()) {
      tempErrors.experience = "Experience is required";
    } else if (formData.experience.trim().length < 2) {
      tempErrors.experience = "Please provide valid experience details";
    }
    
    // Expected salary validation
    if (!formData.expected_salary.trim()) {
      tempErrors.expected_salary = "Expected Salary is required";
    } else if (!/^\d+$/.test(formData.expected_salary.trim())) {
      tempErrors.expected_salary = "Expected salary must be a number";
    } else if (parseInt(formData.expected_salary.trim()) <= 0) {
      tempErrors.expected_salary = "Expected salary must be greater than 0";
    }
    
    // File validation
    if (!formData.file_cv) {
      tempErrors.file_cv = "Resume is required";
    } else if (!formData.file_cv.name.toLowerCase().endsWith('.pdf')) {
      tempErrors.file_cv = "Only PDF files are allowed";
    } else if (formData.file_cv.size > 5 * 1024 * 1024) { // 5MB limit
      tempErrors.file_cv = "File size must be less than 5MB";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("username", formData.username.trim());
        formDataToSend.append("email", formData.email.trim());
        formDataToSend.append("phone", formData.phone.trim());
        formDataToSend.append("experience", formData.experience.trim());
        formDataToSend.append("expected_salary", formData.expected_salary.trim());
        formDataToSend.append("file_cv", formData.file_cv);

        await axios.post(API_URL_Request, formDataToSend);
        toast.success("Application submitted successfully!");
        
        // Clear all form fields
        setFormData({
          username: "",
          email: "",
          phone: "",
          experience: "",
          expected_salary: "",
          file_cv: null,
        });
        
        // Clear any validation errors
        setErrors({});
        
        // Reset file input manually
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = "";
        }
        
      } catch (error) {
        console.error("Error submitting application:", error);
        toast.error("Error submitting application");
      }
    } else {
      // Show validation error toast
      const errorMessages = Object.values(errors).filter(error => error.trim() !== "");
      if (errorMessages.length > 0) {
        toast.error("Please fix the validation errors before submitting");
      }
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center md:px-12"
      id="Apply"
    >
      <div className="flex flex-col bg-black md:flex-row  md:w-6/6 items-center justify-center mt-10 md:mt-20 rounded-md py-16 mb-28">
        <div className="w-4/5 md:w-2/5">
          <div className="flex flex-col justify-center items-start text-start md:m-16">
            <span className="text-custom-blue text-5xl  font-bebas tracking-custom">
              DO YOU WANT
            </span>
            <span className=" text-white md:mb-4  text-5xl  font-bebas tracking-custom">
              TO JOIN OUR TEAM?
            </span>
            <div className="text-white w-full leading-tight">
              Send us your CV to explore more professional opportunities and
              build a strong career.
            </div>
          </div>
        </div>

        <div className="w-4/5 md:w-3/5">
          <form onSubmit={handleSubmit}>
            <div className="w-full py-6 md:px-10">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className={`w-full border-b mb-2 px-2 md:px-4 py-2 focus:outline-none bg-transparent text-white ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.username && (
                <p className="text-red-400 text-xs mb-2">{errors.username}</p>
              )}
              <div className="flex items-center justify-center text-center mb-3 gap-3 py-7">
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border-b px-2 md:px-4 py-2 mb-2 focus:outline-none bg-transparent text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-start text-xs mb-2">{errors.email}</p>}
                </div>

                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full border-b px-2 md:px-4 py-2 mb-2 focus:outline-none bg-transparent text-white ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-start text-xs mb-2">{errors.phone}</p>}
                </div>
              </div>

              <div className="flex items-center justify-center text-center mb-3 gap-3">
                <div className="w-full">
                  <input
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full border-b px-2 mb-2 md:px-4 focus:outline-none bg-transparent text-white ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.experience && (
                    <p className="text-red-400 text-start text-xs mb-2">{errors.experience}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="expected_salary"
                    placeholder="Expected Salary"
                    value={formData.expected_salary}
                    onChange={handleInputChange}
                    className={`w-full border-b mb-2 px-2 md:px-4 focus:outline-none bg-transparent text-white ${
                      errors.expected_salary ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.expected_salary && (
                    <p className="text-red-400 text-start text-xs mb-2">{errors.expected_salary}</p>
                  )}
                </div>
              </div>

              <input
                type="file"
                name="file_cv"
                accept=".pdf"
                onChange={handleInputChange}
                className={`w-full border-[2px] border-dashed rounded-md mb-2 px-2 md:px-4 py-10 focus:outline-none bg-transparent mt-10 text-white ${
                  errors.file_cv ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.file_cv && (
                <p className="text-red-400 text-start text-xs mb-2">{errors.file_cv}</p>
              )}

              <button
                type="submit"
                className="w-full bg-custom-blue text-white font-bold py-2 px-4 mt-10 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyContactForm;
