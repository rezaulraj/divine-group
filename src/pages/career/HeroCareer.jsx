import React from "react";

const HeroCareer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-[#80C3FF]/20 rounded-full text-[#80C3FF] font-medium text-sm">
                Join Our Growing Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Build Your
                <span className="block text-[#80C3FF]">Career With Us</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Join a team of innovators and problem-solvers dedicated to
                making a difference. Your next career adventure starts here.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#80C3FF]">50+</div>
                <div className="text-gray-400 text-sm">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#80C3FF]">15+</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#80C3FF]">95%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-[#80C3FF] hover:bg-[#6ab0f0] text-[#0A1F44] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Open Positions
              </button>
              <button className="border-2 border-[#80C3FF] text-[#80C3FF] hover:bg-[#80C3FF] hover:text-[#0A1F44] font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCareer;
