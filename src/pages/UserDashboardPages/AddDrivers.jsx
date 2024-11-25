import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/userDasboard/UserNavbar";

const AddDriver = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const isEditing = state?.driver !== undefined;
  const [driver, setDriver] = useState(
    isEditing
      ? { ...state.driver }
      : {
          name: "",
          lastname: "",
          email: "",
          mobileNo: "",
          whatsappNo: "",
          idNumber: "",
          staffNumber: "",
          passportNumber: "",
          licenseCode: "",
        }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  const handleSave = () => {
    const storedDrivers = JSON.parse(localStorage.getItem("drivers")) || [];

    if (isEditing) {
      storedDrivers[state.index] = driver;
    } else {
      storedDrivers.push(driver);
    }

    localStorage.setItem("drivers", JSON.stringify(storedDrivers));
    navigate("/driverdetails");
  };

  const handleRemove = () => {
    const storedDrivers = JSON.parse(localStorage.getItem("drivers")) || [];
    
    // Remove the driver from the stored list
    storedDrivers.splice(state.index, 1);
    localStorage.setItem("drivers", JSON.stringify(storedDrivers));
    
    // Navigate back to the driver details page
    navigate("/driverdetails");
  };

  return (
    <>
      <UserNavbar />
      <div className="p-6 bg-white-200" id="user-home">
        <h3 className="text-lg font-semibold mb-6 text-teal-500">
          {isEditing ? "Edit Driver" : "Add Driver"}
        </h3>
        <div className="grid grid-cols-4 gap-5 bg-gray-300 p-4 rounded-md">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Firstname
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={driver.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={driver.lastname}
              onChange={handleInputChange}
              placeholder="Lastname"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={driver.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={driver.mobileNumber}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="whatsappNo"
              className="block text-sm font-medium text-gray-700"
            >
              WhatsApp No
            </label>
            <input
              type="text"
              id="whatsappNo"
              name="whatsappNo"
              value={driver.whatsappNo}
              onChange={handleInputChange}
              placeholder="WhatsApp No"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="idNumber"
              className="block text-sm font-medium text-gray-700"
            >
              ID Number
            </label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={driver.idNumber}
              onChange={handleInputChange}
              placeholder="ID Number"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="vehicleNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Number
            </label>
            <input
              type="text"
              id="vehicleNumber"
              name="vehicleNumber"
              value={driver.vehicleNumber}
              onChange={handleInputChange}
              placeholder="Vehicle Number"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="licenseNumber"
              className="block text-sm font-medium text-gray-700"
            >
              License Number
            </label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              value={driver.licenseNumber}
              onChange={handleInputChange}
              placeholder="License Number"
              className="border border-black rounded p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="licenseCode"
              className="block text-sm font-medium text-gray-700"
            >
              License Code
            </label>
            <select
              id="licenseCode"
              name="licenseCode"
              value={driver.licenseCode}
              onChange={handleInputChange}
              className="border border-black rounded p-2 w-full"
            >
              <option value="">Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="C1">C1</option>
              <option value="EB">EB</option>
              <option value="EC">EC</option>
              <option value="EC1">EC1</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/driverdetails")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          {isEditing && (
            <button
              onClick={handleRemove}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          )}
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {isEditing ? "Save Changes" : "Save"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDriver;
