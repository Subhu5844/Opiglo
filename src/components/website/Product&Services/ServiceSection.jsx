import React from 'react';
import ServicemainImg from "../../../assets/Product&Service/PSmain.png";
import PS4Img from "../../../assets/Product&Service/PS1.jpg";
import PS2Img from "../../../assets/Product&Service/PS2.png";
// import PS3Img from "../../../assets/Product&Service/PS3.png";
import backgroundImage from "../../../assets/Product&Service/bg1.png";

const ServiceSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="text-gray-900"
    >
      <div>
        <img
          src={ServicemainImg}
          alt="Platform"
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
        />
      </div>
      <div className="bg-teal-700 w-full h-12"></div>

      <div className="px-4 py-10 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold pl-2">Products and Services</h1>
          <div className="mt-8 border-t-2 border-gray-400 max-w-6xl mx-auto"></div>
        </div>

        {/* Container */}
        <div className="bg-teal-50 bg-opacity-90 mt-8 rounded-xl shadow-xl max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
          <p className="text-gray-900 text-lg md:text-lg font-normal mb-12">
            At <span className="font-bold italic">OPIGLO</span>, we’re revolutionizing the way fleet owners and fuel stations operate in South Africa. Our mission is to create a secure, efficient, and unified platform where businesses can seamlessly manage fuel transactions, optimize fleet performance, and eliminate the risk of theft and fraud. By combining cutting-edge technology with industry expertise, we’re bringing together the best solutions for your operational needs. Explore our innovative services designed to simplify your business and keep you moving forward.
          </p>

          {/* First Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12 ml-2">
            {/* Text content */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold italic mb-2 ml-2">EasyPay</h2>
              <h3 className="text-lg font-semibold underline mb-4">
                Secure Payments for Fleet and Fuel Stations
              </h3>
              <p className="mb-4">
                EasyPay offers a seamless, fraud-proof payment solution, connecting fleet owners and fuel stations across South Africa. With our platform, transactions are fast, secure, and hassle-free, ensuring peace of mind for both fuel suppliers and fleet operators. EasyPay helps you streamline payments without worrying about theft or fraud, enabling smoother business operations.
              </p>
            </div>
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={PS4Img}
                alt="Fuel Wholesale"
                className="rounded-xl shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-8 mb-12 mt-10">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={PS2Img}
                alt="Fuel Wholesale"
                className="rounded-xl shadow-xl w-full h-64"
              />
            </div>
            {/* Text content */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold italic mb-2 ml-2">Fuel Wholesale</h2>
              <h3 className="text-lg font-semibold underline mb-4">
                Fuel Your Business with Bulk Supply
              </h3>
              <p className="mb-4">
                <span className="font-bold italic">OPIGLO</span> delivers reliable, high-quality fuel at competitive wholesale prices, tailored to meet the needs of South Africa's fleet owners and fuel stations. With timely fuel delivery and transparent pricing, we help businesses maintain smooth operations and fuel supplies without disruption. Count on us for consistency and efficiency in bulk fuel procurement.
              </p>
            </div>
          </div>

          {/* Third Section */}
          {/* <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 pb-12 mt-10"> */}
          {/* Text content */}
          {/* <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold italic mb-2 ml-2">SmarTrack AI</h2>
              <h3 className="text-lg font-semibold underline mb-4">
                Intelligent Fleet and Fuel Management
              </h3>
              <p className="mb-4">
                SmarTrack AI empowers fleet owners with real-time tracking, fraud prevention, and optimized fuel usage. By integrating advanced AI-driven analytics, SmarTrack AI helps you monitor your fleet's performance, prevent fuel theft, and reduce operational costs. Stay ahead of challenges and boost efficiency with this cutting-edge solution tailored for South Africa’s logistics landscape.
              </p>
            </div> */}
          {/* Image */}
          {/* <div className="lg:w-1/2">
              <img
                src={PS3Img}
                alt="SmarTrack AI"
                className="rounded-xl shadow-xl w-full h-64"
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Choose OPIGLO */}
      <div className="flex items-center justify-center mt-6 mb-12">
        <div className="bg-gray-100 bg-opacity-90 rounded-xl max-w-6xl p-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold pb-8 pt-8 text-center">
            Why Choose OPIGLO?
          </h1>
          <p className="text-md">
            When it comes to managing fuel transactions and fleet operations in South Africa, OPIGLO is the trusted choice.
            We provide secure, efficient, and technology-driven solutions tailored to the specific needs of fleet owners and fuel stations. Here's why businesses choose <strong>OPIGLO</strong> to streamline their operations:
          </p>

          <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <div class="w-full">
              <div class="flex flex-col w-full mb-10 sm:flex-row">
                <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-teal-50 border-2 border-indigo-500 rounded-lg hover:bg-teal-100">
                      <div class="flex items-center -mt-1">
                        <h3 class="my-2 ml-2 text-lg font-bold">Advanced Security Solutions:</h3>
                      </div>
                      <p class="mt-2 mb-3 text-sm font-medium text-indigo-500 uppercase">------------</p>
                      <p class="mb-2"><span className='font-bold'>OPIGLO</span> ensures that all payments and transactions are secure, reducing the risks of fraud and theft. With our robust fraud-proof systems, your business remains protected 24/7.</p>
                    </div>
                  </div>
                </div>
                <div class="w-full sm:w-1/2">
                  <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-teal-50 border-2 border-purple-500 rounded-lg hover:bg-teal-100">
                      <div class="flex items-center -mt-1">
                        <h3 class="my-2 ml-2 text-lg font-bold">Unified Platform for Fleet and Fuel Management:</h3>
                      </div>
                      <p class="mt-2 mb-3 text-sm font-medium text-purple-500 uppercase">------------</p>
                      <p class="mb-2"><span className='font-bold'>OPIGLO</span> connects fleet owners and fuel stations seamlessly, offering a hassle-free, integrated platform for managing payments and fuel supplies. No additional infrastructure or complex systems are needed—just efficient, reliable service.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col w-full mb-5 sm:flex-row">
                <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-teal-50 border-2 border-blue-400 rounded-lg hover:bg-teal-100">
                      <div class="flex items-center -mt-1">
                        <h3 class="my-2 ml-2 text-lg font-bold">South Africa-Specific Expertise:</h3>
                      </div>
                      <p class="mt-2 mb-3 text-sm font-medium text-blue-400 uppercase">------------</p>
                      <p class="mb-2">With extensive experience in South Africa’s logistics and fuel sectors, <span className='font-bold'>OPIGLO</span> delivers solutions that address local challenges. We ensure fuel delivery and transaction processes run smoothly, reducing downtime and increasing operational efficiency.</p>
                    </div>
                  </div>
                </div>
                <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-teal-50 border-2 border-yellow-400 rounded-lg hover:bg-teal-100">
                      <div class="flex items-center -mt-1">
                        <h3 class="my-2 ml-2 text-lg font-bold">Real-Time Data and AI-Powered Insights:</h3>
                      </div>
                      <p class="mt-2 mb-3 text-sm font-medium text-yellow-400 uppercase">------------</p>
                      <p class="mb-2">SmarTrack AI offers real-time tracking and analytics, enabling businesses to make data-driven decisions that optimize fuel usage, prevent theft, and reduce operational costs. </p>
                    </div>
                  </div>
                </div>
                <div class="w-full sm:w-1/2">
                  <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-teal-50 border-2 border-green-500 rounded-lg hover:bg-teal-100">
                      <div class="flex items-center -mt-1">
                        <h3 class="my-2 ml-2 text-lg font-bold">Competitive and Transparent Pricing:</h3>
                      </div>
                      <p class="mt-2 mb-3 text-sm font-medium text-green-500 uppercase">------------</p>
                      <p class="mb-2"><span className='font-bold'>OPIGLO</span> provides clear, transparent pricing without hidden fees, helping businesses in South Africa maximize their fuel budget while enjoying top-tier services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="mt-6 pl-6 pr-4">
            <ul className="ml-6 mt-2 list-disc">
              <li className="pb-8"><span className="font-bold">Advanced Security Solutions:</span> OPIGLO ensures that all payments and transactions are secure, reducing the risks of fraud and theft. With our robust fraud-proof systems, your business remains protected 24/7.</li>
              <li className="pb-8"><span className="font-bold">Unified Platform for Fleet and Fuel Management:</span> OPIGLO connects fleet owners and fuel stations seamlessly, offering a hassle-free, integrated platform for managing payments and fuel supplies. No additional infrastructure or complex systems are needed—just efficient, reliable service.</li>
              <li className="pb-8"><span className="font-bold">South Africa-Specific Expertise:</span> With extensive experience in South Africa's logistics and fuel sectors, OPIGLO delivers solutions that address local challenges. We ensure fuel delivery and transaction processes run smoothly, reducing downtime and increasing operational efficiency.</li>
              <li className="pb-8"><span className="font-bold">Real-Time Data and AI-Powered Insights:</span> SmarTrack AI offers real-time tracking and analytics, enabling businesses to make data-driven decisions that optimize fuel usage, prevent theft, and reduce operational costs.</li>
              <li className=""><span className="font-bold">Competitive and Transparent Pricing:</span> OPIGLO provides clear, transparent pricing without hidden fees, helping businesses in South Africa maximize their fuel budget while enjoying top-tier services.</li>
            </ul>
          </div> */}
          <p className="mt-8 pb-8">
            Choose OPIGLO for secure, efficient, and data-driven fleet and fuel management in South Africa. Our platform is designed to meet the unique needs of local businesses, helping you boost operational efficiency and protect your bottom line.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
