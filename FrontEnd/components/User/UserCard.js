import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const UserCard = ({ user }) => {
    const handleChangeAvatar = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('id', user.id);
        axios.defaults.withCredentials = true;
        const res = axios.post('http://localhost:8080/user/upload', formData);
        e.target.value = null;
    };
    return (
        <div className="mb-2 md:mb-0 w-[300px] mr-[100px]">
            <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                        <label htmlFor="change_avatar">
                            <img
                                src={
                                    'C:\\Users\\Bao Nguyen\\Documents\\PHP\\storage\\avatarUser1.png'
                                }
                                className="rounded-full mx-auto shadow-lg w-[150px]"
                                alt=""
                            />
                        </label>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">{user?.nameUser || 'Bao Nguyen'}</h5>
                    {user?.isAdmin ? (
                        <Link href="/admin">
                            <button className="btn btn-info btn-outline px-[30px]">
                                Đến trang quản lý
                            </button>
                        </Link>
                    ) : (
                        <p className="mb-6">Người mua hàng</p>
                    )}
                </div>
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-warning w-full max-w-xs hidden"
                    id="change_avatar"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handleChangeAvatar}
                />
            </div>
        </div>
    );
};

export default UserCard;
