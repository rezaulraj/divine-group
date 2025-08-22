import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import employer1 from "../../assets/employer/employee.jpg?url";
import employer2 from "../../assets/employer/employ1.avif?url";
import employer3 from "../../assets/employer/employ2.avif?url";
import employer4 from "../../assets/employer/employ3.avif?url";
import employer5 from "../../assets/employer/employ4.avif?url";
import employer6 from "../../assets/employer/employ5.avif?url";
import employer7 from "../../assets/employer/employ6.avif?url";
import { Helmet } from "react-helmet";

const EmployerProgress = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 1],
    [
      "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
      "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)",
      "linear-gradient(135deg, #614385 0%, #516395 100%)",
      "linear-gradient(135deg, #1FA2FF 0%, #12D8FA 100%)",
      "linear-gradient(135deg, #1D4350 0%, #A43931 100%)",
      "linear-gradient(135deg, #16222A 0%, #3A6073 100%)",
      "linear-gradient(135deg, #000046 0%, #1CB5E0 100%)",
      "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
      "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    ]
  );

  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yImage4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const yImage5 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const sectionProgress = [
    { title: "What We Offer", emoji: "🧩", progress: 0.07 },
    { title: "Tailored Solutions", emoji: "🤝", progress: 0.19 },
    { title: "Hiring Support", emoji: "📋", progress: 0.31 },
    { title: "Skilled Candidates", emoji: "🧑‍💼", progress: 0.43 },
    { title: "Why Trust Us", emoji: "📈", progress: 0.55 },
    { title: "Global Reach", emoji: "🌐", progress: 0.67 },
    { title: "More Services", emoji: "🔧", progress: 0.79 },
    { title: "Partner With Us", emoji: "📬", progress: 0.91 },
  ];

  return (
    <div className="min-h-screen relative pb-20" ref={containerRef}>
      <Helmet>
        <meta
          name="description"
          content="Divine Group helps employers hire skilled candidates efficiently. From talent acquisition to global staffing, we provide tailored recruitment solutions."
        />
        <meta
          name="keywords"
          content="employer services, hire employees, recruitment solutions, staffing, talent acquisition, Divine Group"
        />
        <link
          rel="canonical"
          href="https://thedivinegroup.eu/employer-services"
        />

        <meta
          property="og:title"
          content="Employer Recruitment Solutions | Divine Group"
        />
        <meta
          property="og:description"
          content="Streamline hiring and access pre-screened skilled candidates with Divine Group's recruitment services."
        />
        <meta property="og:image" content={employer1} />
        <meta
          property="og:url"
          content="https://thedivinegroup.eu/employer-services"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Employer Recruitment Solutions | Divine Group"
        />
        <meta
          name="twitter:description"
          content="Looking for top talent? Divine Group provides end-to-end recruitment solutions to help employers hire efficiently."
        />
        <meta name="twitter:image" content={employer1} />
      </Helmet>
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
                  section.progress - 0.08,
                  section.progress,
                  section.progress + 0.08,
                ],
                [0.3, 1, 0.3]
              ),
              scale: useTransform(
                scrollYProgress,
                [
                  section.progress - 0.08,
                  section.progress,
                  section.progress + 0.08,
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
              src={employer1}
              alt="Employer Services"
              className="w-full h-full object-cover rounded-full p-2"
              style={{
                scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.05]),
              }}
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center space-y-32 lg:space-y-48 justify-center p-4">
          {/* Section 1 */}
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
                🧩 What We Offer Employers
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                From talent acquisition to workforce management, our services
                are designed to help employers streamline hiring, reduce costs,
                and find the right candidates — fast.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                We understand the challenges of modern recruitment. Our
                comprehensive solutions address pain points at every stage of
                the hiring process, delivering measurable results.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                style={{ y: yImage1 }}
              >
                <img
                  src={employer2}
                  alt="Employer services"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          {/* Section 2 */}
          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative"
                style={{ y: yImage2 }}
              >
                <motion.img
                  src={employer3}
                  alt="Tailored recruitment"
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
                🤝 Tailored Recruitment Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                We don't believe in one-size-fits-all. Our recruitment services
                are customized to meet your specific industry, skill, and
                workforce needs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Whether you need specialized tech talent, executive search, or
                high-volume hiring, we adapt our approach to deliver candidates
                that fit your unique requirements.
              </motion.p>
            </TextContent>
          </SectionWrapper>

          {/* Section 3 */}
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
                📋 End-to-End Hiring Support
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                From job posting to onboarding, we handle every stage of the
                recruitment process, ensuring a smooth, compliant, and efficient
                experience for both you and your hires.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Our full-cycle recruitment services include candidate sourcing,
                screening, interview coordination, offer negotiation, and
                seamless onboarding support.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                style={{ y: yImage3 }}
              >
                <img
                  src={employer4}
                  alt="Hiring support"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          {/* Section 4 */}
          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative"
                style={{ y: yImage4 }}
              >
                <motion.img
                  src={employer5}
                  alt="Skilled candidates"
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
                🧑‍💼 Skilled & Pre-Screened Candidates
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Access a talent pool of thoroughly vetted professionals, tested
                for skills, attitude, and industry fit. Save time — hire with
                confidence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Our rigorous screening process includes technical assessments,
                behavioral interviews, reference checks, and culture fit
                evaluations.
              </motion.p>
            </TextContent>
          </SectionWrapper>

          {/* Section 5 */}
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
                📈 Why Employers Trust Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                We combine industry expertise, data-driven methods, and a
                commitment to service excellence. Our track record speaks for
                itself — thousands of successful placements and growing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                With an average placement retention rate of 92% and client
                satisfaction scores consistently above 95%, we've earned our
                reputation as a trusted recruitment partner.
              </motion.p>
            </TextContent>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-white/50 shadow-2xl relative"
                style={{ y: yImage5 }}
              >
                <img
                  src={employer6}
                  alt="Trusted recruitment"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </motion.div>
            </ImageContent>
          </SectionWrapper>

          {/* Section 6 */}
          <SectionWrapper reverse>
            <ImageContent>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative"
              >
                <motion.img
                  src={employer7}
                  alt="Global reach"
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
                🌐 Local and Global Reach
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                Whether you need local hires or international staffing
                solutions, our network and infrastructure are built to scale
                with your needs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-100 text-xl font-medium font-raleway"
              >
                With offices in 12 countries and recruitment partners in 35+
                markets, we can source talent wherever your business operates
                while ensuring compliance with local regulations.
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
                Don't Let Staffing Shortages Slow You Down
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                Our recruitment experts are ready to help you build your perfect
                team
              </p>
              <button
                onClick={() => {
                  const section = document.querySelector("#employee-service");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg cursor-pointer"
              >
                Connect With Our Team
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
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

export default EmployerProgress;
