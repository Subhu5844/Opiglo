import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/userDasboard/UserNavbar"

const AddRoles = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const isEditing = state?.role !== undefined;
  const [role, setRole] = useState(
    isEditing
      ? { ...state.role }
      : {
          staffMember: "",
          role: "",
          permission: "",
          idNumber: "",
          date: "",
        }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRole({ ...role, [name]: value });
  };

  const handleSave = () => {
    const storedRoles = JSON.parse(localStorage.getItem("roles")) || [];

    if (isEditing) {
      storedRoles[state.index] = role;
    } else {
      storedRoles.push(role);
    }

    localStorage.setItem("roles", JSON.stringify(storedRoles));
    navigate("/Roles");
  };

  return (
   <>
   <UserNavbar></UserNavbar>
    <div  id="user-home" className="p-12">
    <div className="p-6 bg-white rounded-3xl"  >
      <h3 className="text-lg font-semibold mb-6 text-teal-500">
        {isEditing ? "Edit Role" : "Add Role"}
      </h3>

      <div className="grid grid-cols-3 gap-5  p-4 rounded-md">
        <div>
          <label
            htmlFor="staffMember"
            className="block text-sm font-medium text-black-700"
          >
            Staff Member
          </label>
          <input
            type="text"
            id="staffMember"
            name="staffMember"
            value={role.staffMember}
            onChange={handleInputChange}
            className="border border-black rounded p-2 w-full bg-gray-300"
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-black-700"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={role.role}
            onChange={handleInputChange}
            className="border border-black rounded p-2 w-full bg-gray-300"
          >
            <option value="">Select Role</option>
            <option value="General Manager">General Manager</option>
            <option value="Finance Manager">Finance Manager</option>
            <option value="Fleet Manager">Fleet Manager</option>
            <option value="Driver">Driver</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="permission"
            className="block text-sm font-medium text-black-700"
          >
            Permission
          </label>
          <input
            type="text"
            id="permission"
            name="permission"
            value={role.permission}
            onChange={handleInputChange}
            className="border border-black rounded p-2 w-full bg-gray-300"
          />
        </div>

        <div>
          <label
            htmlFor="idNumber"
            className="block text-sm font-medium text-black-700"
          >
            ID Number
          </label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={role.idNumber}
            onChange={handleInputChange}
            className="border border-black rounded p-2 w-full bg-gray-300"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-black-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={role.date}
            onChange={handleInputChange}
            className="border border-black rounded p-2 w-full bg-gray-300"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/Roles")}
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
    </div>
    </div>
    </>
  );
};

export default AddRoles;
