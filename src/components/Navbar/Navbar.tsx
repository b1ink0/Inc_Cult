import React from "react";
import "./Navbar.scss";
import Logo from "../Sub_components/Logo";

export default function Navbar() {
  return (
    <nav className="w-full fixed flex justify-between items-center h-11 bg-black top-0 left-0 pb-1 pt-1">
      <div className="logo_wrapper flex justify-center items-center w-1/4">
        <Logo />
      </div>
      <div className="menu_wrapper flex justify-evenly items-center w-1/2 h-full">
        <button
          type="button"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>Home</h1>
        </button>
        <button
          type="button"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>Blog</h1>
        </button>
        <button
          type="button"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>About</h1>
        </button>
        <button
          type="button"
          className="flex justify-center items-center w-20 h-full font-semibold tracking-wide relative"
        >
          <span className="absolute bottom-0 h-1" />
          <h1>Contact</h1>
        </button>
      </div>
    </nav>
  );
}
