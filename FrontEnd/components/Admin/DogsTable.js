import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import dogAPIs from '../../api/dogs/dogAPIs';
import notify from '../../helpers/notify';
import PetAdd from '../Pet/PetAdd';
import PetInfo from '../Pet/PetInfo';

const finds = [{ type: 'nameDog', name: 'Tên chó' }];

const DogsTable = ({ params }) => {
    const [dogs, setDogs] = useState([]);
    const [typeSearch, setTypeSearch] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    useEffect(() => {
        const getAllDogs = async () => {
            const dogs = await dogAPIs.getDogs({ page: 1 });
            setDogs(dogs);
        };
        getAllDogs();
    }, []);
    useEffect(() => {
        handleSearch();
    }, [params]);
    const handleSearch = async () => {
        if (typeSearch !== '') params[typeSearch] = valueSearch;
        if (isNaN(params.min) || params.min.trim() === '') params.min = '0';
        if (isNaN(params.max) || params.max.trim() == '') params.max = '1000000';

        const dogs = await dogAPIs.searchDogs(params);
        setDogs(dogs);
    };
    const deleteDog1 = (id) => {
        return async (e) => {
            e.preventDefault();
            const res = await dogAPIs.deleteDog(id);
            console.log(res.status);
            if (res.status == 200) {
                const newDogs = dogs.filter((dog) => dog.id != id);
                setDogs(newDogs);
                notify('Delete success');
            } else notify('Fail to delete dog: ' + id, 'error');
        };
    };
    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };
    return (
        <div className="w-full">
            <div className="flex justify-between items-center  px-[40px]">
                <div className="flex">
                    <div className="btn btn-warning btn-wide">Tất cả chú chó</div>

                    <label htmlFor="my-modal-10">
                        <div className="btn btn-accent btn-outline ml-3">Thêm</div>
                    </label>

                    <input type="checkbox" id="my-modal-10" className="modal-toggle" />
                    <label htmlFor="my-modal-10" className="modal cursor-pointer">
                        <label className="modal-box relative p-0" htmlFor="">
                            <label
                                htmlFor="my-modal-10"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <div className="py-7 px-4">
                                <PetAdd />
                            </div>
                        </label>
                    </label>
                </div>
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
                            <th>Giới tính</th>
                            <th>Kích thước</th>
                            <th>Giá</th>
                            <th>Đã được bán</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dogs?.map((dog, index) => {
                            return (
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={
                                                            dog.avatar ||
                                                            'https://static.vncommerce.com/avatar/90C74E26FB-default.jpg'
                                                        }
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{dog.nameDog}</div>
                                                <div className="text-sm opacity-50">Việt Nam</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{dog.birthday}</td>
                                    <td>{dog.gender ? 'Nam' : 'Nữ'}</td>
                                    <td>{dog.breed === 'small' ? 'Nhỏ' : 'Lớn'}</td>
                                    <td>{dog.price}$</td>
                                    <td>{dog.isSell ? 'Rồi' : 'Chưa'}</td>
                                    <th>
                                        <Link href={{ pathname: `/petDetail/${dog.id}` }}>
                                            <button className="btn btn-info btn-sm">
                                                Chi tiết
                                            </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            className="btn btn-error btn-sm"
                                            onClick={deleteDog1(dog?.id)}
                                        >
                                            Xóa
                                        </button>
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

export default DogsTable;
