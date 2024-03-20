import React, { useState } from "react";
import { Parallax } from 'react-parallax';
import clsx from 'clsx'
import Logo from "../assets/images/logo.jsx"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import LoginForm from "./login.jsx";
import RegisterForm from "./register.jsx";
const Home = () => {
  const [isSideBarOpen, setOpen] = useState(false)
  const [Toggle, setToggle] = useState(false)
  const [isLogin, setLogin] = useState(false)
  function handleToggle(toggle) {
    toggle = !toggle
    setToggle(toggle)
    setLogin(toggle)
  }
  return (

    <div className="flex flex-col">
      {/* <div>
        <nav className="flex flex-row justify-between bg-[#000]">
          <section>
            <ul className="flex space-x-4 p-4">
              <AiOutlineMenu onClick={() => setOpen(true)} className={clsx("text-3xl text-white cursor-pointer sm:hidden transition-all", isSideBarOpen && "invisible")} />
              <li className="cursor-pointer text-3xl pl-4"><Logo /></li>
            </ul>
          </section>
          {/* side bar 
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
      </div> */}
      {/* Body */}
      <div className="flex flex-col overflow-hidden">
        <Parallax bgImage="https://i.postimg.cc/P5YgPs11/neon-22534-960-720.jpg" strength={900} className="flex justify-center items-center w-auto h-lvh bg-cover" >
          <b className="text-6xl underline decoration-pink-500 text-white font-sans z-10 relative italic hover:not-italic transition-all font-normal hover:font-bold">Welcome !</b>
          <p className="text-white text-2xl"> Be First to show case </p>
        </Parallax>
        <div className="bg-[#000] text-white text-2xl font-sans">
          <label className="bold p-4 ">About : </label>
          <p className="break-words text-2xl sm:text-2xl text-sm font-serif p-4">
            Upload Your Videos  : Easily upload your videos, whether they’re short films, vlogs, animations, or music videos.
            <br />
            Our user-friendly interface ensures a seamless experience.
            <br />
            Showcase Your Talent  : BeFirstShowcase provides a dedicated space to display your portfolio. Impress potential clients, collaborators, or fans with your best work.
            <br />
            Connect with Fellow Creatives  : Join a vibrant community of artists, filmmakers, and enthusiasts. Exchange ideas, collaborate on projects, and get inspired.
            <br />
            Be First  : Our tagline says it all. Be the first to showcase your latest creations. Stay ahead of the curve and make your mark in the industry.
          </p>
        </div>
        <Parallax bgImage="https://i.postimg.cc/fbGcgpVT/palm-2445107-960-720.jpg" alt="img2" strength={900} className="flex justify-center items-center w-auto h-lvh bg-cover" >
          <div>
            <div className="flex flex-row text-white gap-x-5 font-sans justify-center items-center mb-10">
              <span className="text-4xl font-Oswald">Sign up</span>
              <button onClick={() => handleToggle(Toggle)} className="w-32 h-8 border-2 rounded-lg ">Toggle
              
              </button>
              <span className="text-4xl font-Oswald">Sign in</span>
            </div>
            {
              isLogin ? <LoginForm /> : <RegisterForm />
            }
          </div>
        </Parallax>
      </div>

    </div>
  );
};

export default Home;