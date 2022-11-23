import React from 'react';

const Background = () => {
  return (
    <div className="absolute w-[calc(100vw)] h-[calc(100%+57px)] laptop:h-[calc(100%+120px)] colorBanner top-0 -z-30  -mt-[57px]  overflow-hidden -ml-4 laptop:-ml-[60px] desktop:-ml-[130px] laptop:-mt-[120px] ">
      <div className="block1 absolute w-[635px] h-[635px] bg-[#F7DBA7] rotate-[25.23deg] rounded-[99px] -top-[585px] -left-[240px]"></div>
      <div className="block2 absolute w-[67px] h-[67px] bg-[#F7DBA7] rotate-[25.23deg] rounded-[20px] top-[163px] left-[112px]"></div>
      <div className="block3 absolute w-[27px] h-[27px] bg-[#F7DBA7] -rotate-[23deg] rounded-[9px] top-[200px] right-[719px]"></div>
      <div className="block4 absolute w-[22px] h-[22px] bg-[#002A48] -rotate-[43deg] rounded-[6px] top-[209px] right-[720px]"></div>
      <div className="block5 absolute w-[15px] h-[15px] bg-[#F7DBA7] rotate-[21deg] rounded-[4px] top-[148px] right-[680px]"></div>
      <div className="block6 absolute w-[635px] h-[635px] bg-[#F7DBA7] rotate-[56.47deg] rounded-[99px] top-[690px] left-[30px] opacity-40"></div>
      <div className="block7 absolute w-[635px] h-[635px] bg-[#003459] rotate-[9.35deg] rounded-[99px] top-[500px]  -right-[150px] tablet:right-0 tablet:top-[400px] laptop:right-[179px] laptop:top-[350px] "></div>
      <div className="block7 absolute w-[635px] h-[635px] bg-[#F7DBA7] rotate-[25.23deg] rounded-[99px] top-[450px] -right-[210px] tablet:-right-[90px] tablet:top-[350px] laptop:top-[300px]  laptop:right-[120px]"></div>

    </div>
  );
};

export default Background;
