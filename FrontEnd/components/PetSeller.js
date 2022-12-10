import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import { MdNavigateNext } from 'react-icons/md';
const PetSeller = () => {
  return (
    <div className=" w-full relative">
      <div className="pt-[50px] tablet:pt-[104px] ">
        <p className="font-medium leading-[31px] text-[16px] text-[#000000]">
          Proud to be part of{' '}
          <span className="font-bold leading-8 text-[24px] text-[#003459]">Pet Sellers</span>
        </p>
      </div>
      <div className="w-full grid grid-cols-4 laptop:grid-cols-7 bg-white mt-[18px] justify-items-center items-center place-content-end">
        <div className="col-span-1">
          <img src="/images/brand/image4.png" alt="" />
        </div>
        <div className="col-span-2  laptop:col-span-1">
          <img src="/images/brand/image11.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/brand/image6.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/brand/image7.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/brand/image8.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/brand/image9.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/brand/image10.png" alt="" />
        </div>
      </div>
      <ButtonWrapper className="border-[2px]  border-[#003459] w-full flex justify-center mt-[30px] tablet:hidden">
        <div className="flex items-center" >
          <p className="text-14-20-500">View all our sellers</p>
          <MdNavigateNext className="ml-4" />
        </div>
      </ButtonWrapper>
    </div>
  );
};

export default PetSeller;
