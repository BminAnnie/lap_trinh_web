import React, { useContext, useEffect, useState } from 'react';
import ButtonWrapper from '../ButtonWrapper';
import { BsPlayCircle } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import {UserContext} from '../Auth/UserProvider';
import ReactPlayer from 'react-player';
const Banner = () => {
    const { t, i18n } = useTranslation();
    const { userId } = useContext(UserContext);
    const [url, setUrl] = useState('');
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setUrl('https://www.youtube.com/watch?v=qB-33_qPXg0&feature=youtu.be');
    }, []);
    return (
        <div className="grid grid-cols-1 laptop:grid-cols-12 w-full h-auto laptop:h-[595px]">
            <div className="laptop:col-span-5 flex flex-col">
                <div className="font-[800] text-[#002A48] text-[46px] leading-[60px] tablet:text-[60px] tablet:leading-[68px] mt-[35px] tablet:mt-[80px]">
                    {t('HeroBanner.1')}
                </div>
                <div className="font-bold text-[#002A48] text-[28px] leading-[38px] tablet:leading-[60px] tablet:text-[46px] mt-1">
                    {t('HeroBanner.2')}
                </div>
                <div className="text-12-18-500 tablet:text-16-24-700 text-[#242B33] mt-3 tablet:mt-6">
                    {t('HeroBanner.3')}
                </div>
                <div className="mt-[34px] flex">
                    <label htmlFor="my-modal-intro" className="">
                        <ButtonWrapper className="border-[2px]  border-[#003459] hover:opacity-80 cursor-pointer hover:bg-orange-200">
                            <div className="flex items-center">
                                <p className="text-12-18-700 tablet:text-16-24-700 text-[#003459] mr-3">
                                    {t('Button.1')}
                                </p>
                                <BsPlayCircle className="text-[16px] tablet:text-[21px]" />
                            </div>
                        </ButtonWrapper>
                    </label>
                    <input
                        type="checkbox"
                        id="my-modal-intro"
                        className="modal-toggle"
                        onChange={() => setOpen((pre) => !pre)}
                    />
                    <label htmlFor="my-modal-intro" className="modal cursor-pointer">
                        <label className="relative" htmlFor="">
                            <div className="w-[70vw] flex justify-center rounded-md">
                                {url ? (
                                    <ReactPlayer
                                        url={url}
                                        playing={open}
                                        controls={true}
                                        width={800}
                                        height={600}
                                        className="w-[800px]"
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                        </label>
                    </label>
                    {!userId && (
                        <label htmlFor="my-modal-4" className="ml-4">
                            <div className="h-[44px] bg-[#003459] rounded-[57px]  min-w-[160px] laptop:hidden centreFlex cursor-pointer">
                                <div className="px-[28px] text-16-24-700 text-[#FDFDFD]">
                                    {'Login Now'}
                                </div>
                            </div>
                        </label>
                    )}
                </div>
            </div>
            <div className="laptop:col-span-7 h-full">
                <div
                    class="w-full h-[400px] bottom-0 bg-no-repeat bg-[length:auto_400px] laptop:h-full laptop:bg-[length:100%_auto] bg-bottom "
                    style={{ backgroundImage: 'url(/images/bannerGround/women.png' }}
                ></div>
            </div>
        </div>
    );
};

export default Banner;
