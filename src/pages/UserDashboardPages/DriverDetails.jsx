import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { BiExpandAlt } from "react-icons/bi";
import UserNavbar from "../../components/userDasboard/UserNavbar";

const DriverDetails = () => {
  const [drivers, setDrivers] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedDrivers = JSON.parse(localStorage.getItem("drivers")) || [];
    setDrivers(storedDrivers);
  }, []);

  const maxRecords = 10;

  const reservedDrivers = [
    ...drivers,
    ...Array(maxRecords - drivers.length).fill(null),
  ];

  const handleEdit = (index) => {
    navigate("/add-driver", { state: { driver: drivers[index], index } });
  };

  const filteredDrivers = reservedDrivers.filter((driver) => {
    const matchesStatus = statusFilter
      ? driver?.status?.toLowerCase() === statusFilter.toLowerCase()
      : true;

    const matchesSearch =
      searchQuery === "" ||
      driver?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver?.licenseNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver?.phone?.includes(searchQuery);

    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <UserNavbar />
      <div className="p-4" id="user-home">
        <div className="w-1/2 ml-auto flex justify-end space-x-4 p-4 rounded">
          <div className="relative">
            <select
              value={statusFilter}
              onChange={handleStatusChange}
              className="block w-full px-4 py-2 text-white bg-teal-500 border border-teal-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Status Dropdown"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="on-leave">On Leave</option>
            </select>
          </div>

          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
            />
          </div>
        </div>

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
  <thead>
    <tr className="bg-gray-200 text-gray-700">
      <th className="p-3 text-left">Driver name</th>
      <th className="p-3 text-left">Driver surname</th>
      <th className="p-3 text-left">Cellphone & Email</th>
      <th className="p-3 text-left">Id number</th>
      <th className="p-3 text-left">Vehicle Number</th>
      <th className="p-3 text-left">Actions</th>
    </tr>
  </thead>
  <tbody>
  {filteredDrivers.map((driver, index) => (
    <tr key={index} className="border-b bg-gray-100" style={{ height: "60px" }}>
      {driver ? (
        <>
          <td className="p-3">{driver.name}</td>
          <td className="p-3">{driver.lastname}</td> {/* Use lastname instead of surname */}
          <td className="p-3">
            {driver.mobileNo} <br /> {/* Use mobileNo instead of phone */}
            {driver.email}
          </td>
          <td className="p-3">{driver.idNumber}</td> {/* Use idNumber instead of Number */}
          <td className="p-3">{driver.vehicleNumber}</td> {/* Use vehicleNumber instead of activeCardNumbers */}
          <td className="p-3">
            <button onClick={() => handleEdit(index)} className="text-green-500" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
            onClick={() => navigate("/add-driver")}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Driver
          </button>
        </div>
      </div>
    </>
  );
};

export default DriverDetails;
