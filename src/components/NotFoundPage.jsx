import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logowhite from "/logo-white.png?url";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#712D8C] flex flex-col items-center justify-center text-white p-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle at center, #ffffff 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="absolute -bottom-1/3 -left-1/3 w-2/3 h-2/3 rounded-full opacity-10"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["10%", "-10%", "10%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle at center, #ffffff 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full opacity-10"
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle at center, #ffffff 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={logowhite}
          alt="Logo"
          className="h-20 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.h1
          className="text-8xl font-bold mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          className="text-xl mb-8 opacity-90"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            to="/"
            className="bg-white text-[#712D8C] font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 inline-block"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default NotFoundPage;
