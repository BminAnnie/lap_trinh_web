import { useEffect, useRef, useState } from 'react';
import ImagesPet from './ImagesPet';
import InformationPet from './InformationPet';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { loadDogs } from '../../Helper/access';
import 'photoswipe/dist/photoswipe.css';
import SpaceContent from '../SpaceContent';
import { PetCard } from '../BuyPet/PetCard';
import { useTranslation } from 'react-i18next';
const PetContent = ({ dog = {} }) => {
  const { t, i18n } = useTranslation();
  const [listDogs, setListDogs] = useState([]);
  const lovelyCustomer = useRef();
  const testWidth = useRef();
  const [percentScroll, setPercentScroll] = useState(0);
  const handleOnclick = (e) => {
    const percent = (e.pageX - testWidth.current.offsetLeft) / 77;
    setPercentScroll(percent);
    lovelyCustomer.current.scrollLeft =
      percent * (lovelyCustomer.current.scrollWidth - lovelyCustomer.current.clientWidth);
  };
  useEffect(() => {
    const handleScrollCustomer = (e) => {
      setPercentScroll(e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth));
    };
    lovelyCustomer.current.addEventListener('scroll', handleScrollCustomer);

    return () => {
      lovelyCustomer.current?.removeEventListener('scroll', handleScrollCustomer);
    };
  }, []);
  const handleSwitchPage = (e) => {
    e.preventDefault();
    router.push('/Category');
  };
  useEffect(() => {
    const getDogs = async () => {
      const data = await loadDogs({ page: 1, limit: 4 });
      setListDogs(data.dogs);
    };
    getDogs();
  }, []);

  console.log(listDogs);
  return (
    <div className="w-full -mt-[79px] tablet:mt-0 z-50">
      <div className="py-[22px] px-[20px] w-full grid  laptop:grid-cols-2 gap-7 bg-[#FDFDFD] rounded-[20px] tablet:border-[1px] border-[#EBEEEF]">
        <ImagesPet dog={dog} />
        <InformationPet dog={dog} />
      </div>

      <div className="py-[14px] px-[12px] w-full rounded-[10px] colorBanner mt-[27px] flex flex-col  laptop:hidden">
        <div className="flex  items-center">
          <img src="/images/icons/heart.png" alt="" className="w-[30px] h-[30px]" />
          <p className="text-14-20-700 text-[#002A48] ml-3">100% health guarantee for pets</p>
        </div>
        <div className="flex items-center mt-[18px]">
          <img src="/images/icons/yellowDog.png" alt="" className="w-[30px] h-[30px]" />
          <p className="text-14-20-700 text-[#002A48] ml-3">100% guarantee of pet identification</p>
        </div>
      </div>

      <div className="py-[26px] laptop:pl-8 flex flex-col mt-5">
        <div className="text-24-36-700 text-[#00171F]">Our lovely customer</div>
        <div className="mt-3 flex hideScroll gap-3 overflow-auto" ref={lovelyCustomer}>
          <Gallery>
            {dog?.customerImages?.map((image) => (
              <Item original={image} thumbnail={image} width="1024" height="680">
                {({ ref, open }) => (
                  <img
                    src={image}
                    ref={ref}
                    onClick={open}
                    className="w-[248px] object-cover rounded-[10px]"
                  />
                )}
              </Item>
            ))}
          </Gallery>
        </div>
        <div
          className="flex w-[100px] mx-auto mt-6 justify-between relative"
          onClick={(e) => handleOnclick(e)}
          ref={testWidth}
        >
          {Array(7)
            .fill(0)
            .map((e) => (
              <div className="w-[9px] h-[9px] bg-[#CCD1D2] rounded-full"></div>
            ))}
          <div
            className="absolute w-[23px] h-[9px] rounded-[7.5px] bg-[#003459]"
            style={{ left: `${percentScroll * 77}px` }}
          ></div>
        </div>
      </div>

      <SpaceContent
        contentUp={t('Pets.1')}
        contentDown={t('Pets.2')}
        handleOnclick={handleSwitchPage}
        isHideButton={true}
      />
      <div className="grid grid-cols-2 gap-x-[12px] laptop:grid-cols-3 laptop:gap-x-[40px] desktop:grid-cols-4 desktop:gap-x-[20px] gap-y-5 ">
        {listDogs
          ?.filter((dog, index) => index < 8)
          .map((dog) => (
            <PetCard dog={dog} />
          ))}
      </div>
    </div>
  );
};

export default PetContent;
