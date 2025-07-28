import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import timeline from "../../assets/timeline/timeline.avif";
import timeLine1 from "../../assets/impact/recuitment.webp";
import timeLine2 from "../../assets/impact/ict.webp";
import timeLine3 from "../../assets/impact/real-state.webp";
import timeLine4 from "../../assets/impact/hospitality.webp";
import timeLine5 from "../../assets/impact/media-scaled.webp";
import timeLine6 from "../../assets/impact/design.webp";
import timeLine7 from "../../assets/impact/manufacturing-logistics-scaled.webp";
import timeLine8 from "../../assets/impact/education.webp";
import timeLine9 from "../../assets/impact/tourism.webp";
import timeLine10 from "../../assets/impact/smes-entrepreneurs.webp";
import timeLine11 from "../../assets/impact/science.webp";
import timeLine12 from "../../assets/impact/retail-store.webp";

const TimeLineProgress = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: loading ? null : containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const timelineData = [
    {
      companyLogo: timeLine1,
      year: "2015",
      title: "Founding Year",
      text: "Divine Group was established with a vision to transform traditional industries through innovation and strategic investments.",
    },
    {
      companyLogo: timeLine2,
      year: "2016",
      title: "ICT Expansion",
      text: "Launched our technology division, focusing on digital transformation solutions across multiple sectors.",
    },
    {
      companyLogo: timeLine3,
      year: "2017",
      title: "Real Estate Ventures",
      text: "Entered the real estate market with landmark developments in the UAE, setting new standards for sustainable design.",
    },
    {
      companyLogo: timeLine4,
      year: "2018",
      title: "Hospitality Growth",
      text: "Expanded into hospitality with luxury resorts and smart hotels that blend technology with exceptional guest experiences.",
    },
    {
      companyLogo: timeLine5,
      year: "2019",
      title: "Media Division",
      text: "Established our media arm, creating platforms for storytelling and digital content creation.",
    },
    {
      companyLogo: timeLine6,
      year: "2020",
      title: "Design Innovation",
      text: "Launched our design studio, specializing in architectural and interior design solutions.",
    },
    {
      companyLogo: timeLine7,
      year: "2021",
      title: "Logistics Network",
      text: "Built a state-of-the-art logistics and manufacturing network across three countries.",
    },
    {
      companyLogo: timeLine8,
      year: "2022",
      title: "Education Initiatives",
      text: "Invested in educational technology and vocational training centers to empower future generations.",
    },
    {
      companyLogo: timeLine9,
      year: "2023",
      title: "Tourism Expansion",
      text: "Developed eco-tourism projects that showcase local heritage while preserving natural resources.",
    },
    {
      companyLogo: timeLine10,
      year: "2024",
      title: "SME Support",
      text: "Launched our entrepreneurship program to nurture small and medium enterprises across our markets.",
    },
    {
      companyLogo: timeLine11,
      year: "2025",
      title: "Science & Research",
      text: "Established partnerships with research institutions to drive innovation in sustainable technologies.",
    },
    {
      companyLogo: timeLine12,
      year: "2026",
      title: "Retail Transformation",
      text: "Revolutionized retail experiences with AI-powered stores and seamless omnichannel platforms.",
    },
  ];

  // Animation values based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 min-h-screen flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-32 h-32 border-8 border-blue-100 border-t-white rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="bg-blue-500 relative pb-40" ref={containerRef}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-xl mx-auto flex items-center justify-center relative p-3 mb-[15rem] sm:mb-[18rem] md:mb-[32rem] lg:mb-[40rem] p-4"
      >
        <div className="bg-white w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] lg:w-[45rem] lg:h-[45rem] rounded-full absolute -top-32 flex flex-col items-center justify-center ">
          <img
            src={timeline}
            alt="Company Logo"
            className="w-full h-full rounded-full"
          />
        </div>
      </motion.div>

      {/* Timeline with Year Markers */}
      <div className="max-w-screen-xl mx-auto px-4 relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 h-full w-1 bg-white/30 top-0 -translate-x-1/2 hidden md:block">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full bg-white origin-top"
          />

          {/* Year Circles on Timeline */}
          {timelineData.map((item, index) => {
            const position = (index / (timelineData.length - 1)) * 100;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ top: `${position}%` }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 shadow-lg flex items-center justify-center"
                  >
                    <span className="text-blue-600 font-bold text-lg">
                      {item.year}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Items */}
        <div className="space-y-32 md:space-y-64 pt-12">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative pt-24 md:pt-0">
                {/* Mobile Year Circle */}
                <div className="md:hidden absolute top-0 left-0 w-full flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-blue-600 font-bold">{item.year}</span>
                  </motion.div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                  {/* Left Side - Image for even, Text for odd */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, x: 100 }}
                    whileInView={{ scale: 1, opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-2/5 ${
                      isEven ? "order-1" : "order-2"
                    }`}
                  >
                    {isEven ? (
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] relative z-20 lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl"
                      >
                        <img
                          src={item.companyLogo}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute inset-0 bg-blue-600/20 hover:bg-transparent transition-all duration-300 rounded-2xl" />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] relative z-20 lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl flex flex-col items-center justify-center bg-white"
                      >
                        <div className="text-center">
                          <h3 className="text-blue-600 text-3xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700">{item.text}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Right Side - Text for even, Image for odd */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, x: -100 }}
                    whileInView={{ scale: 1, opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "100px" }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-2/5 rounded-full ${
                      isEven ? "order-2" : "order-1"
                    }`}
                  >
                    {isEven ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] relative z-20 lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl bg-white flex flex-col items-center justify-center"
                      >
                        <div className="text-center flex flex-col items-center justify-center">
                          <h3 className="text-blue-600 text-3xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700">{item.text}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] relative z-20 lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl"
                      >
                        <img
                          src={item.companyLogo}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute inset-0 bg-blue-600/20 hover:bg-transparent transition-all duration-300 rounded-2xl" />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="absolute w-8 h-8 border-2 border-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TimeLineProgress;
