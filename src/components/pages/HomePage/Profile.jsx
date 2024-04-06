
// import React, { useState, useEffect } from 'react';
// import { List, ListItem } from '@material-tailwind/react';
// import { NavLink, Link, Outlet } from 'react-router-dom';
// import axios from 'axios';

// function Profile() {
//   const [data, setData] = useState(null);
//   const [subscribers, setSubscribers] = useState(null);
//   let coverImage = data ? data.data.coverImage : '';
//   let avatar = data ? data.data.avatar : '';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/v1/users/current-user`);
//         setData(response.data);
//         const subscriber = await axios.get(`/api/v1/subcription/channel-subscribers/${response.data.data._id}`);
//         setSubscribers(subscriber.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     if (!data) {
//       fetchData();
//     }
//   }, [data]);

//   return (
//     <>
//       {/* Outer Container */}
//       <div className="overflow-hidden bg-gray-900">
//         {/* User Details Container */}
//         <div className="container mx-auto py-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <img className="rounded-full h-20 w-20 mr-4" src={avatar} alt="Avatar" />
//               <div>
//                 <p className="text-white text-3xl font-bold">{data ? data.data.fullname : ''}</p>
//                 <p className="text-gray-400">@{data ? data.data.username : ''}</p>
//                 <p className="text-gray-400">Subscribers {subscribers ? subscribers.data.length : ''}</p>
//               </div>
//             </div>
//             <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Subscribe</button>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="bg-gray-800">
//           <nav className="container mx-auto py-4">
//             <List className="flex justify-center">
//               <NavLink to="/home/uservideos" className="px-4">
//                 <ListItem>Videos</ListItem>
//               </NavLink>
//               <NavLink to="/home/userplaylist" className="px-4">
//                 <ListItem>Playlist</ListItem>
//               </NavLink>
//               <NavLink to="/home/usertweets" className="px-4">
//                 <ListItem>Tweets</ListItem>
//               </NavLink>
//               <NavLink to="/home/usersubcribers" className="px-4">
//                 <ListItem>Subscribed</ListItem>
//               </NavLink>
//             </List>
//           </nav>
//         </div>

//         {/* User Body Container */}
//         <div className="container mx-auto">
//           <div className="py-6">
//             <Outlet context={{ avatar: avatar, username: data ? data.data.username : '', userId: data ? data.data._id : '' }} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;




// import React, { useState, useEffect } from 'react';
// import { List, ListItem } from '@material-tailwind/react';
// import { NavLink, Link } from 'react-router-dom';
// import axios from 'axios';

// function Dashboard() {
//   const [userData, setUserData] = useState(null);
//   const [subscribers, setSubscribers] = useState(null);
//   const [selectedTab, setSelectedTab] = useState('videos');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/v1/users/current-user`);
//         setUserData(response.data);
//         const subscriber = await axios.get(`/api/v1/subcription/channel-subscribers/${response.data.data._id}`);
//         setSubscribers(subscriber.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (!userData) {
//       fetchData();
//     }
//   }, [userData]);

//   const coverImage = userData ? userData.data.coverImage : '';
//   const avatar = userData ? userData.data.avatar : '';
//   const username = userData ? userData.data.username : '';
//   const fullname = userData ? userData.data.fullname : '';
//   const subscriberCount = subscribers ? subscribers.data.length : 0;

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Banner and Avatar Section */}
//       <div className="relative overflow-hidden flex items-end px-4 md:h-60 lg:h-72">
//         <img className="object-cover w-full h-full max-h-full" src={coverImage} alt="Cover Image" />
//         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 to-transparent h-1/3"></div>
//         <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 flex items-center">
//           <img className="rounded-full border-4 border-white w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" src={avatar} alt="Avatar" />
//           <div className="ml-4">
//             <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{fullname}</h3>
//             <p className="text-gray-200 text-sm md:text-base lg:text-lg">{username}</p>
//           </div>
//         </div>
//         <p className="absolute bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 text-white font-semibold">{subscriberCount} Subscribers</p>
//       </div>

//       {/* Navigation Links */}
//       <nav className="bg-gray-900 flex items-center justify-between h-14 px-4">
//         <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">My Channel</h2>
//         <ul className="flex space-x-4">
//           <li>
//             <NavLink to="#" onClick={() => setSelectedTab('videos')} className={`text-gray-300 hover:text-white ${selectedTab === 'videos' ? 'text-white' : ''}`}>Videos</NavLink>
//           </li>
//           <li>
//             <NavLink to="#" onClick={() => setSelectedTab('playlists')} className={`text-gray-300 hover:text-white ${selectedTab === 'playlists' ? 'text-white' : ''}`}>Playlists</NavLink>
//           </li>
//           <li>
//             <NavLink to="#" onClick={() => setSelectedTab('tweets')} className={`text-gray-300 hover:text-white ${selectedTab === 'tweets' ? 'text-white' : ''}`}>Tweets</NavLink>
//           </li>
//           <li>
//             <NavLink to="#" onClick={() => setSelectedTab('subscribers')} className={`text-gray-300 hover:text-white ${selectedTab === 'subscribers' ? 'text-white' : ''}`}>Subscribers</NavLink>
//           </li>
//         </ul>
//       </nav>

