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
      <div >
        {/* User Details Container */}
        <div>
          {/* upper part Container */}
          <div className="bg-cover w-auto h-56 bg-no-repeat bg-slate-50" style={{ backgroundImage: `url(${coverImage})` }}></div>
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