import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
const UserCard = ({ user }) => {
    const handleChangeAvatar = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('id', user.id);
        axios.defaults.withCredentials = true;
        const res = axios.post('http://localhost:8080/user/upload', formData);
        e.target.value = null;
        window.location.reload(false);
    };
    return (
        <div className="mb-2 md:mb-0 w-[300px] laptop:mr-[100px]">
            <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                    <div className="avavarUser flex justify-center -mt-[75px] relative hover:opacity-50 ">
                        <label htmlFor="change_avatar">
                            <img
                                src={user?.avatar}
                                className="rounded-full mx-auto shadow-lg w-[150px] h-[150px]"
                                alt=""
                            />
                            <div className="camera absolute top-0 left-0 w-[150px] h-[150px]  hidden bg-slate-200 rounded-full opacity-50">
                                <CenterFocusStrongIcon />
                            </div>
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
