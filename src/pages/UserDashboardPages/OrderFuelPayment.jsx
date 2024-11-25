import React from 'react';
import UserNavbar from "../../components/userDasboard/UserNavbar";
import { Link } from "react-router-dom";
import Cfp from '../../components/userDasboard/Cfp';
import backgroundImage from '../../../public/bgimg.jpg';
import { IoCheckmarkCircle } from 'react-icons/io5';

const OrderFuelPayment = () => {

  return (
    <div className='h-auto w-full'>
        <UserNavbar></UserNavbar>
        <div style={{backgroundImage:`URL(${backgroundImage})`}} className='bg-cover bg-center bg-no-repeat'>
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
                </div>
            </div>
            {/* Current fuel price */}
            <div className='ml-[18vw] h-fit w-fit mt-8'>
                <h1 className='font-bold text-[1.2vw]'>Current Fuel Price</h1>
                <Cfp/>
            </div>
            <div className='ml-[18vw] h-auto min-w-full pb-20'>
                <h1 className='font-bold text-2xl my-6'>Order Fuel</h1>
                <div className='w-3/4 min-h-[480px] h-auto rounded-lg border-black border-[1px] bg-white'>
                    <div className='h-2/5 flex justify-center items-center'>
                        <div className='h-auto w-auto px-14 py-6 border-black border-b-2 border-opacity-40 flex flex-col items-center'>
                            <div className='aspect-square rounded-full bg-green-100 h-24 flex items-center justify-center'>
                                <IoCheckmarkCircle className="text-green-600 bg-white rounded-full" size={50}/>
                            </div>
                            <h1 className='font-semibold text-lg opacity-50 mt-2'>Payment Sucess !</h1>
                            <h1 className='font-bold text-2xl mt-2'>R 3456</h1>
                        </div>
                    </div>
                    <div className='mt-3 py-4 px-10'>
                        <div className='h-auto w-full'>
                            <div className='flex justify-between mb-2'><span className='font-semibold text-lg opacity-55'>Ref Number</span><span className='font-semibold text-lg'>00000000000</span></div>
                            <div className='flex justify-between mb-2'><span className='font-semibold text-lg opacity-55'>Payment Time</span><span className='font-semibold text-lg'>21-11-2024, 07:31:59</span></div>
                            <div className='flex justify-between mb-2'><span className='font-semibold text-lg opacity-55'>Order ID</span><span className='font-semibold text-lg'>1234567890</span></div>
                            <div className='flex justify-between mb-2'><span className='font-semibold text-lg opacity-55'>Fuel Type</span><span className='font-semibold text-lg'>Disel 50ppm</span></div>
                            <div className='flex justify-between mb-2'><span className='font-semibold text-lg opacity-55'>Fuel amount in Liters</span><span className='font-semibold text-lg'>500 ltr</span></div>
                        </div>
                        <div className='mt-6 w-full h-auto'>
                            <div className='flex justify-between mb-2'><span className='font-semibold text-lg opacity-55'>Amount</span><span className='font-semibold text-lg'>R 5000</span></div>
                            <div className='flex justify-between mb-2'><span className='font-semibold text-lg opacity-55'>Credit balance</span><span className='font-semibold text-lg'>R 67853.23</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderFuelPayment;
