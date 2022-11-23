import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import { MdNavigateNext } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
const SpaceContent = ({
  contentUp = '',
  contentDown = '',
  handleOnclick = () => {},
  isHideButton = false,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="h-[114px] tablet:h-[150px] w-full relative">
      <div className="pt-[40px] tablet:pt-[60px]">
        <p className="text-16-24-500 text-[#000000]">{contentUp}</p>
        <p className="mt-[2px] font-bold leading-8 text-[24px] text-[#003459]">{contentDown}</p>
      </div>
      {!isHideButton && (
        <ButtonWrapper className="border-[2px]  border-[#003459] absolute right-0 bottom-7 hidden tablet:block">
          <div className="flex items-center" onClick={handleOnclick}>
            <p className="text-14-20-500">{t('Button.3')}</p>
            <MdNavigateNext className="ml-4" />
          </div>
        </ButtonWrapper>
      )}
    </div>
  );
};

export default SpaceContent;
