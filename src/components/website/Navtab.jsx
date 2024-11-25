import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navtab = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative bg-white w-full border-b border-blue-500">
            <div className="flex items-center justify-between xl:py-0 xl:pl-8">
                {/* Logo */}
                <Link to="/" >
                    <img src='/opiglo_logo_bg_rm.png' className='w-28 h-20' />
                </Link>

                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden mr-8">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Large Screen Menu */}
                <div className="hidden bg-teal-700 py-4 px-12 xl:px-8 rounded-tl-full md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8">
                    <Link to="/" className={`text-lg lg:text-xl hover:text-orange-500 ${isActive("/") ? 'text-yellow-400' : 'text-white'}`}>
                        Home
                    </Link>
                    <Link to="/product" className={`text-lg lg:text-xl hover:text-orange-500 ${isActive("/product") ? 'text-yellow-400' : 'text-white'}`}>
                        Products and Services
                    </Link>
                    <Link to="/platforms" className={`text-lg lg:text-xl hover:text-orange-500 ${isActive("/platforms") ? 'text-yellow-400' : 'text-white'}`}>
                        Platforms
                    </Link>
                    <Link to="/fuelprice" className={`text-lg lg:text-xl hover:text-orange-500 ${isActive("/fuelprice") ? 'text-yellow-400' : 'text-white'}`}>
                        Fuel Price
                    </Link>
                    <Link to="/network" className={`text-lg lg:text-xl hover:text-orange-500 ${isActive("/network") ? 'text-yellow-400' : 'text-white'}`}>
                        Network
                    </Link>
                    <Link to="/about" className={`text-lg lg:text-xl hover:text-orange-500 ${isActive("/about") ? 'text-yellow-400' : 'text-white'}`}>
                        About Us
                    </Link>
                    <Link to="/contact" className={`text-lg lg:text-xl hover:text-orange-500 ${isActive("/contact") ? 'text-yellow-400' : 'text-white'}`}>
                        Contact Us
                    </Link>
                    {/* Conditional Login/Home Button */}
                    {/* {isActive("/login") ? (
                        <Link to="/" className="bg-orange-500 text-md lg:text-lg text-white py-1 px-4 lg:px-6 rounded-md hover:bg-orange-600">
                            Home
                        </Link>
                    ) : ( */}
                    <Link to="/login" className={`text-md lg:text-lg text-white py-1 px-4 lg:px-6 rounded-md ${isActive("/login") ? 'bg-orange-500 hover:bg-orange-700 ' : 'bg-blue-500 hover:bg-blue-700'}`} >
                        Login
                    </Link>
                    {/* )} */}
                </div>
            </div>

            {/* Dropdown Menu for Small Screens */}
            {
                isOpen && (
                    <div className="absolute top-16 right-0 w-full bg-black bg-opacity-90 z-10 flex flex-col items-center justify-start p-6 pt-4 space-y-4 md:hidden">
                        <Link to="/" className={`block text-lg ${isActive("/") ? 'text-yellow-400' : 'text-white'} hover:text-orange-500`}>
                            Home
                        </Link>
                        <Link to="/product" className={`block text-lg ${isActive("/product") ? 'text-yellow-400' : 'text-white'} hover:text-orange-500`}>
                            Products and Services
                        </Link>
                        <Link to="/platforms" className={`block text-lg ${isActive("/platforms") ? 'text-yellow-400' : 'text-white'} hover:text-orange-500`}>
                            Platforms
                        </Link>
                        <Link to="/fuelprice" className={`block text-lg ${isActive("/fuelprice") ? 'text-yellow-400' : 'text-white'} hover:text-orange-500`}>
                            Fuel Price
                        </Link>
                        <Link to="/network" className={`block text-lg ${isActive("/network") ? 'text-yellow-400' : 'text-white'} hover:text-orange-500`}>
                            Network
                        </Link>
                        <Link to="/about" className={`block text-lg ${isActive("/about") ? 'text-yellow-400' : 'text-white'} hover:text-orange-500`}>
                            About Us
                        </Link>
                        <Link to="/contact" className={`block text-lg ${isActive("/contact") ? 'text-yellow-400' : 'text-white'} hover:text-orange-500`}>
                            Contact Us
                        </Link>
                        {/* Conditional Login/Home Button for Small Screens */}
                        {/* {isActive("/login") ? (
                    <Link to="/" className="block px-4 py-2 rounded-lg text-white text-center  w-full">
                        Home
                    </Link>
                ) : ( */}
                        <Link to="/login" className={`block px-4 py-2 rounded-lg text-white text-center w-full ${isActive("/login") ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500 hover:bg-blue-700'}`} >
                            Login
                        </Link>
                        {/* )} */}
                    </div>
                )
            }
        </nav >
    );
};

export default Navtab;
