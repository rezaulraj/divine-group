import React, { useState } from "react";
import heroEmployer from "../../assets/employer/heroemployee.jpg?url";
import { FiCheckCircle } from "react-icons/fi";
import CalendlyPopup from "../../components/CalendlyPopup";
import { Helmet } from "react-helmet";

const HeroEmployer = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroEmployer})` }}
    >
      <Helmet>
        <title>Employer Recruitment Solutions | Divine Group</title>
        <meta
          name="description"
          content="Struggling to find quality employees? Divine Group connects you with top talent to meet your business needs quickly and efficiently."
        />
        <meta
          name="keywords"
          content="hire employees, recruitment solutions, talent acquisition, employer hiring, Divine Group jobs"
        />
        <link
          rel="canonical"
          href="https://thedivinegroup.eu/employer-services"
        />

        <meta
          property="og:title"
          content="Hire Quality Employees | Divine Group"
        />
        <meta
          property="og:description"
          content="We help employers hire skilled talent with speed and reliability. Partner with Divine Group to grow your workforce today."
        />
        <meta property="og:image" content={heroEmployer} />
        <meta
          property="og:url"
          content="https://thedivinegroup.eu/employer-services"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hire Quality Employees | Divine Group"
        />
        <meta
          name="twitter:description"
          content="Looking for skilled employees? Divine Group provides fast and effective recruitment solutions for employers."
        />
        <meta name="twitter:image" content={heroEmployer} />
      </Helmet>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-bebasneue leading-tight">
              Struggling to Find Quality Employees?
            </h1>
            <p className="text-4xl md:text-5xl font-bold mb-6 font-bebasneue">
              We Can Help!
            </p>

            <button
              onClick={() => setShowCalendly(true)}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <FiCheckCircle className="text-xl" />
              <span>Hire Talent</span>
            </button>
          </div>
        </div>
      </div>
      <CalendlyPopup
        show={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </div>
  );
};

export default HeroEmployer;
