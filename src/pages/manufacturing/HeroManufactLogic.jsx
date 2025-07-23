import React from "react";
import heroInfacture from "../../assets/impact/manufacturing-logistics-scaled.webp?url";
const HeroManufactLogic = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroInfacture})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroManufactLogic;
