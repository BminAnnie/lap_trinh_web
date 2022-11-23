import React from 'react';
import Header from './Header/index'
import Footer from './Footer'
const Layout = ({ children }) => {
  return <div className="mx-4 laptop:mx-[60px] desktop:mx-[130px]">
    <Header/> 
    {children}
    <Footer/>
    </div>;
};

export default Layout;
