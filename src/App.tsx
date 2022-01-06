import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SectionOne from "./components/Section_1/SectionOne";
import SectionTwo from "./components/Section_2/SectionTwo";
import SectionThree from "./components/Section_3/SectionThree";
import SectionFour from "./components/Section_4/SectionFour";
import SectionFive from "./components/Section_5/SectionFive";
import SectionSix from "./components/Section_6/SectionSix";
import SectionSeven from "./components/Section_7/SectionSeven";
import Dash from "./components/Sub_components/Dash";
import Intro from "./components/Sub_components/Intro";
import { StateProvider } from "./context/StateContext";

function App() {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 7000);
  }, []);
  return (
    <>
      <StateProvider>
        {intro && <Intro />}
        <div className="wrapper flex relative justify-center items-center flex-col w-full">
          <Navbar logo={intro} />
          <SectionOne />
          <Dash />
          <SectionTwo />
          <Dash />
          <SectionThree />
          <Dash />
          <SectionFour />
          <Dash />
          <SectionFive />
          <Dash />
          <SectionSix />
          <Dash />
          <SectionSeven />
        </div>
      </StateProvider>
    </>
  );
}

export default App;
