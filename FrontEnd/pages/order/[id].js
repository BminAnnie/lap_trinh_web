import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CartCard from '../../components/Cart/CartCard';

const order = () => {
    const router = useRouter();
    const [order, setOrder] = useState({});
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        const { id } = router.query;
        const getDog = async () => {
            const res = await axios.get('http://localhost:8080/order', {
                params: { id },
                withCredentials: true,
            });
            setOrder(res.data);
            const res1 = await axios.get('http://localhost:8080/dogs/order', {
                params: { idOrder: id },
                withCredentials: true,
            });
            setDogs(res1.data);
        };
        getDog();
    }, [router]);

    return (
        <div>
            <div className="mt-[50px] px-[50px] ">
                <p className="text-24-36-700 pb-[10px]">Dog Shop xin chào bạn</p>
                <div className="grid laptop:grid-cols-2  gap-x-[10px]">
                    <div className="bg-white ">
                        <p className="text-16-24-500 ">Giỏ hàng của bạn bao gồm:</p>
                        <div className="-mt-3">
                            {dogs.map((dog) => (
                                <CartCard dog={dog} isPay />
                            ))}
                        </div>
                        <div className="text-16-24-500 mt-[40px]">
                            <p>Số lượng sản phẩm : {order.numberDogs}</p>
                            <p className="mt-2">Tổng giá tiền : {order.totalValue}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-16-24-500">
                                    Phương thức thanh toán
                                </span>
                            </label>
                            <select
                                className="select  select-warning  select-bordered"
                                name="methodPayment"
                            >
                                <option value="cash">{order.methodPayment}</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-16-24-500">
                                    Ngày giao hàng
                                </span>
                            </label>
                            <select
                                className="select  select-warning  select-bordered"
                                name="methodPayment"
                            >
                                <option value="cash">{order.dateOrder}</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-16-24-500">
                                    Địa chỉ giao hàng
                                </span>
                            </label>
                            <select
                                className="select  select-warning  select-bordered"
                                name="methodPayment"
                            >
                                <option value="cash">{order.address}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default order;
