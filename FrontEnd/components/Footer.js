import React from 'react';

const Footer = () => {
  return (
    <div className="w-full pt-[80px] mt-[60px] relative">
      <div className="backgroundFooter w-[100vw] -ml-4 laptop:-ml-[60px] desktop:-ml-[130px] h-full colorBanner absolute -z-10 top-0"></div>
      <div className="w-full  bg-[#003459] p-4 laptop:p-8 rounded-[16px]">
        <div className="grid laptop:grid-cols-3 h-full gap-x-5">
          <div className=" text-[#FDFDFD] leading-8 capitalize text-[24px] pb-4 laptop:pb-0">
            Register now so you don't miss our programs
          </div>
          <div className="laptop:col-span-2 bg-[#FFFFFF] rounded-[14px] p-3 flex flex-col laptop:flex-row">
            <div className="rounded-[8px] mb-3 laptop:mb-0 laptop:mr-3 flex-1 h-[48px] border-[1px] border-[#99A2A5] py-[14px] px-[28px]">
              <input className="w-full" placeholder="Enter your Email" />
            </div>
            <div className="rounded-[8px] h-[48px] laptop:w-[164px] centreFlex bg-[#003459] text-16-24-500 text-[#FDFDFD]">
              Subcribe Now
            </div>
          </div>
        </div>
      </div>

      <div className=" py-[40px] flex flex-col laptop:flex-row justify-between">
        <div className="justify-between tablet:gap-[40px] flex text-16-24-500 text-[#00171F] tablet:justify-center  mb-5 laptop:mb-0">
          <div className="">Home</div>
          <div className="">Category</div>
          <div className="">About</div>
          <div className="">Contact</div>
        </div>
        <div className="gap-[40px] flex text-[#00171F] justify-center ">
          <img src="/images/footer/facebook.png" alt="" />
          <img src="/images/footer/twitter.png" alt="" />
          <img src="/images/footer/instagram.png" alt="" />
          <img src="/images/footer/youtube.png" alt="" />
        </div>
      </div>

      <div className=" w-full pt-10 pb-5 laptop:py-[50px] flex flex-col laptop:flex-row justify-between text-14-20-500 text-[#667479] items-center border-t-2">
        <div className="order-3 laptop:-order-1">© 2022 Monito. All rights reserved.</div>
        <div className="header__name flex flex-col items-center w-[115px]">
          <img
            src="/images/headerImages/nameShop.png"
            alt=""
            className="w-[115px]"
          />
          <img
            src="/images/headerImages/nameHashTag.png"
            alt=""
            className="w-[55px]"
          />
        </div>
        <div className="flex pt-8 pb-2 laptop:py-0">
          <div className="mr-4">Terms of Service </div>
          <div className="">  Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
