import React from "react";
import HeroAboutUs from "./HeroAboutUs";
import AboutUsProgress from "./AboutUsProgress";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroAboutUs />
      <AboutUsProgress/>
    </div>
  );
};

export default AboutUsPage;
