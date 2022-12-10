import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserForm = ({ user }) => {
    const [userFake, setUserFake] = useState({});
    useEffect(() => {
        setUserFake({ ...user });
        console.log(user);
    }, [user]);

    const handleChangeInput = (type) => {
        return (e) => {
            setUserFake({ ...userFake, [type]: e.target.value });
        };
    };

    const handleLogout = async () => {
        await axios.get('http://localhost:8080/user/logout', { withCredentials: true });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (!userFake) return;
        axios.defaults.withCredentials = true;
        const res = await axios.post('http://localhost:8080/user/edit', userFake);
        window.location.reload(false);
        console.log(res.data);
    };
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white ml-[70px] min-w-[600px]">
            <form>
                <div class="grid grid-cols-2 gap-x-10">
                    <div className="form-group mb-6">
                        <label
                            for="exampleInputEmail2"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Tên người dùng
                        </label>
                        <input
                            type="text"
                            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInputEmail2"
                            aria-describedby="emailHelp"
                            placeholder="Enter name"
                            value={userFake?.nameUser}
                            onChange={handleChangeInput('nameUser')}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label
                            for="exampleInputPassword2"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Ngày sinh
                        </label>
                        <input
                            type="text"
                            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInputPassword2"
                            placeholder="Date"
                            value={userFake?.birthday}
                            onChange={handleChangeInput('birthday')}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label
                            for="exampleInputEmail2"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInputEmail2"
                            aria-describedby="emailHelp"
                            placeholder="Enter name"
                            value={userFake?.loginName}
                            onChange={handleChangeInput('loginName')}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label
                            for="exampleInputPassword2"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInputPassword2"
                            placeholder="Phone"
                            value={userFake?.phone}
                            onChange={handleChangeInput('phone')}
                        />
                    </div>
                </div>
            </form>
            <div className="flex justify-end">
                <button className="btn btn-info btn-sm" onClick={submitForm}>
                    Thay đổi
                </button>
                <a href="/" onClick={handleLogout}>
                    <button className="btn btn-sm ml-[10px]">Log out</button>
                </a>
            </div>
        </div>
    );
};

export default UserForm;