//       {/* Content Area */}
//       <div className="flex-grow p-4">
//         {selectedTab === 'videos' && <VideosComponent />}
//         {selectedTab === 'playlists' && <PlaylistsComponent />}
//         {selectedTab === 'tweets' && <TweetsComponent />}
//         {selectedTab === 'subscribers' && <SubscribersComponent />}
//       </div>
//     </div>
//   );
// }

// const VideosComponent = () => {
//   return <h1>Videos Component</h1>;
// };

// const PlaylistsComponent = () => {
//   return <h1>Playlists Component</h1>;
// };

// const TweetsComponent = () => {
//   return <h1>Tweets Component</h1>;
// };

// const SubscribersComponent = () => {
//   return <h1>Subscribers Component</h1>;
// };

// export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import { List, ListItem } from '@material-tailwind/react';
// import { NavLink, Link, Outlet } from 'react-router-dom';
// import axios from 'axios';

// function Dashboard() {
//   const [data, setData] = useState(null);
//   const [subscribers, setSubscribers] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/v1/users/current-user`);
//         setData(response.data);
//         const subscriber = await axios.get(`/api/v1/subscription/channel-subscribers/${response.data.data._id}`);
//         setSubscribers(subscriber.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (!data) {
//       fetchData();
//     }
//   }, [data]);

  // const coverImage = data ? data.data.coverImage : '';
  // const avatar = data ? data.data.avatar : '';
  // const username = data ? data.data.username : '';
  // const fullname = data ? data.data.fullname : '';
  // const subscriberCount = subscribers ? subscribers.data.length : 0;

//   return (
//     <>
//       {/* Outer Container */}
//       <div className="bg-black text-white">
//         {/* User Details Container */}
//         <div className="flex  flex-col md:flex-row md:justify-between md:items-center md:w-full">
//           <img className="object-cover w-full md:w-screen h-48 md:h-96" src={coverImage} alt="Cover Image" />
//           <div className="md:ml-10 md:mt-0 mt-5 pl-4 md:pl-0">
//             <img className="rounded-full border-4 border-white w-20 md:w-56 mb-2" src={avatar} alt="Avatar" />
//             <div>
//               <p className="font-bold text-xl md:text-3xl">{fullname}</p>
//               <p className="text-gray-500">@{username}</p>
//               <p className="text-gray-500">Subscribers {subscriberCount}</p>
//             </div>
//             <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mt-3 rounded-md">Subscribe</button>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="bg-black border-t-2 border-b-2 border-blue-gray-300">
//           <List className="flex flex-row justify-around">
//             <NavLink to='/home/uservideos' activeClassName="text-red-500 hover:text-red-600">
//               <ListItem>Videos</ListItem>
//             </NavLink>
//             <NavLink to='/home/userplaylist' activeClassName="text-red-500 hover:text-red-600">
//               <ListItem>Playlist</ListItem>
//             </NavLink>
//             <NavLink to='/home/usertweets' activeClassName="text-red-500 hover:text-red-600">
//               <ListItem>Tweets</ListItem>
//             </NavLink>
//             <NavLink to='/home/usersubcribers' activeClassName="text-red-500 hover:text-red-600">
//               <ListItem>Subscribed</ListItem>
//             </NavLink>
//           </List>
//         </nav>

//         {/* User Body Container
//         <div className="mt-5 px-4">
//           <Outlet context={{ avatar: avatar ? avatar : '', username: username, userId: data ? data.data._id : '' }} />
//         </div> */}
//       </div>
//     </>
//   );
// }

// export default Dashboard;


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
            <div className=' w-full h-48 sm: h-auto'>
              <img src={coverImage} alt="Cover-Image" srcset="" className=' object-cover h-48 border-2 w-full sm:h-96' />
            </div>
            <div className=' flex gap-5 '>
              <img src={avatar} alt="avatar" srcset="" className=' w-32 h- md:h-auto md:w-56  border-2 rounded-full' />
              <Typography className='flex flex-col  justify-center'>
                <span className='text-2xl text-white' >{ fullname}</span>
                <span className='text-lg' >@ { username }</span>
                <span className='text-xl' >Subscribers {subscriberCount}</span>
                <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  sm:w-24 h-10 border border-red-500 hover:border-transparent rounded-lg'>Subcribe</button>

              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full bg-blue-gray-900">
          <List className='flex flex-row justify-center'>
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


