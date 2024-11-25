import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Social Media Icons
import vectorImage from '../../assets/img/vector.png';
import splinesImage from '../../assets/img/splines.png';
import rectangleImage from '../../assets/img/Rectangle 6.png';
import getInTouchImage from '../../assets/img/getintouch.png';

const Footer = () => {
  return (
    <footer className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[235px]">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-center bottom-0 bg-no-repeat bg-cover" // Changed to bg-cover for better fitting
        style={{
          backgroundImage: `url(${vectorImage})`,
        }}
      >

        {/* Right-Side Splines Image */}
        <img
          src={splinesImage}
          alt="Splines"
          className="absolute right-0 bottom-0 h-[300px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[275px] object-contain"
        /> 

        {/* Top-Left Rectangle Image with Get In Touch Overlay */}
        <div className="absolute top-12 left-5 md:left-5 sm:left-3 xl:left-10 flex flex-col items-start xl:top-0">
          <img src={rectangleImage} alt="Rectangle Background" className="h-[40px] w-auto" />
          <img
            src={getInTouchImage}
            alt="Get In Touch"
            className="absolute top-2 left-1 h-[30px] w-auto" // Keeping current position
          />
        </div>

        {/* Content Over the Background Image */}
        <div className="relative flex flex-col items-center justify-end h-full space-y-4 p-4 sm:pb-8 md:pb-12 lg:pb-16 xl:p-2"> {/* Added padding for inner spacing */}

          {/* Contact Us Button and Social Media Icons */}
          <div className="flex items-center justify-between w-4/5 md:w-3/4 lg:w-3/4 sm:w-full"> {/* Set width for responsiveness */}
            <a href='/contact'>
              <button className="bg-white text-black py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-100"> {/* Adjusted padding and text size */}
                Contact Us
              </button>
            </a>

            <div className="flex space-x-4 text-white text-xl ml-aut0"> {/* Adjusted icon size */}
              <a href='/facebook'> <FaFacebookF className="hover:text-orange-500 cursor-pointer" /></a>
              <a href='/x'> <FaTwitter className="hover:text-orange-500 cursor-pointer" /></a>
              <a href='/linkedin'> <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" /></a>
              <a href='/instagram'> <FaInstagram className="hover:text-orange-500 cursor-pointer" /></a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center space-x-6 text-white text-s sm:text-sm"> {/* Adjusted text size */}
            <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
            <a href="/termsofuse" className="hover:underline">Terms of Use</a>
            <a href="/" className="hover:underline">Sales and Refunds</a>
            <a href="/" className="hover:underline">Legal</a>
            <a href="/sitemap" className="hover:underline">Site Map</a>
          </div>

          {/* Copyright Note */}
          <div className="text-center text-white text-xs mt-2">
            © OPIGLO - 2024 All Rights Reserved!
          </div>

          <div className='text-white text-xs ml-auto mr-20 hidden md:block'>+1 800 854-36-80</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
