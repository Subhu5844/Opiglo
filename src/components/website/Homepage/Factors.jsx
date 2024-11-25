import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import photo3 from "../../../assets/HomePage/picture1.png";
import photo2 from "../../../assets/HomePage/picture2.png";
import photo1 from "../../../assets/HomePage/picture3.png";

const cards = [
  {
    title: 'Industry Expertise',
    description:
      "With decades of expertise, our petroleum company leads South Africa's energy sector. We combine local insights and global best practices, leveraging innovative technology for operational efficiency and a sustainable future for communities nationwide.",
    image: photo1,
  },
  {
    title: 'Real-Time Fleet Management',
    description:
      "Our real-time fleet management system boosts efficiency by monitoring vehicle locations, fuel usage, and driver performance. This technology enables proactive decisions, reduces costs, and ensures timely deliveries while prioritizing safety and sustainability.",
    image: photo2,
  },
  {
    title: 'Sustainability Practices',
    description:
      "Our sustainability practices focus on reducing emissions, conserving resources, and implementing eco-friendly technologies. By engaging communities, we ensure our energy solutions contribute to a healthier planet for future generations in South Africa.",
    image: photo3,
  },
  {
    title: 'Advanced Analytics',
    description:
      "With decades of expertise, our petroleum company leads South Africa's energy sector. We combine local insights and global best practices, leveraging innovative technology for operational efficiency and a sustainable future for communities nationwide.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fIvnWfb_ETvLUU4Bkw9w3C3l3aCecLPl2A&s',
  },
  {
    title: 'Fuel Optimization',
    description:
      "Our real-time fleet management system boosts efficiency by monitoring vehicle locations, fuel usage, and driver performance. This technology enables proactive decisions, reduces costs, and ensures timely deliveries while prioritizing safety and sustainability.",
    image: 'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/881638144FactoryWorker.jpg=ws1280x960',
  },
  {
    title: 'Workforce Management',
    description:
      "Our sustainability practices focus on reducing emissions, conserving resources, and implementing eco-friendly technologies. By engaging communities, we ensure our energy solutions contribute to a healthier planet for future generations in South Africa.",
    image: 'https://thumbs.dreamstime.com/b/factory-worker-man-stand-press-button-machine-to-work-workplace-also-look-happy-smiling-concept-good-management-188394096.jpg',
  },
  {
    title: 'Energy Transition',
    description:
      "With decades of expertise, our petroleum company leads South Africa's energy sector. We combine local insights and global best practices, leveraging innovative technology for operational efficiency and a sustainable future for communities nationwide.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fIvnWfb_ETvLUU4Bkw9w3C3l3aCecLPl2A&s',
  },
  {
    title: 'Customer-Centric Solutions',
    description:
      "Our real-time fleet management system boosts efficiency by monitoring vehicle locations, fuel usage, and driver performance. This technology enables proactive decisions, reduces costs, and ensures timely deliveries while prioritizing safety and sustainability.",
    image: 'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/881638144FactoryWorker.jpg=ws1280x960',
  },
  {
    title: 'Innovative Technology',
    description:
      "Our sustainability practices focus on reducing emissions, conserving resources, and implementing eco-friendly technologies. By engaging communities, we ensure our energy solutions contribute to a healthier planet for future generations in South Africa.",
    image: 'https://thumbs.dreamstime.com/b/factory-worker-man-stand-press-button-machine-to-work-workplace-also-look-happy-smiling-concept-good-management-188394096.jpg',
  },
];

const Factors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideLeft = () => {
    setIsPaused(true); // Pause autoplay on manual interaction
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    setIsPaused(true); // Pause autoplay on manual interaction
    if (currentIndex >= cards.length - 1) {
      setCurrentIndex(0); // Loop back to the beginning
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= cards.length - 3 ? 0 : prevIndex + 1 // Loop back to the start after last set
        );
      }, 2000); // Autoplay interval (3 seconds)

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [currentIndex, isPaused]);

  // Resume autoplay when user interaction is idle
  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isPaused]);

  return (
    <div className="flex justify-center items-center w-full h-full py-8">
      <div className="relative w-full max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-medium text-blue-950">
            Our <span className='text-teal-600'>Differentiating Factors</span>
          </h1>
        </header>

        <div className="flex items-center">
          {/* Left arrow */}
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className="p-3 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoIosArrowBack size={56} color='black' />
          </button>

          <div className="flex overflow-hidden px-2">
            {/* Cards */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-1/4 px-2 flex-shrink-0"
                >
                  <div className="bg-white p-5 rounded-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-72 rounded-lg"
                    />
                    <h3 className="text-xl text-center font-bold mt-4">{card.title}</h3>
                    <p className="mt-2 text-center">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={slideRight}
            disabled={false} // Removed disable condition for looping
            className="p-3 text-white rounded-full"
          >
            <IoIosArrowForward size={56} color='black' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Factors;
