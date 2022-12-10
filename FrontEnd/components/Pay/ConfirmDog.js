import React, { useContext } from 'react';
import { UserContext } from '../Auth/UserProvider';
import CartCard from '../Cart/CartCard';

const ConfirmDog = () => {
    const { userId, cart, setCart } = useContext(UserContext);
    const totalItem = cart.length;
    const totalPrice = cart.reduce((totalPrice, item) => (totalPrice += parseInt(item.price)), 0);
    return (
        <div className="bg-white ">
            <p className="text-16-24-500 ">Giỏ hàng của bạn bao gồm:</p>
            <div className="-mt-3">
                {cart.map((dog) => (
                    <CartCard dog={dog} isPay/>
                ))}
            </div>
            <div className="text-16-24-500 mt-[40px]">
                <p>Số lượng sản phẩm : {totalItem}</p>
                <p className="mt-2">Tổng giá tiền : {totalPrice}</p>
            </div>
        </div>
    );
};

export default ConfirmDog;
