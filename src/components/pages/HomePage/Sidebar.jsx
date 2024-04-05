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

import React, { useState } from 'react';

import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,

  Drawer,
  Card,
} from "@material-tailwind/react";
import {

  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {

  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";



function SideBar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer} className='text-white absolute -mt-20 sm:mt-0'>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <List>
          <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>
          <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Liked Videos
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              History
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>

        </Card>
      </Drawer>
    </>
  );
}

export default SideBar;
