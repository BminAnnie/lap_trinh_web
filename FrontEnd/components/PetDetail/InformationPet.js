import React, { useContext } from 'react';
import Path from '../Path';
import ButtonWrapper from '../ButtonWrapper';
import { UserContext } from '../Auth/UserProvider';
import notify from '../../helpers/notify';

const mapBreed = { small: 'Nhỏ', medium: 'Trung bình', large: 'Lớn' };
const InformationPet = ({ dog = {} }) => {
    const { userId, cart, setCart } = useContext(UserContext);
    const handleAddCart = () => {
        if (!userId) {
            notify('You must login to add your cart', 'error');
            return;
        }
        console.log(cart, userId);
        const newCart = cart.filter((dogInCart) => dogInCart.id !== dog.id);
        newCart.push(dog);
        localStorage.setItem(`${userId}cart`, JSON.stringify(newCart));
        setCart(newCart);
        console.log(newCart);
        notify('Your cart has been added');
    };
    if (!dog) return <></>;
    return (
        <div className="w-full">
            <Path />
            <div className="text-14-20-500 text-[#99A2A5] mt-5 hidden tablet:block">
                SKU #1000078
            </div>
            <div className="text-24-36-700">{dog?.name}</div>
            <div className="text-[20px] leading-8 font-bold">{dog?.price} $</div>
            <div className="flex mt-[18px]">
                <ButtonWrapper className="bg-[#003459] " onClick={handleAddCart}>
                    <p className="text-16-24-700 text-[#FDFDFD]">Add to cart</p>
                </ButtonWrapper>
            </div>

            <div className="flex text-[#002A48] mt-[10px] p-[5px] laptop:hidden">
                <p className="text-16-24-700">Information</p>
                <div className="flex items-center ml-[210px]">
                    <img src="/images/icons/shareIcon.png" alt="" className="h-[15px] w-[15px]" />
                    <p className="text-14-20-700  ml-[10px]">Share</p>
                </div>
            </div>

            <div className="w-full mt-[18px] text-[#667479]">
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Tên</div>
                    <p className='text-14-20-500"'>: {dog?.nameDog}</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Gender</div>
                    <p className='text-14-20-500"'>: {dog?.gender == 0 ? 'Nữ' : 'Nam'}</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Age</div>
                    <p className='text-14-20-500"'>: {dog?.age} Tuổi</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Kích thước</div>
                    <p className='text-14-20-500"'>: {mapBreed[dog?.breed]}</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Màu sắc</div>
                    <p className="text-14-20-500 capitalize">: {dog?.color}</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Đã tim vắc xin chưa</div>
                    <p className='text-14-20-500"'>: {dog?.isVaccinated == 0 ? 'Chưa' : 'Rồi'}</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Cert</div>
                    <p className='text-14-20-500"'>: {dog?.cert == 0 ? 'Chưa' : 'Rồi'} (MKA)</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Microchip</div>
                    <p className='text-14-20-500"'>: {dog?.microchip == 0 ? 'No' : 'Yes'}</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px]">
                    <div className="w-[190px] text-14-20-500">Published Date</div>
                    <p className='text-14-20-500"'>: 12-Oct-2022</p>
                </div>
                <div className="w-full py-3 pl-3 flex border-b-[1px] text-14-20-500">
                    <div className="w-[190px]">Additional Information</div>
                    <div className="flex ">
                        :
                        <div className="ml-1 flex flex-col whitespace-pre-line">
                            {dog?.infomationMore || 'Chưa có thêm thông tin'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationPet;
