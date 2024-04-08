import React, { useState } from "react";
import clsx from 'clsx'
import Logo from '../../../images/logo.jsx';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Switch } from "@material-tailwind/react";
import { SiGmail } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Parallax } from 'react-parallax';
import LoginForm from "./login.jsx";
import RegisterForm from "./register.jsx";
import Footer from "./Footer.jsx";
const LandingPage = () => {
  const [Toggle, setToggle] = useState(false)
  const [isSideBarOpen, setOpen] = useState(false)
  const [isLogin, setLogin] = useState(false)
  function handleToggle(toggle) {
    toggle = !toggle
    setToggle(toggle)
    setLogin(toggle)
  }
  return (
    <>
      <div className="flex flex-col">
        <div>
          <nav className="flex flex-row justify-between bg-[#000]">
            <section>
              <ul className="flex">
                <li className="cursor-pointer text-3xl pl-4"><Logo /></li>
              </ul>
            </section>
            {/* side bar */}


          </nav>

        </div>
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
              <div className="flex flex-row text-white gap-x-5 font-sans justify-center items-center mb-10   ">
                <span className="text-4xl font-Oswald">Sign up</span>
                <Switch
                  id="custom-switch-component"
                  ripple={false}
                  className="h-full w-full checked:bg-[#fa3d3d] bg-blue-500 "
                  containerProps={{
                    className: "w-11 h-6",
                  }}
                  circleProps={{
                    className: "before:hidden left-0.5 border-none",
                  }}
                  onClick={() => handleToggle(Toggle)}
                />
                <span className="text-4xl font-Oswald">Sign in</span>
              </div>
              {
                isLogin ? <LoginForm /> : <RegisterForm />
              }
            </div>
          </Parallax>
        </div>

      </div>
      <Footer />
    </>

  );
};

export default LandingPage;