import React from "react";
import Heromodule from "../modules/Heromodule";
import FeatureSection from "../modules/Featuresection";
import AboutSection from "../modules/Aboutsection";

function Home() {
  return (
    <div className="Home">
      <Heromodule />
      <FeatureSection />
      <AboutSection />
    </div>
  );
}

export default Home;
