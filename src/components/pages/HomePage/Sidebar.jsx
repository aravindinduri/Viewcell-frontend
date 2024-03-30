
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";
import {
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Avatar,
  Card,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="hidden sm:block text-white h-full">
        <List className="bg-[#000] flex flex-col gap-7 text-white h-full">
          <Link to='/home/'>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboared
            </ListItem>
          </Link>

          <Link to='/home/likedVideos'>
            <ListItem>
              <ListItemPrefix>
                <FcLike />
              </ListItemPrefix>
              Liked Videos
            </ListItem>
          </Link>

          <ListItem>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="user"
                className="border-1 border-white w-8 h-8 hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              />            </ListItemPrefix>
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
      </div>
      <div className="block sm:hidden ">
        <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
        <Drawer open={isDrawerOpen} onClose={closeDrawer}>
          <Card
            color="transparent"
            shadow={false}
            className="h-[calc(100vh-2rem)] w-full p-4"
          >
            <NavLink>

              <List>
                <hr className="my-2 border-blue-gray-50" />

                <Link to='/home'>
                  {console.log("clicked")}
                  <ListItem>
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboared
                  </ListItem>
                </Link>

                <ListItem>
                  <ListItemPrefix>
                    <FcLike />
                  </ListItemPrefix>
                  Liked Videos
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
            </NavLink>

          </Card>
        </Drawer>
      </div>
    </>
  );
}