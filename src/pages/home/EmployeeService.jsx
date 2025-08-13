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
} from "react-icons/fa";

const EmployeeService = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowGetStarted(false);
    setShowAdvisor(false);
    alert("Thank you for your submission! We will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
    });
  };

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

  // Animation variants
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
      {/* Header Section */}
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Elevate Your <span className="text-primary">Career Potential</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive services are designed to empower your professional
          journey at every stage.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            variants={itemVariants}
            whileHover={cardHover}
            initial="hidden"
            animate="visible"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-3 bg-blue-50 rounded-lg mr-4"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
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

      {/* Stats Section */}
      <motion.div
        className="bg-primary rounded-xl p-8 mb-16"
        variants={itemVariants}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-10 mb-16"
        variants={itemVariants}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="text-primary text-6xl mb-4"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            "
          </motion.div>
          <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            Partnering with this team revolutionized our hiring process. We
            filled three critical leadership roles in half the usual time with
            candidates who exceeded our expectations.
          </blockquote>
          <div className="flex items-center justify-center">
            <motion.img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Johnson"
              className="w-12 h-12 rounded-full mr-4 object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div>
              <p className="font-semibold text-gray-800">Sarah Johnson</p>
              <p className="text-gray-600">Marketing Director at Ted</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-xl p-12"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to unlock your career potential?
        </h2>
        <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who have accelerated their careers
          with our expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            onClick={() => setShowGetStarted(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
          <motion.button
            onClick={() => setShowAdvisor(true)}
            className="bg-transparent border-2 border-white text-white hover:bg-blue-600 font-bold py-3 px-8 rounded-full text-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
          >
            Speak to an Advisor
          </motion.button>
        </div>
      </motion.div>
      {/* Get Started Today Modal */}
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
                    Get Started Today
                  </h3>
                  <motion.button
                    onClick={() => setShowGetStarted(false)}
                    className="text-gray-400 hover:text-gray-600"
                    whileHover={{ rotate: 90 }}
                  >
                    <FaTimes className="w-6 h-6" />
                  </motion.button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service Interest*
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      <option value="placement">Job Placement</option>
                      <option value="resume">Resume Help</option>
                      <option value="interview">Interview Prep</option>
                      <option value="career">Career Coaching</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  >
                    Begin Your Journey
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Speak to an Advisor Modal */}
      <AnimatePresence>
        {showAdvisor && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white rounded-xl max-w-xl w-full"
              variants={modalContent}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <motion.span
                      animate={{ rotate: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <FaUserTie className="mr-2 text-blue-600" />
                    </motion.span>
                    Speak to an Advisor
                  </h3>
                  <motion.button
                    onClick={() => setShowAdvisor(false)}
                    className="text-gray-400 hover:text-gray-600"
                    whileHover={{ rotate: 90 }}
                  >
                    <FaTimes className="w-6 h-6" />
                  </motion.button>
                </div>
                <div className="mb-8 bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">
                    Why speak with an advisor?
                  </h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Personalized career strategy</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Industry-specific insights</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Salary negotiation advice</span>
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="flex items-center w-full gap-2">
                    <div className="mb-6 w-full">
                      <label
                        htmlFor="advisor-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="advisor-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6 w-full">
                      <label
                        htmlFor="advisor-email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="advisor-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="advisor-phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="advisor-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="availability"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Best Time to Call
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (9am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-5pm)</option>
                      <option value="evening">Evening (5pm-8pm)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Request Call Back
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EmployeeService;
