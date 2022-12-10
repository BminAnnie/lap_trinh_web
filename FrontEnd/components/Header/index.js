import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Popover from '@mui/material/Popover';
import InputSearch from './InputSearch';
import JoinButton from './JoinButton';
import { useTranslation } from 'react-i18next';
import { Badge } from '@mui/material';
import Cart from '../Cart';
import Login from '../User/Login';
import { UserContext } from '../Auth/UserProvider';

const Languages = [
    {
        code: 'en',
        flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png',
    },
    {
        code: 'vi',
        flag: '/images/headerImages/flagVN.png',
    },
];

const Header = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentLang, setCurrentLang] = useState(Languages[0]);
    const { cart, userId } = useContext(UserContext);
    useEffect(() => {
        console.log(userId);
    }, [userId]);
    const handleLang = (lang) => {
        i18n.changeLanguage(lang.code);
        setCurrentLang(lang);
    };

    const handleClick = (event) => {
        setAnchorEl(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className="w-full flex h-[57px] laptop:h-[100px] justify-between items-center select-none">
            <img
                src="/images/icons/bars.svg"
                alt=""
                className="text-[#00171F] laptop:hidden"
                aria-describedby={id}
                onClick={handleClick}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <ul className=" text-16-24-700 text-[#003459] bg-[#f6e6c8] pr-[50px] rounded-sm ">
                    <Link
                        href={{
                            pathname: '/',
                        }}
                    >
                        <li className="px-2 py-2">{t('NavBar.1')}</li>
                    </Link>
                    <Link
                        href={{
                            pathname: '/Category',
                        }}
                    >
                        <li className="px-2 py-2">{t('NavBar.2')}</li>
                    </Link>
                    <li className="px-2 py-2">{t('NavBar.3')}</li>
                    <li className="px-2 py-2">{t('NavBar.4')}</li>
                </ul>
            </Popover>
            <div className="header__nav flex h-full items-center">
                <div className="header__name flex flex-col items-center mr-6 w-[115px]">
                    <img src="/images/headerImages/nameShop.png" alt="" className="w-[115px]" />
                    <img src="/images/headerImages/nameHashTag.png" alt="" className="w-[55px]" />
                </div>
                <ul className=" text-16-24-700 text-[#003459] hidden laptop:flex ">
                    <Link
                        href={{
                            pathname: '/',
                        }}
                    >
                        <li>{t('NavBar.1')}</li>
                    </Link>
                    <Link
                        href={{
                            pathname: '/Category',
                        }}
                    >
                        <li>{t('NavBar.2')}</li>
                    </Link>
                    <li>{t('NavBar.3')}</li>
                    <li>{t('NavBar.4')}</li>
                </ul>
            </div>
            <div className="header_search flex  h-full  items-center">
                <InputSearch className="laptop:mx-3" />

                {!userId && (
                    <label htmlFor="my-modal-4" className="">
                        <JoinButton />
                    </label>
                )}
                {userId && (
                    <div className="flex items-center">
                        <Link href={{ pathname: `/user/${userId}` }}>
                            <button className="btn btn-warning mx-[20px]">Personal Site</button>
                        </Link>
                        <label className="ml-3 cursor-pointer" htmlFor="my-modal-5">
                            <Badge badgeContent={cart.length} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </label>
                    </div>
                )}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative p-0" htmlFor="">
                        <label
                            htmlFor="my-modal-4"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <Login />
                    </label>
                </label>
                {/* <div className="hidden laptop:block relative cursor-pointer dropdown">
                    <div className="hidden laptop:flex ml-6 items-center w-[75px] " tabIndex="0">
                        <div className="flex items-center" onClick={() => handleLang(currentLang)}>
                            <img src={currentLang.flag} alt="" className="w-4 h-4 rounded-full" />
                            <div className="ml-2">{currentLang.code.toUpperCase()}</div>
                        </div>
                        <MdKeyboardArrowDown className="w-4" />
                    </div>

                    <div class="dropdown-content w-full" tabIndex="0">
                        <div className="ml-6">
                            {Languages.filter((language) => language !== currentLang).map((language) => (
                <div onClick={() => handleLang(language)}>
                  <div className="flex items-center">
                    <img src={language.flag} alt="" className="w-4 h-4 rounded-full" />
                    <div className="ml-2">{language.code.toUpperCase()}</div>
                  </div>
                </div>
              ))}
                        </div>
                    </div>
                </div> */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <label htmlFor="my-modal-5" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <Cart />
                    </label>
                </label>
            </div>
        </div>
    );
};

export default Header;
