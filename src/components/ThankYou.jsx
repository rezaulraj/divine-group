import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg text-center"
      >

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <FaCheckCircle className="text-green-500 text-7xl" />
        </motion.div>


        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Thank You!
        </h1>


        <p className="text-lg text-gray-600 mb-8">
          We’ve received your message. Our recruitment team will get back to you
          shortly.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
