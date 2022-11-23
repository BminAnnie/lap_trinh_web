import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import ButtonWrapper from '../ButtonWrapper';

const OneMoreFriend = ({className=''}) => {
  return (
    <div className={`w-full bg-[#003459] rounded-[20px] relative ${className}`}>
      <img
        src="/images/bannerGround/block9.png"
        alt=""
        className="absolute rounded-bl-[20px] bottom-0 hidden laptop:block"
      />
      <img
        src="/images/bannerGround/block10.png"
        alt=""
        className="absolute rounded-r-[20px] h-full right-0 hidden laptop:block"
      />
      <div
          class="w-full h-full -top-0 bg-top bg-no-repeat bg-[length:100%_70%] absolute -z-0 laptop:hidden rounded-t-[20px]"
          style={{ backgroundImage: 'url(/images/bannerGround/OneMoreFriend2_1.png' }}
        ></div>
      <div
          class="w-full h-full bottom-0 bg-no-repeat bg-[length:100%_30%] absolute bg-bottom -z-0 laptop:hidden rounded-b-[20px]"
          style={{ backgroundImage: 'url(/images/bannerGround/OneMoreFriend2_2.png' }}
        ></div>
      <div className="flex flex-col laptop:flex-row laptop:justify-between">
      <img
        src="/images/bannerGround/girl-and-dog.png"
        alt=""
        className="order-2 laptop:order-1 z-10 laptop:h-[342px] laptop:self-end" 
      />
      <div className="flex flex-col z-10 w-full items-center p-5 laptop:p-0 laptop:w-[403px] laptop:items-end laptop:text-right laptop:order-1 laptop:mr-[85px] my-[20px] laptop:my-[64px]">
        <p className="font-[800] text-[36px] leading-[54px] tablet:text-[52px] tablet:leading-[68px] text-[#003459] capitalize">
          One More Friend
        </p>
        <p className="font-[700] text-24-36-700 tablet:text-[36px] tablet:leading-[54px] text-[#003459] mt-[2px] mb-2">
          Thousands more fun!
        </p>
        <p className="text-12-18-500 text-[#242B33] mb-6 text-center tablet:text-left">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex">
          <ButtonWrapper className="border-[2px]  border-[#003459] ">
            <div className="flex items-center">
              <p className="text-12-18-700 tablet:text-16-24-700 text-[#003459] mr-[10px]">View Intro</p>
              <BsPlayCircle className="text-[16px] tablet:text-[21px]" />
            </div>
          </ButtonWrapper>
          <ButtonWrapper className="border-[2px] bg-[#003459] ml-4">
            <p className="text-12-18-700 tablet:text-16-24-700 text-[#FDFDFD]">Explore Now</p>
          </ButtonWrapper>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OneMoreFriend;
