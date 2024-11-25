import React from 'react';
import Slider from 'react-slick'; // Importing React Slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css";
import PricingHero from '../../../assets/FuelPage/fuelprice.png';
import Whitebg from '../../../assets/FuelPage/bg1.png';
import SecondaryImage from '../../../assets/FuelPage/outline.png'; // Import the secondary image

const fuelPrices = [
  { type: "Diesel 10ppm", price: "R1.1000/L" },
  { type: "Diesel 50ppm", price: "R1.1200/L" },
  { type: "Diesel 500ppm", price: "R1.1600/L" },
  { type: "Petrol 10ppm", price: "R1.1300/L" },
  { type: "Petrol 50ppm", price: "R1.1800/L" },
  { type: "Petrol 500ppm", price: "R1.2000/L" },
  // Add more fuel prices as needed
];

const FuelPrice = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Enable arrow buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full min-h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Whitebg})`,
      }}
    >
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
        style={{
          backgroundImage: `url(${PricingHero})`,
        }}
      >
        {/* Overlay Secondary Image */}
        <img
          src={SecondaryImage}
          alt="Secondary overlay"
          className="absolute top-0 right-0 w-[30%] h-auto opacity-100 object-contain mr-4 mt-4" // Adjust width, opacity, and alignment
        />
        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50 px-6 md:px-10">
          <p
            className="text-white text-3xl md:text-6xl font-bold self-start md:pl-12 font-serif shadow-lg"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
          >
            Stay Ahead With
          </p>
          <p
            className="text-teal-300 text-3xl md:text-6xl font-semibold mt-2 md:pr-10 text-right font-serif shadow-lg"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
          >
            Real-Time Fuel Prices
          </p>
        </div>
      </div>

      <div className='bg-teal-700 w-full h-12'></div>

      {/* Fuel Price Carousel */}
      <div className="w-full flex flex-col items-center bg-white/20 py-8 overflow-hidden mt-12 mb-12 ">
        <p className="text-center text-lg px-6 max-w-3xl">
          Get up-to-the-minute fuel price updates across our extensive network. With OPIGLO, you're always in control—track fuel costs at over 160 locations nationwide and plan your routes more efficiently. Whether you’re managing a fleet or refueling on the go, our easy-to-use fuel price tool helps you make smarter, cost-saving decisions every time.
        </p>
        
        {/* React Slick Slider */}
        <div className="relative w-full mt-6">
          <Slider {...settings}>
            {fuelPrices.map((fuel, index) => (
              <div key={index} className="px-4">
                <div className="flex-shrink-0 w-[300px] h-[200px] bg-teal-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border-2 border-transparent hover:border-purple-500 transition duration-300">
                  <p className="text-2xl font-semibold">{fuel.type}</p>
                  <p className="text-3xl font-bold">{fuel.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-full bg-transparent pb-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">
          Choose the Best Plan for Your Business
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-[280px] bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 border-t-4 border-teal-500 hover:border-teal-700">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">1 Month</h3>
            <p className="text-lg font-bold text-teal-700">R350.00</p>
            <p className="text-gray-600 mt-2">Perfect for short-term needs</p>
            <button className="mt-6 px-6 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition duration-300">
             Subscribe
            </button>
          </div>

          <div className="w-[280px] bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 border-t-4 border-teal-500 hover:border-teal-700">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">6 Months</h3>
            <p className="text-lg font-bold text-teal-700">R1800.00</p>
            <p className="text-gray-600 mt-2">Best value for ongoing usage</p>
            <button className="mt-6 px-6 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition duration-300">
              Subscribe
            </button>
          </div>

          <div className="w-[280px] bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 border-t-4 border-teal-500 hover:border-teal-700">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">12 Months</h3>
            <p className="text-lg font-bold text-teal-700">R3400.00</p>
            <p className="text-gray-600 mt-2">Ideal for long-term savings</p>
            <button className="mt-6 px-6 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition duration-300">
             Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelPrice;
