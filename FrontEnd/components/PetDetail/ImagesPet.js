import React, { useState } from 'react';
import { MdOutlineFacebook } from 'react-icons/md';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

var IMAGES = [
    'https://i.insider.com/5e2717ccab49fd04106ab0a6?width=700',
    'https://www.petmoo.com/wp-content/uploads/2018/06/Beagle-Corgi-Mix-990x556.jpg',
    'https://thegoldensclub.com/wp-content/uploads/2021/08/Corgi-Beagle-Mix.jpg',
];
const ImagesPet = ({ dog = {} }) => {
    const newImages = [dog?.avatar, ...IMAGES];
    const images = newImages.map((image) => {
        return {
            original: image,
            thumbnail: image,
        };
    });
    if (!dog) return <></>;
    return (
        <div className="w-[100vw] -ml-[36px] tablet:w-full tablet:ml-0">
            <ImageGallery
                items={images || []}
                showPlayButton={false}
                renderFullscreenButton={(onClick) => (
                    <div
                        className="image-gallery-fullscreen-button absolute w-full h-full "
                        onClick={onClick}
                    ></div>
                )}
            />
            <div className="py-[9px] px-[12px] w-full h-[48px] rounded-[10px] colorBanner mt-[27px] hidden laptop:flex">
                <div className="flex items-center">
                    <img src="/images/icons/heart.png" alt="" className="w-[30px] h-[30px]" />
                    <p className="text-14-20-700 text-[#002A48] ml-3">
                        100% health guarantee for pets
                    </p>
                </div>
                <div className="flex items-center ml-5">
                    <img src="/images/icons/yellowDog.png" alt="" className="w-[30px] h-[30px]" />
                    <p className="text-14-20-700 text-[#002A48] ml-3">
                        100% guarantee of pet identification
                    </p>
                </div>
            </div>
            <div className="h-[32px] mt-[17px] py-[6px] px-[10px] hidden laptop:flex items-center">
                <div className="flex h-[20px] items-center">
                    <img src="/images/icons/shareIcon.png" alt="" className="h-[15px] w-[15px]" />
                    <p className="text-14-20-700 text-[#002A48] ml-[10px]">Share:</p>
                </div>
                <div className="h-[25px] flex items-center gap-[18px] ml-5">
                    <MdOutlineFacebook className="text-[22.5px] text-[#99A2A5]" />
                    <BsTwitter className="text-[22.5px] text-[#99A2A5]" />
                    <BsInstagram className="text-[22.5px] text-[#99A2A5]" />
                    <BsYoutube className="text-[22.5px] text-[#99A2A5]" />
                </div>
            </div>
        </div>
    );
};

export default ImagesPet;
