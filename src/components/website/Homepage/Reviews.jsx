import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarBorder } from 'react-icons/md';
import avt from "../../../assets/HomePage/Worker.png";

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const reviewsRef = useRef(null);

    // Static data (replace this with actual backend data later)
    const reviews = [
        {
            name: "John D., Fleet Manager",
            description: "We've partnered with Opiglo for years, and their consistency in diesel supply is unmatched. They always deliver on time, helping us keep our operations running smoothly.",
            rating: 5.0,
        },
        {
            name: "Jane S., Operations Head",
            description: "Fantastic service! Opiglo's team is always responsive and ensures timely deliveries. Couldn't ask for a better partner.",
            rating: 4,
        },
        {
            name: "Alex B., Logistics Supervisor",
            description: "Reliable and efficient. Opiglo has consistently met our fuel needs without any issues. Highly recommend!",
            rating: 4.5,
        },
        {
            name: "Lisa M., Supply Chain Manager",
            description: "We've been working with Opiglo for a while, and their services are top-notch. The quality and reliability are excellent.",
            rating: 3.5,
        },
    ];

    // Auto-scroll setup
    useEffect(() => {
        let interval;
        if (isVisible) {
            setCurrentIndex(0); // Reset to first review
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000); // Auto-scroll every 3 seconds
        }

        return () => clearInterval(interval); // Clear interval on component unmount or when not visible
    }, [isVisible, reviews.length]);

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Section is visible
                } else {
                    setIsVisible(false); // Section is not visible
                }
            });
        });

        if (reviewsRef.current) {
            observer.observe(reviewsRef.current); // Observe the reviews section
        }

        return () => {
            if (reviewsRef.current) {
                observer.unobserve(reviewsRef.current); // Cleanup
            }
        };
    }, []);

    const slideLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const slideRight = () => {
        if (currentIndex < reviews.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
    
        return (
            <div className="flex justify-end mt-4">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                        <MdOutlineStar className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl" />
                    </span>
                ))}
                {hasHalfStar && (
                    <span className="text-yellow-500">
                        <MdOutlineStarHalf className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl" />
                    </span>
                )}
                {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                    <span key={i} className="text-gray-300">
                        <MdOutlineStarBorder className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl" />
                    </span>
                ))}
            </div>
        );
    };
    

    return (
        <div ref={reviewsRef} className="pt-8 px-4 lg:px-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl xl:text-4xl lg:text-8xl font-medium text-blue-950">
                    Customer <span className="text-teal-600">Reviews</span>
                </h1>
            </header>
            {/* Review Content */}
            <div className="flex flex-col lg:flex-row items-center bg-teal-100 rounded-lg shadow-lg lg:p-8 xl:p-0 xl:pr-8">
                <div className="w-full p-4 flex flex-col items-center">
                    {/* Slide control buttons */}
                    <div className="flex items-center w-full justify-center lg:justify-start space-x-4">
                        {/* Left arrow */}
                        <button
                            onClick={slideLeft}
                            disabled={currentIndex === 0}
                            className="p-2 text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <IoIosArrowBack size={48} color="black" />
                        </button>

                        {/* Review content slider */}
                        <div className="relative w-full max-w-md lg:max-w-full overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {reviews.map((review, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-2"
                                    >
                                        <h3 className="text-xl lg:text-xl xl:text-lg md:text-3xl font-bold pb-4">{review.name}</h3>
                                        <p className="mt-2 text-xl lg:text-xl xl:text-lg md:text-2xl text-center">{review.description}</p>
                                        {renderStars(review.rating)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right arrow */}
                        <button
                            onClick={slideRight}
                            disabled={currentIndex >= reviews.length - 1}
                            className="p-2 text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <IoIosArrowForward size={48} color="black" />
                        </button>
                    </div>

                    {/* Read More button */}
                    <div className="mt-4">
                        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800">
                            READ MORE
                        </button>
                    </div>
                </div>

                {/* Static Image on the Right */}
                <div className="w-1/2 xl:w-1/4 lg:w-1/3 mt-0 lg:mt-0 xl:mt-6">
                    <img
                        src={avt}
                        alt="Customer"
                        className="w-full h-96 md:h-[30rem] lg:h-[30rem] xl:h-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
