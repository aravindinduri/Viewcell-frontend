import React, { useEffect, useState } from 'react'
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Logo from '../../../images/logo.jsx';

function NavBar() {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const responce = await axios.get('/api/v1/users/current-user')
    //         setData(responce.data)
    //         console.log(responce.data.data.avatar)
    //     }
    //     data ? null: fetchdata()
    // },[])
    return (
        <div>
            <nav className="flex flex-row justify-between bg-[#000] font-size sm:w-auto h-20">
                <section>
                    <ul className="flex space-x-4 p-4">
                        <li className="cursor-pointer text-sm sm:text-3xl pl-10"><Logo /></li>
                    </ul>
                </section>
                <section className="flex flex-direction:col">
                    <ul className="flex p-4 space-x-4 ">
                        <li className='flex flex-direction:col'>
                            <input
                                type="search"
                                className="w-20 sm: relative m-0 -mr-0.5 block w-[1px] min-w-96 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1" />
                            <div className='flex sm:w-10 items-center pl-2 border border-gray-600 items-center cursor-pointer'>
                                <PiMagnifyingGlassBold className=' sm:text-white text-xl' />
                            </div>

                        </li>

                    </ul>
                </section>
            </nav>
        </div>
    )
}

export default NavBar

// import {
//     Navbar,
//     Typography,
//     IconButton,
//     Button,
//     Input,
//   } from "@material-tailwind/react";
//   import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
   
//   export default function NavBar() {
//     return (
//       <Navbar
//         variant="gradient"
//         color="blue-gray"
//         className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
//       >
//         <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
//           <Typography
//             as="a"
//             href="#"
//             variant="h6"
//             className="cursor-pointer self-start mb-4 sm:ml-9 "
//             >
//             <Logo />
//           </Typography>
          
//           <div className="relative flex w-full gap-2 md:w-max">
//             <Input
//               type="search"
//               color="white"
//               label="Type here..."
//               className="pr-20"
//               containerProps={{
//                 className: "bg-green sm:min-w-[288px]",
//               }}
//             />
//             <Button
//               size="sm"
//               color="white"
//               className="!absolute right-1 top-1 rounded"
//             >
//               Search
//             </Button>
//           </div>
//         </div>
//       </Navbar>
//     );
//   }
  