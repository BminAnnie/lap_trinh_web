import React from 'react';

const contact = () => {
    return (
        <div className="mt-[30px]">
            <div className="">
                <h1 className="text-3xl font-semibold text-centertext-gray-800 capitalize lg:text-4xl ">
                    Vị trí công ty
                </h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7838.684254869503!2d106.70676642475235!3d10.785086936675276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1547181657956"
                    width="600"
                    height="450"
                    frameborder="0"
                    className="w-full my-[50px] min-h-[400px]"
                    allowfullscreen
                ></iframe>
            </div>
            <section className="bg-white dark:bg-gray-900 rounded-xl">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                        Công ty chúng tôi xin hân hạnh giới thiệu
                    </h1>

                    <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
                        Ban điều hành, những con người đã góp vốn và công sức để tạo ra công ty như
                        bây giờ
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 laptop:grid-cols-4">
                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/images/phuc1.jpg')]">
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                    Tổng giám đốc miền Nam
                                </h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                    0909090909
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/images/linh.jpg')]">
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                    HR
                                </h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                    0913131313
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/images/phuc2.jpg')]">
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                    Quản lý cấp cao
                                </h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                    0914141414
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/images/phuc1.jpg')]">
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                    Ton’s of mobile mockup
                                </h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                    Mockups
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default contact;
