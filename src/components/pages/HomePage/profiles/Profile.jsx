

import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@material-tailwind/react';
import {  Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";


function Profile() {

  const [data, setData] = useState(null);
  const [subscribers, setSubscribers] = useState(null);

  const coverImage = data ? data.data.coverImage : '';
  const avatar = data ? data.data.avatar : '';
  const username = data ? data.data.username : '';
  const fullname = data ? data.data.fullname : '';
  const subscriberCount = subscribers ? subscribers.data.length : 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/users/current-user`);
        setData(response.data);
        const subscriber = await axios.get(`/api/v1/subcription/channel-subscribers/${response.data.data._id}`);
        setSubscribers(subscriber.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (!data) {
      fetchData();
    }
  }, [data]);

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
                <span className='text-2xl text-white' >{ fullname}</span>
                <span className='text-lg' >@ { username }</span>
                <span className='text-xl' >Subscribers {subscriberCount}</span>
              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full bg-blue-gray-900 ">
          <List className='flex flex-row justify-center text-gray-300 font-serif'>
            <Link to='/home/profile/videos'>
              <ListItem >Videos</ListItem>
            </Link>
            <Link to='/home/profile/tweets' >
              <ListItem  >Tweets</ListItem>
            </Link>
          </List>
        </Card>
        <Card className='bg-black'>
          <Outlet context={{ avatar: avatar ? avatar : '', username: username, userId: data ? data.data._id : '' }} />
        </Card>
      </div>
    </>
  )
}

export default Profile


