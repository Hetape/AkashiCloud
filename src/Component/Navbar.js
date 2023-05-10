import React, { useState } from 'react';
import { DropDown } from './DropDown';
export const Navbar = () => {
    const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
    const handleClick = () => {
        //if (isMobileNavOpen) {
          setisMobileNavOpen(!isMobileNavOpen);
    };
    return(
        <>
            <nav className="border-gray-200 text-black bg-custom-color">
                <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
                    {/* <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a> */}
                    <div className='xl:ml-4 ml-12 flex flex-row justify-center items-center space-x-3'>
                        <div className='bg-cover bg-center w-16 h-12 bg-[url("./img/Akashi5_1.png")]'></div>
                        <div className='bg-cover bg-center w-24 h-8 bg-[url("./img/Akashi4_1.png")]'></div>
                    </div>
                    
                    <button data-collapse-toggle="navbar-default" onClick={handleClick} type="button" className="ml-auto inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden items-center lg:ml-32 w-full lg:flex lg:flex-row lg:w-auto " id="navbar-default">
                        <ul className="flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent lg:text-black">
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" aria-current="page">DashBoard</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Cloud</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Burn</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Stake</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Farm</a>
                            </li>
                        </ul>
                        <div className='ml-24 bg-cover bg-center w-4 h-4 bg-[url("./img/vector.png")]'></div>
                        <div className='ml-4'>AKASHI: 0</div>
                        <DropDown />
                    </div>
                </div>
            </nav>
            <div className={isMobileNavOpen ? "lg:hidden w-full flex flex-col justify-between ":"hidden"}>
                <ul className="font-medium flex flex-col p-4 lg:p-0 justify-center mt-4 border border-gray-100 bg-gray-50 mt-0 border-0 bg-white dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" aria-current="page">DashBoard</a>
                    </li>
                    <li>
                    <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Cloud</a>
                    </li>
                    <li>
                    <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Burn</a>
                    </li>
                    <li>
                    <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Stake</a>
                    </li>
                    <li>
                    <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Farm</a>
                    </li>
                </ul>

            </div>
        </>
    )
}