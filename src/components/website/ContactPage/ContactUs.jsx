import React, { useState, useEffect } from 'react';
import background from "../../../assets/Contact/bg1.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import pht from "../../../assets/Contact/IMAGE.png";
import phtSmall from "../../../assets/Contact/IMAGE2.png";
import loc from "../../../assets/Contact/location 1.png";

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [comments, setComments] = useState('');

  const [bgImage, setBgImage] = useState(pht);
  // Dynamically update background image based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setBgImage(phtSmall); // Use alternative image for small screens
      } else {
        setBgImage(pht); // Use original image for xl screens
      }
    };

    handleResize(); // Check initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      comments,
    });
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[400px] bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* <div className="absolute inset-0 flex items-center flex-col bg-black bg-opacity-40">
          <p className="text-white text-2xl mt-10 hidden md:block">
            Committed to Excellence: Health - Safety - Environment
          </p>
          <p className="text-white text-4xl font-bold mt-6 hidden md:block">
            Safe Communities, Happy Stakeholders
          </p>
        </div> */}
      </div>

      <div className='bg-teal-700 w-full h-12'></div>

      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[#008080] text-left text-5xl font-bold">
              We’re Here
            </h2>
            <p className="text-3xl font-bold text-left text-gray-800">
              to Answer Your Questions
            </p>
            <p className="text-[#008080] text-2xl text-left font-bold mt-2">
              How may we help you?
            </p>
            <p className="text-gray-600 mt-2 text-left font-bold">
              Please fill out the following form and we promise to get back
              to you within 2 business days.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white bg-opacity-0 p-6 rounded-lg shadow-lg space-y-6">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  className="w-full p-3 border rounded-md bg-[#e0f7fa] focus:outline-none placeholder-gray-600 shadow-md border-gray-300"
                  type="text"
                  placeholder="FIRST NAME (required)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  className="w-full p-3 border rounded-md bg-[#e0f7fa] focus:outline-none placeholder-gray-600 shadow-md border-gray-300"
                  type="text"
                  placeholder="LAST NAME (required)"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                className="w-full p-3 border rounded-md bg-[#e0f7fa] focus:outline-none placeholder-gray-600 shadow-md border-gray-300"
                type="email"
                placeholder="EMAIL (required)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                className="w-full p-3 border rounded-md bg-[#e0f7fa] focus:outline-none placeholder-gray-600 shadow-md border-gray-300"
                type="tel"
                placeholder="PHONE NUMBER (required)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                className="w-full p-3 border rounded-md bg-[#e0f7fa] focus:outline-none placeholder-gray-600 shadow-md border-gray-300"
                type="text"
                placeholder="COMPANY NAME"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <textarea
                className="w-full p-3 border rounded-md focus:outline-none placeholder-gray-800 h-32 shadow-md border-gray-300 bg-gray-200"
                placeholder="Let us know any comments or questions you might have"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button className="w-40 bg-green-600 text-white text-lg rounded-full hover:bg-green-800 transition p-2">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto py-4 text-black pb-10 bg-gray-100">
        <img
          src="path/to/your/logo.png"
          alt="OPIGLO Logo"
          className="h-10 mb-2"
        />
        <p className="font-bold text-4xl text-[#008080]">OPIGLO (Pvt) LTD</p>

        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-2 border-gray-300 pt-2 text-lg md:text-2xl">
          {/* Phone Section */}
          <div className="flex flex-row items-center mb-2 md:mb-0 space-x-2">
            <BiSolidPhoneCall className="text-3xl md:text-5xl" />
            <div className="flex flex-col text-center md:text-left">
              <span>+27 84 440 3786</span>
              <span>+27 84 736 1000</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block bg-black mx-4 w-[3px] h-12"></div>

          {/* Email Section */}
          <div className="flex flex-row items-center mb-2 md:mb-0 space-x-2">
            <HiMail className="text-3xl md:text-5xl" />
            <div className="flex flex-col text-center md:text-left">
              <span>Info@opiglo.co.za</span>
              <span>Admin@opiglo.co.za</span>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 md:mt-2 xl:mt-6 text-lg md:text-2xl">
          <img src={loc} className="w-6 h-6 md:w-8 md:h-8 mr-2" alt="Location Icon" />
          <span className="text-center md:text-left">10 Cromwell Road, Glenwood, Durban</span>
        </div>



        {/* <div className="flex flex-col md:flex-row justify-center w-full mt-2 border-gray-300 pt-2 text-2xl">
          <div className="flex items-center flex-col mb-2 md:mb-0">
            <div className="flex items-center mb-1">
              <BiSolidPhoneCall className="mr-2 text-3xl" />
              <span>+27 84 440 3786</span>
              <span>+27 84 736 1000</span>
            </div>
            <span className="mx-2 text-5xl font-normal md:mx-4">|</span>
            <div className="flex items-center">
              <HiMail className="mr-2 text-3xl" />
              <span>Info@opiglo.co.za</span>
              <span>Admin@opiglo.co.za</span>
            </div>
          </div>

          <div className="flex items-center flex-col">
            <div className="flex items-center">
              <img src={loc} className="mr-2 w-8 h-8" alt="Location Icon" />
              <div className='flex flex-col'>
                <span>26985 Brighton Lane,</span>
                <span>Lake Forest, CA 92630</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
