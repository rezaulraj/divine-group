import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo-blue.png?url";
import logowhite from "/logo-white.png?url";
import clineLogo1 from "../assets/cliend/cl1.png?url";
import clineLogo2 from "../assets/cliend/cl2.png?url";
import clineLogo3 from "../assets/cliend/cl3.png?url";
import clineLogo4 from "../assets/cliend/cl4.png?url";
import clineLogo5 from "../assets/cliend/cl5.png?url";
import clineLogo6 from "../assets/cliend/cl6.png?url";
import clineLogo7 from "../assets/cliend/cl7.png?url";
import clineLogo8 from "../assets/cliend/cl8.png?url";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const navItem = [
  { label: "Home", path: "/" },
  {
    label: "Who We Are",
    subNav: [
      {
        label: "About Us",
        path: "/about-us",
      },
      {
        label: "Timeline",
        path: "/timeline",
      },
    ],
  },
  {
    label: "Portfolios",
    subNav: [
      {
        label: "ICT",
        path: "/information-communication-technology",
      },
      {
        label: "Real Rstate",
        path: "/real-estate",
      },
      {
        label: "Hospitality",
        path: "/hospitality",
      },
      {
        label: "Media",
        path: "/media",
      },
      {
        label: "Design",
        path: "/design",
      },
      {
        label: "Manufacturing & Logistics",
        path: "/manufacturing-and-logistics",
      },
      {
        label: "Education",
        path: "/education",
      },
      {
        label: "Tourism",
        path: "/tourism",
      },
      {
        label: "SMEs & Entrepreneurship",
        path: "/smes-and-entrepreneurship",
      },
      {
        label: "Science",
        path: "/science",
      },
      {
        label: "Retail",
        path: "/retail",
      },
    ],
  },
  { label: "Employer Services", path: "/employer-services" },
  { label: "Strategic Partnership", path: "/strategic-partnership" },
  { label: "Contact Us", path: "/contact-us" },
];

const clientLogos = [
  clineLogo1,
  clineLogo2,
  clineLogo3,
  clineLogo4,
  clineLogo5,
  clineLogo6,
  clineLogo7,
  clineLogo8,
];

