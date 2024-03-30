import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState(null)
  let coverImage = data ? data.data.coverImage : ''
  let avatar = data ? data.data.avatar : ''
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
      <div ccl >
        {/* User Details Container */}
        <div className=" w-screen h-auto" >
          <img className='sm:object-cover h-96 w-full ' src={coverImage ? coverImage : ''} alt="" />
          <img className='sm:rounded-full w-56 absolute bottom-96 left-80' src={avatar ? avatar : ''} alt="avatar"  />
        </div>
        <div className="w-full h-60 bg-black pl-14 flex ">
          <div className='pl-72'>
            <span className=' font-bold text-3xl ' >{data ?  data.data.fullname :''}</span>
          </div>
          <button>Subcribe</button>
        </div>
        {/* User Body Container */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard