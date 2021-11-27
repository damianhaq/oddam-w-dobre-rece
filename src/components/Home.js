import React from "react";
import FourSteps from "./FourSteps";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import Help from "./Help";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <FourSteps />
      <AboutUs />
      <Help />
      <Contact />
      <Footer />
    </div>
  );
}
