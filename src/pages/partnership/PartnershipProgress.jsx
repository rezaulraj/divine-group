import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import partnership1 from "../../assets/partnership/partner1.avif?url";
import partnership2 from "../../assets/partnership/partner2.avif?url";
import partnership3 from "../../assets/partnership/partner3.avif?url";
import partnership4 from "../../assets/partnership/partner4.avif?url";
import partnership5 from "../../assets/partnership/worktogethe.avif?url";

const PartnershipProgress = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
    [
      "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
      "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)",
      "linear-gradient(135deg, #614385 0%, #516395 100%)",
      "linear-gradient(135deg, #1FA2FF 0%, #12D8FA 100%)",
      "linear-gradient(135deg, #1D4350 0%, #A43931 100%)",
      "linear-gradient(135deg, #16222A 0%, #3A6073 100%)",
      "linear-gradient(135deg, #000046 0%, #1CB5E0 100%)",
      "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
    ]
  );

  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yImage4 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const sectionProgress = [
    { title: "Why Partner", emoji: "🤝", progress: 0.08 },
    { title: "Our Approach", emoji: "🌍", progress: 0.24 },
    { title: "Benefits", emoji: "🚀", progress: 0.4 },
    { title: "Grow Together", emoji: "📈", progress: 0.56 },
    { title: "Join Us", emoji: "📬", progress: 0.85 },
  ];

  return (
    <div className="min-h-screen relative pb-20" ref={containerRef}>
      <div className="fixed left-8 top-1/2 -translate-y-1/2 h-2/3 w-1 bg-white/20 rounded-full z-50 hidden md:block">
        <motion.div
          ref={progressRef}
          className="absolute top-0 left-0 w-full h-full bg-white/80 origin-top rounded-full"
          style={{ scaleY }}
        />

        {sectionProgress.map((section, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-xs font-bold"
            style={{
              top: `${section.progress * 100}%`,
              opacity: useTransform(
                scrollYProgress,
                [
                  section.progress - 0.1,
                  section.progress,
                  section.progress + 0.1,
                ],
                [0.3, 1, 0.3]
              ),
              scale: useTransform(
                scrollYProgress,
                [
                  section.progress - 0.1,
                  section.progress,
                  section.progress + 0.1,
                ],
                [0.8, 1.2, 0.8]
              ),
            }}
            whileHover={{ scale: 1.5 }}
          >
            <span className="text-xs">{section.emoji}</span>
            <motion.span
              className="absolute left-full ml-2 whitespace-nowrap text-white font-medium text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              {section.title}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: backgroundColor,
          transition: "background 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
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

      {[...Array(20)].map((_, i) => (
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

      <div className="relative max-w-7xl mx-auto pl-12 md:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
              src={partnership1}
              alt="Partnership"
              className="w-full h-full object-cover rounded-full p-2"
              style={{
                scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.05]),
              }}
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center space-y-32 lg:space-y-48 justify-center p-4">
          <SectionWrapper>
            <TextContent>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-[#80C3FF] sm:text-3xl md:text-3xl lg:text-4xl font-bold font-bebasneue"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                🤝 Why Partner With Us?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                We believe in mutual growth through collaboration. Our strategic
                partnerships are built on trust, transparency, and shared goals.
                Let's shape the future together.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Our partnership ecosystem is designed to create win-win
                scenarios where both parties thrive. We invest in relationships
                that drive innovation and deliver measurable results.
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
                  src={partnership2}
                  alt="Business partnership"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative"
                // style={{ y: yImage2 }}
              >
                <motion.img
                  src={partnership3}
                  alt="Collaboration"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
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
                className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-bold font-bebasneue"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                🌍 Our Partnership Approach
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                From onboarding to success, we offer full support, clear
                communication, and long-term commitment. We're not just partners
                — we're collaborators in every step.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Our structured partnership framework ensures alignment at every
                stage, with dedicated relationship managers and performance
                tracking to maximize mutual benefits.
              </motion.p>
            </TextContent>
          </SectionWrapper>


          <SectionWrapper>
            <TextContent>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-[#80C3FF] sm:text-3xl md:text-3xl lg:text-4xl font-bold font-bebasneue"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                🚀 Partnership Benefits
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Gain access to exclusive resources, real-time support, branding
                exposure, and a growing network of opportunities. Your success
                is our mission.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Partners enjoy priority access to new products, joint marketing
                initiatives, and revenue-sharing models designed to scale your
                business.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                // style={{ y: yImage3 }}
              >
                <img
                  src={partnership4}
                  alt="Partnership benefits"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative"
                // style={{ y: yImage4 }}
              >
                <motion.img
                  src={partnership5}
                  alt="Grow Together"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
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
                className="text-[#80C3FF] sm:text-3xl md:text-3xl lg:text-4xl font-bold font-bebasneue"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                📈 Grow Together, Win Together
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Strategic partnerships aren't just transactions. They're
                long-term relationships that drive success, open new markets,
                and deliver real impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                We measure our success by your growth. Through shared knowledge,
                resources, and market access, we create exponential value that
                benefits all stakeholders in our ecosystem.
              </motion.p>
            </TextContent>
          </SectionWrapper>

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
                Ready to Join Our Partner Network?
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                Let's build something extraordinary together. Our partnership
                team is ready to explore how we can create mutual value and
                growth opportunities.
              </p>
              <Link
                to={"/contact-us"}
                className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Become a Partner Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

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

export default PartnershipProgress;
