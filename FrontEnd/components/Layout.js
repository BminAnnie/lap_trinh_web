import React from 'react';
import Header from './Header/index';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
const Layout = ({ children }) => {
    return (
        <div className="mx-4 laptop:mx-[60px] desktop:mx-[130px]">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
