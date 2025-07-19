import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  { image: service1, text: "Recruitment Services" },
  { image: service2, text: "ICT Solutions" },
  { image: service3, text: "Real Estate" },
  { image: service4, text: "Hospitality" },
  { image: service5, text: "Media & Entertainment" },
  { image: service6, text: "Design & Creatives" },
  { image: service7, text: "Manufacturing & Logistics" },
  { image: service8, text: "Education Sector" },
  { image: service9, text: "Tourism & Travel" },
  { image: service10, text: "SMEs & Entrepreneurs" },
  { image: service11, text: "Science & Research" },
  { image: service12, text: "Retail & E-commerce" },
];

const Service = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate the growing line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-gray-50/30 overflow-hidden">
      {/* Top Big Image - Responsive sizing */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-20 mx-auto w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[45rem] xl:h-[45rem] rounded-full border-4 border-white shadow-xl overflow-hidden"
       
      >
        <img
          src={service1}
          alt="Main Service"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{ zIndex: 20 }} // Ensure this is below the top image
      >
        {/* Animated Center Line */}
        <div className="absolute left-1/2 md:left-1/2 top-0 h-full w-1 bg-gray-200 overflow-hidden -translate-x-1/2">
          <motion.div
            className="w-full h-full bg-blue-500 origin-top"
            style={{ scaleY: lineHeight }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32 pt-16">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              {...service}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ image, text, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0"
    >
      {/* Left Side (Image or Text) */}
      <motion.div
        className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"} order-1`}
        variants={{
          hidden: { opacity: 0, x: isEven ? -100 : 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: isEven ? 0 : 0.2,
            },
          },
        }}
      >
        {isEven ? (
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-white shadow-lg overflow-hidden mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={text}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-full flex items-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center w-full">
              {text}
            </p>
          </div>
        )}
      </motion.div>

      {/* Timeline Dot - Responsive positioning */}
      <motion.div
        className="absolute left-1/2 md:left-1/2 top-1/2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 border-4 border-white shadow-md flex items-center justify-center"
        variants={{
          hidden: { scale: 0 },
          visible: {
            scale: 1,
            transition: {
              duration: 0.4,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            },
          },
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </motion.div>

      {/* Right Side (Text or Image) */}
      <motion.div
        className={`w-full md:w-5/12 ${
          isEven ? "md:pl-8" : "md:pr-8"
        } order-3 md:order-2`}
        variants={{
          hidden: { opacity: 0, x: isEven ? 100 : -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: isEven ? 0.2 : 0,
            },
          },
        }}
      >
        {isEven ? (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-full flex items-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center w-full">
              {text}
            </p>
          </div>
        ) : (
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-white shadow-lg overflow-hidden mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={text}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Service;
