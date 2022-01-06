import React from "react";
import "./Navbar.scss";
import LogoOne from "../Sub_components/LogoOne";

export default function Navbar({ logo }: any) {
  return (
    <nav className="w-full fixed flex justify-between items-center h-11 bg-black top-0 left-0 pb-1 pt-1 z-10">
      <div className="logo_wrapper flex justify-center items-center w-1/4 h-full">
        {!logo && <LogoOne />}
      </div>
      <div className="menu_wrapper flex justify-evenly items-center w-1/2 h-full">
        <a
          href="#section_1"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>Home</h1>
        </a>
        <a
          href="#section_4"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>Blog</h1>
        </a>
        <a
          href="#section_5"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>About</h1>
        </a>
        <a
          href="#section_6"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>Contact</h1>
        </a>
      </div>
    </nav>
  );
}
