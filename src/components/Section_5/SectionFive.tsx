import React from "react";
import "./SectionFive.scss";
import ProfileImg1 from "../media/user.png";
import LinkedinSvg from "../media/linkedin.svg";
import InstagramSvg from "../media/instagram.svg";
import FacebookSvg from "../media/facebook.svg";

export default function SectionFive() {
  return (
    <section
      id="section_5"
      className="section_5 w-full flex justify-center items-center flex-col"
    >
      <div className="section_5_warpper w-full flex justify-center items-center flex-col text-center">
        <h1 className="text-3xl font-bold pb-1">Founders</h1>
        <div className="card_container w-11/12 flex justify-evenly items-center mt-24">
          <div className="card w-80 mr-3 ml-3 relative flex justify-start items-center flex-col">
            <div className="profile_wrapper w-full flex justify-center items-center flex-col pr-12 pl-12">
              <img
                src={ProfileImg1}
                alt="profile"
                className="profile_img w-52 mb-4 mt-6"
              />
              <h1 className="w-full pb-2 font-bold text-xl">Sample</h1>
              <p className="opacity-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, perferendis.
              </p>
            </div>
            <div className="socials w-full flex justify-evenly items-center mt-4 absolute bottom-12">
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={LinkedinSvg} alt="socials" className="w-12" />
              </a>
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={InstagramSvg} alt="socials" className="w-12" />
              </a>
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={FacebookSvg} alt="socials" className="w-12" />
              </a>
            </div>
          </div>
          <div className="card w-80 mr-3 ml-3 relative flex justify-start items-center flex-col">
            <div className="profile_wrapper w-full flex justify-center items-center flex-col pr-12 pl-12">
              <img
                src={ProfileImg1}
                alt="profile"
                className="profile_img w-52 mb-4 mt-6"
              />{" "}
              <h1 className="w-full pb-2 font-bold text-xl">Sample</h1>
              <p className="opacity-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, perferendis.
              </p>
            </div>
            <div className="socials w-full flex justify-evenly items-center mt-4 absolute bottom-12">
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={LinkedinSvg} alt="socials" className="w-12" />
              </a>
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={InstagramSvg} alt="socials" className="w-12" />
              </a>
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={FacebookSvg} alt="socials" className="w-12" />
              </a>
            </div>
          </div>
          <div className="card w-80 mr-3 ml-3 relative flex justify-start items-center flex-col">
            <div className="profile_wrapper w-full flex justify-center items-center flex-col pr-12 pl-12">
              <img
                src={ProfileImg1}
                alt="profile"
                className="profile_img w-52 mb-4 mt-6"
              />{" "}
              <h1 className="w-full pb-2 font-bold text-xl">Sample</h1>
              <p className="opacity-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, perferendis.
              </p>
            </div>
            <div className="socials w-full flex justify-evenly items-center mt-4 absolute bottom-12">
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={LinkedinSvg} alt="socials" className="w-12" />
              </a>
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={InstagramSvg} alt="socials" className="w-12" />
              </a>
              <a
                href="_"
                target="_blank"
                className="  flex justify-center items-center p-1"
              >
                <img src={FacebookSvg} alt="socials" className="w-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
