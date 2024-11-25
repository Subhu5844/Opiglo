import React ,{useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCalendarDate } from "react-icons/bs";
import { MdFilterList } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";
import UserNavbar from "../../components/userDasboard/UserNavbar"

function Payment() {

  const [showHiddenDivs, setShowHiddenDivs] = useState(false);

  const location = useLocation()

  useEffect(() => {
    if (location.state?.fromChoosePaymentContinueButton) {
      setShowHiddenDivs(true);
    }
  }, [location.state]);

  const handleReturn = ()=>{
    setShowHiddenDivs(false)
  }


  return (
    <>
    <UserNavbar></UserNavbar>
    <div className="relative" id="user-home">
      <div>
        <div className="flex flex-col gap-[1vw] ml-[18vw] pt-[4vw]">
          <h3 className="font-bold text-[1.2vw]">
            Account Number{" "}
            <span className="font-normal underline ml-[1vw]">
              26736573634567
            </span>{" "}
          </h3>
          <h3 className="font-bold text-[1.2vw]">
            Statement Balance{" "}
            <span className="font-normal underline ml-[1vw]">R 34569.98</span>{" "}
          </h3>
          <Link to={"/opiglo"}>
            <h3 className="font-bold text-[1.2vw]">
              OPIGLO Prepaid Available Balance{" "}
              <span className="font-normal underline ml-[1vw]">R 34569.9</span>{" "}
            </h3>
          </Link>
          <h3 className="font-bold text-[1.2vw]">
            Current Payment Method{" "}
            <span className="font-normal underline ml-[2vw]">Prepaid(EFT)</span>{" "}
          </h3>
          <Link to={"/choosepayment"}>
            <div className="h-[3vw] w-[10vw] flex justify-center items-center rounded-lg mt-[0.5vw] bg-[#87d9d9]">
              <p className="font-medium text-[1.2vw]">Add Balance</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="min-h-[15vw]  w-[70vw] bg-[#ececec] ml-[18vw] mt-[3vw] rounded-xl">
        <div className="flex h-[3vw] w-[100%]  items-center pt-[1vw]">
          <h4 className="ml-[1vw] text-[1.2vw] h-[100%] w-[25vw] flex justify-start font-medium tracking-wide items-center">
            Transaction Overview
          </h4>
          <div className="flex gap-[1vw] text-[1vw] ml-[18vw] text-[#ffffff] ">
            <div className="flex pr-[1vw] items-center  gap-[0.5vw] rounded-md pl-[1vw] bg-[#15b2b2]">
              <h4>Date</h4>
              <BsCalendarDate />
            </div>
            <div className="flex pr-[1vw] items-center  gap-[0.5vw] rounded-md pl-[1vw] bg-[#15b2b2]">
              <h4>Filter</h4>
              <MdFilterList />
            </div>
            <div className="flex  h-[1.5vw] w-[10vw] pr-[1vw] items-center justify-between  gap-[1vw] rounded-xl pl-[1.5vw] bg-[#15b2b2]">
              <h4>Search</h4>
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="h-[2vw] w-[68vw] text-[1vw] bg-[#15b2b2] mt-[2vw] flex items-center justify-around font-bold rounded-md ml-[1vw] mr-[1vw] ">
          <h4 className=" ">User Name</h4>
          <h4 className="">Transaction ID</h4>
          <h4 className="">Company Name</h4>
          <h4 className="">Dates and Time</h4>
          <h4 className="">Amount</h4>
          <h4 className="">Status</h4>
        </div>
        <div className="h-[4vw] w-[68vw] ml-[1vw] text-[1vw] relative mr-[1vw]  flex items-center justify-around border-b-[0.1vw] border-solid border-[#757374]">
          <h4 className=" h-[100%] w-[10vw] flex justify-center items-center flex-wrap  font-medium ">
            John Doa
          </h4>
          <h4 className=" h-[100%] w-[10vw] flex justify-start items-center flex-wrap  font-medium ">
            #1234329790
          </h4>
          <h4 className=" h-[100%] w-[10vw] flex justify-center items-center flex-wrap  font-medium ">
            Lorem, ipsum dolor.
          </h4>
          <h4 className=" h-[100%] w-[10vw]  flex justify-end items-center flex-wrap  font-medium ">
            2024-11-10 12:34
          </h4>
          <h4 className=" h-[100%] w-[5vw]  flex justify-end items-center flex-wrap  font-medium ">
            1000
          </h4>
          <h4 className=" h-[100%] w-[10vw] flex justify-end items-center flex-wrap font-medium ">
            Completed
          </h4>
        </div>
      </div>
      {showHiddenDivs && (
        <>
      <div className="h-[100vh]  bg-[#7e8082] opacity-40 w-[100%] absolute top-0">
      </div>
      <div className="z-10 absolute flex  mt-[2vw] rounded-xl h-[36vw] tracking-wider  flex-col gap-[1vw] w-[25vw] overflow-hidden items-center bg-[#ffffff] left-[40vw] top-0 ">
        <div className="relative h-[10vw] w-[90%]  bg-[#ffffff] flex flex-col justify-center items-center gap-[1vw] border-b-[0.1vw] border-dashed border-[#c5c5c5] ">
          <div className="h-[3.5vw] w-[3.5vw]  rounded-full bg-[#e4f3ee] flex justify-center items-center text-[2vw] ">
            <FcOk />
          </div>
          <h3 className="text-[1vw]">Payment Success!</h3>
          <div className="absolute -bottom-[0.6vw] -left-[1.7vw] -z-0 rounded-full h-[1vw] w-[1vw] bg-[#eff1ed]"></div>
          <div className="absolute -bottom-[0.6vw] -right-[1.7vw] rounded-full h-[1vw] w-[1vw] bg-[#eff1ed]"></div>
        </div>
        <div className="h-[10vw] w-[88%] pb-[1vw] border-b-[0.1vw]  border-dashed border-[#c5c5c5] text-[0.9vw]  flex flex-col gap-[1vw] ">
          <div className="flex h-[2vw] w-[100%] items-center justify-between ">
            <h3 className="text-[#928e8e]">References Number </h3>
            <h6>65876669958674920</h6>
          </div>
          <div className="flex h-[2vw] w-[100%] items-center justify-between ">
            <h3 className="text-[#928e8e]">Date </h3>
            <h6>Mar 22, 2024</h6>
          </div>
          <div className="flex h-[2vw] w-[100%] items-center justify-between ">
            <h3 className="text-[#928e8e]">Time </h3>
            <h6>07:40 AM</h6>
          </div>
          <div className="flex h-[2vw] w-[100%] items-center justify-between ">
            <h3 className="text-[#928e8e]">Payment Method </h3>
            <h6>Credit Card</h6>
          </div>
        </div>
        <div className="flex h-[3vw] w-[88%]  pb-[2vw] text-[1vw] border-b-[0.1vw] border-solid border-[#c5c5c5]  items-center justify-between ">
          <h3 className="text-[#928e8e]">Amount</h3>
          <h6>R 56,777</h6>
        </div>
        <div className="flex h-[3vw] w-[88%] mt-[1vw] text-[1vw] rounded-md border-[0.1vw]  border-solid border-[#c5c5c5]  bg-[#ffffff] justify-center items-center gap-[1vw]">
          <FiDownload />
          <h4 className="font-medium">Get PDF Receipts</h4>
        </div>
        <Link to={"/userdashboard"}>
          <div onClick={handleReturn} className="flex h-[3vw] text-[1vw] w-[22vw] rounded-md border-[0.1vw]  border-solid border-[#c5c5c5]  bg-[#ffffff] justify-center items-center">
            <h4 className="font-medium">Return to home</h4>
          </div>
        </Link>
      </div>
        </>

      )}
    </div>
    </>
    
  );
}

export default Payment;
