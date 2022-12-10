import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ButtonWrapper from '../ButtonWrapper';
import SpaceContent from '../SpaceContent';
import { PetCard } from './PetCard';
import { useTranslation } from 'react-i18next';
import dogAPIs from '../../Api/dogs/dogApis';
const BuyPet = () => {
    const [dogs, setDogs] = useState([]);
    const { t, i18n } = useTranslation();
    const router = useRouter();
    useEffect(() => {
        const getAllDogs = async () => {
            const dogs = await dogAPIs.getDogs({ page: 1 });
            setDogs(dogs);
        };
        getAllDogs();
    }, []);
    const handleOnclick = (e) => {
        e.preventDefault();
        router.push('/Category');
    };
    return (
        <div>
            <SpaceContent
                contentUp={t('Pets.1')}
                contentDown={t('Pets.2')}
                handleOnclick={handleOnclick}
            />
            <div className="grid grid-cols-2 gap-x-[12px] laptop:grid-cols-3 laptop:gap-x-[40px] desktop:grid-cols-4 desktop:gap-x-[20px] gap-y-5 ">
                {dogs
                    .filter((dog, index) => index < 8)
                    .map((dog) => (
                        <PetCard dog={dog} />
                    ))}
            </div>
            <ButtonWrapper className="border-[2px]  border-[#003459] w-full flex justify-center mt-[30px] tablet:hidden">
                <div className="flex items-center" onClick={handleOnclick}>
                    <p className="text-14-20-500">{t('Button.3')}</p>
                    <MdNavigateNext className="ml-4" />
                </div>
            </ButtonWrapper>
        </div>
    );
};

export default BuyPet;
