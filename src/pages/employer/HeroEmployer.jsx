import React from "react";
import heroEmployer from "../../assets/employer/heroemployee.jpg?url";

const HeroEmployer = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroEmployer})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider leading-tight">
              Struggling to Find Quality Employees?
            </h1>
            <p className="text-4xl md:text-5xl font-bold mb-6">We Can Help!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEmployer;
