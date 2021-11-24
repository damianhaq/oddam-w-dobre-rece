import React from "react";
import FourSteps from "./FourSteps";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <FourSteps />
    </div>
  );
}
