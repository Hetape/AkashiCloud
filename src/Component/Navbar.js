import React, { useEffect, useState} from 'react';
import { DropDown } from './DropDown';
import { useTheme } from '../ThemeContext';

export const Navbar = () => {
    const {theme, setTheme} = useTheme('');
    const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
    const handleClick = () => {
        //if (isMobileNavOpen) {
          setisMobileNavOpen(!isMobileNavOpen);
    };
    

    return(
        <>
            
            <nav className={`border-gray-200 ${theme==='dark' ? 'text-white bg-dark-custom-color' : 'text-gray-900 bg-custom-color'} text-black bg-custom-color`}>
                <div className="w-full flex flex-row justify-between items-center mx-auto p-4">
                    {/* <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a> */}
                    <div className='lg:ml-4 ml-12 flex flex-row justify-center items-center space-x-3'>
                        <div className='bg-cover bg-center w-16 h-12 bg-[url("./img/Akashi5_1.png")]'></div>
                        <div className='lg:block hidden bg-cover bg-center w-24 h-8 bg-[url("./img/Akashi4_1.png")]'></div>
                    </div>
                    
                    <button data-collapse-toggle="navbar-default" onClick={handleClick} type="button" className="ml-auto inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-xl lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden items-center lg:ml-4 w-full lg:flex lg:flex-row lg:w-auto " id="navbar-default">
                        <ul className="flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent">
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4  hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" aria-current="page">DashBoard</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4  hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Cloud</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4  hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Burn</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4  hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Stake</a>
                            </li>
                            <li>
                            <a href="#" className="hover:cursor-pointer block py-2 pl-3 pr-4  hover:text-linkTextColor lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Farm</a>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:flex lg:flex-row lg:items-center'>
                        <button onClick={()=>setTheme(theme==='light' ? 'dark':'light')} className='ml-4 bg-cover bg-center w-4 h-4 bg-[url("./img/setting.png")]'></button>
                        <div className='ml-4'>AKASHI: 0</div>
                        <DropDown/>
                        <button className="ml-7 w-32 h-10 rounded-full text-white drop-shadow-[0_3px_0px_rgba(0,0,0,1)]" style={{background:"linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.6) 100%)"}}>Connect</button>
                    </div>
                </div>
            </nav>
            <div className='drop-shadow-[0_4px_4px_rgba(0,0,0,1)] w-full' style={{background:'linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.15) 100%)',height:'1px'}}></div>
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