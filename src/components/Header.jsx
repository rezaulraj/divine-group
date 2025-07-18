import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo-blue.png?url";

const navItem = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/who-we-are" },
  { label: "Our Impact", path: "/our-impact" },
];

const Header = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  // Animate on route change
  useEffect(() => {
    setShowIntro(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
      setLogoVisible(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Intro Animation Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-[#09cece] z-[60] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: [0, 0, window.innerWidth / 2 - 100],
                y: [0, 0, -window.innerHeight / 2 + 90],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className=" h-16 fixed z-[70]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Logo - Top Right */}
      <AnimatePresence>
        {logoVisible && !navOpen && !showIntro && (
          <motion.img
            key="top-logo"
            src={logo}
            alt="Logo"
            className="fixed top-0 right-4 h-16 z-50"
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
          />
        )}
      </AnimatePresence>

      {/* Sticky SVG Menu Icon - Top Left */}
      <div
        className="fixed top-0 left-2 z-[70] cursor-pointer"
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
          width="160.722"
          height="70.42"
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
                    stroke="#712d8c"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,0H37.291"
                    transform="translate(0 10.659)"
                    stroke="#712d8c"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,0H37.291"
                    transform="translate(0 21.319)"
                    stroke="#712d8c"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Nav Menu with Logo and Items */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed inset-0 bg-amber-700 z-[65] flex flex-col items-center justify-center gap-8 text-2xl font-semibold"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Logo in Menu */}
            <motion.img
              src={logo}
              alt="Logo"
              className="h-16 mb-6 fixed right-4 top-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Navigation Items */}
            {navItem.map((item, i) => (
              <motion.a
                key={i}
                href={item.path}
                className="hover:text-purple-300"
                onClick={() => {
                  setNavOpen(false);
                  setLogoVisible(true);
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
