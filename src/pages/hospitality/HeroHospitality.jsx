import React from "react";
import hospitalityHero from "../../assets/impact/hospitality.webp?url";
const HeroHospitality = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${hospitalityHero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroHospitality;
