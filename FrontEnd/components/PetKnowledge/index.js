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
                <KnowledgeCard contentUp='Why is my doggie peeing everywhere?'
                contentDown='Doggies urinating uncontrollably can be the sign of diseases. It may be a urinary tract infection or gastrointestinal problem, or even diabetes. Bring your doggie to the vet for a check-up.'
                src='/images/knowledge/pee.png'
                />
                <KnowledgeCard contentUp='What is your dog thinking?'
                contentDown='You can read form their eyes, ears or tails. If they look straight means they are confident, if their mount are painting, that means they are very excited.'
                src='/images/knowledge/read.png'/>
                <KnowledgeCard contentUp='Cat paw care tips'
                contentDown='Moisturizing
                If your kitty’s paw pads become irritated or cracked, help your cats drink more and also try moisturizing them with olive, coconut or another food-quality oil that will be safe for them to lick.'
                src='/images/knowledge/care.png'/>
            </div>
        </div>
    );
};

export default PetKnowledge;
