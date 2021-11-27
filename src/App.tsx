import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section_1/Section_1";
import Intro from "./components/Sub_components/Intro";

function App() {
  return (
    <>
      <Intro />
      <div className="wrapper flex relative justify-center items-center flex-col w-full">
        <Navbar />
        <Section1 />
      </div>
    </>
  );
}

export default App;
