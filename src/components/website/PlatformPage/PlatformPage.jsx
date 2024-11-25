import React from 'react';
import PlatformMainImg from "../../../assets/Platform/Platformmain.png";
import Platform1Img from "../../../assets/Platform/Platform1.png";
import Platform2Img from "../../../assets/Platform/Platform2.png";
import backgroundImage from "../../../assets/Platform/bg1.png"; // Background image path

const PlatformPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="text-gray-900"
    >
      <div>
        <img
          src={PlatformMainImg}
          alt="Platform"
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
        />
      </div>
      <div className='bg-teal-700 w-full h-12'></div>

      <div className="px-4 py-10 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold pl-2">Platforms</h1>
          <div className="mt-8 border-t-2 border-gray-400 max-w-6xl mx-auto"></div>
        </div>

        {/* Content */}
        <div className="mt-8 bg-teal-50 bg-opacity-90 rounded-lg shadow-md p-2 md:p-4 lg:p-6 max-w-6xl mx-auto">
          {/* Content1 */}
          <p className="text-lg xl:text-md md:text-lg p-2">
            OPIGLO brings together the best-in-class solutions for both fleet owners and fuel stations,
            creating a seamless experience across South Africa's transportation and fuel sectors. Explore
            our specialized platforms designed to optimize your operations and drive success.
          </p>

          <div className="mt-4">
            <img
              src={Platform1Img}
              alt="Fleet Transportation"
              className="rounded-lg object-cover w-full h-48 sm:h-64 lg:h-72"
            />
          </div>

          {/* Content2 */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 italic">FleetMaster</h2>
            <p className="underline text-lg xl:text-md md:text-lg">
              Optimized Solutions for Fleet Owners
            </p>
            <p className="mt-2 text-lg xl:text-md md:text-lg">
              FleetMaster is OPIGLO’s all-in-one platform designed specifically for fleet owners.
              Manage your entire fleet fuel expenses with ease. With FleetMaster, you can ensure
              operational efficiency, reduce fuel theft, and keep costs in check. Join FleetMaster and take control of your fleet like never before.
            </p>
          </div>

          <div className="mt-4">
            <img
              src={Platform2Img}
              alt="Fleet Transportation"
              className="rounded-lg object-cover w-full h-48 sm:h-64 lg:h-72"
            />
          </div>

          {/* Content3 */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 italic">FuelSync</h2>
            <p className="underline text-lg xl:text-md md:text-lg">
              Seamless Management for Fuel Stations
            </p>
            <p className="mt-2 text-lg xl:text-md md:text-lg">
              FuelSync offers fuel station owners a powerful, intuitive platform for managing fuel sales to fleet owners and processing payments. By connecting directly with fleet owners, FuelSync streamlines fuel transactions, prevents fraud, and ensures smooth daily operations. FuelSync empowers you to boost profitability and enhance customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPage;
