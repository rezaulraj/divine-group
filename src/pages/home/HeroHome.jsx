import React, { useState, useEffect, useRef } from "react";
import {
  FaUserTie, // Recruitment
  FaLaptopCode, // ICT
  FaBuilding, // Real Estate
  FaConciergeBell, // Hospitality
  FaFilm, // Media
  FaPalette, // Design
  FaTruckMoving, // Manufacturing & Logistics
  FaGraduationCap, // Education
  FaUmbrellaBeach, // Tourism
  FaStore, // Retail
  FaFlask, // Science
  FaLightbulb, // Entrepreneurs
} from "react-icons/fa";
import service1 from "../../assets/impact/recuitment.webp?url";
import service2 from "../../assets/impact/ict.webp?url";
import service3 from "../../assets/impact/real-state.webp?url";
import service4 from "../../assets/impact/hospitality.webp?url";
import service5 from "../../assets/impact/media-scaled.webp?url";
import service6 from "../../assets/impact/design.webp?url";
import service7 from "../../assets/impact/manufacturing-logistics-scaled.webp?url";
import service8 from "../../assets/impact/education.webp?url";
import service9 from "../../assets/impact/tourism.webp?url";
import service10 from "../../assets/impact/smes-entrepreneurs.webp?url";
import service11 from "../../assets/impact/science.webp?url";
import service12 from "../../assets/impact/retail-store.webp?url";

const services = [
  {
    id: 1,
    name: "Recruitment",
    icon: service1,
    iconComponent: <FaUserTie className="text-3xl" />,
    tagline: "Connecting talent with opportunity",
    link: "/",
  },
  {
    id: 2,
    name: "ICT",
    icon: service2,
    iconComponent: <FaLaptopCode className="text-3xl" />,
    tagline: "Innovative solutions for the digital age",
    link: "/information-communication-technology",
  },
  {
    id: 3,
    name: "Real Estate",
    icon: service3,
    iconComponent: <FaBuilding className="text-3xl" />,
    tagline: "Building your dream spaces",
    link: "/real-estate",
  },
  {
    id: 4,
    name: "Hospitality",
    icon: service4,
    iconComponent: <FaConciergeBell className="text-3xl" />,
    tagline: "Exceptional experiences every time",
    link: "/hospitality",
  },
  {
    id: 5,
    name: "Media",
    icon: service5,
    iconComponent: <FaFilm className="text-3xl" />,
    tagline: "Telling stories that matter",
    link: "/media",
  },
  {
    id: 6,
    name: "Design",
    icon: service6,
    iconComponent: <FaPalette className="text-3xl" />,
    tagline: "Beautiful solutions that work",
    link: "/design",
  },
  {
    id: 7,
    name: "Manufacturing & Logistics",
    icon: service7,
    iconComponent: <FaTruckMoving className="text-3xl" />,
    tagline: "Efficiency at every step",
    link: "/manufacturing-and-logistics",
  },
  {
    id: 8,
    name: "Education",
    icon: service8,
    iconComponent: <FaGraduationCap className="text-3xl" />,
    tagline: "Empowering minds, shaping futures",
    link: "/education",
  },
  {
    id: 9,
    name: "Tourism",
    icon: service9,
    iconComponent: <FaUmbrellaBeach className="text-3xl" />,
    tagline: "Discover unforgettable journeys",
    link: "/tourism",
  },
  {
    id: 10,
    name: "SMEs & Entrepreneurs",
    icon: service10,
    iconComponent: <FaLightbulb className="text-3xl" />,
    tagline: "Fueling innovation and growth",
    link: "/smes-and-entrepreneurship",
  },
  {
    id: 11,
    name: "Science",
    icon: service11,
    iconComponent: <FaFlask className="text-3xl" />,
    tagline: "Pushing the boundaries of knowledge",
    link: "/science",
  },
  {
    id: 12,
    name: "Retail Store",
    icon: service12,
    iconComponent: <FaStore className="text-3xl" />,
    tagline: "Curated experiences for every customer",
    link: "/retail",
  },
];

const HeroHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [animate, setAnimate] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      if (!isHovering) {
        setAnimate(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
          setAnimate(true);
        }, 500); // Match this with transition duration
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovering]);

  useEffect(() => {
    setAnimate(true);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimate(true);
    }, 500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background images with smooth transition */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${service.icon})`,
              opacity: index === currentIndex ? 1 : 0,
              transitionDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent flex items-center">
        <div className="container mx-auto px-6 z-10">
          <div ref={contentRef} className="max-w-2xl overflow-hidden">
            {/* Icon and heading */}
            <div
              className={`flex items-center mb-4 transition-all duration-500 ease-out ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="text-white bg-primary/80 p-3 rounded-full mr-4">
                {services[currentIndex].iconComponent}
              </div>
              <h1 className="text-5xl font-bold text-white">
                {services[currentIndex].name}
              </h1>
            </div>

            {/* Positive tagline */}
            <p
              className={`text-xl text-white mb-6 font-light italic transition-all duration-500 ease-out delay-100 ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              "{services[currentIndex].tagline}"
            </p>

            {/* Border-only button */}
            <button
              className={`px-8 py-3 border-2 border-white text-white hover:bg-white/10 transition-all duration-500 ease-out delay-200 ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <a
                href={services[currentIndex].link}
                className="flex items-center"
              >
                Discover More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Right side vertical navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col space-y-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative group focus:outline-none"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom progress indicator (optional) */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#712D8C]" : "bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HeroHome;
