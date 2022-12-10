import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CartCard from './CartCard';
import { UserContext } from '../Auth/UserProvider';
import Link from 'next/link';
const Cart = () => {
    const { userId, cart, setCart } = useContext(UserContext);
    const totalItem = cart.length;
    const totalPrice = cart.reduce((totalPrice, item) => (totalPrice += parseInt(item.price)), 0);
    return (
        <div className="bg-white px-[20px] py-[10px] rounded-lg min-h-[300px]">
            <p className="text-24-36-700 pb-[10px]">Giỏ hàng của bạn bao gồm:</p>
            <div className="max-h-[350px] overflow-y-scroll hideScroll">
                {cart.map((dog) => (
                    <CartCard dog={dog} />
                ))}
            </div>
            <div className="text-[20px] font-semibold leading-6 mt-[40px]">
                <p>Số lượng sản phẩm : {totalItem}</p>
                <p className="mt-2">Tổng giá tiền : {totalPrice}</p>
            </div>
            <div className="flex justify-end mt-[10px]">
                <a href='/payment'>
                    <div className="btn  btn-warning">Đi đến trang thanh toán</div>
                </a>
            </div>
        </div>
    );
};

export default Cart;
