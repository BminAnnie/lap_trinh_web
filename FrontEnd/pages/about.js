import React from 'react';

const about = () => {
    return (
        <div className="bg-white ">
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 laptop:h-[32rem] laptop:py-16 laptop:flex-row laptop:items-center">
                <div className="w-full laptop:w-1/2">
                    <div className="laptop:max-w-laptop">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-700 laptop:text-4xl">
                            Petshop là thương hiệu thuộc lĩnh vực nhân giống, kinh doanh thú cưng và
                            các loại phụ kiện vật nuôi của Công ty Cổ phần DogShop Việt Nam.
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Petshop cam kết luôn đặt sức khỏe và cuộc sống của các bé chó mèo lên
                            trên hết trong toàn bộ hoạt động của thương hiệu.
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

                                <span className="mx-3">Sự chọn lọc kĩ càng</span>
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

                                <span className="mx-3">Sức khỏe dẻo dai</span>
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

                                <span className="mx-3">Giấy tờ hợp pháp</span>
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

                                <span className="mx-3">Thân thiện với chủ</span>
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

                                <span className="mx-3">Thanh toán nhanh gọn</span>
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

                                <span className="mx-3">Tiêm chích thường xuyên</span>
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
