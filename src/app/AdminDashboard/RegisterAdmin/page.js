"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import Modal from "../components/Modal";
import UpdateAdminModal from "../components/Updates/UpdateModelForUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Image from "next/image";
import VarifyModal from "../components/Updates/Varifytoken";
import { FaCheck } from "react-icons/fa6";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { ShowAllAdmins } from "../components/ShowApidatas/ShowUserAPiDatas";
import { API_URL_USER } from "../components/ShowApidatas/apiUrls";

const AdminTable = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [showUpdateModel, setUpdateModel] = useState(false);
  const [adminVerifyModel, setVerifyModel] = useState(false);
  const [showAllAdmins, setShowAllAdmins] = useState([]);
  const [selectedAdminId, setSelectedAdminId] = useState("");
  const [selectedVerifyAdminId, setSelectedVerifyAdminId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeam, setFilteredTeam] = useState([]);
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }
    getAdmin();
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = showAllAdmins.filter((team) =>
      team.username.toLowerCase().includes(value)
    );
    setFilteredTeam(filtered);
  };
  const getAdmin = () => {
    ShowAllAdmins()
      .then(({ admins }) => {
        setShowAllAdmins(admins);
        console.log(admins);
      })
      .catch((error) => {
        console.error("Failed to fetch admins:", error);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_USER}/${id}`);
      toast.success("Admin deleted successfully");
      getAdmin();
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  // const handleVerify = (id) => {
  //   setSelectedVerifyAdminId(id);
  //   setVerifyModel(true);
  // };
  // const [isVerified, setIsVerified] = useState(false);
  const handleVerify = async (adminId, currentStatus) => {
    try {
      const newStatus = !currentStatus; // Toggle the current isVerified status
      console.log(newStatus);
      const response = await axios.put(`/api/Users/verify/${adminId}`, {
        isVerfied: newStatus, // Send the toggled status
      });

      if (response.status === 200) {
        console.log("Verification status updated successfully:", response.data);
        // setIsVerified(newStatus); // Update the local state to reflect the new status
      } else {
        console.error(
          "Failed to update verification status:",
          response.data.error
        );
      }
      getAdmin();
    } catch (error) {
      console.error("Error updating verification status:", error);
    }
  };

  const handleEdit = (id) => {
    setSelectedAdminId(id);
    setUpdateModel(true);
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Admin List</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add New Admin
            </button>
          </div>
          <div className="overflow-x-auto h-[500px]">
            <input
              type="text"
              placeholder="Search by username"
              className="border border-gray-300 px-3 py-2 rounded-md mr-2 mb-3"
              value={searchTerm}
              onChange={handleSearch}
            />
            <table className="table-auto w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">UserName</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Password</th>
                  {/* <th className="px-4 py-2">IsAdminVerified</th> */}
                  <th className="px-4 py-2">VerifyAdmin</th>
                  <th className="px-4 py-2">Edit</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {showAllAdmins.length > 0 ? (
                  /* showAllAdmins.map((admin, index) => ( */
                  (searchTerm !== "" ? filteredTeam : showAllAdmins).map(
                    (admin, index) => (
                      <tr
                        key={admin._id}
                        className="border-2 border-b-gray-500"
                      >
                        <td className="px-4 py-2 text-center">{index + 1}</td>
                        <td className="px-4 py-2">
                          <img
                            src={admin.Image}
                            alt={admin.username}
                            className="h-16 w-16 object-cover"
                          />
                        </td>
                        <td className="px-4 py-2">{admin.username}</td>
                        <td className="px-4 py-2">{admin.email}</td>
                        <td className="px-4 py-2">{admin.confirmpassword}</td>
                        {/* <td className="px-4 py-2">
                          {admin.isVerfied === true ? (
                            <FaCheck />
                          ) : (
                            <span>&#x2717;</span>
                          )}
                        </td> */}
                        <td className="px-4 py-2 text-center">
                          <button
                            className="text-yellow-500 px-2 py-1 rounded hover:underline"
                            onClick={() =>
                              handleVerify(admin._id, admin.isVerfied)
                            }
                          >
                            {/* Verify Admin */}
                            {admin.isVerfied ? (
                              <FaCheck />
                            ) : (
                              <span>&#x2717;</span>
                            )}{" "}
                          </button>
                        </td>

                        <td className="px-4 py-2 text-center">
                          <button
                            className="text-green-500 px-2 py-1 rounded hover:underline"
                            onClick={() => handleEdit(admin._id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <button
                            className="text-red-500 hover:underline"
                            onClick={() => handleDelete(admin._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      {showAllAdmins.length !== 0 ? (
                        <p>No users available.</p>
                      ) : (
                        <p>Please wait while loading...</p>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {showModal && (
            <Modal isclose={() => setShowModal(false)} getadmins={getAdmin} />
          )}
          {showUpdateModel && (
            <UpdateAdminModal
              isclose={() => setUpdateModel(false)}
              adminId={selectedAdminId}
              getadmins={getAdmin}
            />
          )}
          {adminVerifyModel && (
            <VarifyModal
              isclose={() => setVerifyModel(false)}
              adminverifyId={selectedVerifyAdminId}
              getadmins={getAdmin}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminTable;
