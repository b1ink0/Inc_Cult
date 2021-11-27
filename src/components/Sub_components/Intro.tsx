import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="intro_container w-full h-full absolute top-0 left-0 z-10">
      <div className="intro w-screen h-screen fixed flex justify-center items-center">
        <div className="intro_section_1 w-full h-full flex justify-center items-center relative">
          <span className="w-screen h-screen fixed"></span>
          <span className="w-screen h-screen fixed"></span>
          <span className="w-screen h-screen fixed"></span>
          <span className="w-screen h-screen fixed"></span>
        </div>
        <div className="intro_section_2 fixed flex justify-center items-center">
          <span className="absolute"></span>
          <span className="absolute"></span>
          <span className="absolute"></span>
          <span className="absolute"></span>
          <span className="absolute"></span>
          <span className="absolute"></span>
          <span className="absolute"></span>
          <span className="absolute"></span>
        </div>
      </div>
    </div>
  );
}
