import React from "react";
import HeroTimeLine from "./HeroTimeLine";
import TimeLineProgress from "./TimeLineProgress";

export const TimeLine = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroTimeLine />
      <TimeLineProgress />
    </div>
  );
};
