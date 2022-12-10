import Link from 'next/link';
import React from 'react';
import { BsDot } from 'react-icons/bs';
export const PetCard = ({ dog }) => {
  return (
    <Link
      href={{
        pathname: '/pet/[id]',
        query: { id: dog?.id },
      }}
    >
      <div className="w-full h-full flex flex-col p-2 bg-[#FDFDFD] shadowCard">
        <img src={dog?.avatar} alt="" className="w-full h-[70%] object-cover rounded-md" />
        <div className="PetCard__content p-1 laptop:p-2 flex flex-col">
          <div className="text-14-20-700 laptop:text-16-24-700 text-[#00171F]">{dog?.nameDog}</div>
          <div className="flex my-1 text-[#667479] flex-col laptop:flex-row">
            <div className="flex">
              <p className="text-12-18-500">Giới tính</p>
              <p className="text-12-18-700 ml-[6px]">{dog?.gender == 1 ? 'Nam' : 'Nữ'}</p>
            </div>
            <div className="w-[18px] h-[18px] mx-1 hidden laptop:block">
              <BsDot />
            </div>
            <div className="flex">
              <p className="text-12-18-500">Tuổi:</p>
              <p className="text-12-18-700 ml-[6px]">{dog?.age} tuổi</p>
            </div>
          </div>
          <div className="text-16-24-700 laptop:text-14-20-700 text-[#00171F]">{`${dog?.price} $`}</div>
        </div>
      </div>
    </Link>
  );
};
