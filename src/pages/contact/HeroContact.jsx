import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

const HeroContact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <motion.div variants={fadeIn}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaUser className="mr-2 text-primary" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaEnvelope className="mr-2 text-primary" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaBuilding className="mr-2 text-primary" /> Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your company"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your message..."
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeIn} className="space-y-8">
            <div className="bg-white/50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Us
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-red-500" /> Workforce
                    Hub Location
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex">
                      <span className="font-medium text-gray-800 mr-2">
                        Malta (HQ):
                      </span>
                      <span>
                        9C M.A. Vassalli Street, VALLETTA, VLT1310, Malta
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-800 mr-2">
                        Romania:
                      </span>
                      <span>
                        Str. Augustin Buzura 1 Bl. A Ap. B10, Loc. Cluj Napoca,
                        Cluj
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-800 mr-2">
                        USA:
                      </span>
                      <span>
                        991 US Hwy 22 West Suite 200, Bridgewater, NJ 08807
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-800 mr-2">
                        UAE:
                      </span>
                      <span>
                        Cuber Business Centre, Al Khazna Tower -18th Floor – Al
                        Najda Street – Al Danah – Zone 1 – Abu Dhabi
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FaPhone className="mr-2 text-primary" /> Speak to a
                    Recruiter
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="font-medium text-gray-800 mr-2">
                        Romania:
                      </span>
                      <span>+40763316510</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-800 mr-2">
                        Malta:
                      </span>
                      <span>+35699394497</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FaEnvelope className="mr-2 text-primary" /> Recruitment
                    Inbox
                  </h3>
                  <a
                    href="mailto:contact@thedivinegroup.eu"
                    className="text-primary hover:text-primary transition-colors"
                  >
                    contact@thedivinegroup.eu
                  </a>
                </div>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.566365235208!2d14.50687631526966!3d35.89965898013704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUzJzU4LjgiTiAxNMKwMzAnMzEuOSJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Workforce Hub Location"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContact;
