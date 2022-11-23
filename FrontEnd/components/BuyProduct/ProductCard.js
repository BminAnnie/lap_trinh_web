import React from 'react';
import { BsDot } from 'react-icons/bs';
export const ProductCard = () => {
  return (
    <div className="w-full flex flex-col p-2 bg-[#FDFDFD] shadowCard">
      <img
        src="/images/products/image5.png"
        alt=""
        className="w-full"
      />
      <div className="PetCard__content p-2 flex flex-col">
        <div className="text-16-24-700 text-[#00171F]">
        NaturVet Dogs - Omega-Gold Plus Salmon Oil
        </div>
        <div className="flex my-1 text-[#667479] flex-col laptop:flex-row">
            <div className="flex">
              <p className="text-12-18-500">Gene:</p>
              <p className="text-12-18-700 ml-[6px]">Female</p>
            </div>
            <div className="w-[18px] h-[18px] mx-1 hidden laptop:block">
              <BsDot />
            </div>
            <div className="flex">
              <p className="text-12-18-500">Age:</p>
              <p className="text-12-18-700 ml-[6px]">2 Months</p>
            </div>
          </div>
        <div className="text-14-20-700 text-[#00171F]">6.900.000 VND</div>
        <div className="w-full flex items-center py-2 mt-[10px] bg-[#FCEED5] rounded-lg px-4">
          <img src="/images/products/HopQua.png" alt="" className="" />
          <div className="w-[25px] h-[18px] centreFlex">
            <BsDot />
          </div>
          <p className='text-14-20-700 text-[#002A48]'>Free Toy & Free Shaker</p>
        </div>
      </div>
    </div>
  );
};
