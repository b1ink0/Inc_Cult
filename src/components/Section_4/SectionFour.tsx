import React from "react";
import "./SectionFour.scss";
import User from "../media/user.png";

export default function SectionFour() {
  return (
    <section
      id="section_4"
      className="section_4 w-full flex justify-center items-center flex-col"
    >
      <div className="section_4_wrapper w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold pb-1">Blog</h1>
        <div className="blog_wrapper w-4/5 flex justify-center items-center flex-col mt-12 p-5 rounded-xl">
          <div className="profile_wrapper w-full flex justify-start items-center mb-2">
            <img src={User} alt="user" className="w-9 h-9 mr-2" />
            <div className="name_date_wrapper flex justify-center items-start flex-col">
              <h1 className="text-left text-xs">Aditya Dhade</h1>
              <p className="text-left text-xs">Posted on Dec 7 2021</p>
            </div>
          </div>
          <h1 className="w-full text-left text-xl font-semibold">Title</h1>
          <span className="w-full text-left">
            <p className="w-full text-left pl-6 mt-2 mb-2">
              <span className="mr-5">#inccult</span>
              <span className="mr-5">#random</span>
              <span className="mr-5">#tag1</span>
              <span className="mr-5">#tag2</span>
            </p>
          </span>
          <p className="w-full text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe
            quaerat hic cum nihil ex nostrum. Exercitationem et repudiandae
            optio! Molestias eveniet necessitatibus labore non. Repudiandae
            autem accusamus quas quam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea saepe quaerat hic cum nihil ex nostrum.
            Exercitationem et repudiandae optio! Molestias eveniet
            necessitatibus labore non. Repudiandae autem accusamus quas quam?
          </p>
          <ul className="w-full text-left mt-2 mb-2">
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="w-full text-left pl-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
          <div className="last_wrapper w-full text-left flex justify-start items-center">
            <p className="mr-2">Let's give it a try ? : )</p>
            <a href="_blank" target="_blank">
              Start now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
