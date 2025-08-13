import React, { useState } from "react";
import heroEmployer from "../../assets/employer/heroemployee.jpg?url";
import { FiCheckCircle } from "react-icons/fi";
import CalendlyPopup from "../../components/CalendlyPopup";

const HeroEmployer = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroEmployer})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-bebasneue">
              Struggling to Find Quality Employees?
            </h1>
            <p className="text-4xl md:text-5xl font-bold mb-6 font-bebasneue">
              We Can Help!
            </p>

            {/* Added Cleaner Button */}
            <button
              onClick={() => setShowCalendly(true)}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <FiCheckCircle className="text-xl" />
              <span>Hire Talent</span>
            </button>
          </div>
        </div>
      </div>
      <CalendlyPopup
        show={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </div>
  );
};

export default HeroEmployer;
