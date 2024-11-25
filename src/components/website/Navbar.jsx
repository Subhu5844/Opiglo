import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative top-0 left-0 w-full z-20 bg-transparent text-white">
      <div className="sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 mt-6 xl:mt-4 px-4">
          <div className="flex">
          <Link to="/" >
                    <img src='/opiglo_logo_bg_rm.png' className='w-40 h-28' />
                </Link>
          </div>

          {/* Large Screen Menu */}
          <div className="hidden md:flex items-center p-2 xl:p-4">
            <div className="ml-2 flex items-baseline space-x-3 lg:space-x-4 xl:space-x-6">
              <Link to="/product" className="text-base lg:text-lg xl:text-xl hover:text-orange-500">
                Products & Services
              </Link>
              <Link to="/platforms" className="text-base lg:text-lg xl:text-xl hover:text-orange-500">
                Platforms
              </Link>
              <Link to="/fuelprice" className="text-base lg:text-lg xl:text-xl hover:text-orange-500">
                Fuel Price
              </Link>
              <Link to="/network" className="text-base lg:text-lg xl:text-xl hover:text-orange-500">
                Network
              </Link>
              <Link to="/about" className="text-base lg:text-lg xl:text-xl hover:text-orange-500">
                About Us
              </Link>
              <Link to="/contact" className="text-base lg:text-lg xl:text-xl hover:text-orange-500">
                Contact
              </Link>
              <Link
                to="/login"
                className="bg-blue-500 text-sm lg:text-md xl:text-lg text-white py-1 px-3 rounded-md hover:bg-blue-700"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Small Screen Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-black bg-opacity-90 z-10 flex flex-col items-center justify-start py-6 space-y-4 md:hidden">
          <Link to="/product" onClick={toggleMenu} className="text-lg hover:text-orange-500">
            Products & Services
          </Link>
          <Link to="/platforms" onClick={toggleMenu} className="text-lg hover:text-orange-500">
            Platforms
          </Link>
          <Link to="/fuelprice" onClick={toggleMenu} className="text-lg hover:text-orange-500">
            Fuel Price
          </Link>
          <Link to="/network" onClick={toggleMenu} className="text-lg hover:text-orange-500">
            Network
          </Link>
          <Link to="/about" onClick={toggleMenu} className="text-lg hover:text-orange-500">
            About Us
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="text-lg hover:text-orange-500">
            Contact
          </Link>
          <Link to="/login" className="block bg-blue-500 px-4 py-2 rounded-lg text-white text-center hover:bg-blue-700 w-3/4">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
