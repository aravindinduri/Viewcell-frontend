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
  PowerIcon,
} from "@heroicons/react/24/solid";
import {

  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import axios from 'axios';



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
                </ListItem>
              </Link>

              <Link to='/home/likedVideos'>
                <ListItem>
                  <ListItemPrefix>
                    <FcLike className="h-5 w-5" />
                  </ListItemPrefix>
                  Liked Videos
                </ListItem>
              </Link>

              <Link to='/home/history/'>
                <ListItem>
                  <ListItemPrefix>
                    <GoHistory className="h-5 w-5 text-green-300" />
                  </ListItemPrefix>
                  History
                </ListItem>
              </Link>

              <Link to='/home/settings/'>
                <ListItem>
                  <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Settings
                </ListItem>
              </Link>

              <Link to='/'>
                <ListItem onClick={async () => {
                  await axios.post('/api/v1/users//logout')
                }}>
                  <ListItemPrefix>
                    <PowerIcon className="h-5 w-5 text-red-500" />
                  </ListItemPrefix>
                  Log Out
                </ListItem>
              </Link>
            </NavLink>
          </List>
        </Card>
      </Drawer>
    </>
  );
}

export default SideBar;
