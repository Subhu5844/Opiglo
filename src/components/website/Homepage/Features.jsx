import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import bg1 from '../../../assets/HomePage/id.jpg';

const Features = () => {
  return (
    <div className="p-4 sm:p-8 pt-8 sm:pt-12">
      <header className="text-center mb-6 sm:mb-8 pb-4 pt-8">
        <h1 className="text-center mb-4 text-4xl md:text-5xl xl:text-4xl font-medium text-blue-950">
          Interactive<span className="text-teal-600">Features</span>
        </h1>
      </header>

      <div className="flex flex-col md:flex-row p-4 xl:p-2 items-center justify-between rounded-lg bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 space-y-6 md:space-y-0">
        {/* Left Section (Sign up card) */}
        <div
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 md:w-1/2 p-6 md:p-8 ml-0 md:ml-6 bg-teal-600 rounded-lg shadow-lg relative flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          {/* Sign up text */}
          {/* <p className=" font-bold text-lg sm:text-2xl">
            Sign up and start your Journey
          </p> */}
          {/* Button positioned at the bottom */}

        </div>

        {/* Right Section (Features List) */}
        <div className="w-full md:w-1/2 p-4 sm:p-6">
          <p className="text-gray-900 font-medium mb-2 sm:mb-4 text-md sm:text-lg md:text-xl">
            At OPIGLO, we’ve made it simple and efficient for you to register,
            order fuel, and manage your fleet operations. Follow the steps below
            to get started and ensure a seamless fueling experience.
          </p>
          <ul className="ml-4 text-gray-900 text-sm sm:text-md md:text-lg space-y-2">
            <li className="flex items-start">
              <BsCheck2Circle size={24} className="text-green-600 mr-2 mt-1" />
              Register easily with your name, email, and company details
            </li>
            <li className="flex items-start">
              <BsCheck2Circle size={24} className="text-green-600 mr-2 mt-1" />
              Choose prepaid EFT for secure payments
            </li>
            <li className="flex items-start">
              <BsCheck2Circle size={24} className="text-green-600 mr-2 mt-1" />
              Log in, select fuel quantity, and pick your fleet in seconds
            </li>
            <li className="flex items-start">
              <BsCheck2Circle size={24} className="text-green-600 mr-2 mt-1" />
              Confirm orders with OTPs for enhanced security
            </li>
            <li className="flex items-start">
              <BsCheck2Circle size={28} className="text-green-600 mr-2 mt-1" />
              Select location, and ensure smooth fueling operations with final
              OTP verification
            </li>
          </ul>
          <a href="/register">
            <button className="bg-yellow-400 text-lg text-gray-900 py-2 px-6 rounded-lg hover:bg-yellow-500 w-full sm:w-auto self-start mt-4 sm:mt-10">
              Let's Start
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;