import React from 'react';
import Path from '../Path';
import { TbMessageDots } from 'react-icons/tb';
import ButtonWrapper from '../ButtonWrapper';
const InformationPet = ({ dog = {} }) => {
  if (!dog) return <></>;
  return (
    <div className="w-full">
      <Path />
      <div className="text-14-20-500 text-[#99A2A5] mt-5 hidden tablet:block">SKU #1000078</div>
      <div className="text-24-36-700">{dog?.name}</div>
      <div className="text-[20px] leading-8 font-bold">{dog?.price} $</div>
      <div className="flex mt-[18px]">
        <ButtonWrapper className="bg-[#003459] ">
          <p className="text-16-24-700 text-[#FDFDFD]">Contact us</p>
        </ButtonWrapper>
        <ButtonWrapper className="text-[#002A48] flex items-center border-2 border-[#002A48] ml-[18px]">
          <TbMessageDots className="text-[24px]" />
          <p className="text-16-24-700 ml-[15px] ">Chat with Monito</p>
        </ButtonWrapper>
      </div>

      <div className="flex text-[#002A48] mt-[10px] p-[5px] laptop:hidden">
        <p className="text-16-24-700">Information</p>
        <div className="flex items-center ml-[210px]">
          <img src="/images/icons/shareIcon.png" alt="" className="h-[15px] w-[15px]" />
          <p className="text-14-20-700  ml-[10px]">Share</p>
        </div>
      </div>

      <div className="w-full mt-[18px] text-[#667479]">
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">SKU</div>
          <p className='text-14-20-500"'>: #1000078</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Gender</div>
          <p className='text-14-20-500"'>: {dog?.sex == 0 ? 'Female' : 'Male'}</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Age</div>
          <p className='text-14-20-500"'>: 2 Months</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Size</div>
          <p className='text-14-20-500"'>: Small</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Color</div>
          <p className='text-14-20-500"'>: {dog?.colors?.join(' & ')}</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Vaccinated</div>
          <p className='text-14-20-500"'>: {dog?.vaccinated == 0 ? 'No' : 'Yes'}</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Dewormed</div>
          <p className='text-14-20-500"'>: {dog?.dewormed == 0 ? 'No' : 'Yes'}</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Cert</div>
          <p className='text-14-20-500"'>: {dog?.cert == 0 ? 'No' : 'Yes'} (MKA)</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">microchip</div>
          <p className='text-14-20-500"'>: {dog?.microchip == 0 ? 'No' : 'Yes'}</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Location</div>
          <p className='text-14-20-500"'>: {dog?.location}</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px]">
          <div className="w-[190px] text-14-20-500">Published Date</div>
          <p className='text-14-20-500"'>: 12-Oct-2022</p>
        </div>
        <div className="w-full py-3 pl-3 flex border-b-[1px] text-14-20-500">
          <div className="w-[190px]">Additional Information</div>
          <div className="flex ">
            :<div className="ml-1 flex flex-col whitespace-pre-line">{dog?.addition}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPet;


