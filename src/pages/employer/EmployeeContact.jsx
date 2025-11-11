import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaUserTie,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { TbLoader } from "react-icons/tb";
import { Helmet } from "react-helmet";

const EmployeeContact = () => {
  const [submitRign, setSubmitRing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitRing(true);

    setTimeout(() => {
      setSubmitRing(false);
      setShowPopup(true);
    }, 1000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="employee-service"
      className="py-16 bg-gradient-to-b from-blue-50 to-gray-100"
    >
      <Helmet>
        <meta
          name="description"
          content="Request a consultation with Divine Group to find skilled professionals and tailored workforce solutions for your business."
        />
        <meta
          name="keywords"
          content="workforce solutions, staffing services, hire employees, recruitment, Divine Group"
        />
        <link
          rel="canonical"
          href="https://thedivinegroup.eu/employer-services"
        />

        <meta
          property="og:title"
          content="Workforce Solutions Inquiry | Divine Group"
        />
        <meta
          property="og:description"
          content="Connect with Divine Group to access skilled professionals and custom workforce solutions."
        />
        <meta property="og:image" content="" />
        <meta
          property="og:url"
          content="https://thedivinegroup.eu/employer-services"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Workforce Solutions Inquiry | Divine Group"
        />
        <meta
          name="twitter:description"
          content="Request workforce solutions consultation from Divine Group to hire vetted professionals."
        />
      </Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A9695] mb-4">
            Workforce Solutions Inquiry
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the form below and our team will contact you within 24
            hours to discuss your workforce needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:flex">
            <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-primary to-[#1A9695]/90 p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full flex flex-col justify-center text-white"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3">
                    Why Choose Our Workforce Solutions?
                  </h3>
                  <ul className="space-y-3">
                    <motion.li
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <span className="inline-block bg-white/20 rounded-full p-1 mr-3 mt-1">
                        <FaUsers className="text-sm" />
                      </span>
                      <span>Skilled & vetted professionals</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <span className="inline-block bg-white/20 rounded-full p-1 mr-3 mt-1">
                        <FaCalendarAlt className="text-sm" />
                      </span>
                      <span>Flexible staffing solutions</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <span className="inline-block bg-white/20 rounded-full p-1 mr-3 mt-1">
                        <FaFileAlt className="text-sm" />
                      </span>
                      <span>Compliance & documentation handled</span>
                    </motion.li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-white/20">
                  <h4 className="font-bold mb-2">Contact Information</h4>
                  <p className="text-sm text-blue-100">
                    <span className="block">
                      Email: contact@thedivinegroup.eu
                    </span>
                    {/* <span className="block">Romania: +40763316510</span>*/}
                    {/* <span className="block">Malta: +35699394497</span> */}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="md:w-3/5 p-8 md:p-10">
              <motion.form
                action="https://formsubmit.co/380b013455232943a006028a6c501869"
                method="POST"
                onSubmit={handleSubmit}
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
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
                  value="New Workforce Solutions Inquiry"
                />

                <motion.div variants={itemVariants} className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1A9695]">
                      <FaUserTie />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="company"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1A9695]">
                        <FaBuilding />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company_name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Your Company Inc."
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1A9695]">
                        <FaPhone />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1A9695]">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="website"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Website (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1A9695]">
                        <FaGlobe />
                      </div>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="workforceSize"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Current Workforce Size
                    </label>
                    <select
                      id="workforceSize"
                      name="workforce_size"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                      required
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="serviceNeeded"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Service Needed
                    </label>
                    <select
                      id="serviceNeeded"
                      name="service_needed"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                      required
                    >
                      <option value="">Select service</option>
                      <option value="temporary">Temporary Staffing</option>
                      <option value="permanent">Permanent Placement</option>
                      <option value="contract">Contract Workers</option>
                      <option value="training">Workforce Training</option>
                      <option value="consulting">HR Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Workforce Needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9695] focus:border-[#1A9695] transition"
                    placeholder="Tell us about your specific requirements, timeline, and any other details..."
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 cursor-pointer bg-gradient-to-r from-[#1A9695] to-[#1A9695]/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition ${
                      submitRign ? "opacity-80" : ""
                    }`}
                    disabled={submitRign}
                  >
                    {submitRign ? (
                      <div className="flex items-center justify-center">
                        <TbLoader className="animate-spin w-5 h-5 mr-2" />
                        Submitting...
                      </div>
                    ) : (
                      "Request Workforce Consultation"
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl p-8 max-w-sm mx-4 text-center shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="text-6xl text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                We've received your inquiry and will contact you within 24
                hours.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-[#1A9695] text-white rounded-lg hover:bg-[#1A9695]/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeContact;
