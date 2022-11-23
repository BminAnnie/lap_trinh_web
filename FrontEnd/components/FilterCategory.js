import React, { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
const colors = [
  {
    nameColor: 'Red',
    code: 'bg-[#FF564F]',
  },
  {
    nameColor: 'Apricot',
    code: 'bg-[#00171F]',
  },
  {
    nameColor: 'Black',
    code: 'bg-[#242B33]',
  },
  {
    nameColor: 'Black & White',
    code: 'colorBlackAndWhite',
  },
  {
    nameColor: 'Silver',
    code: 'bg-[#CECECE]',
  },
  {
    nameColor: 'Tan',
    code: 'bg-[#FFF7CE]',
  },
];

const FilterCategory = ({ setQueries }) => {
  const [filterSex, setFilterSex] = useState(null);
  const [filterBreed, setFilterBreed] = useState('');
  const [filterColors, setFilterColors] = useState([]);

  useEffect(() => {
    setQueries((pre) => ({
      ...pre,
      size: filterBreed.toLowerCase(),
      colors: filterColors,
      sex: filterSex,
    }));
  }, [filterBreed, filterColors, filterSex]);

  const handleModifyColor = (nameColor) => {
    if (filterColors.includes(nameColor)) {
      setFilterColors(filterColors.filter((color) => color !== nameColor));
    } else setFilterColors([...filterColors, nameColor]);
  };
  return (
    <div className="hidden tablet:block">
      <div className="filter__name leading-8 text-[24px] font-bold text-[#003459] h-[85px] flex items-center ">
        Filter
      </div>

      <div className="filter__gender w-full py-4 border-b-[1px] border-[#EBEEEF]">
        <p className="text-16-24-700 text-[#00171F] mb-[10px]">Gender</p>
        <div className="flex mb-[10px]">
          <div className="boxCheck" onClick={() => setFilterSex(filterSex === true ? null : true)}>
            {filterSex === true && <TiTick className="pb-[2px] bg-blue-400 rounded " />}
          </div>
          <p className="text-14-20-500 text-[#00171F]">Male</p>
        </div>
        <div className="flex mb-[10px]">
          <div className="boxCheck" onClick={() => setFilterSex(filterSex === false ? null : false)}>
            {filterSex === false && <TiTick className="pb-[2px] bg-blue-400 rounded" />}
          </div>
          <p className="text-14-20-500 text-[#00171F]">Female</p>
        </div>
      </div>

      <div className="filter__color w-full py-4 border-b-[1px] border-[#EBEEEF]">
        <p className="text-16-24-700 text-[#00171F] mb-[10px]">Color</p>
        {colors.map((color) => (
          <div className="flex mb-[10px] ">
            <div className="boxCheck " onClick={(e) => handleModifyColor(color.nameColor)}>
              {filterColors.includes(color.nameColor) && (
                <TiTick className="pb-[2px] bg-blue-400 rounded " />
              )}
            </div>
            <div className={`colorBall ${color.code}`}></div>
            <p className="text-14-20-500 text-[#00171F]">{color.nameColor}</p>
          </div>
        ))}
      </div>

      <div className="filter__price w-full py-4 border-b-[1px] border-[#EBEEEF]">
        <p className="text-16-24-700 text-[#00171F] mb-[10px]">Price</p>
        <div className="flex mb-[10px] ">
          <div className="w-1/2 p-[10px] border-b-[1px] border-[#EBEEEF] flex justify-between items-center">
            <p>Min</p>
            <img src="/images/icons/priceScale.png" alt="" />
          </div>
          <div className="w-1/2 p-[10px] border-b-[1px] border-[#EBEEEF] flex justify-between items-center">
            <p>Max</p>
            <img src="/images/icons/priceScale.png" alt="" />
          </div>
        </div>
      </div>

      <div className="filter__breed w-full py-4 border-b-[1px] border-[#EBEEEF]">
        <p className="text-16-24-700 text-[#00171F] mb-[10px]">Breed</p>
        <div className="flex mb-[10px]">
          <div
            className="boxCheck"
            onClick={() => setFilterBreed(filterBreed === 'Small' ? '' : 'Small')}
          >
            {filterBreed === 'Small' && <TiTick className="pb-[2px] bg-blue-400 rounded " />}
          </div>
          <p className="text-14-20-500 text-[#00171F]">Small</p>
        </div>
        <div className="flex mb-[10px]">
          <div
            className="boxCheck"
            onClick={() => setFilterBreed(filterBreed === 'Medium' ? '' : 'Medium')}
          >
            {filterBreed === 'Medium' && <TiTick className="pb-[2px] bg-blue-400 rounded " />}
          </div>
          <p className="text-14-20-500 text-[#00171F]">Medium</p>
        </div>
        <div className="flex mb-[10px]">
          <div
            className="boxCheck"
            onClick={() => setFilterBreed(filterBreed === 'Large' ? '' : 'Large')}
          >
            {filterBreed === 'Large' && <TiTick className="pb-[2px] bg-blue-400 rounded " />}
          </div>
          <p className="text-14-20-500 text-[#00171F]">Large</p>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
