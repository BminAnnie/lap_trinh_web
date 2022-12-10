import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OrdersTable = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getAllOrders = async () => {
            const res = await axios.get('http://localhost:8080/orders', { withCredentials: true });
            setOrders(res.data);
        };
        getAllOrders();
    }, []);
    return (
        <div className="w-full ">
            <div className="flex justify-between items-center  px-[40px]">
                <div className="btn btn-warning btn-wide">Tất cả đơn hàng</div>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-info" />
                        <button className="btn btn-warning">
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-full px-10 mt-[40px]">
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
                                    <td className="capitalize">{order.methodPayment}</td>
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

export default OrdersTable;
