import React from "react";
import HeroHome from "./HeroHome";
import Service from "./Service";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroHome />
      <Service />
    </div>
  );
};

export default HomePage;
