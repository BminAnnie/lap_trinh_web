import React, { useContext } from 'react';
import { BsDot } from 'react-icons/bs';
import { UserContext } from '../Auth/UserProvider';

const CartCard = ({ dog = {}, isPay = false }) => {
    const { userId, cart, setCart } = useContext(UserContext);
    const removeCart = (e) => {
        e.preventDefault();
        if (!userId) {
            return;
        }
        const newCart = cart.filter((dogInCart) => dogInCart.id !== dog?.id);
        localStorage.setItem(`${userId}cart`, JSON.stringify(newCart));
        setCart(newCart);
    };
    return (
        <div className="flex relative mt-[20px]">
            <div className="avatar">
                <div className="w-20 rounded">
                    <img src={dog?.avatar} />
                </div>
            </div>
            <div className="PetCard__content p-1 laptop:p-2 flex flex-col">
                <div className="text-14-20-700 laptop:text-16-24-700 text-[#00171F]">
                    {dog?.nameDog}
                </div>
                <div className="flex my-1 text-[#667479] flex-col laptop:flex-row">
                    <div className="flex">
                        <p className="text-12-18-500">Giới tính</p>
                        <p className="text-12-18-700 ml-[6px]">{dog?.gender == 1 ? 'Nam' : 'Nữ'}</p>
                    </div>
                    <div className="w-[18px] h-[18px] mx-1 hidden laptop:block">
                        <BsDot />
                    </div>
                    <div className="flex">
                        <p className="text-12-18-500">Tuổi:</p>
                        <p className="text-12-18-700 ml-[6px]">{dog?.age} tuổi</p>
                    </div>
                </div>
                <div className="text-16-24-700 laptop:text-14-20-700 text-[#00171F]">{`${dog?.price} $`}</div>
            </div>
            {!isPay && (
                <div className="absolute right-0 bottom-1/2" onClick={removeCart}>
                    <button className="btn btn-sm btn-square btn-error btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartCard;
