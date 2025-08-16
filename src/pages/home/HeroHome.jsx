import React, { useState, useEffect, useRef } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import service1 from "../../assets/impact/recuitment.png?url";
import service2 from "../../assets/impact/ict.png?url";
import service3 from "../../assets/impact/real-state.jpg?url";
import service4 from "../../assets/impact/hospitality.webp?url";
import service5 from "../../assets/impact/media-scaled.webp?url";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => {
        goToNext();
      },
      isHovering ? 10000 : 6000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovering]);

  const goToNext = () => {
    if (isAnimating) return;
    setDirection(1);
    const newIndex =
      currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    setNextIndex(newIndex);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 1000);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    const newIndex =
      currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setNextIndex(newIndex);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 1000);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setNextIndex(index);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 1000);
    resetTimeout();
  };

  // Page flip animation variants
  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 1,
    }),
    center: {
      rotateY: 0,
      x: "0%",
      opacity: 1,
      zIndex: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 90 : -90,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 1,
      transition: {
        duration: 0.7,
      },
    }),
  };

  // Background flip animation
  const bgVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 15 : -15,
      scale: 0.95,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 15 : -15,
      scale: 0.95,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    }),
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background images with book flip effect */}
      <div className="absolute inset-0 perspective-1000">
        <AnimatePresence custom={direction}>
          {isAnimating && (
            <motion.div
              key={`next-${nextIndex}`}
              className="absolute inset-0 bg-cover bg-center origin-center"
              style={{
                backgroundImage: `url(${services[nextIndex].icon})`,
              }}
              custom={direction}
              variants={bgVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          )}
          <motion.div
            key={`current-${currentIndex}`}
            className="absolute inset-0 bg-cover bg-center origin-center"
            style={{
              backgroundImage: `url(${services[currentIndex].icon})`,
            }}
            custom={direction}
            variants={bgVariants}
            initial="center"
            animate={isAnimating ? "exit" : "center"}
          />
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent flex items-center">
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-2xl overflow-hidden perspective-1000">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full origin-left"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Navigation arrows */}
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 z-10">
                  <motion.button
                    onClick={goToPrev}
                    className="p-2 text-white/70 hover:text-white"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </motion.button>
                </div>
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 z-10">
                  <motion.button
                    onClick={goToNext}
                    className="p-2 text-white/70 hover:text-white"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </motion.button>
                </div>

                {/* Icon and heading */}
                <motion.div
                  className="flex items-center mb-4"
                  variants={contentVariants}
                  custom={0}
                >
                  <motion.div
                    className="text-white bg-primary/80 p-3 rounded-full mr-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {services[currentIndex].iconComponent}
                  </motion.div>
                  <motion.h1
                    className="text-3xl md:text-5xl font-bold font-bebasneue text-white/80"
                    variants={contentVariants}
                    custom={1}
                  >
                    {services[currentIndex].name}
                  </motion.h1>
                </motion.div>

                {/* Positive tagline */}
                <motion.p
                  className="text-sm md:text-xl text-white mb-6 font-light font-raleway italic"
                  variants={contentVariants}
                  custom={2}
                >
                  "{services[currentIndex].tagline}"
                </motion.p>

                {/* Border-only button */}
                <motion.button
                  className="px-8 py-3 border-2 border-white font-raleway text-white hover:bg-white/10"
                  variants={contentVariants}
                  custom={3}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={services[currentIndex].link}
                    className="flex items-center tracking-wider"
                  >
                    Discover More
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right side vertical navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-4">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative group focus:outline-none"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-white/60"
                }`}
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  {services[index].name}
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
