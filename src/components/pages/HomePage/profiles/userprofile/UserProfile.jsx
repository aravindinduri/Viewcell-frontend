import { useLocation } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@material-tailwind/react';
import { Link, Outlet } from 'react-router-dom';

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function UserProfile() {
  const [ownerdata, setownerdata] = useState({})
  const [subscribers, setSubscribers] = useState(null)
  const location = useLocation()
  if (!location) {
    return null
  }
  
  let owner = location.state.owner
  let avatar = owner ? owner.avatar : ''
  let coverImage = owner ? owner.coverImage : ''
  let fullname = owner ? owner.fullname : ''
  let username = owner ? owner.username : ''
  useEffect(() => {
    const fetchData = async () => {
      try {
        const subscriber = await axios.get(`/api/v1/subcription/channel-subscribers/${owner._id}`);
        setSubscribers(subscriber.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()

  }, []);

  console.log(location)

  const subscriberCount = subscribers ? subscribers.data.length : 0;


  return (
    <>
      <div>

        <Card className=' bg-black w-screen h-fit '>

          <CardBody >
            <div className=' w-full h-48 sm:h-auto'>
              <img src={coverImage} alt="Cover-Image" srcset="" className=' object-cover h-48 border-2 w-full sm:h-96' />
            </div>
            <div className=' flex gap-5 '>
              <img src={avatar} alt="avatar" srcset="" className=' w-32 h- md:h-auto md:w-56  border-2 rounded-full' />
              <Typography className='flex flex-col  justify-center'>
                <span className='text-2xl text-white' >{fullname}</span>
                <span className='text-lg' >@ {username}</span>
                <span className='text-xl' >Subscribers {subscriberCount}</span>
              </Typography>
            </div>
          </CardBody>
        </Card>

      </div>

    </>
  )
}

export default UserProfile