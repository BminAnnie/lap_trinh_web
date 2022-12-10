import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const finds = [
    { type: 'nameUser', name: 'Tên người dùng' },
    { type: 'phone', name: 'Số điện thoại' },
];
const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [typeSearch, setTypeSearch] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    useEffect(() => {
        const getAllUsers = async () => {
            const res = await axios.get('http://localhost:8080/users', { withCredentials: true });
            setUsers(res.data);
        };
        getAllUsers();
    }, []);

    const handleSearch = async () => {
        if (typeSearch === '') return;
        const res = await axios.get('http://localhost:8080/users/search', {
            params: {
                [typeSearch]: valueSearch,
            },
            withCredentials: true,
        });
        setUsers(res.data);
    };
    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };
    return (
        <div className="w-full">
            <div className="flex justify-between items-center  px-[40px]">
                <div className="btn btn-warning btn-wide">Tất cả người dùng</div>
                <div className="flex">
                    <select
                        className="select select-bordered  max-w-xs mr-[10px]"
                        onChange={(e) => {
                            setTypeSearch(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            Tìm kiếm theo
                        </option>
                        {finds.map((find, index) => (
                            <option value={find.type}>{find.name}</option>
                        ))}
                    </select>
                    <div className="form-control">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="input input-info"
                                value={valueSearch}
                                onChange={(e) => {
                                    setValueSearch(e.target.value);
                                }}
                                onKeyDown={handleKeypress}
                            />
                            <button className="btn btn-warning" onClick={handleSearch}>
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
            </div>
            <div className="overflow-x-auto w-full px-10 mt-[40px]">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Ngày Sinh</th>
                            <th>Vai trò</th>
                            <th>Số điện thoại</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => {
                            return (
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={
                                                            user.avatar ||
                                                            'https://static.vncommerce.com/avatar/90C74E26FB-default.jpg'
                                                        }
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.nameUser}</div>
                                                <div className="text-sm opacity-50">Việt Nam</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.birthday}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.isAdmin ? 'Người quản trị' : 'Người mua hàng'}</td>
                                    <th>
                                        <Link href={{ pathname: `/user/${user.id}` }}>
                                            <button className="btn btn-info btn-sm">
                                                Chi tiết
                                            </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button className="btn btn-error btn-sm">Xóa</button>
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

export default UsersTable;
