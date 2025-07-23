import React from "react";
import ictImage from "../../assets/impact/ict.webp?url";
const HeroInfoComTech = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${ictImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroInfoComTech;
