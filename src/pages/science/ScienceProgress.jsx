import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import topImage from "../../assets/portfolio/science/science.avif?url";
import science_lab from "../../assets/portfolio/science/science_lab.avif?url";
import science_ecosystem from "../../assets/portfolio/science/science_ecosystem.jpg?url";
import collaboration from "../../assets/portfolio/science/collaboration.jpg?url";
import { Link } from "react-router-dom";
const ScienceProgress = () => {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
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
                Empowering Science & Technology Sectors
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                We support innovation-driven growth by providing purpose-built
                environments that empower businesses in science and technology
                sectors. Our science-focused ecosystem offers a dynamic platform
                for companies across fields such as life sciences,
                biotechnology, environmental science, energy, and advanced
                materials.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                Home to hundreds of companies and thousands of professionals,
                this thriving business district plays a vital role in advancing
                research, development, and sustainable innovation. It supports
                the broader goals of economic diversification by enabling
                cutting-edge industries to flourish in a business-friendly
                environment
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                // style={{ y: yImage1 }}
              >
                <img
                  src={science_lab}
                  alt="urban masterplan"
                  className="w-full h-full object-cover hover:scale-105 rounded-full transition-transform duration-500 relative z-10"
                />
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-full left-30 z-0"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  style={{
                    background: `
      conic-gradient(
        rgba(255,255,255,0.7) 0deg 5deg,
        transparent 5deg 10deg,
        rgba(255,255,255,0.7) 10deg 15deg,
        transparent 15deg 20deg,
        rgba(255,255,255,0.7) 20deg 25deg,
        transparent 25deg 30deg,
        rgba(255,255,255,0.7) 30deg 35deg,
        transparent 35deg 40deg,
        rgba(255,255,255,0.7) 40deg 45deg,
        transparent 45deg 50deg,
        rgba(255,255,255,0.7) 50deg 55deg,
        transparent 55deg 60deg,
        rgba(255,255,255,0.7) 60deg 65deg,
        transparent 65deg 70deg,
        rgba(255,255,255,0.7) 70deg 75deg,
        transparent 75deg 80deg,
        rgba(255,255,255,0.7) 80deg 85deg,
        transparent 85deg 90deg,
        rgba(255,255,255,0.7) 90deg 95deg,
        transparent 95deg 100deg,
        rgba(255,255,255,0.7) 100deg 105deg,
        transparent 105deg 110deg,
        rgba(255,255,255,0.7) 110deg 115deg,
        transparent 115deg 120deg,
        rgba(255,255,255,0.7) 120deg 125deg,
        transparent 125deg 130deg,
        rgba(255,255,255,0.7) 130deg 135deg,
        transparent 135deg 140deg,
        rgba(255,255,255,0.7) 140deg 145deg,
        transparent 145deg 150deg,
        rgba(255,255,255,0.7) 150deg 155deg,
        transparent 155deg 160deg,
        rgba(255,255,255,0.7) 160deg 165deg,
        transparent 165deg 170deg,
        rgba(255,255,255,0.7) 170deg 175deg,
        transparent 175deg 180deg,
        rgba(255,255,255,0.7) 180deg 185deg,
        transparent 185deg 190deg,
        rgba(255,255,255,0.7) 190deg 195deg,
        transparent 195deg 200deg,
        rgba(255,255,255,0.7) 200deg 205deg,
        transparent 205deg 210deg,
        rgba(255,255,255,0.7) 210deg 215deg,
        transparent 215deg 220deg,
        rgba(255,255,255,0.7) 220deg 225deg,
        transparent 225deg 230deg,
        rgba(255,255,255,0.7) 230deg 235deg,
        transparent 235deg 240deg,
        rgba(255,255,255,0.7) 240deg 245deg,
        transparent 245deg 250deg,
        rgba(255,255,255,0.7) 250deg 255deg,
        transparent 255deg 260deg,
        rgba(255,255,255,0.7) 260deg 265deg,
        transparent 265deg 270deg,
        rgba(255,255,255,0.7) 270deg 275deg,
        transparent 275deg 280deg,
        rgba(255,255,255,0.7) 280deg 285deg,
        transparent 285deg 290deg,
        rgba(255,255,255,0.7) 290deg 295deg,
        transparent 295deg 300deg)
    `,
                    maskImage:
                      "radial-gradient(circle, black 80%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, black 80%, transparent 100%)",
                  }}
                ></motion.div>
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          {/* Second Section */}
          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative"
                // style={{ y: yImage2 }}
              >
                <motion.img
                  src={science_ecosystem}
                  alt="commercial residential"
                  className="w-full h-full object-cover hover:scale-105 rounded-full transition-transform duration-500 relative z-10"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-full -left-30 z-0"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  style={{
                    background: `
      conic-gradient(
        rgba(255,255,255,0.4) 0deg 5deg,
        transparent 5deg 10deg,
        rgba(255,255,255,0.4) 10deg 15deg,
        transparent 15deg 20deg,
        rgba(255,255,255,0.4) 20deg 25deg,
        transparent 25deg 30deg,
        rgba(255,255,255,0.4) 30deg 35deg,
        transparent 35deg 40deg,
        rgba(255,255,255,0.4) 40deg 45deg,
        transparent 45deg 50deg,
        rgba(255,255,255,0.4) 50deg 55deg,
        transparent 55deg 60deg,
        rgba(255,255,255,0.4) 60deg 65deg,
        transparent 65deg 70deg,
        rgba(255,255,255,0.4) 70deg 75deg,
        transparent 75deg 80deg,
        rgba(255,255,255,0.4) 80deg 85deg,
        transparent 85deg 90deg,
        rgba(255,255,255,0.4) 90deg 95deg,
        transparent 95deg 100deg,
        rgba(255,255,255,0.4) 100deg 105deg,
        transparent 105deg 110deg,
        rgba(255,255,255,0.4) 110deg 115deg,
        transparent 115deg 120deg,
        rgba(255,255,255,0.4) 120deg 125deg,
        transparent 125deg 130deg,
        rgba(255,255,255,0.4) 130deg 135deg,
        transparent 135deg 140deg,
        rgba(255,255,255,0.4) 140deg 145deg,
        transparent 145deg 150deg,
        rgba(255,255,255,0.4) 150deg 155deg,
        transparent 155deg 160deg,
        rgba(255,255,255,0.4) 160deg 165deg,
        transparent 165deg 170deg,
        rgba(255,255,255,0.4) 170deg 175deg,
        transparent 175deg 180deg,
        rgba(255,255,255,0.4) 180deg 185deg,
        transparent 185deg 190deg,
        rgba(255,255,255,0.4) 190deg 195deg,
        transparent 195deg 200deg,
        rgba(255,255,255,0.4) 200deg 205deg,
        transparent 205deg 210deg,
        rgba(255,255,255,0.4) 210deg 215deg,
        transparent 215deg 220deg,
        rgba(255,255,255,0.4) 220deg 225deg,
        transparent 225deg 230deg,
        rgba(255,255,255,0.4) 230deg 235deg,
        transparent 235deg 240deg,
        rgba(255,255,255,0.4) 240deg 245deg,
        transparent 245deg 250deg,
        rgba(255,255,255,0.4) 250deg 255deg,
        transparent 255deg 260deg,
        rgba(255,255,255,0.4) 260deg 265deg,
        transparent 265deg 270deg,
        rgba(255,255,255,0.4) 270deg 275deg,
        transparent 275deg 280deg,
        rgba(255,255,255,0.4) 280deg 285deg,
        transparent 285deg 290deg,
        rgba(255,255,255,0.4) 290deg 295deg,
        transparent 295deg 300deg)
    `,
                    maskImage:
                      "radial-gradient(circle, black 80%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, black 80%, transparent 100%)",
                  }}
                ></motion.div>
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
                An Ecosystem Built for Growth
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                Designed to meet the unique needs of science-based enterprises,
                our ecosystem provides access to flexible office and laboratory
                spaces, modern infrastructure, and an integrated residential and
                commercial community.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                From startups and SMEs to multinational corporations, we offer
                the tools and support businesses need to scale efficiently.
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
                Collaboration & Innovation at the Core
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                By bringing together entrepreneurs, researchers, investors, and
                regulatory bodies in one cohesive space, we create opportunities
                for cross-sector collaboration and industry advancement. Whether
                you're looking to establish a presence, grow your research
                capabilities, or explore new markets, our platform is built to
                accelerate progress and drive long-term impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium text-justify"
              >
                Discover how our innovation-driven environment empowers
                science-focused enterprises to thrive.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] relative z-20 lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl"
                // style={{ y: yImage3 }}
              >
                <img
                  src={collaboration}
                  alt="retail facility"
                  className="w-full h-full object-cover hover:scale-105 rounded-full transition-transform duration-500 relative z-10"
                />
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-full left-30 z-0"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  style={{
                    background: `
      conic-gradient(
        rgba(255,255,255,0.4) 0deg 5deg,
        transparent 5deg 10deg,
        rgba(255,255,255,0.4) 10deg 15deg,
        transparent 15deg 20deg,
        rgba(255,255,255,0.4) 20deg 25deg,
        transparent 25deg 30deg,
        rgba(255,255,255,0.4) 30deg 35deg,
        transparent 35deg 40deg,
        rgba(255,255,255,0.4) 40deg 45deg,
        transparent 45deg 50deg,
        rgba(255,255,255,0.4) 50deg 55deg,
        transparent 55deg 60deg,
        rgba(255,255,255,0.4) 60deg 65deg,
        transparent 65deg 70deg,
        rgba(255,255,255,0.4) 70deg 75deg,
        transparent 75deg 80deg,
        rgba(255,255,255,0.4) 80deg 85deg,
        transparent 85deg 90deg,
        rgba(255,255,255,0.4) 90deg 95deg,
        transparent 95deg 100deg,
        rgba(255,255,255,0.4) 100deg 105deg,
        transparent 105deg 110deg,
        rgba(255,255,255,0.4) 110deg 115deg,
        transparent 115deg 120deg,
        rgba(255,255,255,0.4) 120deg 125deg,
        transparent 125deg 130deg,
        rgba(255,255,255,0.4) 130deg 135deg,
        transparent 135deg 140deg,
        rgba(255,255,255,0.4) 140deg 145deg,
        transparent 145deg 150deg,
        rgba(255,255,255,0.4) 150deg 155deg,
        transparent 155deg 160deg,
        rgba(255,255,255,0.4) 160deg 165deg,
        transparent 165deg 170deg,
        rgba(255,255,255,0.4) 170deg 175deg,
        transparent 175deg 180deg,
        rgba(255,255,255,0.4) 180deg 185deg,
        transparent 185deg 190deg,
        rgba(255,255,255,0.4) 190deg 195deg,
        transparent 195deg 200deg,
        rgba(255,255,255,0.4) 200deg 205deg,
        transparent 205deg 210deg,
        rgba(255,255,255,0.4) 210deg 215deg,
        transparent 215deg 220deg,
        rgba(255,255,255,0.4) 220deg 225deg,
        transparent 225deg 230deg,
        rgba(255,255,255,0.4) 230deg 235deg,
        transparent 235deg 240deg,
        rgba(255,255,255,0.4) 240deg 245deg,
        transparent 245deg 250deg,
        rgba(255,255,255,0.4) 250deg 255deg,
        transparent 255deg 260deg,
        rgba(255,255,255,0.4) 260deg 265deg,
        transparent 265deg 270deg,
        rgba(255,255,255,0.4) 270deg 275deg,
        transparent 275deg 280deg,
        rgba(255,255,255,0.4) 280deg 285deg,
        transparent 285deg 290deg,
        rgba(255,255,255,0.4) 290deg 295deg,
        transparent 295deg 300deg)
    `,
                    maskImage:
                      "radial-gradient(circle, black 80%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, black 80%, transparent 100%)",
                  }}
                ></motion.div>
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
                Accelerate Discovery with Divine Group
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                Join a thriving ecosystem where science meets opportunity.
                Whether you're a startup looking to innovate or an enterprise
                ready to scale, our platform is built to power progress.
              </p>
              <Link
                to={"/contact-us"}
                className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </Link>
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
export default ScienceProgress;
