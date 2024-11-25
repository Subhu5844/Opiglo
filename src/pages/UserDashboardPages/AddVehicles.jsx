import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/userDasboard/UserNavbar";

const AddVehicle = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const isEditing = state?.vehicle !== undefined;
  const [vehicle, setVehicle] = useState(
    isEditing
      ? { ...state.vehicle }
      : {
          registration: "",
          fuelTankSize: "",
          virtualCards: "",
          driverName: "",
          driverMobile: "",
          fleetNumber: "",
          status: "",
          cost: "",
        }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSave = () => {
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    if (isEditing) {
      storedVehicles[state.index] = vehicle; // Update the vehicle at the selected index
    } else {
      storedVehicles.push(vehicle); // Add a new vehicle to the list
    }

    localStorage.setItem("vehicles", JSON.stringify(storedVehicles));
    navigate("/vehicledetails");
  };

  const handleRemove = () => {
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    storedVehicles.splice(state.index, 1); // Remove the vehicle at the selected index
    localStorage.setItem("vehicles", JSON.stringify(storedVehicles));
    navigate("/vehicledetails"); // Redirect back to the vehicle details page
  };

  return (
    <>
      <UserNavbar />
      <div className="p-6 bg-white-200" id="user-home">
        <h3 className="text-lg font-semibold mb-6 text-teal-500">
          {isEditing ? "Edit Vehicle" : "Add Vehicle"}
        </h3>
        <div className="grid grid-cols-4 gap-5 bg-gray-300 p-4 rounded-md">
          <div>
            <label
              htmlFor="registration"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Registration Number
            </label>
            <input
              type="text"
              id="registration"
              name="registration"
              value={vehicle.registration}
              onChange={handleInputChange}
              placeholder="Registration"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="fuelTankSize"
              className="block text-sm font-medium text-gray-700"
            >
              Fuel Tank Size
            </label>
            <input
              type="number"
              id="fuelTankSize"
              name="fuelTankSize"
              value={vehicle.fuelTankSize}
              onChange={handleInputChange}
              placeholder="Fuel Tank Size"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="driverName"
              className="block text-sm font-medium text-gray-700"
            >
              Driver Name
            </label>
            <input
              type="text"
              id="driverName"
              name="driverName"
              value={vehicle.driverName}
              onChange={handleInputChange}
              placeholder="Driver Name"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Driver Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="driverMobile" // Change the name to 'driverMobile' to match state property
              value={vehicle.driverMobile} // Use vehicle.driverMobile for consistency
              onChange={handleInputChange}
              placeholder="Driver Mobile Number"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="fleetNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Fleet Number
            </label>
            <input
              type="text"
              id="fleetNumber"
              name="fleetNumber"
              value={vehicle.fleetNumber}
              onChange={handleInputChange}
              placeholder="Fleet Number"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={vehicle.status}
              onChange={handleInputChange}
              className="border border-black rounded p-2 w-full"
            >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/vehicledetails")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {isEditing ? "Save Changes" : "Save"}
          </button>
        </div>

        {isEditing && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleRemove}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove Vehicle
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddVehicle;
