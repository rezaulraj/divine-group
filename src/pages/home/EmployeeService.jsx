import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaBriefcase,
  FaChartLine,
  FaComments,
  FaFileAlt,
  FaHandsHelping,
  FaTimes,
  FaPhoneAlt,
  FaTools,
  FaHardHat,
  FaTruck,
  FaIndustry,
} from "react-icons/fa";
import CalendlyPopup from "../../components/CalendlyPopup";
import { Helmet } from "react-helmet-async";

const EmployeeService = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  const services = [
    {
      icon: <FaUserTie className="w-8 h-8 text-primary" />,
      title: "Career Guidance",
      description:
        "Personalized career counseling to navigate your professional path with confidence and clarity.",
    },
    {
      icon: <FaBriefcase className="w-8 h-8 text-primary" />,
      title: "Premium Placement",
      description:
        "Exclusive opportunities with employers who value your unique skills and potential.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-primary" />,
      title: "Skill Enhancement",
      description:
        "Resources to develop in-demand skills that make you stand out in competitive markets.",
    },
    {
      icon: <FaComments className="w-8 h-8 text-primary" />,
      title: "Interview Preparation",
      description:
        "Comprehensive coaching and mock interviews to master your technique.",
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-primary" />,
      title: "Resume Excellence",
      description:
        "Transform your resume into a powerful marketing tool for your career story.",
    },
    {
      icon: <FaHandsHelping className="w-8 h-8 text-primary" />,
      title: "Ongoing Support",
      description:
        "Continued career development support to ensure your long-term success.",
    },
  ];

  const blueCollarServices = [
    {
      icon: <FaHardHat className="w-8 h-8 text-primary" />,
      title: "Construction & Trades",
      description: "Skilled labor placements for all construction specialties",
    },
    {
      icon: <FaTools className="w-8 h-8 text-primary" />,
      title: "Manufacturing",
      description: "Reliable workers for factories and production lines",
    },
    {
      icon: <FaTruck className="w-8 h-8 text-primary" />,
      title: "Transport & Logistics",
      description: "Qualified drivers and warehouse staff",
    },
    {
      icon: <FaIndustry className="w-8 h-8 text-primary" />,
      title: "Industrial Services",
      description: "Technicians and maintenance professionals",
    },
  ];

  const testimonials = [
    {
      quote:
        "After struggling to find steady work, Divine Group placed me in a great welding position within a week. The team really understands blue-collar workers.",
      name: "Miguel Rodriguez",
      role: "Certified Welder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      industry: "Construction",
    },
    {
      quote:
        "I've worked with 3 agencies before, but none took the time to understand my skills like Divine Group. They found me a forklift job with better pay than I expected!",
      name: "James Wilson",
      role: "Forklift Operator",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      industry: "Warehousing",
    },
    {
      quote:
        "As a single mom, I needed flexible hours. Divine Group listened and found me a perfect assembly line position with childcare-friendly shifts.",
      name: "Tasha Johnson",
      role: "Assembly Technician",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      industry: "Manufacturing",
    },
    {
      quote:
        "After my layoff, I thought I'd be unemployed for months. Divine Group had me working at a great plumbing company in just 10 days!",
      name: "Carlos Mendez",
      role: "Journeyman Plumber",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      industry: "Skilled Trades",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  const modalOverlay = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0 },
  };

  const modalContent = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: { y: 50, opacity: 0 },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <meta
          name="description"
          content="Explore top recruitment services for job seekers. Find opportunities in ICT, hospitality, education, logistics, and more. Build your career today."
        />
        <meta
          name="keywords"
          content="jobs, recruitment, employment, career, ICT jobs, hospitality jobs, education jobs, logistics jobs"
        />

        <meta
          property="og:title"
          content="Job Seekers | Recruitment & Career Services"
        />
        <meta
          property="og:description"
          content="We connect job seekers with the right employers across multiple industries. Start your career journey today."
        />

        <meta
          property="og:url"
          content="https://thedivinegroup.eu/employer-services"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Job Seekers | Recruitment & Career Services"
        />
        <meta
          name="twitter:description"
          content="Discover jobs in ICT, hospitality, education, and more. Empower your career with our recruitment services."
        />

        <link
          rel="canonical"
          href="https://thedivinegroup.eu/employer-services"
        />
      </Helmet>
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl max-w-2xl mx-auto font-bold text-gray-900 mb-4">
          Your Dream Career Starts with{" "}
          <span className="text-[#80C3FF]">Divine Group</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Whether you're looking for your first job or your next big
          opportunity, we connect talented workers with great employers across
          all industries.
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div className="mb-20" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Job Seekers Choose Our Agency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Industry Connections",
              description:
                "We work with hundreds of employers who trust us to find quality candidates",
              icon: "🤝",
            },
            {
              title: "No Cost to You",
              description:
                "Our services are completely free for job seekers - employers pay our fees",
              icon: "💰",
            },
            {
              title: "Career Advocates",
              description:
                "We negotiate on your behalf for better pay and benefits",
              icon: "🛡️",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
              whileHover={cardHover}
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* All Services */}
      <motion.div className="mb-20" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Comprehensive Career Services
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="p-3 bg-blue-50 rounded-lg mr-4 "
                    whileHover={{ rotate: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 pl-14">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Blue Collar Specialization */}
      <motion.div className="mb-20" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Specialized Blue Collar Placement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blueCollarServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              whileHover={cardHover}
            >
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="bg-blue-800 text-white p-8 rounded-xl"
          whileHover={{ scale: 1.01 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              We Understand Skilled Labor
            </h3>
            <p className="text-lg mb-6">
              Unlike general staffing agencies, we specialize in placing skilled
              tradespeople, industrial workers, and manual laborers. Our
              recruiters speak your language and know what employers really
              want.
            </p>
            <motion.button
              onClick={() => setShowGetStarted(true)}
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Your Skills
            </motion.button>
          </div>
        </motion.div> */}
      </motion.div>

      {/* Success Stats */}
      <motion.div
        className="bg-primary rounded-xl p-8 mb-16"
        variants={itemVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "95%", label: "Placement Success Rate" },
            { value: "500+", label: "Partner Companies" },
            { value: "10K+", label: "Candidates Placed" },
            { value: "24h", label: "Average Response Time" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div className="mb-20" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Success Stories From Our Candidates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
              whileHover={cardHover}
            >
              <div className="flex items-start mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
              <blockquote className="text-gray-700 italic pl-2 border-l-4 border-primary">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center bg-gradient-to-r from-primary to-blue-600 rounded-xl p-12"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready for a Better Job?
        </h2>
        <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of workers who found better opportunities through our
          network.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            onClick={() => setShowGetStarted(true)}
            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
          <motion.button
            onClick={() => setShowCalendly(true)}
            className="bg-transparent border-2 border-white text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full text-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Speak to a Recruiter
          </motion.button>
        </div>
      </motion.div>

      {/* Get Started Modal */}
      <AnimatePresence>
        {showGetStarted && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white rounded-xl max-w-lg w-full"
              variants={modalContent}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Start Your Job Search
                  </h3>
                  <motion.button
                    onClick={() => setShowGetStarted(false)}
                    className="text-gray-400 hover:text-gray-600"
                    whileHover={{ rotate: 90 }}
                  >
                    <FaTimes className="w-6 h-6" />
                  </motion.button>
                </div>

                <form
                  action="https://formsubmit.co/380b013455232943a006028a6c501869"
                  method="POST"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://thedivinegroup.eu/thank-you"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Employee Solutions Inquiry"
                  />
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What type of work are you looking for?*
                    </label>
                    <select
                      name="interest"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      <option value="construction">Construction/Trades</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="warehouse">Warehouse/Logistics</option>
                      <option value="general">General Labor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us about your experience
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      rows="3"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CalendlyPopup
        show={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </motion.div>
  );
};

export default EmployeeService;
