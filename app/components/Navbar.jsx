import { assets } from '../../assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
    const sideMenuRef = useRef();
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [2, 0]);
    const navBackground = useTransform(
        scrollYProgress,
        [0, 0.1],
        ['transparent', 'rgba(255, 255, 222, 0.4)']
    );
    const navBorder = useTransform(
        scrollYProgress,
        [0, 0.1],
        ['0px', '1px solid rgb(21, 93, 252)']
    );
    const navShadow = useTransform(
        scrollYProgress,
        [0, 0.1],
        ['none', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']
    );

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    return (
        <>
            {/* Hero Background Image with scroll-controlled opacity */}
            <motion.div
                className='fixed inset-0 -z-50 w-full h-full overflow-hidden'
                style={{ opacity }}
            >
                <Image
                    src={assets.hero}
                    alt='Background'
                    fill
                    className='object-cover'
                    priority
                />
            </motion.div>

            {/* Blob decoration */}
            <div className='fixed top-7 right-0 w-11/12 -z-40 translate-y-[-70%]'>
                <Image src={assets.Blob} alt='' className='w-full' />
            </div>

            {/* Main Navigation */}
            <motion.nav
                className='w-full fixed px-5 lg:px-8 xl:px-[-8%] py-4 flex items-center justify-between z-50'
                style={{
                    background: navBackground,
                    borderBottom: navBorder,
                    boxShadow: navShadow,
                    backdropFilter: 'blur(10px)'
                }}
            >
                <a href="#top">
                    <Image
                        src={assets.BlessingsM_}
                        className='w-35 cursor-pointer mr-9'
                        alt="Blessings Minga Logo"
                        width={120}
                        height={40}
                    />
                </a>

                <ul className='hidden md:flex items-center gap-5 lg:gap-10 font-normal'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    {/* <button>
                        <Image
                            src={assets.moon_icon}
                            alt='Dark mode toggle'
                            className='w-6'
                            width={24}
                            height={24}
                        />
                    </button> */}
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-blue-600 rounded-full ml-4'>
                        Contact
                        <Image
                            src={assets.arrow_icon}
                            className='w-3.5'
                            alt="Contact Us"
                            width={40}
                            height={40}
                        />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image
                            src={assets.menu_black}
                            alt='Menu'
                            className='w-6'
                            width={24}
                            height={24}
                        />
                    </button>
                </div> 

                {/* Mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div onClick={closeMenu} className='absolute right-6 top-6'>
                        <Image
                            src={assets.close_black}
                            alt='Close menu'
                            className='w-5 cursor-pointer'
                            width={20}
                            height={20}
                        />
                    </div>
                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About me</a></li>
                    <li><a onClick={closeMenu} href="#services">Services</a></li>
                    <li><a onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </motion.nav>
        </>
    );
};

export default Navbar;