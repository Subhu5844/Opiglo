// src/Flag.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';
import Bo from "../../../assets/HomePage/Flags/Botswana.png";
import Co from "../../../assets/HomePage/Flags/Congo.png";
import Zi from "../../../assets/HomePage/Flags/Zimbabwe.png";
import Za from "../../../assets/HomePage/Flags/Zambia.png";
import Le from "../../../assets/HomePage/Flags/Lesotho.png";
import Sw from "../../../assets/HomePage/Flags/Swaziland.png";

// Sample country data with flag URLs and names
const countries = [
    { name: "Botswana", flag: Bo },
    { name: "Congo", flag: Co },
    { name: "Zimbabwe", flag: Zi },
    { name: "Zambia", flag: Za },
    { name: "Lesotho", flag: Le },
    { name: "Swaziland", flag: Sw },
];

const Flag = () => {
    return (
        <div className="py-10">
            <h1 className="text-center mb-12 text-4xl md:text-5xl xl:text-4xl font-medium text-blue-950">
                Opiglo serves <span className="text-teal-600">neighbouring countries</span>
            </h1>
            <Marquee gradient={false} speed={70}>
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center mx-16 text-center"
                    >
                        <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="w-28 h-20 object-contain mb-2"
                        />
                        <span className="text-lg font-semibold">{country.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Flag;
