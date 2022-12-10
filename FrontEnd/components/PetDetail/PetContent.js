import { useEffect, useRef, useState } from 'react';
import ImagesPet from './ImagesPet';
import InformationPet from './InformationPet';
import 'photoswipe/dist/photoswipe.css';
import SpaceContent from '../SpaceContent';
import { PetCard } from '../BuyPet/PetCard';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
const PetContent = ({ dog = {} }) => {
    const { t, i18n } = useTranslation();
    const [dogs, setDogs] = useState([]);
    const handleSwitchPage = (e) => {
        e.preventDefault();
        router.push('/Category');
    };
    useEffect(() => {
        const getAllDogs = async () => {
            const res = await axios.get('http://localhost:8080/dogs', { params: { page: 1 } });
            setDogs(res.data);
        };
        getAllDogs();
    }, []);
    return (
        <div className="w-full -mt-[79px] tablet:mt-0 z-50">
            <div className="py-[22px] px-[20px] w-full grid  laptop:grid-cols-2 gap-7 bg-[#FDFDFD] rounded-[20px] tablet:border-[1px] border-[#EBEEEF]">
                <ImagesPet dog={dog} />
                <InformationPet dog={dog} />
            </div>

            <div className="py-[14px] px-[12px] w-full rounded-[10px] colorBanner mt-[27px] flex flex-col  laptop:hidden">
                <div className="flex  items-center">
                    <img src="/images/icons/heart.png" alt="" className="w-[30px] h-[30px]" />
                    <p className="text-14-20-700 text-[#002A48] ml-3">
                        100% health guarantee for pets
                    </p>
                </div>
                <div className="flex items-center mt-[18px]">
                    <img src="/images/icons/yellowDog.png" alt="" className="w-[30px] h-[30px]" />
                    <p className="text-14-20-700 text-[#002A48] ml-3">
                        100% guarantee of pet identification
                    </p>
                </div>
            </div>

            <SpaceContent
                contentUp={t('Pets.1')}
                contentDown={t('Pets.2')}
                handleOnclick={handleSwitchPage}
                isHideButton={true}
            />
            <div className="grid grid-cols-2 gap-x-[12px] laptop:grid-cols-3 laptop:gap-x-[40px] desktop:grid-cols-4 desktop:gap-x-[20px] gap-y-5 ">
                {dogs
                    ?.filter((dog, index) => index < 4)
                    .map((dog) => (
                        <PetCard dog={dog} />
                    ))}
            </div>
        </div>
    );
};

export default PetContent;
