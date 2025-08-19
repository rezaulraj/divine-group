import React from "react";
import HeroHome from "./HeroHome";
import Service from "./Service";
import EmployeeService from "./EmployeeService";
import Partnership from "./Partnership";
import BlogList from "../blog/BlogList";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroHome />
      <Service />
      <EmployeeService />
      <Partnership />
      {/* <BlogList /> */}
    </div>
  );
};

export default HomePage;
