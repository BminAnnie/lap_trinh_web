import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const notify = () =>
        toast.error('Your information is not valid!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    const [loginName, setLoginName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        const res = await axios.post('http://localhost:8080/user/login', {
            loginName: loginName,
            passwordUser: password,
        });
        if (res.data.status === 402) {
            notify();
        } else {
            window.location.reload(false);
        }
    };
    return (
        <div className="block py-[50px] px-[30px] rounded-lg shadow-lg bg-white ">
            <form>
                <div className="form-group mb-6">
                    <label
                        for="exampleInputEmail2"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Login Name
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
                        placeholder="Enter email"
                        value={loginName}
                        onChange={(e) => {
                            setLoginName(e.target.value);
                        }}
                    />
                </div>
                <div class="form-group mb-6">
                    <label
                        for="exampleInputPassword2"
                        class="form-label inline-block mb-2 text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control block
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button
                    type="submit"
                    class="
        w-full
        px-6
        py-5
        mt-5
        bg-blue-600
        text-white
        font-medium
        text-lg
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
                    onClick={handleSubmit}
                >
                    Sign in
                </button>
                <p className="text-gray-800 mt-6 text-center">
                    Not a member?{' '}
                    <a
                        href="/register"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                    >
                        Register
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
