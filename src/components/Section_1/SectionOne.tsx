import React from "react";
import { useStateContext } from "../../context/StateContext";
import LogoTwo from "../Sub_components/LogoTwo";
import "./SectionOne.scss";

export default function Section_1() {
  const { sectionOneRef, sectionTwoRef } = useStateContext();
  const handleDown = () => {
    sectionTwoRef.current.scrollIntoView();
  };
  return (
    <section
      id="section_1"
      className="section_1 w-full flex justify-center items-center flex-col mt-11"
      ref={sectionOneRef}
    >
      <header className="w-full flex justify-center items-center flex-col pt-36">
        <div className="section_1_warpper w-full flex justify-center items-center ">
          <div className="section_1_warpper_1 w-2/5 flex justify-center items-start flex-col">
            <h1 className="text-6xl font-bold mb-3">Inc Cult</h1>
            <p>Place for someone who wants to</p>
            <p> do something different.</p>
          </div>
          <div className="section_1_warpper_1 w-2/5 flex justify-center items-center">
            <LogoTwo />
          </div>
        </div>
        <div className="section_1_btn_warpper w-14 h-14 mt-14 flex justify-center items-center transition-transform duration-300">
          <div
            className="w-14 h-14 relative flex justify-center items-center cursor-pointer -rotate-45"
            onClick={() => handleDown()}
          >
            <span className="w-14 h-2 absolute bottom-0 rounded-full"></span>
            <span className="w-2 h-14 absolute left-0 rounded-full"></span>
          </div>
        </div>
      </header>
    </section>
  );
}
