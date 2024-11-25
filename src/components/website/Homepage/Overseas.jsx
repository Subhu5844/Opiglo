// src/components/FleetPage.jsx
import React from 'react';
import Customer from "../../../assets/HomePage/Customer.png";
import Truck from "../../../assets/HomePage/Truck.png";
import Pricing from "../../../assets/HomePage/Pricing.png";
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FleetPage = () => {
  return (
    <div className="py-4 px-6">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-center mb-8 text-4xl md:text-5xl xl:text-4xl font-medium text-blue-950">
          Unlock Your Fleet's <span className="text-teal-600">Full Potential Today</span>
        </h1>
        <p className="font-semibold text-lg md:text-xl mt-4 max-w-6xl mx-auto">
          Experience competitive pricing that keeps your costs low while ensuring a reliable supply of diesel. Our commitment
          to excellent customer service means you're always supported, no matter the challenge.
        </p>
      </header>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img
            src={Pricing}
            className='mb-4'
          />
          <h2 className="text-2xl font-bold">Competitive Pricing That Saves You Money</h2>
          <p className="mt-2 text-lg font-semibold">
            Take advantage of our unbeatable rates that help you maximize your budget.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img
            src={Truck}
            className='mb-6'
          />
          <h2 className="text-2xl font-bold">Reliable Supply for Your Diesel Needs</h2>
          <p className="mt-2 text-lg font-semibold">
            Count on us for consistent and timely diesel deliveries.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img
            src={Customer}
            className='mb-4'
          />
          <h2 className="text-2xl font-bold">Exceptional Customer Service at Your Fingertips</h2>
          <p className="mt-2 text-lg font-semibold">
            Our dedicated support team is here to assist you 24/7.
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-10 flex justify-center gap-4">
        <button className="px-6 py-2 text-lg font-semibold border border-black rounded-xl hover:bg-teal-700 transition duration-300">
          Learn More
        </button>
        <Link to="/login">
          <button className="flex px-6 py-2 text-lg font-semibold bg-transparent">
            Sign Up
            <IoIosArrowForward size={30} color='black' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FleetPage;
