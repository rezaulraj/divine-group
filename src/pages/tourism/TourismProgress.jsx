import React, { useRef } from "react";
import topimage from "../../assets/portfolio/trosion/topimage.avif?url";
import trosium1 from "../../assets/portfolio/trosion/trosium1.avif?url";
import trosium2 from "../../assets/portfolio/trosion/trosium2.webp?url";
import trosium3 from "../../assets/portfolio/trosion/trosium3.avif?url";
import trosium4 from "../../assets/portfolio/trosion/topimage4.avif?url";
import trosium5 from "../../assets/portfolio/trosion/topimage5.avif?url";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TourismProgress = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.17, 0.34, 0.51, 0.68, 0.85, 1],
    [
      "linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%)",
      "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
      "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      "linear-gradient(135deg, #f46b45 0%, #eea849 100%)",
      "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
      "linear-gradient(135deg, #7b4397 0%, #dc2430 100%)",
      "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
    ]
  );

  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yImage4 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage5 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage6 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <div className="min-h-screen relative pb-20" ref={containerRef}>
      <Helmet>
        <title>Tourism & Leisure Innovation | Divine Group</title>
        <meta
          name="description"
          content="Divine Group develops and manages world-class tourism, leisure, and entertainment destinations including theme parks, waterparks, and cultural experiences."
        />
        <meta
          name="keywords"
          content="tourism, leisure, theme parks, waterparks, cultural experiences, adventure tourism, eco-tourism, entertainment venues"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Tourism & Leisure Innovation | Divine Group"
        />
        <meta
          property="og:description"
          content="Explore Divine Group’s portfolio of immersive tourism, leisure, and entertainment destinations designed for visitors worldwide."
        />
        <meta property="og:image" content={topImage} />
        <meta property="og:url" content="https://thedivinegroup.eu/tourism" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tourism & Leisure Innovation | Divine Group"
        />
        <meta
          name="twitter:description"
          content="Explore Divine Group’s portfolio of immersive tourism, leisure, and entertainment destinations designed for visitors worldwide."
        />
        <meta name="twitter:image" content={topImage} />

        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Tourism & Leisure Innovation",
          "description": "Divine Group develops and manages world-class tourism, leisure, and entertainment destinations including theme parks, waterparks, and cultural experiences.",
          "url": https://thedivinegroup.eu/tourism",
          "publisher": {
            "@type": "Organization",
            "name": "Divine Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thedivinegroup.eu/divinelogo.png"
            }
          }
        }
        `}
        </script>
      </Helmet>
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

      <div className="relative max-w-7xl mx-auto">
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
              src={topimage}
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
                className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-bold font-bebasneue"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                About Our Tourism
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                At Divine Group, we specialize in developing and managing
                world-class tourism, leisure, and entertainment assets that
                enhance destination appeal, drive visitor engagement, and
                generate sustainable economic impact. Our integrated portfolio
                includes media platforms, themed attractions, eco-adventure
                sites, cultural venues, and large-scale event spaces each
                designed to deliver memorable experiences while supporting
                long-term growth.
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
                  src={trosium1}
                  alt="Global ICT Solutions"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
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
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative"
                // style={{ y: yImage2 }}
              >
                <motion.img
                  src={trosium2}
                  alt="Business ICT"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-full -left-30 z-0"
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
                Integrated Media & Event Destinations
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Our media and entertainment division connects millions of
                consumers to immersive content and live experiences through a
                range of platforms radio, digital, cinema, and live events. With
                a proven track record of hosting large-scale concerts,
                exhibitions, and global brand activations, our venues serve as
                ideal platforms for strategic partnerships and high-impact
                audience engagement.
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
                className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-bold font-bebasneue"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Nature-Based & Experiential Tourism
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                We offer nature-focused destinations that cater to the rising
                demand for outdoor and experiential travel. From glamping and
                hiking to water-based activities and cultural exploration, our
                eco-tourism sites are designed to support sustainable
                development, diversify tourism offerings, and attract both
                domestic and international visitors. These destinations also
                present unique investment opportunities in rural revitalization
                and hospitality expansion.
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
                  src={trosium3}
                  alt="Call Support ICT"
                  className="w-full h-full object-cover rounded-full relative z-10 hover:scale-105 transition-transform duration-500"
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

          {/* Fourth Section */}
          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                // style={{ y: yImage4 }}
              >
                <img
                  src={trosium4}
                  alt="Global ICT Expansion"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                />
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-full -left-30 z-0"
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
                Theme Parks & Family Attractions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Our portfolio includes multi-themed leisure destinations that
                appeal to families, tourists, and school groups. These parks
                combine world-renowned intellectual properties, interactive
                rides, and educational experiences to offer high visitor value
                and year-round footfall. Operators and licensors benefit from
                scalable business models, brand partnerships, and merchandising
                channels.
              </motion.p>
            </TextContent>
          </SectionWrapper>

          {/* Fifth Section */}
          <SectionWrapper>
            <TextContent>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-bold font-bebasneue"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Waterparks & Adventure Venues
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                We manage top-tier waterparks and adventure hubs known for
                safety, innovation, and guest satisfaction. These attractions
                attract thousands of thrill-seekers daily and are supported by
                strong operational systems, high-quality staffing, and
                continuous reinvestment in guest experience making them ideal
                for expansion or franchising models.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                // style={{ y: yImage5 }}
              >
                <img
                  src={trosium5}
                  alt="Telecom Investments"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
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

          {/* sixth Section */}
          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                // style={{ y: yImage6 }}
              >
                <img
                  src={trosium5}
                  alt="Global ICT Expansion"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                />
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-full -left-30 z-0"
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
                Cultural & Heritage Experiences
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Our cultural destinations celebrate global traditions, crafts,
                cuisine, and live performances in one space making them
                attractive to a wide audience base. With seasonal pavilions,
                artisan markets, and global entertainment programs, these
                attractions offer a strong platform for international
                collaboration, sponsorships, and trade representation.
              </motion.p>
            </TextContent>
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
                Shape Tomorrow’s Travel Experiences
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                From immersive entertainment to nature-inspired escapes and
                cultural spectacles, Divine Group is redefining how the world
                explores, engages, and experiences destinations.
              </p>
              <Link
                to={"/contact-us"}
                className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Contact Us Today
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

export default TourismProgress;
