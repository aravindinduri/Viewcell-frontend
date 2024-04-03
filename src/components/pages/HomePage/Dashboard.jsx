// import React, { useState, useEffect } from 'react'
// import {
//   List,
//   ListItem,
// } from '@material-tailwind/react';
// import { NavLink, Link, Outlet } from 'react-router-dom'
// import Tweets from './Tweets';
// import axios from 'axios';

// function Dashboard() {
//   const [data, setData] = useState(null)
//   const [subscribers, setSubscribers] = useState(null)
//   let coverImage = data ? data.data.coverImage : ''
//   let avatar = data ? data.data.avatar : ''
//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const responce = await axios.get(`/api/v1/users/current-user`)
//         setData(responce.data)
//         const subscriber = await axios.get(`/api/v1/subcription/channel-subscribers/${responce.data.data._id}`);
//         setSubscribers(subscriber.data)
//       }
//       catch (err) {
//         console.log(err)
//       }
//     }
//     data ? null : fetchdata()
//   }, [])
//   return (
//     <>
//       {/* outer Container */}
//       <div>
//         {/* User Details Container */}
//         <div className="sm:w-screen h-auto" >
//           <img className='sm:object-cover h-96 w-full ' src={coverImage ? coverImage : ''} alt="Cover-Image" />
//           <img className='sm:rounded-full w-56 bottom-96 left-80  ' src={avatar ? avatar : ''} alt="avatar" />
//         <div className="sm:h-40 bg-black pl-14 flex justify-between -mt-32">
//           <div className='pl-72 '>
//             <p className=' font-bold text-3xl ' > {data ? data.data.fullname : ''}</p>
//             <p className='text-xl text-gray-500'> @{data ? data.data.username : ''}</p>
//             <p className='text-xl text-gray-500'>subscribers {subscribers ? subscribers.data.length : ''} </p>
//             <div className="">
//             </div>
//           </div>
//           <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent w-28 h-10 rounded-lg mr-96 mt-10  ">Subcribe</button>
//         </div>
//         </div>
//         <div >

//           <NavLink className='bg-black flex border-t-2 border-b-2 pl-0 border-blue-gray-300 sm:shrink'>

//             <List className='flex-row text-blue-gray-100  pl-80 justify-around flex-shrink'>

//               <Link to='/home/uservideos' >
//                 <ListItem className='w-56 pl-20' >
//                   Videos
//                 </ListItem>
//               </Link>

//               <Link to='/home/userplaylist'>
//                 <ListItem className='w-56 pl-20'>
//                   PLaylist
//                 </ListItem>
//               </Link>

//               <Link to='/home/usertweets'>
//                 <ListItem className='w-56 pl-20' >
//                   Tweets
//                 </ListItem>
//               </Link>

//               <Link to='/home/usersubcribers'>
//                 <ListItem className='w-56 pl-20'>
//                   Subcribed
//                 </ListItem>
//               </Link>

//             </List>

//           </NavLink>
//         </div>
//         {/* User Body Container */}
//         <div >
//           <Outlet context={{ avatar: avatar ? avatar : '', username: data ? data.data.username : '', userId: data ? data.data._id : '' }} />

//         </div>
//       </div>
//     </>
//   )
// }

// export default Dashboard

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
import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@material-tailwind/react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState(null);
  const [subscribers, setSubscribers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/users/current-user`);
        setData(response.data);
        const subscriber = await axios.get(`/api/v1/subscription/channel-subscribers/${response.data.data._id}`);
        setSubscribers(subscriber.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (!data) {
      fetchData();
    }
  }, [data]);

  const coverImage = data ? data.data.coverImage : '';
  const avatar = data ? data.data.avatar : '';
  const username = data ? data.data.username : '';
  const fullname = data ? data.data.fullname : '';
  const subscriberCount = subscribers ? subscribers.data.length : 0;

  return (
    <>
      {/* Outer Container */}
      <div className="bg-black text-white">
        {/* User Details Container */}
        <div className="flex md:flex-row md:justify-between md:items-center md:w-full">
          <img className="object-cover w-full md:w-screen h-48 md:h-96" src={coverImage} alt="Cover Image" />
          <div className="md:ml-10 md:mt-0 mt-5 pl-4 md:pl-0">
            <img className="rounded-full border-4 border-white w-20 md:w-56 mb-2" src={avatar} alt="Avatar" />
            <div>
              <p className="font-bold text-xl md:text-3xl">{fullname}</p>
              <p className="text-gray-500">@{username}</p>
              <p className="text-gray-500">Subscribers {subscriberCount}</p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mt-3 rounded-md">Subscribe</button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="bg-black border-t-2 border-b-2 border-blue-gray-300">
          <List className="flex flex-row justify-around">
            <NavLink to='/home/uservideos' activeClassName="text-red-500 hover:text-red-600">
              <ListItem>Videos</ListItem>
            </NavLink>
            <NavLink to='/home/userplaylist' activeClassName="text-red-500 hover:text-red-600">
              <ListItem>Playlist</ListItem>
            </NavLink>
            <NavLink to='/home/usertweets' activeClassName="text-red-500 hover:text-red-600">
              <ListItem>Tweets</ListItem>
            </NavLink>
            <NavLink to='/home/usersubcribers' activeClassName="text-red-500 hover:text-red-600">
              <ListItem>Subscribed</ListItem>
            </NavLink>
          </List>
        </nav>

        {/* User Body Container */}
        <div className="mt-5 px-4">
          <Outlet context={{ avatar: avatar ? avatar : '', username: username, userId: data ? data.data._id : '' }} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
