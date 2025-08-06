import React from "react";
import heroPartnership from "../../assets/partnership/partnership.jpg?url";
const HeroPartnership = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroPartnership})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroPartnership;
