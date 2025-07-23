import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import topImage from "../../assets/portfolio/infastucter/infactureandlogicture.png?url";
import industrial_infrastructure from "../../assets/portfolio/infastucter/industrial_infrastructure.jpg?url";
import manufacturing_facilities from "../../assets/portfolio/infastucter/manufacturing_facilities.jpg?url";
import supply_chain_growth from "../../assets/portfolio/infastucter/supply_chain_growth.jpg?url";
const ManufactureLogicticProgress = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Enhanced gradient background with more color stops
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.17, 0.34, 0.51, 0.68, 0.85, 1],
    [
      "linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%)", // Purple/teal
      "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)", // Bright blue
      "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)", // Green gradient
      "linear-gradient(135deg, #f46b45 0%, #eea849 100%)", // Orange/yellow
      "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)", // Pink/orange
      "linear-gradient(135deg, #7b4397 0%, #dc2430 100%)", // Purple/red
      "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)", // Teal/blue
    ]
  );

  // Parallax effects for images
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen relative pb-20" ref={containerRef}>
      {/* Animated Background with Gradient Mesh */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: backgroundColor,
          transition: "background 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Subtle animated mesh pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            x: useTransform(scrollYProgress, [0, 1], [0, -50]),
            y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            x: useTransform(
              scrollYProgress,
              [0, 1],
              [0, (Math.random() - 0.5) * 100]
            ),
            y: useTransform(
              scrollYProgress,
              [0, 1],
              [0, (Math.random() - 0.5) * 100]
            ),
            opacity: useTransform(scrollYProgress, [0, 1], [0.2, 0.8]),
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-center relative p-3 mb-[15rem] sm:mb-[18rem] md:mb-[32rem] lg:mb-[40rem] p-4"
          style={{
            y: useTransform(scrollYProgress, [0, 0.5], [0, -50]),
          }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-sm w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] lg:w-[45rem] lg:h-[45rem] rounded-full absolute -top-32 flex items-center justify-center shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.img
              src={topImage}
              alt="ICT Solutions"
              className="w-full h-full object-cover rounded-full p-2"
              style={{
                scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.05]),
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content Sections */}
        <div className="flex flex-col items-center space-y-32 lg:space-y-48 justify-center p-4">
          {/* First Section */}
          <SectionWrapper>
            <TextContent>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wider"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Industrial Infrastructure & Trade Access
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                Divine Group plays a pivotal role in advancing industrial
                development by providing high-performance infrastructure and
                strategically located assets. Our manufacturing and logistics
                zones are designed to support modern industry needs through
                scalable land solutions and seamless connectivity.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                With direct access to ports, airports, and major transport
                corridors, businesses can significantly reduce transit times and
                operational costs while streamlining global trade operations.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl overflow-hidden"
                style={{ y: yImage1 }}
              >
                <img
                  src={industrial_infrastructure}
                  alt="urban masterplan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          {/* Second Section */}
          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl overflow-hidden"
                style={{ y: yImage2 }}
              >
                <motion.img
                  src={manufacturing_facilities}
                  alt="commercial residential"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </ImageContent>
            <TextContent>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wider"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Sectoral Support & Facility Development
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                Our industrial ecosystems cater to a wide range of sectors,
                including food processing, automotive components, heavy
                machinery, chemicals, packaging, and logistics. From factory
                setups to warehousing and tailored supply chain services, our
                platforms are designed to support end-to-end industrial needs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                By offering flexible, ready-to-build environments and advanced
                utilities, we enable both SMEs and large manufacturers to scale
                efficiently and sustainably.
              </motion.p>
            </TextContent>
          </SectionWrapper>

          {/* Third Section */}
          <SectionWrapper>
            <TextContent>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wider"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Sustainable Growth & Business Enablement
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                Divine Group is committed to creating an industrial environment
                that not only drives economic growth but also promotes
                operational excellence and sustainable practices. With a strong
                network of manufacturing leaders and logistics partners, we help
                businesses navigate regional opportunities with ease.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                Our goal is to ensure ease of doing business through supportive
                policies, future-ready infrastructure, and collaborative
                industrial ecosystems that fuel long-term success.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl overflow-hidden"
                style={{ y: yImage3 }}
              >
                <img
                  src={supply_chain_growth}
                  alt="retail facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          {/* CTA Section */}
          <motion.div
            className="w-full py-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Streamline Your Industrial Future with Divine Group
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                Whether you're scaling production, optimizing logistics, or
                entering new markets—Divine Group is your trusted partner in
                building the future of manufacturing and supply chain
                excellence.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Connect Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Reusable Components
const SectionWrapper = ({ children, reverse = false }) => {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-14 lg:gap-24 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const TextContent = ({ children }) => {
  return (
    <motion.div
      className="space-y-8"
      whileInView={{
        transition: { staggerChildren: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
};

const ImageContent = ({ children }) => {
  return (
    <motion.div
      className="flex justify-center"
      whileInView={{
        transition: { staggerChildren: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ManufactureLogicticProgress;
