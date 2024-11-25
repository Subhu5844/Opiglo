import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import video from "../../../assets/HomePage/Landing.mp4";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={video} // Path to your video file
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    Smart Fueling for <span className="text-teal-300">Smarter Fleets</span>
                </h1>
                <p className="mt-4 text-sm sm:text-md md:text-2xl lg:text-xl">
                    Take control of your fleet's fuel supply with a seamless digital dashboard, built for efficiency
                </p>
                <Link to="/register">
                    <button className="flex items-center mt-8 sm:mt-12 md:mt-16 text-sm sm:text-base md:text-lg bg-teal-500 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg hover:bg-teal-800">
                        <span>GET STARTED</span>
                        <IoIosArrowForward size={20} className="ml-2 sm:ml-3" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
