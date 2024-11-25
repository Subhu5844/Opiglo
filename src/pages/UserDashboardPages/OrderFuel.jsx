import React from 'react';
import UserNavbar from "../../components/userDasboard/UserNavbar";
import { Link } from "react-router-dom";
import Cfp from '../../components/userDasboard/Cfp';
import backgroundImage from '../../../public/bgimg.jpg';

const OrderFuel = () => {

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
                <div className='w-3/4 h-[460px] rounded-lg bg-white border-black border-[1px] overflow-hidden'>
                <form className="w-full h-auto mx-auto p-4">
                    <dl className="grid grid-cols-2 gap-x-12 px-10 py-4 gap-y-4">
                        {/* First Row */}
                        <div className="col-span-1">
                        <dt className="font-semibold">Select fuel type</dt>
                        <dd>
                            <select className="w-full p-2 border rounded bg-gray-100" defaultValue="">
                            <option value="" disabled>
                                Select Fuel Type
                            </option>
                            <option value="opt1">Option 1</option>
                            <option value="opt2">Option 2</option>
                            <option value="opt3">Option 3</option>
                            </select>
                        </dd>
                        </div>
                        <div className="col-span-1">
                        <dt className="font-semibold">Select depot</dt>
                        <dd>
                            <select className="w-full p-2 border rounded bg-gray-100" defaultValue="">
                            <option value="" disabled>
                                Select Depot
                            </option>
                            <option value="opt1">Option 1</option>
                            <option value="opt2">Option 2</option>
                            <option value="opt3">Option 3</option>
                            </select>
                        </dd>
                        </div>

                        {/* Second Row */}
                        <div className="col-span-1">
                        <dt className="font-semibold">Select driver</dt>
                        <dd>
                            <select className="w-full p-2 border rounded bg-gray-100" defaultValue="">
                            <option value="" disabled>
                                Select Driver
                            </option>
                            <option value="opt1">Option 1</option>
                            <option value="opt2">Option 2</option>
                            <option value="opt3">Option 3</option>
                            </select>
                        </dd>
                        </div>
                        <div className="col-span-1">
                        <dt className="font-semibold">Drivers whatsapp number</dt>
                        <dd>
                            <input
                                type="text"
                                className="w-full p-2 border rounded bg-gray-100"
                                placeholder="Drivers WhatsApp No."
                            />
                        </dd>
                        </div>

                        {/* Third Row */}
                        <div className="col-span-2">
                        <dt className="font-semibold">Select vechile</dt>
                        <dd>
                            <select className="w-full p-2 border rounded bg-gray-100" defaultValue="">
                            <option value="" disabled>
                                Select Vechile
                            </option>
                            <option value="opt1">Option 1</option>
                            <option value="opt2">Option 2</option>
                            <option value="opt3">Option 3</option>
                            </select>
                        </dd>
                        </div>

                        {/* Fourth Row */}
                        <div className="col-span-1">
                        <dt className="font-semibold">Fuel in liter</dt>
                        <dd>
                            <input
                            type="number"
                            className="w-full p-2 border rounded bg-gray-100"
                            placeholder="Fuel in Liter"
                            />
                        </dd>
                        </div>
                        <div className="col-span-1">
                        <dt className="font-semibold">Total Amount</dt>
                        <dd>
                            <input
                            type="text"
                            className="w-full p-2 border rounded bg-gray-100"
                            placeholder="Total Amount"
                            />
                        </dd>
                        </div>
                    </dl>
                    </form>
                    <div className='w-full flex justify-end items-center pr-14'>
                        <Link to={'/OrderFuel/Confirmation'} className='h-12 w-auto px-6 flex items-center justify-center text-white text-xl font-semibold rounded-lg bg-blue-600'>Place Order</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderFuel;
