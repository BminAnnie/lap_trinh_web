import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../Auth/UserProvider';
import ConfirmDog from './ConfirmDog';
import ConfirmOther from './ConfirmOther';

const Payment = () => {
    const router = useRouter();
    const { userId, cart, setCart } = useContext(UserContext);
    const notify = (content = 'Your order success!') =>
        toast.info(content, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    const [params, setParams] = useState({});
    const numberDogs = cart.length;
    const totalValue = cart.reduce((totalValue, item) => (totalValue += parseInt(item.price)), 0);
    const handleSubmit = async () => {
        if (!userId || cart.length <= 0) return;
        const newParams = { ...params, numberDogs, totalValue, dogs: cart, idOwner: userId };
        axios.defaults.withCredentials = true;
        const res = await axios.post('http://localhost:8080/order/sentOrder', newParams);
        notify();
        setTimeout(() => {
            router.push('/');
            localStorage.setItem(`${userId}cart`, '');
            setCart([]);
        }, 2000);
    };
    return (
        <div className="mt-[50px] px-[50px] ">
            <p className="text-24-36-700 pb-[10px]">Dog Shop xin chào bạn</p>
            <div className="grid laptop:grid-cols-2  gap-x-[100px]">
                <ConfirmDog />
                <ConfirmOther params={params} setParams={setParams} />
            </div>
            <div className="flex justify-end mt-[10px]">
                <div className="btn  btn-warning" onClick={handleSubmit}>
                    Đặt đơn hàng
                </div>
            </div>
        </div>
    );
};

export default Payment;
