import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import ButtonWrapper from '../ButtonWrapper';

const Adoption = ({ className = '' }) => {
  return (
    <div className={`w-full bg-[#FFB775] rounded-[20px] relative ${className} mt-[30px]`}>
      <img
        src="/images/bannerGround/blockAdoption1.png"
        alt=""
        className="absolute h-full rounded-l-[20px] bottom-0 hidden laptop:block"
      />
      <img
        src="/images/bannerGround/blockAdoption2.png"
        alt=""
        className="absolute rounded-r-[20px] h-[80%] right-0 bottom-0 hidden laptop:block"
      />
       <div
          class="w-full h-full -top-0 bg-top bg-no-repeat bg-[length:100%_60%] absolute -z-0 laptop:hidden rounded-t-[20px]"
          style={{ backgroundImage: 'url(/images/bannerGround/OneMoreFriend2_1.png' }}
        ></div>
      {/* <div
        class="w-full h-[400px] -top-0 bg-top bg-no-repeat bg-[length:100%_auto] absolute -z-0 laptop:hidden rounded-t-[20px]"
        style={{ backgroundImage: 'url(/images/bannerGround/OneMoreFriend2_1.png' }}
      ></div>
      <div
        class="w-full h-full bottom-0 bg-no-repeat bg-[length:100%_30%] absolute bg-bottom -z-0 laptop:hidden rounded-b-[20px]"
        style={{ backgroundImage: 'url(/images/bannerGround/OneMoreFriend2_2.png' }}
      ></div> */}
      <div className="flex flex-col laptop:flex-row laptop:justify-between">
        <div className="flex flex-col z-10 w-full items-center p-5 laptop:p-0 laptop:w-[403px] laptop:items-start  laptop:order-1 laptop:ml-[85px] my-[20px] laptop:my-[64px]">
          <p className="font-[800] text-[36px] leading-[54px] tablet:text-[52px] tablet:leading-[68px] text-[#003459]">
            One More Friend
          </p>
          <p className="font-[700] text-24-36-700 tablet:text-[36px] tablet:leading-[54px] text-[#003459] mt-[2px] mb-2">
            Thousands more fun!
          </p>
          <p className="text-12-18-500 text-[#242B33] mb-6 text-center tablet:text-left">
            Having a pet means you have more joy, a new friend, a happy person who will always be
            with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="flex">
            <ButtonWrapper className="border-[2px]  border-[#003459] ">
              <div className="flex items-center">
                <p className="text-12-18-700 tablet:text-16-24-700 text-[#003459] mr-[10px]">
                  View Intro
                </p>
                <BsPlayCircle className="text-[16px] tablet:text-[21px]" />
              </div>
            </ButtonWrapper>
            <ButtonWrapper className="border-[2px] bg-[#003459] ml-4">
              <p className="text-12-18-700 tablet:text-16-24-700 text-[#FDFDFD]">Explore Now</p>
            </ButtonWrapper>
          </div>
        </div>
        <div
          class="order-2 laptop:flex-1 h-[calc(100vw-32px)]  -rotate-90 laptop:rotate-0 laptop:h-auto  laptop:w-full laptop:order-1 z-30 bg-right bg-no-repeat bg-[length:100%_100%] "
          style={{ backgroundImage: 'url(/images/bannerGround/shakeAdoption.png' }}
        ></div>
      </div>
    </div>
  );
};

// () => {
//   return (
//     <div className="w-full bg-[#FFB775] h-[378px] rounded-[20px] mt-[40px] relative hidden laptop:block">
//       <img
//         src="/images/bannerGround/blockAdoption1.png"
//         alt=""
//         className="absolute bottom-0 left-0"
//       />
//       <img
//         src="/images/bannerGround/blockAdoption2.png"
//         alt=""
//         className="absolute bottom-0 right-0 "
//       />
//       <img
//         src="/images/bannerGround/shakeAdoption.png"
//         alt=""
//         className="absolute right-0 bottom-0"
//       />
//       <div className="flex flex-col z-10 w-[450px] absolute items-start top-[60px] left-[70px]">
//         <div className="flex items-center">
//           <p className="font-[800] text-[52px] leading-[68px] text-[#003459]">
//             Adoption
//           </p>
//           <img src="/images/bannerGround/feet.png" alt="" className='w-[42px] h-[38px] ml-4'/>
//         </div>
//         <p className="font-[700] text-[36px] leading-[54px] text-[#003459] mt-[2px] mb-2">
//           We Need Help. So Do They.
//         </p>
//         <p className="text-12-18-500 text-[#242B33] text-left w-[180px]">
//           Adopt a pet and give it a home,
//         </p>
//         <p className="text-12-18-500 text-[#242B33] text-left mb-[42px] ">
//           it will be love you back unconditionally.
//         </p>
//         <div className="flex">
//           <ButtonWrapper className="border-[2px] bg-[#003459] mr-4">
//             <p className="text-16-24-500 text-[#FDFDFD]">Explore Now</p>
//           </ButtonWrapper>
//           <ButtonWrapper className="border-[2px]  border-[#003459] ">
//             <div className="flex items-center">
//               <p className="text-16-24-500 text-[#003459] mr-[10px]">
//                 View Intro
//               </p>
//               <BsPlayCircle className="text-[21px]" />
//             </div>
//           </ButtonWrapper>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Adoption;
