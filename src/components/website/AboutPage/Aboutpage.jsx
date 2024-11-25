import React, { useRef, useState } from 'react';
// import { FaPlay, FaPause } from 'react-icons/fa'; // Import play and pause icons from react-icons
import about from "../../../assets/AboutPage/about.png";
import image from "../../../assets/AboutPage/IMAGE.png";
import bgLeft from "../../../assets/AboutPage/bg1.png"; // Left background image
import bgRight from "../../../assets/AboutPage/bg2.png"; // Right background image

const Aboutpage = () => {
    // UseRef to access the video DOM element
    const videoRef = useRef(null);

    // State to track the video play/pause status
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to handle video play/pause on click
    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true); // Set state to playing
        } else {
            video.pause();
            setIsPlaying(false); // Set state to paused
        }
    };

    return (
        <section className="relative overflow-hidden">
            <div className="relative">
                <img
                    src={image}
                    alt="Platform"
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                />


            </div>

            <div className='bg-teal-700 w-full h-12'></div>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                {/* Left and Right Background Images */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-0 left-0 w-[40%] h-full bg-cover bg-no-repeat opacity-80"
                        style={{ backgroundImage: `url(${bgLeft})` }}
                    ></div>
                    <div
                        className="absolute top-0 right-0 w-[40%] h-full bg-cover bg-no-repeat opacity-80"
                        style={{ backgroundImage: `url(${bgRight})` }}
                    ></div>
                </div>
                {/* Title */}
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 pl-2">About Us</h1>
                    <div className="mt-8 border-t-2 border-gray-400 max-w-6xl mx-auto"></div>
                </div>

                {/* Content */}
                <div className="mt-8 bg-teal-50 shadow-md p-2 md:p-4 lg:p-6 max-w-6xl mx-auto relative z-10">
                    {/* Content1 */}
                    <p className="text-lg xl:text-md md:text-2xl pb-4">
                        Choose Opiglo, where customer satisfaction fuels our success.
                    </p>

                    <div className=" relative">
                        <img
                            src={about} // Replace with your preferred image URL
                            alt="Placeholder for video"
                            className="rounded-lg w-full h-48 sm:h-64 lg:h-72 cursor-pointer"
                        />
                        {/* Video Section */}
                        {/* <video
                            ref={videoRef} // Reference to the video element
                            className="rounded-lg object-cover w-full h-48 sm:h-64 lg:h-72 cursor-pointer" // Add cursor pointer
                            onClick={handleVideoClick} // Toggle play/pause on click
                            controls={false} // Hide default video controls
                        >
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}

                        {/* Play/Pause Overlay Icon */}
                        {/* <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                                isPlaying ? 'opacity-0' : 'opacity-100'
                            }`}
                            onClick={handleVideoClick} // Toggle play/pause on click
                        >
                            {isPlaying ? (
                                <FaPause className="text-white text-5xl" />
                            ) : (
                                <FaPlay className="text-white text-5xl" />
                            )}
                        </div> */}
                    </div>

                    <p className="text-lg xl:text-md md:text-lg pt-8">
                        At Opiglo (Pty) Ltd, we pride ourselves on being one of South Africa's most trusted fuel wholesalers, specializing in Diesel and Petrol supply. With over 11 years of experience in the fuel industry, we are committed to offering competitive pricing and unparalleled customer service to businesses and fleet operators across the country.
                    </p>
                    <p className="text-lg xl:text-md md:text-lg pt-8">
                        Our deep understanding of the South African market allows us to cater to diverse needs, ensuring reliable, safe, and seamless fuel supply. From large fleet operators to fuel stations, we focus on enhancing efficiency and delivering an exceptional customer experience, helping businesses thrive with hassle-free fuel solutions.
                    </p>
                    <p className="text-lg xl:text-md md:text-lg pt-8 pb-8">
                        Our dedication to innovation, coupled with a robust distribution network, means that we are always ahead in meeting the demands of our customers, ensuring consistent quality and timely delivery.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Aboutpage;
