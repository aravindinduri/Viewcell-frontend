import {
  Navbar,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import SideBar from "./Sidebar";
import Logo from '../../../images/logo.jsx'
export default function NavBar() {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-black-900 to-black-800 px-4 py-3"
    >

      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <SideBar />
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="ml-2 cursor-pointer py-1.5"
        >
          <Logo className=' text-sm sm:' />
        </Typography>

        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}