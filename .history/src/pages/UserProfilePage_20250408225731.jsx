import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEdit, FaPhone, FaFileAlt } from "react-icons/fa";

const user = {
  avatar: "https://i.pravatar.cc/100",
  fullName: "Duyet Le Minh",
  dob: "2002-11-30",
  level: "N5",
  country: "Vietnam",
  email: "duyet@example.com",
};

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("introduction");
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-6 gap-6">
      {/* Sidebar */}
      <div className="bg-white rounded-xl shadow-md p-4 w-64 flex flex-col items-center gap-2">
        <div className="relative">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <FaLock className="absolute bottom-0 right-0 text-white bg-blue-500 rounded-full p-1 text-xl" />
        </div>
        <h2 className="text-lg font-semibold">{user.fullName}</h2>
        <button className="text-blue-500 hover:underline flex items-center gap-1">
          <FaEdit /> Edit
        </button>

        <hr className="w-full my-2" />
        <button
          onClick={() => setActiveTab("introduction")}
          className={`w-full p-2 rounded-lg ${
            activeTab === "introduction" ? "bg-blue-600 text-white" : ""
          }`}
        >
          Introduction
        </button>
        <button
          onClick={() => setActiveTab("activities")}
          className="w-full p-2 rounded-lg hover:bg-gray-200"
        >
          Activities on Mazii
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`w-full p-2 rounded-lg ${
            activeTab === "security" ? "bg-blue-600 text-white" : ""
          }`}
        >
          Security
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">
        {activeTab === "introduction" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Personal information</h3>
              <button onClick={() => setEditing(!editing)}>
                <FaEdit className="text-blue-600 text-xl" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-700">
                <FaUser />
                <p>
                  <strong>Full name:</strong>{" "}
                  {editing ? (
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="border p-1 rounded"
                    />
                  ) : (
                    formData.fullName
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaFileAlt />
                <p>
                  <strong>Date of birth:</strong>{" "}
                  {editing ? (
                    <input
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="border p-1 rounded"
                    />
                  ) : (
                    formData.dob
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaUser />
                <p>
                  <strong>Level:</strong>{" "}
                  {editing ? (
                    <input
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="border p-1 rounded"
                    />
                  ) : (
                    formData.level
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaPhone />
                <p>
                  <strong>Country:</strong>{" "}
                  {editing ? (
                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="border p-1 rounded"
                    />
                  ) : (
                    formData.country
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm">Current password</label>
                <input
                  type="password"
                  name="current"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">New password</label>
                <input
                  type="password"
                  name="new"
                  value={passwords.new}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">
                  Confirm new password
                </label>
                <input
                  type="password"
                  name="confirm"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div className="text-right">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bạn có thể thêm phần Activities nếu cần */}
      </div>
    </div>
  );
};

export default UserProfilePage;
