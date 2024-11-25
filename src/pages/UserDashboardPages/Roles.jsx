import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import UserNavbar from "../../components/userDasboard/UserNavbar"

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setRoles(storedRoles);
  }, []);

  const maxRecords = 10;

  const reservedRoles = [
    ...roles,
    ...Array(maxRecords - roles.length).fill(null),
  ];

  const handleEdit = (index) => {
    navigate("/EditRole", { state: { role: roles[index], index } });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleFilter = () => {
    setIsFilterActive(!isFilterActive);
  };

  const filteredRoles = reservedRoles.filter((role) => {
    const matchesSearch =
      searchQuery === "" ||
      (role &&
        (role.staffMember?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          role.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          role.idNumber?.toString().includes(searchQuery)));

    const matchesFilter =
      !isFilterActive || (role && role.role?.toLowerCase() === "admin");

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <UserNavbar></UserNavbar>
    <div className="p-10"id="user-home">
      <div className="flex justify-end  items-center space-x-4 mb-6">
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
          Filter
        </button>

        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
        />
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-6 ">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left">Staff Member</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Permission</th>
            <th className="p-3 text-left">ID Number</th>
            <th className="p-3 text-left">Date Assigned</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoles.map((role, index) => (
            <tr
              key={index}
              className="border-b bg-gray-100"
              style={{ height: "60px" }}
            >
              {role ? (
                <>
                  <td className="p-3">{role.staffMember}</td>
                  <td className="p-3">{role.role}</td>
                  <td className="p-3">{role.permission}</td>
                  <td className="p-3">{role.idNumber}</td>
                  <td className="p-3">{role.date}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-green-500"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <FaEdit style={{ color: "gray", fontSize: "20px" }} />
                    </button>
                  </td>
                </>
              ) : (
                <td className="p-3" colSpan="6"></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => navigate("/AddRoles")}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Role
        </button>
      </div>
    </div></>
  );
};

export default Roles;
