import React from "react";
import heroSme from "../../assets/impact/smes-entrepreneurs.webp?url";
const HeroSme = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroSme})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroSme;
