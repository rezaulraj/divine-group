import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaLaptopCode,
  FaBuilding,
  FaConciergeBell,
  FaFilm,
  FaPalette,
  FaTruckMoving,
  FaGraduationCap,
  FaUmbrellaBeach,
  FaStore,
  FaFlask,
  FaLightbulb,
} from "react-icons/fa";
import service1 from "../../assets/impact/recuitment.png?url";
import service2 from "../../assets/impact/ict.png?url";
import service3 from "../../assets/impact/real-state.jpg?url";
import service4 from "../../assets/impact/hospitality.webp?url";
import service5 from "../../assets/impact/recuitment.png?url";
import service6 from "../../assets/impact/design.webp?url";
import service7 from "../../assets/impact/manufacturing-logistics-scaled.webp?url";
import service8 from "../../assets/impact/education.png?url";
import service9 from "../../assets/impact/tourism.webp?url";
import service10 from "../../assets/impact/smes-entrepreneurs.webp?url";
import service11 from "../../assets/impact/science.webp?url";
import service12 from "../../assets/impact/retail.avif?url";

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
    name: "ICT Recruitment",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length, isHovered]);

  const getCardPosition = (index) => {
    const total = services.length;
    const relativeIndex = (index - activeIndex + total) % total;

    if (relativeIndex === total - 1)
      return { x: -180, z: 0, scale: 0.8, opacity: 0.7 };
    if (relativeIndex === 0) return { x: 0, z: 50, scale: 1, opacity: 1 };
    if (relativeIndex === 1) return { x: 180, z: 0, scale: 0.8, opacity: 0.7 };
    return { x: 0, z: -100, scale: 0, opacity: 0 };
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden shadow-lg">
      <div
        className="absolute inset-0 bg-black/60 z-0"
        style={{
          backgroundImage: `url(${services[activeIndex].icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease",
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-10 py-10 text-white">
        <div className="flex items-center mb-4">
          <div className="text-white bg-[#0A1F44]/70 p-3 rounded-full mr-4">
            {services[activeIndex].iconComponent}
          </div>
          <h3 className="text-lg font-semibold">Our Services</h3>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={services[activeIndex].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {services[activeIndex].name}
            </h2>
            <p className="mb-6 text-gray-200 italic">
              "{services[activeIndex].tagline}"
            </p>
            <Link
              to={services[activeIndex].link}
              className="inline-block bg-[#0A1F44] text-white px-5 py-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              Discover More →
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center overflow-visible">
        <div
          className="relative h-[400px] w-full flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {services.map((service, index) => {
            const position = getCardPosition(index);

            return (
              <motion.div
                key={service.id}
                className={`absolute cursor-pointer rounded-xl overflow-hidden shadow-lg`}
                initial={false}
                animate={{
                  x: position.x,
                  zIndex: index === activeIndex ? 50 : position.z,
                  scale: position.scale,
                  opacity: position.opacity,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: 260,
                  height: 320,
                  backgroundImage: `url(${service.icon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full h-full bg-black/40 flex items-end p-4">
                  <motion.p
                    className="text-white text-sm font-medium"
                    animate={{
                      opacity: position.scale === 1 ? 1 : 0.7,
                      fontSize: position.scale === 1 ? "1rem" : "0.875rem",
                    }}
                  >
                    {service.name}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}

          <button
            className="absolute left-4 z-60 cursor-pointer bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm"
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + services.length) % services.length
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 cursor-pointer z-60 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % services.length)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroHome;
