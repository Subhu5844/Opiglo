import React from 'react';
import Footer from '../Footer';
import Cover from "../../../assets/Network/Cover.png";
import background1 from "../../../assets/Network/bg1.png";
import background2 from "../../../assets/Network/bg2.png";

const NetworkPage = () => {
  return (
    <div
      className="w-full min-h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <div
        className="relative bg-cover bg-center w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
        style={{
          backgroundImage: `url(${Cover})`
        }}
      >
        <img
          src={background2}
          alt="Secondary overlay"
          className="absolute w-full h-full opacity-50 object-cover" // Adjust width, opacity, and alignment
        />
        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50 px-6 md:px-10">
          <p className="text-white text-3xl md:text-6xl font-bold self-start md:pl-12 font-serif shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
            Discover the Power of
          </p>
          <p className="text-teal-300 text-3xl md:text-6xl font-semibold mt-2 md:pr-10 text-right font-serif shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
            Our All Inclusive Network
          </p>
        </div>
      </div>

      <div className="bg-[#008080] w-full h-[5vh] md:h-[9vh]"></div>

      <div className="bg-white/10 w-full p-6 md:p-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 font-sans">Network</h2>
        <div className="mt-8 border-t-2 border-gray-400 max-w-7xl mx-auto"></div>
        <p className="text-base md:text-lg leading-relaxed font-sans mt-6 md:mt-12">
          OPIGLO is your trusted partner on the road, providing a vast network of independent and franchised diesel depots at over 160 prime locations across South Africa. We also extend our reach with cross-border suppliers in Mozambique, Zimbabwe, Namibia, Zambia, and Botswana.
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed font-sans">
          Wherever your vehicles travel, OPIGLO ensures seamless refueling with top-quality fuel and essential services like overnight accommodations, oils, canteens, showers, and more to keep your fleet running smoothly.
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed font-sans">
          With our cutting-edge route planner and real-time fuel management system, OPIGLO gives you complete control over refueling and driver expenses, making your journey more efficient and cost-effective.
        </p>
      </div>

      <div className="flex flex-col md:flex-row bg-white/10 w-full px-6 md:px-20 py-6 md:py-10 space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/5 flex flex-col justify-center">
          <p className="text-base md:text-lg leading-relaxed font-sans mt-4">Depot Names or locations</p>
          {/* <p className="text-base md:text-lg leading-relaxed font-sans mt-4">Lorem ipsum dolor sit amet</p>
          <p className="text-base md:text-lg leading-relaxed font-sans mt-4">Lorem ipsum dolor sit amet</p>
          <p className="text-base md:text-lg leading-relaxed font-sans mt-4">Lorem ipsum dolor sit amet</p> */}
        </div>

        <div className="w-full md:w-4/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30245598.45103725!2d16.299439142503774!3d-22.17434626954753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1b98b62f95c39865%3A0x9cf44ef0c84b589d!2sSouthern%20Africa!5e0!3m2!1sen!2sin!4v1638372160545!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: '2px solid teal', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;
