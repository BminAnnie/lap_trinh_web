import React from 'react';

const Footer = () => {
  return (
    <div className="w-full pt-[50px] mt-[60px] relative">
      <div className="backgroundFooter w-[100vw] -ml-4 laptop:-ml-[60px] desktop:-ml-[130px] h-full colorBanner absolute -z-10 top-0"></div>
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
