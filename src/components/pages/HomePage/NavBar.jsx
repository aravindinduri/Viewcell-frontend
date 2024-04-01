import React, { useEffect, useState } from 'react'
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Logo from '../../../images/logo.jsx';

function NavBar() {

    return (
        <div>
            <nav className="flex flex-row justify-between bg-[#000] font-size sm:w-auto h-20">
                <section>
                    <ul className="flex space-x-4 p-4">
                        <li className="cursor-pointer text-sm sm:text-3xl pl-10"><Logo /></li>
                    </ul>
                </section>
                <section className="flex flex-direction:col">
                    <ul className="flex p-4 space-x-4 ">
                        <li className='flex flex-direction:col'>
                            <input
                                type="search"
                                className="w-20 sm: relative m-0 -mr-0.5 block w-[1px] min-w-96 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1" />
                            <div className='flex sm:w-10 items-center pl-2 border border-gray-600 items-center cursor-pointer'>
                                <PiMagnifyingGlassBold className=' sm:text-white text-xl' />
                            </div>

                        </li>

                    </ul>
                </section>
            </nav>
        </div>
    )
}

export default NavBar

