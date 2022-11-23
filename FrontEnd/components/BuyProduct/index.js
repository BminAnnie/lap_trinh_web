import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ButtonWrapper from '../ButtonWrapper';
import SpaceContent from '../SpaceContent';
import { ProductCard } from './ProductCard';

const BuyProduct = () => {
  return (
    <div className='block'>
      <SpaceContent
        contentUp="Hard to choose right products for your pets?"
        contentDown="Our Products"
      />
      <div className="grid grid-cols-2 gap-x-[12px] laptop:grid-cols-3 laptop:gap-x-[40px] desktop:grid-cols-4 desktop:gap-x-[20px] gap-y-5">
        {Array(8)
          .fill(0)
          .map((e) => (
            <ProductCard />
          ))}
      </div>
      <ButtonWrapper className="border-[2px]  border-[#003459] w-full flex justify-center mt-[30px] tablet:hidden">
        <div className="flex items-center">
          <p className="text-14-20-500">View more</p>
          <MdNavigateNext className="ml-4" />
        </div>
      </ButtonWrapper>
    </div>
  );
};

export default BuyProduct;
