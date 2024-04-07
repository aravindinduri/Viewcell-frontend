// import React, { useState } from "react";
// import { FcLike } from "react-icons/fc";
// import { NavLink, Link } from "react-router-dom";
// import {
//   IconButton,
//   List,
//   ListItem,
//   ListItemPrefix,
//   Drawer,
//   Avatar,
//   Card,
// } from "@material-tailwind/react";
// import {
//   UserCircleIcon,
//   Cog6ToothIcon,
//   PowerIcon,
//   PresentationChartBarIcon,
// } from "@heroicons/react/24/solid";
// import {
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const SidebarItem = ({ icon, text, to }) => (
//   <Link to={to}>
//     <ListItem>
//       <ListItemPrefix>
//         {icon}
//       </ListItemPrefix>
//       {text}
//     </ListItem>
//   </Link>
// );

// export default function Sidebar() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const openDrawer = () => setIsDrawerOpen(true);
//   const closeDrawer = () => setIsDrawerOpen(false);

//   return (
//     <>
//       <div className="hidden sm:none text-white ">
//         <List className="bg-[#000] flex flex-col gap-7 text-white">
//           <SidebarItem to='/home/' icon={<PresentationChartBarIcon className="h-5 w-5" />} text="Dashboard" />
//           <SidebarItem to='/home/likedVideos' icon={<FcLike />} text="Liked Videos" />
//           <SidebarItem to='/home/profile' icon={<Avatar variant="circular" alt="user" className="border-1 border-white w-8 h-8 hover:z-10 focus:z-10" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" />} text="Profile" />
//           <SidebarItem to='/home/settings' icon={<Cog6ToothIcon className="h-5 w-5" />} text="Settings" />
//           <SidebarItem to='/home/logout' icon={<PowerIcon className="h-5 w-5" />} text="Log Out" />
//         </List>
//       </div>
//       <div className="block sm:none  h-11 ">
//         <IconButton variant="text" onClick={openDrawer} className="absolute -mt-12">
//           {isDrawerOpen ? (
//             <XMarkIcon className="h-8 w-8 stroke-2 text-white" />
//           ) : (
//             <Bars3Icon className="h-8 w-8 stroke-2 text-white" />
//           )}
//         </IconButton>
//         <Drawer open={isDrawerOpen} onClose={closeDrawer}>
//           <Card
//             color="transparent"
//             shadow={false}
//             className="h-[calc(100vh-2rem)] w-full p-4"
//           >
//             <NavLink>
//               <List>
//                 <SidebarItem to='/home/' icon={<PresentationChartBarIcon className="h-5 w-5" />} text="Dashboard" />
//                 <SidebarItem to='/home/likedVideos' icon={<FcLike />} text="Liked Videos" />
//                 <SidebarItem to='/home/profile' icon={<UserCircleIcon className="h-5 w-5" />} text="Profile" />
//                 <SidebarItem to='/home/settings' icon={<Cog6ToothIcon className="h-5 w-5" />} text="Settings" />
//                 <SidebarItem to='/home/logout' icon={<PowerIcon className="h-5 w-5" />} text="Log Out" />
//               </List>
//             </NavLink>
//           </Card>
//         </Drawer>
//       </div>
//     </>
//   );
// }


// import React from 'react'

// function Sidebar() {
//   return (
//     <div>Sidebar</div>
//   )
// }

// export default Sidebar

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHome8Fill } from "react-icons/ri";
import { GoHistory } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";



import {
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,

  Drawer,
  Card,
} from "@material-tailwind/react";
import {

  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {

  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";



function SideBar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>

      <IconButton variant="text" size="lg" onClick={openDrawer} className='text-white bg-blue-gray-900'>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2 " />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className=' bg-black' >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <List className=' text-gray-300'>
            <NavLink>
              <Link to='/home/'>
                <ListItem>
                  <ListItemPrefix>
                    <RiHome8Fill className="h-5 w-5 text-blue-800" />
                  </ListItemPrefix >
                  Home
                  <ListItemSuffix>
                  </ListItemSuffix>
                </ListItem>
              </Link>
              <Link to='/home/profile'>
                <ListItem>
                  <ListItemPrefix>
                    <CgProfile className="h-5 w-5 text-blue-800" />
                  </ListItemPrefix>
                  Profile
                </ListItem>
              </Link>
              <Link>
                <ListItem>
                  <ListItemPrefix>
                    <RiDashboardFill className="h-5 w-5 text-blue-800" />
                  </ListItemPrefix>
                  Dashboard
                  <ListItemSuffix>
                  </ListItemSuffix>
                </ListItem>
              </Link>

              <Link to='/home/likedVideos'>
                <ListItem>
                  <ListItemPrefix>
                    <FcLike className="h-5 w-5" />
                  </ListItemPrefix>
                  Liked Videos
                  <ListItemSuffix>
                  </ListItemSuffix>
                </ListItem>
              </Link>

              <Link to='/home/history/'>
                <ListItem>
                  <ListItemPrefix>
                    <GoHistory className="h-5 w-5 text-green-300" />
                  </ListItemPrefix>
                  History
                  <ListItemSuffix>
                  </ListItemSuffix>
                </ListItem>
              </Link>

              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5 text-red-500" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </NavLink>
          </List>


        </Card>
      </Drawer>
    </>
  );
}

export default SideBar;
