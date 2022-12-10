import Link from 'next/link';
import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="mb-2 md:mb-0 w-[300px] mr-[100px]">
            <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                        <img
                            src={user?.avatar || 'https://mdbootstrap.com/img/new/avatars/6.jpg'}
                            className="rounded-full mx-auto shadow-lg w-[150px]"
                            alt=""
                        />
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
            </div>
        </div>
    );
};

export default UserCard;
