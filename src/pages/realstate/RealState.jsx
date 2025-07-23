import React from "react";
import HeroRealState from "./HeroRealState";
import RealStateProgress from "./RealStateProgress";

const RealState = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroRealState />
      <RealStateProgress />
    </div>
  );
};

export default RealState;
