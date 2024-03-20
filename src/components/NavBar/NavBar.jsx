import React from 'react'

export default function NavBar() {
  return (
           <div>
        <nav className="flex flex-row justify-between bg-[#000]">
          <section>
            <ul className="flex space-x-4 p-4">
              <AiOutlineMenu onClick={() => setOpen(true)} className={clsx("text-3xl text-white cursor-pointer sm:hidden transition-all", isSideBarOpen && "invisible")} />
              <li className="cursor-pointer text-3xl pl-4"><Logo /></li>
            </ul>
          </section>
          {/* side bar */} 
          <div className={clsx("sm:grid auto-rows-auto fixed -translate-x-full md:hidden p-4 bg-blue-500/50 z-10 w-screen h-lvh drop-shadow-lg transition-all", isSideBarOpen && "translate-x-0")}>
            <MdClose onClick={() => setOpen(false)} className="text-4xl text-white mb-4 cursor-pointer" />
            <div className="flex flex-col gap-9 text-white">
              <a className="text-3xl cursor-pointer" href="#">About</a>
              <ul className="text-3xl cursor-pointer flex flex-col gap-4">Contact
                <a href="https://github.com/ARAVIND-INDURI"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/aravind-induri-53bb26261/"><FaLinkedin /> </a>
                <a href="https://mail.google.com/mail/u/1/#inbox"><SiGmail /></a>
              </ul>
            </div>
          </div>

          <section className="flex flex-direction:col">
            <ul className="flex p-4 space-x-4 ">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">Sign up</button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">Sign in</button>
            </ul>
          </section>
        </nav>
      </div> 
  )
}
