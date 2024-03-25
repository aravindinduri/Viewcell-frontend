import React, { useState } from 'react'
import Logo from '../../../images/logo.jsx';

import { AiOutlineMenu } from "react-icons/ai";
import clsx from 'clsx';
function Home() {
  const [isSideBarOpen, setOpen] = useState(false)
  return (
    <div>
      <nav className="flex flex-row justify-between bg-[#000] font-size sm:w-auto h-20">
        <section>
          <ul className="flex space-x-4 p-4">
            <AiOutlineMenu onClick={() => setOpen(true)} className={clsx("text-2xl text-white cursor-pointer sm:hidden transition-all", isSideBarOpen && "invisible")} />
            <li className="cursor-pointer text-3xl pl-4"><Logo /></li>
          </ul>
        </section>
        <section className="flex flex-direction:col">
          <ul className="flex p-4 space-x-4 ">
            <li>
              <input
                type="search"
                className="sm: relative m-0 -mr-0.5 block w-[1px] min-w-96 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd" />
              </svg>

            </li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Home