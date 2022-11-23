import React from 'react';

const KnowledgeCard = () => {
  return (
    <div className="w-full  rounded-[12px] shadowCard bg-[#ffffff] p-2 flex flex-col">
        <img src="images/knowledge/image1.png" alt="" className='w-full '/>
      <div className="knowledge__content p-2 overflow-clip">
        <div className="h-[20px] px-[10px] py-[2px] bg-[#00A7E7] rounded-[28px] inline-block text-center text-[10px] leading-4 text-[#FDFDFD]">
          Pet knowledge
        </div>
        <p className="mt-3 text-16-24-700 text-[#00171] w-full">
          What is a Pomeranian? How to Identify Pomeranian Dogs
        </p>
        <p className="font-[400] text-[14px] leading-5 text-[#242B33] laptop:max-w-[348px] overflow-clip break-words">
          The Pomeranian, also known as the Pomeranian (Pom dog), is always in
          the top of the cutest pets. Not only that, the small, lovely, smart,
          friendly, and skillful circus dog breed.
        </p>
      </div>
    </div>
  );
};

export default KnowledgeCard;
