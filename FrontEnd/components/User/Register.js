import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const Register = () => {
    const router = useRouter();
    const notify = (content = 'Your information is not valid!') =>
        toast.error(content, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    const [user, setUser] = useState({});
    const checkPhone = (value) => {
        return value.match(/\d/g).length === 10;
    };
    const checkUser = (user) => {
        if (!user.loginName || !user.nameUser || !user.phone || !user.passwordUser) {
            notify();
            return false;
        }
        if (user.passwordUser !== user.passwordConfirm) {
            notify('Confirm password wrong');
            return false;
        }
        return true;
    };
    const handleRegister = (e) => {
        setUser((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async () => {
        if (checkUser(user)) {
            axios.defaults.withCredentials = true;
            const res = await axios.post('http://localhost:8080/user/register', user);
            if (res.data.status) notify('Register fail');
            else router.push('/');
        }
    };
    return (
        <div className="grid laptop:grid-cols-5 my-[50px]">
            <Image
                src="/images/dog_register.jpg"
                width={100}
                height={100}
                className="w-full rounded-xl laptop:col-span-2"
                alt=""
            />
            <div className="text-16-24-700 px-[30px] laptop:px-[50px] grid grid-cols-2 laptop:col-span-3 gap-x-4 mt-[20px]">
                <div className="">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Tên đăng nhập</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="loginName"
                            onChange={handleRegister}
                            value={user.loginName || ''}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Mật khẩu</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="passwordUser"
                            onChange={handleRegister}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs  mt-[10px]">
                        <label className="label">
                            <span className="label-text">Xác nhận mật khẩu</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="passwordConfirm"
                            onChange={handleRegister}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Tên hiển thị</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="nameUser"
                            onChange={handleRegister}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs  mt-[10px]">
                        <label className="label">
                            <span className="label-text">Số điện thoại</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="phone"
                            onChange={handleRegister}
                        />
                    </div>
                </div>
                <div className="col-span-2 flex justify-end mt-[20px]">
                    <button className="btn btn-warning" onClick={handleSubmit}>
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
