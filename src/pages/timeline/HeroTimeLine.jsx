import React from "react";
import heroTimeline from "../../assets/impact/recuitment.webp";
import timeline from "../../assets/timeline/timeline.png";

const HeroTimeLine = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroTimeline})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroTimeLine;
