import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios';
import { Background } from 'react-parallax';

function UserHome() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const responce = await axios.get('/api/v1/users/current-user')
        setData(responce.data)
        console.log(responce.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    data ? null : fetchdata()
  }, [])
  return (
    <>
      {/* outer Container */}
      <div>
        {/* User Details Container */}
        <div className='flex flex-col h-1/2'>
          <div>
            <div>
              <div className='border-2 rounded-b-3xl '>
                <img className='object-cover  h-26 sm:w-screen h-96 rounded-b-3xl' src={data ? data.data.coverImage : ''} alt="Cover-Image" />
                <img className='rounded-full w-10 sm:w-56 absolute  start-1/2   ' src={data ? data.data.avatar : ''} alt="" />
              </div>
              <div>lower Portion</div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
        {/* User Body Container */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default UserHome