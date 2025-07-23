import React from "react";
import heroDesign from "../../assets/impact/design.webp?url";
const HeroDesign = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroDesign})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroDesign;
