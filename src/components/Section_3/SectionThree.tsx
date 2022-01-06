import React from "react";
import "./SectionThree.scss";
import Book from "../media/Book.svg";

export default function SectionThree() {
  return (
    <section
      id="section_3"
      className="section_3 w-full flex justify-center items-center flex-col"
    >
      <div className="section_3_wrapper w-full flex justify-evenly items-center">
        <div className="img_wrapper flex justify-center items-center">
          <img src={Book} alt="book" />
        </div>
        <div className="quote_wrapper w-2/5">
          <h1 className="break-words font-bold text-3xl italic">
            <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium soluta eius libero ab, temporibus explica
            <span>"</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
