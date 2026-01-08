import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HeroCareer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <Helmet>
        <title>Careers</title>
        <meta
          name="description"
          content="Explore Divine Group Careers we offering all-category job solutions—including C-category roles such as construction workers, helpers, technicians, cleaners, and other labor positions—along with recruitment, ICT, real estate, hospitality, media, design, manufacturing, education, tourism, SMEs, science, and retail."
        />
        <meta
          name="keywords"
          content="recruitment, construction, technicians, helpers, cleaners, ict, real estate, hospitality, media, design, manufacturing, education, tourism, SMEs, entrepreneurship, science, retail, job solutions, talent acquisition, staffing agency, workforce solutions, top recruitment agency, job placement, employment services, career opportunities, job openings, professional growth"
        />
        <link rel="canonical" href="https://thedivinegroup.eu/career/" />

        <meta property="og:title" content="Careers" />
      </Helmet>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block px-6 py-3 bg-[#80C3FF]/20 rounded-full text-[#80C3FF] font-medium text-lg border border-[#80C3FF]/30">
                Join Our Growing Team
              </span>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Build Your
                  <span className="block text-[#80C3FF] mt-2">
                    Career With Us
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Join a team of innovators and problem-solvers dedicated to
                  making a difference. Your next career adventure starts here.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#80C3FF]">
                  50+
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  Open Positions
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#80C3FF]">
                  15+
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#80C3FF]">
                  95%
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  Client Satisfaction
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => {
                  const section = document.querySelector("#jobs");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#80C3FF] hover:bg-[#6ab0f0] text-[#0A1F44] font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer text-lg"
              >
                View Open Positions
              </button>
              <Link
                to={"/about-us"}
                className="border-2 border-[#80C3FF] text-[#80C3FF] hover:bg-[#80C3FF] hover:text-[#0A1F44] font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg text-center"
              >
                Learn About Culture
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-fit">
            <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
              Why Join Us?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#80C3FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0A1F44] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Global Opportunities
                  </h4>
                  <p className="text-gray-300 text-base mt-1">
                    Work with international teams across 15+ countries
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#80C3FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0A1F44] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Career Growth
                  </h4>
                  <p className="text-gray-300 text-base mt-1">
                    Continuous learning and professional development
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#80C3FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0A1F44] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Innovative Culture
                  </h4>
                  <p className="text-gray-300 text-base mt-1">
                    Be part of cutting-edge projects and solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#80C3FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0A1F44] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Work-Life Balance
                  </h4>
                  <p className="text-gray-300 text-base mt-1">
                    Flexible working arrangements and supportive environment
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <p className="text-gray-300 text-sm">
                  🎯{" "}
                  <span className="font-semibold text-white">
                    Immediate Start
                  </span>{" "}
                  available for selected positions
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Fast-track application process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCareer;
