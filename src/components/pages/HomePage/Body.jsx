import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Body() {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex flex-row text-white h-lvh bg-black'>
                <section className='flex '>
                    <Outlet />
                </section>
            </div>
        </>
    )
}

export default Body
