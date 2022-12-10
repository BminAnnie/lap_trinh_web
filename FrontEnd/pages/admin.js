import React, { useState } from 'react';
import OrdersTable from '../components/Admin/OrdersTable';
import DogsTable from '../components/Admin/DogsTable';
import UsersTable from '../components/Admin/UsersTable';
import { useRouter } from 'next/router';
import DogsFilter from '../components/Filter/DogsFilter';

const pages = [
    { name: 'Tất cả chú chó', component: DogsTable },
    { name: 'Tất cả người dùng', component: UsersTable },
    { name: 'Tất cả đơn hàng', component: OrdersTable },
];

const admin = () => {
    const [pageInit, setPageInit] = useState(0);
    const [params, setParams] = useState({ min: '0', max: '100000' });
    const Page = pages[pageInit].component;
    return (
        <div className="min-h-[100vh] mt-[50px] ">
            <div className="flex">
                <div className="flex flex-col w-[300px] ">
                    <select
                        className="select select-warning w-full max-w-xs"
                        onChange={(e) => {
                            setPageInit(e.target.value);
                        }}
                    >
                        {pages.map((page, index) => (
                            <option value={index} selected={index === 0}>
                                {page.name}
                            </option>
                        ))}
                    </select>

                    {pageInit == 0 && <DogsFilter params={params} setParams={setParams} />}
                </div>
                <Page params={params} />
            </div>
        </div>
    );
};

export default admin;
