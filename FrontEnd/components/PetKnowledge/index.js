import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ButtonWrapper from '../ButtonWrapper';
import SpaceContent from '../SpaceContent';
import KnowledgeCard from './KnowledgeCard';

const PetKnowledge = () => {
  return (
    <div>
      <SpaceContent contentUp="You already know ?" contentDown="Useful pet knowledge" />
      <div className="grid laptop:grid-cols-3 laptop:gap-x-[20px] gap-y-5 ">
        <KnowledgeCard />
        <KnowledgeCard />
        <KnowledgeCard />
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

export default PetKnowledge;
