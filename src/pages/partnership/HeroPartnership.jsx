import React from "react";
import heroPartnership from "../../assets/partnership/partnership.jpg?url";

const HeroPartnership = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center py-20"
      style={{ backgroundImage: `url(${heroPartnership})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 text-white max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#80C3FF] mb-6 text-left">
          Your Strategic Recruitment Partner
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed text-left">
          We bridge the gap between exceptional talent and forward-thinking
          companies. Partner with us to transform your hiring process:
        </p>

        <ul className="mb-8 space-y-3 text-lg">
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mt-1 mr-2 text-blue-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Access to premium, pre-vetted candidates</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mt-1 mr-2 text-blue-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>90% faster hiring with our streamlined process</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mt-1 mr-2 text-blue-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Industry-specific recruitment expertise</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mt-1 mr-2 text-blue-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>12-month replacement guarantee on all placements</span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 text-left">
          <a
            href="/contact-us"
            className="px-8 py-3 bg-[#0A1F44] hover:bg-[#04132e] text-[#80C3FF] rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 w-full sm:w-auto cursor-pointer"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPartnership;