const Header = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const containerRef = useRef(null);

  // Animate on route change
  useEffect(() => {
    setShowIntro(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
      setLogoVisible(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Auto-rotate client logos with smooth sliding effect
  useEffect(() => {
    if (navOpen && !isHovering) {
      const interval = setInterval(() => {
        setCurrentLogoIndex((prev) => (prev + 1) % clientLogos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [navOpen, isHovering]);

  const nextLogo = () => {
    setCurrentLogoIndex((prev) => (prev + 1) % clientLogos.length);
  };

  const prevLogo = () => {
    setCurrentLogoIndex(
      (prev) => (prev - 1 + clientLogos.length) % clientLogos.length
    );
  };

  return (
    <>
      {/* Intro Animation Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-[#6BC04B] z-[60] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={logowhite}
              alt="Logo"
              initial={{ scale: 2, opacity: 0 }}
              animate={{
                scale: [3, 2.5, 1],
                opacity: [0, 0.5, 1],
                x: [0, 0, window.innerWidth / 2 - 140],
                y: [0, 0, -window.innerHeight / 2 + 50],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-8 md:h-16 fixed z-[70]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Logo - Top Right */}
      <AnimatePresence>
        {logoVisible && !navOpen && !showIntro && (
          <motion.a
            href="/" // Add your link destination here
            key="top-logo-link"
            className="absolute top-0 right-12 z-50"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.8,
              transition: { duration: 0.4 },
            }}
          >
            <motion.img
              src={logowhite}
              alt="Logo"
              className="h-10 sm:h-14 md:h-24 bg-primary p-1 pb-2 shadow-2xl md:p-3 rounded-bl-xl rounded-br-xl md:rounded-bl-2xl md:rounded-br-2xl"
            />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Sticky SVG Menu Icon - Top Left */}
      <motion.div
        className="fixed top-0 left-2 z-[70] cursor-pointer"
        style={{ height: "70px" }}
        whileHover={{ height: 70, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        onClick={() => {
          setNavOpen(!navOpen);
          if (!navOpen) {
            setLogoVisible(false);
          } else {
            setLogoVisible(true);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-500 w-[110px] h-[60%] hover:h-[70%] md:w-[160.73px] md:h-[90%] hover:md:h-[100%]"
          // width="160.722"
          // height="90%"
          viewBox="0 0 214.722 92.42"
        >
          <defs>
            <filter
              id="Path_85034"
              x="0"
              y="0"
              width="214.722"
              height="92.42"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodOpacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="translate(-1664.917 6)">
            <g>
              <g
                transform="matrix(1, 0, 0, 1, 1664.92, -12)"
                filter="url(#Path_85034)"
              >
                <path
                  d="M-23.589-341.759l196.722.231s-43.742,3.472-59.942,44.9-64.8,35.873-77.532,2.314S-23.589-341.759-23.589-341.759Z"
                  transform="translate(32.59 347.76)"
                  fill="#fff"
                />
              </g>
              <g transform="translate(1753.292 27.309)">
                <g transform="translate(0 -8)">
                  <line
                    x2="37.291"
                    stroke="#0C3F75"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,0H37.291"
                    transform="translate(0 10.659)"
                    stroke="#0C3F75"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,0H37.291"
                    transform="translate(0 21.319)"
                    stroke="#0C3F75"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </motion.div>

      {/* Nav Menu with Logo and Items */}
      <AnimatePresence>
        {navOpen && (
          <>
            {/* Background with bottom-left rounded animation */}
            <motion.div
              className="fixed inset-0 bg-[#6BC04B] z-[64]"
              initial={{ clipPath: "circle(0% at right top)" }}
              animate={{ clipPath: "circle(150% at right top)" }}
              exit={{ clipPath: "circle(0% at right top)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Nav content */}
            <motion.div
              className="fixed inset-0 z-[65] flex flex-col items-center justify-center gap-8 text-2xl font-semibold"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src={logowhite}
                alt="logowhite"
                className="fixed top-0 right-10 h-22 mb-6 bg-primary p-2 rounded-b-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              <div className="flex items-center justify-around gap-10 w-full px-20">
                {/* Left side - Navigation */}
                <div className="flex flex-col gap-3">
                  {navItem.map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative"
                      onMouseEnter={() => setHoveredNavItem(i)}
                      onMouseLeave={() => setHoveredNavItem(null)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <a
                        href={item.path}
                        className="text-gray-100 hover:text-gray-200 text-2xl md:text-4xl hover:translate-x-6 transition-transform duration-500 leading-tight uppercase font-raleway font-extrabold relative z-10 flex items-center"
                        onClick={() => {
                          setNavOpen(false);
                          setLogoVisible(true);
                        }}
                      >
                        {item.label}
                        {item.subNav && (
                          <motion.span
                            className="ml-2"
                            animate={{
                              rotate: hoveredNavItem === i ? 90 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaArrowRight size={22} />
                          </motion.span>
                        )}
                      </a>

                      {/* Subnav indicator */}
                      {hoveredNavItem === i && (
                        <motion.div
                          className="absolute left-0 right-0 h-1 bg-white/50 bottom-0"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          layoutId="navIndicator"
                        />
                      )}

                      {/* Subnav items */}
                      {item.subNav && hoveredNavItem === i && (
                        <motion.div
                          className="ml-6 mt-2 flex flex-col gap-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.subNav.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              className="text-white/80 hover:text-white text-xl font-medium transition-all duration-300 pl-4 py-1 border-l-2 border-white/50 hover:border-white/70 hover:pl-6"
                              onClick={() => {
                                setNavOpen(false);
                                setLogoVisible(true);
                              }}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Right side - Enhanced Client Logo Carousel */}
                <div
                  className="hidden md:inline-flex relative h-96 w-96"
                  ref={containerRef}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Sunburst background animation */}
                  <motion.div
                    className="absolute inset-0 opacity-20 rounded-full"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background: `radial-gradient(transparent 70%, #2d8c64 70%), 
                                  repeating-conic-gradient(from 0deg, 
                                    #ffffff 0deg 10deg, 
                                    transparent 10deg 20deg)`,
                    }}
                  />

                  {/* Continuous Border Animation */}
                  <motion.div
                    className="absolute inset-0 border-4 border-white rounded-full"
                    style={{
                      borderImage:
                        "linear-gradient(90deg, transparent, white, transparent) 1",
                      borderImageSlice: 1,
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Dashed Border for Loading Effect */}
                  <motion.div
                    className="absolute inset-0 border-4 border-dashed border-white rounded-full opacity-60"
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Logo Container with Smooth Slide Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence custom={currentLogoIndex} mode="wait">
                      <motion.div
                        key={currentLogoIndex}
                        className="bg-white rounded-full h-64 w-64 flex items-center justify-center overflow-hidden shadow-lg"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.32, 0, 0.67, 0] }}
                      >
                        <motion.img
                          src={clientLogos[currentLogoIndex]}
                          alt={`Client ${currentLogoIndex + 1}`}
                          className="h-48 object-contain"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Arrows */}
                  {isHovering && (
                    <>
                      <motion.button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevLogo();
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowLeft className="text-white" size={20} />
                      </motion.button>
                      <motion.button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextLogo();
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight className="text-white" size={20} />
                      </motion.button>
                    </>
                  )}

                  {/* Navigation Dots */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
                    {clientLogos.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentLogoIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentLogoIndex
                            ? "bg-white scale-125"
                            : "bg-white/50"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
