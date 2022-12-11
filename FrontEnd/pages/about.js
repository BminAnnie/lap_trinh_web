import React from 'react';

const about = () => {
    return (
        <div className="bg-white ">
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 laptop:h-[32rem] laptop:py-16 laptop:flex-row laptop:items-center">
                <div className="w-full laptop:w-1/2">
                    <div className="laptop:max-w-laptop">
                        <h1 className="text-3xl font-semibold tracking-wide dark:text-black laptop:text-4xl">
                            Find your premium new glasses exported from US
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            We work with the best remunated glasses dealers in US to find your new
                            glasses.
                        </p>
                        <div className="grid gap-6 mt-4 laptop:grid-cols-2">
                            <div className="flex items-center -px-3 dark:text-black">
                                <svg
                                    className="w-5 h-5 mx-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>

                                <span className="mx-3">Premium selection</span>
                            </div>

                            <div className="flex items-center -px-3 dark:text-black">
                                <svg
                                    className="w-5 h-5 mx-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>

                                <span className="mx-3">Insurance</span>
                            </div>

                            <div className="flex items-center -px-3 dark:text-black">
                                <svg
                                    className="w-5 h-5 mx-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>

                                <span className="mx-3">All legal documents</span>
                            </div>

                            <div className="flex items-center -px-3 dark:text-black">
                                <svg
                                    className="w-5 h-5 mx-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>

                                <span className="mx-3">From US glasses dealers</span>
                            </div>

                            <div className="flex items-center -px-3 dark:text-black">
                                <svg
                                    className="w-5 h-5 mx-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>

                                <span className="mx-3">Payment Security</span>
                            </div>

                            <div className="flex items-center -px-3 dark:text-black">
                                <svg
                                    className="w-5 h-5 mx-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>

                                <span className="mx-3">Fast shipping (+ Express)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 laptop:w-1/2">
                    <img
                        className="object-cover w-full h-full max-w-2xl rounded-[20px]"
                        src="/images/logoShop.jpg"
                        alt="glasses photo"
                    />
                </div>
            </div>
        </div>
    );
};

export default about;
