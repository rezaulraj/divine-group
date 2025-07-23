import React from "react";
import HeroMedia from "./HeroMedia";
import MediaProgress from "./MediaProgress";

const Media = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroMedia />
      <MediaProgress />
    </div>
  );
};

export default Media;
