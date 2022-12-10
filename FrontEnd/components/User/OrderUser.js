import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OrderUser = ({ idOwner = '' }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            if (!idOwner) return;
            const res = await axios.get('http://localhost:8080/orders/user', {
                params: { idOwner },
                withCredentials: true,
            });
            setOrders(res.data);
        };
        getOrders();
    }, [idOwner]);
    return (
        <div className="w-full mt-[80px]">
            <div className="overflow-x-auto w-full px-10 mt-[20px]">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Địa chỉ</th>
                            <th>Phương thức thanh toán</th>
                            <th>Ngày mua hàng</th>
                            <th>Số lượng sản phẩm</th>
                            <th>Tổng giá trị sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => {
                            return (
                                <tr>
                                    <td>{order.id}</td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{order.address}</div>
                                            <div className="text-sm opacity-50">Việt Nam</div>
                                        </div>
                                    </td>
                                    <td>{order.methodPayment}</td>
                                    <td>{order.dateOrder}</td>
                                    <th>{order.numberDogs}</th>
                                    <th>{order.numberDogs}</th>
                                    <th>
                                        <Link href={{ pathname: `/order/${order.id}` }}>
                                            <button className="btn btn-info btn-sm">
                                                Chi tiết
                                            </button>
                                        </Link>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderUser;
