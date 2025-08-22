import React from "react";
import heroPartnership from "../../assets/partnership/partnership.jpg?url";
import { Helmet } from "react-helmet";

const HeroPartnership = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center py-20"
      style={{ backgroundImage: `url(${heroPartnership})` }}
    >
      <Helmet>
        <title>Your Strategic Recruitment Partner | Divine Group</title>
        <meta
          name="description"
          content="Partner with Divine Group to access pre-vetted candidates, hire 90% faster, and leverage industry-specific recruitment expertise with a 12-month replacement guarantee."
        />
        <meta
          name="keywords"
          content="recruitment, talent acquisition, pre-vetted candidates, hiring process, recruitment partner"
        />
        <link
          rel="canonical"
          href="https://thedivinegroup.eu/strategic-partnership"
        />

        <meta
          property="og:title"
          content="Your Strategic Recruitment Partner | Divine Group"
        />
        <meta
          property="og:description"
          content="Partner with Divine Group to access top talent quickly and efficiently with industry-specific expertise."
        />
        <meta property="og:image" content={heroPartnership} />
        <meta
          property="og:url"
          content="https://thedivinegroup.eu/strategic-partnership"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Your Strategic Recruitment Partner | Divine Group"
        />
        <meta
          name="twitter:description"
          content="Partner with Divine Group to access pre-vetted candidates and streamline your hiring process."
        />
        <meta name="twitter:image" content={heroPartnership} />
      </Helmet>
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
