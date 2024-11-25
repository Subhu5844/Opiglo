import React from 'react';

const Cfp = () => {
  return (
    <div className='h-36 w-96 mt-3 border-black border-[1px] rounded-lg grid grid-cols-2 grid-rows-4 overflow-hidden'>
        <div className="bg-gray-400/30 flex items-center justify-center font-bold">Fuel Type</div>
        <div className="bg-gray-400/30 flex items-center justify-center font-bold">Fuel Price</div>
        <div className="bg-gray-200/30 flex items-center justify-center">Disel 50ppm</div>
        <div className="bg-gray-200/30 flex items-center justify-center">R1.1200/L</div>
        <div className="bg-gray-200/30 flex items-center justify-center">Disel 500ppm</div>
        <div className="bg-gray-200/30 flex items-center justify-center">R1.1200/L</div>
        <div className="bg-gray-200/30 flex items-center justify-center">Disel 10ppm</div>
        <div className="bg-gray-200/30 flex items-center justify-center">R1.1200/L</div>
    </div>
  )
}

export default Cfp;
