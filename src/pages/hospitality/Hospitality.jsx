import React from "react";
import HeroHospitality from "./HeroHospitality";
import HospitalityProgress from "./HospitalityProgress";

const Hospitality = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroHospitality />
      <HospitalityProgress />
    </div>
  );
};

export default Hospitality;
