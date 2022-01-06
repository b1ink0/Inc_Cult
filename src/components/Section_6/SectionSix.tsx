import React, { useState } from "react";
import Input from "./Helper-components/Input";
import "./SectionSix.scss";

export default function SectionSix() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section
      id="section_6"
      className="section_6 w-full flex justify-center items-center flex-col"
    >
      <div className="section_6_wrapper w-full flex justify-evenly items-center flex-col">
        <h1 className="text-3xl font-bold pb-1 text-center">Contact</h1>
        <div className="contact_wrapper mt-12">
          <form className="w-full h-full flex justify-start items-center flex-col">
            <h1 className="font-semibold text-xl w-full pt-4 pb-4 mb-5">
              Get in touch width us
            </h1>
            <Input
              state={firstName}
              setState={setFirstName}
              name="First Name"
              type="text"
            />
            <Input
              state={lastName}
              setState={setLastName}
              name="Last Name"
              type="text"
            />
            <Input
              state={email}
              setState={setEmail}
              name="Email"
              type="email"
            />
            <Input
              state={message}
              setState={setMessage}
              name="Your message"
              type="textarea"
            />
            <button
              className="w-4/5 border-2 mt-3 h-10 text-center text-lg font-semibold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
