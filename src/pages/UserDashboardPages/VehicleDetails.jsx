import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { BiExpandAlt } from "react-icons/bi";
import UserNavbar from "../../components/userDasboard/UserNavbar"

const VehicleDetails = () => {
  const [vehicles, setVehicles] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);
  }, []);

  const maxRecords = 10;

  const reservedVehicles = [
    ...vehicles,
    ...Array(maxRecords - vehicles.length).fill(null),
  ];

  const handleEdit = (index) => {
    navigate("/add-vehicle", { state: { vehicle: vehicles[index], index } });
  };

  const filteredVehicles = reservedVehicles.filter((vehicle) => {
    const matchesStatus = statusFilter
      ? vehicle?.status?.toLowerCase() === statusFilter.toLowerCase()
      : true;

    const matchesSearch =
      searchQuery === "" ||
      vehicle?.registration
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      vehicle?.driverName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle?.fuelTankSize?.toString().includes(searchQuery) ||
      vehicle?.virtualCards?.toString().includes(searchQuery);

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
     <UserNavbar></UserNavbar>
      <div className="p-4" id="user-home">
        <div className="w-1/2 ml-auto flex justify-end space-x-4 p-4 rounded ">
          {/* <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Filter
          </button> */}

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
              <option value="pending">Pending</option>
            </select>
          </div>

          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
            />
          </div>
        </div>

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left"></th>
              <th className="p-3 text-left">Registration</th>
              <th className="p-3 text-left">Fuel Tank Size</th>
              {/* <th className="p-3 text-left">Associated Virtual Cards</th> */}
              <th className="p-3 text-left">Driver Name</th>
              <th className="p-3 text-left">Driver Mobile Number</th>
              <th className="p-3 text-left">Fleet Number</th>
              <th className="p-3 text-left">Status</th>
              {/* <th className="p-3 text-left">Cost</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map((vehicle, index) => (
              <tr
                key={index}
                className="border-b bg-gray-100"
                style={{ height: "60px" }}
              >
                {vehicle ? (
                  <>
                    <td className="p-3">
                      <button>
                        <BiExpandAlt />
                      </button>
                    </td>
                    <td className="p-3">{vehicle.registration}</td>
                    <td className="p-3">{vehicle.fuelTankSize}</td>
                    <td className="p-3">{vehicle.driverName}</td>
                    <td className="p-3">{vehicle.driverMobile}</td>
                    <td className="p-3">{vehicle.fleetNumber}</td>
                    <td className="p-3">{vehicle.status}</td>
                    {/* <td className="p-3">{vehicle.cost}</td> */}
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
                  <td className="p-3" colSpan="8"></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => navigate("/add-vehicle")}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Vehicle
          </button>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
