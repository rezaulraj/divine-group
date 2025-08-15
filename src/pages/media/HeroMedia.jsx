import React from "react";
import heroMedia from "../../assets/impact/recuitment.png?url"
const HeroMedia = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroMedia})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroMedia;
