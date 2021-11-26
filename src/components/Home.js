import React from "react";
import FourSteps from "./FourSteps";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import * as Scroll from "react-scroll";
import AboutUs from "./AboutUs";
import Help from "./Help";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <FourSteps name="fourSteps" />
      <AboutUs />
      <Help />
    </div>
  );
}
