import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const cards = [
  {
    id: 1,
    description:
      "qua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
    imgSrc:
      "https://img.freepik.com/premium-vector/green-field-sunny-day_554888-1184.jpg?w=740", // Replace with the correct image source
    readMoreUrl: "#", // Replace with the actual blog link
  },
  {
    id: 2,
    description:
      "qua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
    imgSrc:
      "https://img.freepik.com/premium-vector/green-field-sunny-day_554888-1184.jpg?w=740", // Replace with the correct image source
    readMoreUrl: "#", // Replace with the actual blog link
  },
  {
    id: 3,
    description:
      "qua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
    imgSrc:
      "https://img.freepik.com/premium-vector/green-field-sunny-day_554888-1184.jpg?w=740", // Replace with the correct image source
    readMoreUrl: "#", // Replace with the actual blog link
  },
];

const Blogs = () => {
  return (
    <div className="py-4 px-6">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl xl:text-4xl font-medium text-blue-950">
          Read <span className="text-teal-600">Our Blogs</span>
        </h1>
      </header>

      <div className="grid p-8 gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{card.description}</p>
            <a
              href={card.readMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-700"
            >
              READ MORE
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mr-6 mb-8">
        <Link to="/about">
          <button className="flex items-center text-sm sm:text-base md:text-lg bg-teal-500 px-4 py-2 sm:px-5 md:px-6 rounded-full hover:bg-teal-800">
            <span>Explore More</span>
            <IoIosArrowForward size={20} className="ml-2 sm:ml-3" />
          </button>
        </Link>
      </div>
    </div >
  );
}

export default Blogs;
