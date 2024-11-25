import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import excellenceImg from "../../../assets/HomePage/countdown/calendar1.png";
import ClientImg from "../../../assets/HomePage/countdown/delivery1.png";
import fuelImg from "../../../assets/HomePage/countdown/delivery2.png";
import kiloImg from "../../../assets/HomePage/countdown/distance1.png";
import photo from "../../../assets/HomePage/welcom.png";

const Welcome = () => {
  const [startCount, setStartCount] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          setIsVisible(true);
        } else {
          // setIsVisible(false); 
          setStartCount(false); // Reset count state to trigger animation each time it enters
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="p-4 pt-0 sm:p-6 md:p-8 xl:pt-0">
      <header className="text-center mb-12 xl:mb-12 sm:mb-8 md:mb-16">
        <h1 className="text-3xl sm:text-3xl md:text-5xl xl:text-4xl font-medium text-blue-950">
          Welcome to <span className="text-teal-600">OPIGLO (Pty) LTD</span>
        </h1>
      </header>

      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8"
      >
        {/* Left Image with Slide-in Animation */}
        <div
          className={`w-full md:w-1/2 xl:w-1/3 transform transition-all duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
          >
          <img
            src={photo}
            alt="Fuel Station"
            className="rounded-xl h-72 sm:h-80 md:h-96 w-full"
          />
        </div>

        {/* Right Info Section with Slide-in Animation */}
        <div
          className={
            "w-full md:w-1/2 xl:w-2/3 bg-teal-100 p-4 sm:p-6 md:p-8 rounded-xl shadow-md transform transition-all duration-1000 translate-x-0 opacity-100"
          }
        >
          <p className="text-base sm:text-lg lg:text-xl xl:text-lg leading-relaxed">
            Welcome to Opiglo (Pty) Ltd, your trusted partner in fuel supply
            solutions across South Africa. For over two decades, we've been
            committed to delivering top-quality Diesel and Petrol at competitive
            prices, ensuring that our customers always receive the best value.
            Whether you manage a fleet or operate a fuel station, Opiglo is here
            to provide reliable, efficient, and seamless fuel services that meet
            your business needs. As a leader in the fuel wholesale market, we
            focus on innovation, customer satisfaction, and operational
            excellence. Our strong network and industry expertise allow us to
            cater to the unique demands of businesses nationwide, ensuring
            smooth operations with every transaction. Experience the Opiglo
            difference today - where fueling your success is our priority.
          </p>
          <div className="flex justify-center md:justify-end">
            <a href="/about">
              <button className="bg-teal-600 text-white text-lg sm:text-xl py-2 px-4 mt-4 rounded-lg hover:bg-teal-900">
                About us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Statistics with Counting Animation */}
      <div
        className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16"
        ref={statsRef}
      >
        <div className="p-4 border-4 border-teal-600 rounded-lg relative flex flex-col">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {startCount ? <CountUp start={0} end={11} duration={2.5} /> : 0}
          </h3>
          <img src={excellenceImg} className="absolute right-4 top-4 w-10 h-10 md:w-14 md:h-14" />
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">Years of Excellence</p>
        </div>

        <div className="p-4 border-4 border-teal-600 rounded-lg relative flex flex-col">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {startCount ? <CountUp start={0} end={280} duration={2.5} /> : 0}
          </h3>
          <img src={ClientImg} className="absolute right-4 top-4 w-10 h-10 md:w-14 md:h-14" />
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">Total Clients Served</p>
        </div>

        <div className="p-4 border-4 border-teal-600 rounded-lg relative flex flex-col">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {startCount ? <CountUp start={0} end={19} duration={2.5} suffix="M" /> : 0}
          </h3>
          <img src={fuelImg} className="absolute right-4 top-4 w-10 h-10 md:w-14 md:h-14" />
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">Total Liters Delivered</p>
        </div>

        <div className="p-4 border-4 border-teal-600 rounded-lg relative flex flex-col">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {startCount ? <CountUp start={0} end={11} duration={2.5} suffix="M" /> : 0}
          </h3>
          <img src={kiloImg} className="absolute right-4 top-4 w-10 h-10 md:w-14 md:h-14" />
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">Total Kilometers Covered</p>
        </div>
      </div>

    </div>
  );
};

export default Welcome;
