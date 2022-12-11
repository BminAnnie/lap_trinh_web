import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ButtonWrapper from '../ButtonWrapper';
import SpaceContent from '../SpaceContent';
import KnowledgeCard from './KnowledgeCard';

const PetKnowledge = () => {
    return (
        <div>
            <SpaceContent
                contentUp="You already know ?"
                contentDown="Useful pet knowledge"
                isHideButton={true}
            />
            <div className="grid laptop:grid-cols-3 laptop:gap-x-[20px] gap-y-5 ">
                <KnowledgeCard />
                <KnowledgeCard />
                <KnowledgeCard />
            </div>
        </div>
    );
};

export default PetKnowledge;
