import React from "react";
import HeroEmployer from "./HeroEmployer";
import EmployerProgress from "./EmployerProgress";
import EmployeeContact from "./EmployeeContact";

const EmployerService = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroEmployer />
      <EmployerProgress />
      <EmployeeContact />
    </div>
  );
};

export default EmployerService;
