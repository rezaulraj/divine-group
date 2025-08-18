import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Anderson",
    designation: "CEO, Global Recruiters Ltd.",
    message:
      "Partnering with Divine Group has transformed the way we connect with international talent. Their professionalism, reliability, and attention to detail are unmatched.",
  },
  {
    name: "Sophia Martinez",
    designation: "Director of Operations, Bright Future Consultants",
    message:
      "Divine Group’s network and expertise helped us expand our reach across new markets. They don’t just provide services — they build lasting relationships.",
  },
  {
    name: "David Lee",
    designation: "Managing Partner, NextGen Education Services",
    message:
      "Working with Divine Group feels like working with family. Their transparent approach, clear communication, and commitment to excellence make them an invaluable partner.",
  },
  {
    name: "Emma Thompson",
    designation: "HR Head, Elite Workforce Solutions",
    message:
      "Divine Group truly understands the power of partnership. Together, we’ve created opportunities that impact lives and strengthen businesses worldwide.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // auto slide every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gradient-to-br from-amber-50 via-amber-50 to-amber-100">
      <div className="relative w-full max-w-2xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <p className="text-lg italic text-gray-700 mb-6">
              “{testimonials[index].message}”
            </p>
            <h3 className="text-xl font-bold text-gray-900">
              {testimonials[index].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[index].designation}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
