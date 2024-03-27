import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { PiVideoFill } from "react-icons/pi";
import { BsCollectionFill } from "react-icons/bs";
import { GiPlayButton } from "react-icons/gi";



function Body() {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex flex-row bg-slate-900 text-white h-lvh'>
                <section className='w-1/5 
                             border-r-4 border-indigo-200 border-r-indigo-900'>
                    <ul className='flex flex-col p-4 h-lvh gap-4'>
                        <li
                            className='flex flex-row cursor-pointer gap-2 sm:text-2xl items-center text-center border-b border-indigo-500/50  hover:bg-sky-700/50' onClick={() => { navigate('') }}><IoMdHome /> Home</li>
                        <li
                            className='flex flex-row cursor-pointer gap-2 sm:text-2xl items-center text-center border-b border-indigo-500/50  hover:bg-sky-700/50' onClick={() => { navigate('/home/likedVideos') }} ><BiSolidLike /> Liked Videos</li>
                        <li
                            className='flex flex-row cursor-pointer gap-2 sm:text-2xl items-center text-center border-b border-indigo-500/50  hover:bg-sky-700/50' onClick={(e) => { navigate('/home/history') }}><LuHistory /> History</li>
                        <li
                            className='flex flex-row cursor-pointer gap-2 sm:text-2xl items-center text-center border-b border-indigo-500/50  hover:bg-sky-700/50' onClick={(e) => { navigate('/home/myVideos') }}><PiVideoFill /> My Videos</li>
                        <li
                            className='flex flex-row cursor-pointer gap-2 sm:text-2xl items-center text-center border-b border-indigo-500/50  hover:bg-sky-700/50' onClick={(e) => { navigate('/home/myCollections') }}><BsCollectionFill /> My Collections</li>
                        <li
                            className='flex flex-row cursor-pointer gap-2 sm:text-2xl items-center text-center border-b border-indigo-500/50  hover:bg-sky-700/50' onClick={(e) => { navigate('/home/subcribers') }}><GiPlayButton /> Subcribers</li>

                    </ul>
                </section>
                <section className='flex'>
                    <Outlet />
                </section>
            </div>
        </>
    )
}

export default Body



