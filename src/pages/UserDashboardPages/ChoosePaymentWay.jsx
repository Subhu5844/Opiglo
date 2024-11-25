import React, { useState } from "react";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { BsBank } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/userDasboard/UserNavbar"

function ChoosePaymentWay() {
  const [activeDiv, setActiveDiv] = useState("");

  const navigate = useNavigate()

  const handleClick = (id) => {
    setActiveDiv(id);
  };

  const handleContinue = ()=>{
    navigate('/payment',{state: { fromChoosePaymentContinueButton: true }})
  }

  return (
   <>
     <UserNavbar></UserNavbar>
   <div id="user-home">
   <div className="ml-[20vw] mt-[4vw] h-[35vw] w-[60vw] shadow-lg bg-[#ffffff] rounded-xl flex justify-evenly items-center pl-[1vw] pr-[1vw]" >
      <div className="h-[30vw] w-[25vw]  flex flex-col gap-[1vw]">
        <div className="h-[2vw] w-[100%] bg-[#ebebeb] flex justify-center items-center text-[1vw] font-normal rounded-md ">
          <h4>Choose one of the payment option</h4>
        </div>
        <div
          onClick={() => handleClick("apple")}
          className={`"h-[3vw] p-[0.4vw] w-[100%] flex justify-center items-center gap-[0.1vw] border-[0.06vw] border-solid border-[#b9b9b9] text-[1.5vw] font-normal rounded-xl " ${
            activeDiv === "apple" ? "bg-[#8ef02c]" : "bg-white"
          }`}
        >
          <IoLogoApple />
          <h4>Pay</h4>
        </div>
        <div
          onClick={() => handleClick("google")}
          className={`"h-[3vw] p-[0.4vw] w-[100%] flex justify-center items-center border-[0.06vw] border-solid border-[#b9b9b9] gap-[0.1vw] text-[1.5vw] font-normal rounded-xl 
            ${activeDiv === "google" ? "bg-[#8ef02c]" : "bg-white"} "`}
        >
          <FcGoogle />
          <h4>Pay</h4>
        </div>
        <div
          onClick={() => handleClick("visa")}
          className={`'h-[7vw] p-[0.5vw] w-[100%] flex flex-col justify-evenly rounded-xl border-[0.06vw] border-solid border-[#b9b9b9] pr-[1vw]'
            ${activeDiv === "visa" ? "bg-[#8ef02c]" : "bg-white"}`}
        >
          <div className="h-[3vw] w-[100%]  flex items-center gap-[2vw] text-[2vw] pl-[1vw] ">
            <RiVisaLine />
            <h4 className="text-[1vw] tracking-wide">
              <span className="font-medium">Pay via Card</span>
              <br />
              To pay enter your Visa
            </h4>
          </div>
          <div className="h-[3vw] w-[100%] items-center gap-[2vw] text-[2vw] pl-[1vw] flex ">
            <SiMastercard />
            <h4 className="text-[1vw] tracking-wide ml-[0.5vw]">
              Master Card or maastro paypayment card of information.
            </h4>
          </div>
        </div>
        <div
          onClick={() => handleClick("netbank")}
          className={`'h-[7vw] p-[0.5vw] w-[100%] flex justify-center items-center rounded-xl  gap-[2vw] text-[3vw] pl-[1vw] pr-[1vw] border-[0.06vw] border-solid border-[#b9b9b9]'
            ${activeDiv === "netbank" ? "bg-[#8ef02c]" : "bg-white"}`}
        >
          <BsBank />
          <h4 className="text-[1vw] tracking-wide">
            <span className="font-medium">Pay via internet banking </span>
            <br /> Do you have access to internet banking and want to pay
            immediately? Just select your bank and make the payment.
          </h4>
        </div>
      </div>
      <div className="h-[30vw] w-[25vw]  flex flex-col gap-[1vw]">
        <div className="h-[8vw] w-[100%] bg-[#ebebeb] flex flex-col items-center justify-center rounded-xl">
          <h6 className="text-[1vw]">Enter Amount</h6>
          <h2 className="text-[2vw] underline">R 33,458</h2>
        </div>
        <div className="h-[15vw] w-[100%] bg-[#ebebeb] flex flex-col text-[2.5vw] rounded-xl  items-center justify-around">
          <MdLockOutline />
          <div className="h-[7vw] w-[80%]">
            <h5 className="text-[1vw] tracking-wide">
              Your payment is 100% safe and secure. We use encryption to protect
              your data and only work with verified payment gateways. Your trust
              is a priority for us.
            </h5>
          </div>
        </div>
        <div onClick={handleContinue} className="h-[3vw] cursor-pointer w-[100%] flex items-center justify-center text-[#ffffff] text-[1vw] rounded-xl bg-[#14b0b0]">
          <h5>Continue</h5>
          <FaAngleRight />
        </div>
      </div>
    </div>
   </div>
    </>
  );
}

export default ChoosePaymentWay;
