import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";

function Navbar() {
  const activateBg = ({ isActive }) => {
    return {
      color: isActive && "#e3d115",
    };
  };

  return (
    <div
      className="sticky top-0 z-[1000] h-[10vw] w-[100vw] flex flex-col items-end justify-between pr-[1vw]"
      style={{
        background: "linear-gradient(135deg, #cef5d1 50%, #ffffff 50%)",
      }}
    >
      {/* Logo positioned at the top-left */}
      <div className="absolute top-0 left-0 p-[1vw]">
        <img src='/opiglo_logo_bg_rm.png' alt="Logo" className="h-32 w-48" />
      </div>

      <div className="h-[4vw] w-[40vw] flex justify-center items-center gap-[1vw]">
        <div className="flex justify-center items-center gap-[0.7vw] h-[3vw] w-[10vw] ">
          <div className="h-[2vw] w-[2vw] rounded-full border-[0.08vw] border-solid border-[#14b0b0] text-[#14b0b0] justify-center items-center flex">
            <IoHome />
          </div>
          <div>
            <h4 className="text-[1vw] uppercase font-medium">address</h4>
            <p className="text-[0.7vw]">10 Cromwell Road, Glenwood, Durban</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[0.7vw] h-[3vw] w-[11vw]">
          <div className="h-[2vw] w-[2vw] rounded-full border-[0.08vw] border-solid border-[#14b0b0] text-[#14b0b0] justify-center items-center flex">
            <MdCall />
          </div>
          <div>
            <h4 className="text-[1vw] uppercase font-medium">Phone Number</h4>
            <p className="text-[0.7vw]">+27 84 440 3786</p>
            <p className="text-[0.7vw]">+27 84 736 1000</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[0.7vw] h-[3vw] w-[10vw]">
          <div className="h-[2vw] w-[2vw] rounded-full border-[0.08vw] border-solid border-[#14b0b0] text-[#14b0b0] justify-center items-center flex">
            <MdOutlineEmail />
          </div>
          <div>
            <h4 className="text-[1vw] uppercase font-medium">Email Us Here</h4>
            <p className="text-[0.7vw] ">Info@opiglo.co.za</p>
            <p className="text-[0.7vw] ">Admin@opiglo.co.za</p>
          </div>
        </div>
      </div>
      <div className="h-[4vw] w-[80vw] bg-[#14b0b0] flex gap-[4vw] rounded-md text-[#ffffff]">
        <div className="flex h-[100%] w-[70%] items-center justify-around text-lg">
          <NavLink style={activateBg} to={"/userdashboard"}>
            <h2>Home</h2>
          </NavLink>
          <NavLink style={activateBg} to={"/profiles"}>
            <h2>Profile</h2>
          </NavLink>
          <NavLink style={activateBg} to={"/payment"}>
            <h2>Payment</h2>
          </NavLink>
          <NavLink style={activateBg} to={"/OrderFuel"}>
            <h2>Order Fuel</h2>
          </NavLink>
          <NavLink style={activateBg} to={"/vehicledetails"}>
            <h2>Vehicles Details</h2>
          </NavLink>
          <NavLink style={activateBg} to={"/driverdetails"}>
            <h2>Driver Details</h2>
          </NavLink>
          <NavLink style={activateBg} to={"/Roles"}>
            <h2>Roles</h2>
          </NavLink>
        </div>
        <div className="flex items-center justify-around gap-[3vw] ml-[2vw] text-lg">
          <div className="flex items-center justify-center gap-[0.5vw]">
            <AiOutlineLogout />
            <h2>Logout</h2>
          </div>
          {/* <div className="flex items-center justify-center gap-[0.5vw]">
            <SlSettings />
            <h2>Settings</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
