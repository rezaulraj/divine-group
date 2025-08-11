import React from "react";
import HeroHome from "./HeroHome";
import Service from "./Service";
import EmployeeService from "./EmployeeService";
import Partnership from "./Partnership";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroHome />
      <Service />
      <EmployeeService />
      <Partnership />
    </div>
  );
};

export default HomePage;
