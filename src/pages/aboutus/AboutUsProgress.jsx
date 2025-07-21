import React, { useState, useRef } from "react";
import logo from "/logo-blue.png";
import divineGroup from "../../assets/impact/recuitment.webp?url";
import mission from "../../assets/about/mission.avif?url";
import value from "../../assets/about/value.avif?url";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

const AboutUsProgress = () => {
  const [activeValue, setActiveValue] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const toggleValue = (index) => {
    setActiveValue(activeValue === index ? null : index);
  };

  const values = [
    {
      title: "Vision-Driven Innovation",
      items: [
        "Think beyond today",
        "Embrace new technologies",
        "Lead change across industries",
      ],
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      textColor: "text-white",
    },
    {
      title: "Empowered People",
      items: [
        "Inspire ownership at all levels",
        "Celebrate ideas and initiative",
        "Invest in learning and leadership",
      ],
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      textColor: "text-white",
    },
    {
      title: "Sustainable Impact",
      items: [
        "Deliver long-term value",
        "Balance profit with purpose",
        "Build with the future in mind",
      ],
      bgColor: "bg-gradient-to-br from-amber-500 to-orange-600",
      textColor: "text-white",
    },
    {
      title: "Trusted Collaboration",
      items: [
        "Communicate openly and honestly",
        "Build bridges across teams and regions",
        "Share knowledge and success",
      ],
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      textColor: "text-white",
    },
  ];

  return (
    <div className="bg-blue-400 min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-xl mx-auto flex items-center justify-center relative p-3 mb-[15rem] sm:mb-[18rem] md:mb-[32rem] lg:mb-[40rem] p-4"
      >
        <div className="bg-white w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] lg:w-[45rem] lg:h-[45rem] rounded-full absolute -top-32 flex flex-col items-center justify-center ">
          <img
            src={logo}
            alt="Company Logo"
            className="h-24 sm:h-28 md:h-32 lg:h-44 mb-9 md:mb-12 lg:mb-16"
          />
          <h2 className="text-[#0C3F75] text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
            About Us
          </h2>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-32 justify-center p-4">
        {/* First Section */}
        <SectionWrapper>
          <TextContent>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wider"
            >
              About Divine Group
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              Divine Group has become a force for transformation and growth
              across the region boldly reshaping industries, empowering people,
              and driving economic diversification from the heart of the UAE to
              the shores of Malta and Romania.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              With a strong belief in innovation-led progress, we continue to
              build a future where sustainable development, digital
              transformation, and inclusive growth go hand-in-hand. From real
              estate to renewable energy, tourism to tech, our presence is felt
              in communities, cities, and boardrooms alike.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              Our portfolio spans sectors that matter ICT, Real Estate,
              Hospitality, Media, Design, Manufacturing & Logistics, Education,
              Tourism, SMEs & Entrepreneurship, Science, and Retail.
            </motion.p>
          </TextContent>
          <ImageContent>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: 100 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] rounded-full"
            >
              <img
                src={divineGroup}
                alt=""
                className="w-full h-full rounded-full object-cover"
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
              transition={{ duration: 0.8 }}
              className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-white flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-24 sm:h-28 md:h-32 lg:h-44 mb-9 md:mb-12 lg:mb-16"
              />
            </motion.div>
          </ImageContent>
          <TextContent>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wider"
            >
              Our Legacy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              Today, Divine Group is proud to be home to over 45,000
              professionals, managing assets worth more than USD 76.3 billion,
              and shaping the future across three dynamic countries: UAE, Malta,
              and Romania.
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
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wider"
            >
              Our Mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              Today, Divine Group is proud to be home to over 45,000
              professionals, managing assets worth more than USD 76.3 billion,
              and shaping the future across three dynamic countries: UAE, Malta,
              and Romania.
            </motion.p>
          </TextContent>
          <ImageContent>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: 100 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] rounded-full"
            >
              <img
                src={mission}
                alt="Company Logo"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
          </ImageContent>
        </SectionWrapper>

        {/* Fourth Section - Our Values */}
        <SectionWrapper reverse>
          <ImageContent>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: -100 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-white flex items-center justify-center shadow-xl"
            >
              <img
                src={value}
                alt="Company Values"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
          </ImageContent>
          <TextContent>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wider"
            >
              Our Values
            </motion.h1>

            {/* Values Dropdown Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 w-full"
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`${value.bgColor} ${value.textColor} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 `}
                >
                  <button
                    onClick={() => toggleValue(index)}
                    className="w-full p-6 text-left flex gap-2 items-center"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {value.title}
                    </h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 border rounded-full ${
                        activeValue === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeValue === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden px-6 pb-6 pt-2"
                      >
                        <ul className="space-y-3">
                          {value.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="mr-2 mt-1">✅</span>
                              <span className="text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </TextContent>
        </SectionWrapper>

        {/* Fifth Section */}
        <SectionWrapper>
          <TextContent>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <motion.h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wider">
                Leadership Message
              </motion.h1>
              <motion.h2 className="text-gray-300 text-xl md:text-2xl lg:text-2xl font-bold leading-tight tracking-wider">
                — Group Chief Executive Officer
              </motion.h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              At Divine Group, we have always believed that true impact begins
              with a bold idea, backed by strong values and executed with
              excellence. Over the years, we've laid down roots in sectors that
              shape society, spark innovation, and support inclusive prosperity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              As we look to the future, our focus remains steadfast: building
              industries that stand the test of time while embracing change with
              agility and purpose. We are not just investors in markets, we are
              partners in progress, catalysts of innovation, and stewards of
              sustainability.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              Our people are our greatest strength. Together, we will continue
              to lead with vision, act with integrity, and deliver with impact.
              The road ahead is bright, and we are just getting started.
            </motion.p>
          </TextContent>
          <ImageContent>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: 100 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-white flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-24 sm:h-28 md:h-32 lg:h-44 mb-9 md:mb-12 lg:mb-16"
              />
            </motion.div>
          </ImageContent>
        </SectionWrapper>

        {/* Sixth Section */}
        <SectionWrapper reverse>
          <ImageContent>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: -100 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-white flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-24 sm:h-28 md:h-32 lg:h-44 mb-9 md:mb-12 lg:mb-16"
              />
            </motion.div>
          </ImageContent>
          <TextContent>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wider"
            >
              Organizational Identity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              At Divine Group, our corporate culture is the foundation of
              everything we do. It drives how we lead, innovate, and collaborate
              across our operations in the UAE, Malta, and Romania. As a
              diversified investment and development group, we recognize that
              sustainable success starts from within with a people-first
              approach that values talent, diversity, and accountability. Our
              culture is built on trust, inclusion, and a shared commitment to
              excellence. We encourage ownership at every level, foster agile
              thinking, and empower teams to take initiative while upholding the
              highest standards of integrity and performance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              Innovation is central to our business ethos. At Divine Group, we
              don't just adapt to change, we lead it. Whether launching
              transformative real estate projects or investing in
              next-generation sustainability ventures, our people are encouraged
              to think boldly, act decisively, and continuously seek
              improvement.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              This passion for progress is coupled with a deep sense of purpose.
              Beyond commercial goals, we are committed to creating long-term
              value for communities, stakeholders, and future generations.
              Through social impact programs, environmental stewardship, and
              inclusive workplace practices, we embed our values into our
              operations and partnerships.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-100 text-xl font-medium text-justify"
            >
              Ultimately, Divine Group's culture is what sets us apart in the
              global marketplace. It connects our diverse portfolio, strengthens
              our reputation, and enables us to build trust with clients,
              investors, and partners. In every venture we undertake, our
              culture ensures we deliver not only measurable results but also
              meaningful impact.
            </motion.p>
          </TextContent>
        </SectionWrapper>
      </div>
    </div>
  );
};

// Reusable components for better organization
const SectionWrapper = ({ children, reverse = false }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-14 lg:gap-24 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {children}
    </div>
  );
};

const TextContent = ({ children }) => {
  return <div className="space-y-8">{children}</div>;
};

const ImageContent = ({ children }) => {
  return <div className="flex justify-center">{children}</div>;
};

export default AboutUsProgress;
