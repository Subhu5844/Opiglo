import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditRole = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate('/roles');
  }

  const [role, setRole] = useState(state?.role || {
    staffMember: '',
    role: '',
    permission: '',
    idNumber: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRole({ ...role, [name]: value });
  };

  const handleSave = () => {
    const storedRoles = JSON.parse(localStorage.getItem('roles')) || [];
    storedRoles[state.index] = role;
    localStorage.setItem('roles', JSON.stringify(storedRoles));
    navigate('/roles');
  };

  const handleRemove = () => {
    const storedRoles = JSON.parse(localStorage.getItem('roles')) || [];
    storedRoles.splice(state.index, 1);
    localStorage.setItem('roles', JSON.stringify(storedRoles));
    navigate('/roles');
  };

  return (
    <div className="p-6 bg-white-200">
      <h3 className="text-lg font-semibold mb-6 text-teal-500">Edit Roles</h3>
      <div className="flex">
        <div className="grid grid-cols-3 gap-5 p-4 rounded-md w-full">
          <div>
            <label htmlFor="staffMember" className="block text-sm font-medium text-black-700">
              Staff Member
            </label>
            <input
              type="text"
              id="staffMember"
              name="staffMember"
              value={role.staffMember}
              onChange={handleInputChange}
              placeholder="Enter Staff Member Name"
              className="border border-black rounded p-2 w-full bg-gray-300"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-black-700">
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
              <option value="General Manager" className="hover:bg-teal-200">General Manager</option>
              <option value="Finance Manager">Finance Manager</option>
              <option value="Fleet Manager">Fleet Manager</option>
              <option value="Driver">Driver</option>
            </select>
          </div>
          <div>
            <label htmlFor="permission" className="block text-sm font-medium text-black-700">
              Permission
            </label>
            <input
              type="text"
              id="permission"
              name="permission"
              value={role.permission}
              onChange={handleInputChange}
              placeholder="Enter Permissions"
              className="border border-black rounded p-2 w-full bg-gray-300"
            />
          </div>
          <div>
            <label htmlFor="idNumber" className="block text-sm font-medium text-black-700">
              ID Number
            </label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={role.idNumber}
              onChange={handleInputChange}
              placeholder="Enter ID Number"
              className="border border-black rounded p-2 w-full bg-gray-300"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-black-700">
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
        <div className="flex items-center ml-2 mb-16">
          <button
            onClick={handleRemove}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate('/roles')}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditRole;
