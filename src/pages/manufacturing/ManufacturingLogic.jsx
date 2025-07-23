import React from "react";
import HeroManufactLogic from "./HeroManufactLogic";
import ManufactureLogicticProgress from "./ManufactureLogicticProgress";
const ManufacturingLogic = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroManufactLogic />
      <ManufactureLogicticProgress />
    </div>
  );
};

export default ManufacturingLogic;
