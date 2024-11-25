import React from "react";
import { PiBankBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa6";
import { BsFileMedicalFill } from "react-icons/bs";
import { FaCircleInfo } from "react-icons/fa6";
import UserNavbar from "../../components/userDasboard/UserNavbar"

function Home() {
  return (
    <>
    <UserNavbar></UserNavbar>
     <div className="h-[110vh] w-auto  flex flex-col  items-center" id="user-home">
      <div className="home h-[10vw] w-[100%] flex justify-center items-center  ">
        <h1 className="text-[2vw] font-bold">
          <span className="text-[#14b0b0]">Welcome </span>Back Michael
        </h1>
      </div>
      <div className="deprt h-[15vw]  w-[100%]  flex flex-col pl-[10vw] gap-[1vw] ">
        <h2 className="text-[2vw] font-bold">Depot Alert</h2>
        <div className="h-[8vw] w-[70vw] bg-[#f4f5a3] flex items-center rounded">
          <ul className="list-disc ml-[2vw] text-[1vw] tracking-wide ">
            <li>
              Mozambique - Clearwater General Trading - Mozambique, Diesel
              (50ppm). Technical
            </li>
            <li>Mozambique - Exito - Tete, Diesel (50ppm). Out of stock.</li>
            <li>
              Western Cape - Hoofweg Motors - Prince Albert Road, Diesel
              (50ppm). Out of stock
            </li>
          </ul>
        </div>
      </div>
      <div className="card h-[15vw] w-[100%] mt-[1vw] flex   gap-[2vw] pl-[10vw]">
        <div className="h-[12vw] w-[22vw] bg-[#d6c3e7] rounded-md flex flex-col items-center justify-center gap-[1vw] ">
          <div
            className="h-[4vw] w-[5vw] rounded-md  flex items-center justify-center text-[3vw] text-[#ffffff] "
            style={{
              background: "linear-gradient(135deg, #ed0387 20%, #911fb9 80%)",
            }}
          >
            <PiBankBold />
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-[1.5vw] ">Current Balance</h4>
            <h4 className="text-[1.5vw]">Rs 6789.88</h4>
          </div>
        </div>
        <div className="h-[12vw] w-[22vw] bg-[#d6c3e7] rounded-md flex flex-col gap-[2vw] ">
          <div className="flex gap-[0.5vw]  items-center ml-[1vw] text-[1.2vw] ">
            <h4>Fleet Details</h4>
            <span>
              <FaCircleInfo />
            </span>
          </div>
          <div className="flex  gap-[3vw] w-[100%] h-[7vw] items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div
                className="h-[4vw] w-[5vw] rounded-md  flex items-center justify-center text-[3vw] text-[#ffffff] "
                style={{
                  background:
                    "linear-gradient(135deg, #ed0387 20%, #911fb9 80%)",
                }}
              >
                <TbTruckDelivery />
              </div>
              <h4 className="text-[1.5vw] font-semibold ">15</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="h-[4vw] w-[5vw] rounded-md  flex items-center justify-center text-[3vw] text-[#ffffff] "
                style={{
                  background:
                    "linear-gradient(135deg, #ed0387 20%, #911fb9 80%)",
                }}
              >
                <FaUserTie />
              </div>
              <h4 className="text-[1.5vw] font-semibold ">17</h4>
            </div>
          </div>
        </div>
        <div className="h-[12vw] w-[22vw] bg-[#d6c3e7] rounded-md flex flex-col items-center justify-center gap-[1vw] ">
          <div
            className="h-[5vw] w-[6vw] rounded-md flex items-center justify-center text-[3vw] text-[#ffffff] "
            style={{
              background: "linear-gradient(135deg, #ed0387 20%, #911fb9 80%)",
            }}
          >
            <BsFileMedicalFill />
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-[1.5vw] ">Active virtual cards</h4>
            <h4 className="text-[1.5vw] font-semibold">24</h4>
          </div>
        </div>
      </div>
      <div className="current h-[30vw]  w-[100%]  flex flex-col pl-[10vw] gap-[1vw] mt-[2vw] ">
        <h2 className="text-[2vw] font-bold">Current News / Blogs</h2>
        <div className="w-[70vw] min-h-[8vw] bg-[#f0f0f0] rounded-md ">
          <div className="h-[2vw] w-[70vw] bg-[#c2bebd] text-[1vw] flex items-center font-bold rounded-md ">
            <h4 className="ml-[4vw] ">Notifications</h4>
            <h1 className="ml-[25vw]">Dates</h1>
          </div>
          <div className="h-[4vw] w-[69vw] ml-[0.5vw] text-[1vw]  flex items-center border-b-[0.1vw] border-solid border-[#757374]">
            <h4 className="ml-[3.5vw] font-medium ">Price Changed of Diesel</h4>
            <h1 className="ml-[20vw] font-medium">02/10/2025</h1>
            <p className="ml-[2vw] text-[#74a1e4]">read more</p>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default Home;
