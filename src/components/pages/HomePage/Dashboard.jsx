import React, { useState, useEffect } from 'react'
import {
  List,
  ListItem,
} from '@material-tailwind/react';
import { NavLink, Link, Outlet } from 'react-router-dom'
import Tweets from './Tweets';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState(null)
  const [subscribers, setSubscribers] = useState(null)
  let coverImage = data ? data.data.coverImage : ''
  let avatar = data ? data.data.avatar : ''
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const responce = await axios.get(`/api/v1/users/current-user`)
        setData(responce.data)
        const subscriber = await axios.get(`/api/v1/subcription/channel-subscribers/${responce.data.data._id}`);
        setSubscribers(subscriber.data)
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
        <div className="sm:w-screen h-auto" >
          <img className='sm:object-cover h-96 w-full ' src={coverImage ? coverImage : ''} alt="Cover-Image" />
          <img className='sm:rounded-full w-56 absolute bottom-96 left-80' src={avatar ? avatar : ''} alt="avatar" />
        </div>
        <div className="sm:h-40 bg-black pl-14 flex justify-between">
          <div className='pl-72 '>
            <p className=' font-bold text-3xl ' > {data ? data.data.fullname : ''}</p>
            <p className='text-xl text-gray-500'> @{data ? data.data.username : ''}</p>
            <p className='text-xl text-gray-500'>subscribers {subscribers ? subscribers.data.length : ''} </p>
            <div className="">
            </div>
          </div>
          <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent w-28 h-10 rounded-lg mr-96 mt-10  ">Subcribe</button>
        </div>
        <div >

          <NavLink className='bg-black flex border-t-2 border-b-2 pl-0 border-blue-gray-300 sm:shrink'>

            <List className='flex-row text-blue-gray-100  pl-80 justify-around'>

              <Link to='/home/uservideos' >
                <ListItem className='w-56 pl-20' >
                  Videos
                </ListItem>
              </Link>

              <Link to='/home/userplaylist'>
                <ListItem className='w-56 pl-20'>
                  PLaylist
                </ListItem>
              </Link>

              <Link to='/home/usertweets'>
                <ListItem className='w-56 pl-20' >
                  Tweets
                </ListItem>
              </Link>

              <Link to='/home/usersubcribers'>
                <ListItem className='w-56 pl-20'>
                  Subcribed
                </ListItem>
              </Link>

            </List>

          </NavLink>
        </div>
        {/* User Body Container */}
        <div>
          <Outlet context={{ avatar: avatar ? avatar : '', username: data ? data.data.username : '' }} />
        </div>
      </div>
    </>
  )
}

export default Dashboard