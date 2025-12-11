import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaUser,
  FaPaperPlane,
  FaCalendarAlt,
} from "react-icons/fa";
import CalendlyPopup from "../../components/CalendlyPopup";
import { Helmet } from "react-helmet";

const HeroContact = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
      <Helmet>
        <title>Contact Divine Group</title>
        <meta
          name="description"
          content="Reach out to Divine Group's recruitment team. Contact us via email, phone, or schedule a call to discuss opportunities and services."
        />
        <meta
          name="keywords"
          content="Divine Group, Contact, Recruitment, Email, Phone, Schedule a Call, Workforce Hub"
        />
        <link rel="canonical" href="https://thedivinegroup.eu/contact-us" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Divine Group",
            url: "https://www.divinegroup.com",
            logo: "https://thedivinegroup.eu/divinelogo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+385 955880747",
                contactType: "customer service",
                email: "contact@thedivinegroup.eu",
              },
            ],
            sameAs: ["https://www.facebook.com/divinegroup6061"],
          })}
        </script>
      </Helmet>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-md mx-4 text-center shadow-2xl"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
            >
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                We've received your message and will contact you soon.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-bebasneue">
              Get in Touch
            </h2>

            <form
              action="https://formsubmit.co/e5f95e5f919bb49b61a5a035e8c1de60"
              method="POST"
              className="space-y-6"
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
                value="New Contact Inquiry"
              />
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
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your name"
                  required
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
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaPhone className="mr-2 text-primary" /> Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="+4533-434343"
                  required
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
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your company"
                  required
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
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your message..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center cursor-pointer"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-8">
            <div className="bg-white/50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Us
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center font-bebasneue">
                    <FaMapMarkerAlt className="mr-2 text-red-500" /> Workforce
                    Hub Location
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="">
                      <span className="font-medium text-gray-800 mr-2">
                        Croatia HeadOffice:
                      </span>
                      <span>Trg Drage Iblera 10, 10000, Zagreb, Croatia</span>
                    </li>
                    <li className="">
                      <span className="font-medium text-gray-800 mr-2">
                        Romania:
                      </span>
                      <span>
                        Str. Augustin Buzura 1 Bl. A Ap. B10,Loc. Cluj Napoca,
                        Cluj
                      </span>
                    </li>
                    <li className="">
                      <span className="font-medium text-gray-800 mr-2">
                        USA:
                      </span>
                      <span>
                        991 US Hwy 22 West Suite 200, Bridgewater, NJ 08807
                      </span>
                    </li>
                    <li className="">
                      <span className="font-medium text-gray-800 mr-2">
                        UAE:
                      </span>
                      <span>
                        Cuber Business Centre, Al Khazna Tower -18th Floor - Al
                        Najda Street - Al Danah - Zone 1 - Abu Dhabi
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center font-bebasneue">
                    <FaPhone className="mr-2 text-primary rotate-90" />
                    Speak to a Recruiter
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="font-medium text-gray-800 mr-2">
                        Croatia:
                      </span>
                      <span>+385955880747</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center font-bebasneue">
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

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center font-bebasneue">
                    <FaCalendarAlt className="mr-2 text-blue-500" /> Schedule a
                    Call
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Book a convenient time to speak with our recruitment team
                  </p>
                  <motion.button
                    onClick={() => setShowCalendly(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center w-full md:w-auto cursor-pointer"
                  >
                    <FaCalendarAlt className="mr-2" />
                    Book a Call Now
                  </motion.button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6870959.505381532!2d20.17426871933866!3d43.29664875099214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6ffff74e75b%3A0xdad8e8d1ce891acb!2sTrg%20Drage%20Iblera%2010%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1765439122717!5m2!1sen!2sbd"
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

      <CalendlyPopup
        show={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </div>
  );
};

export default HeroContact;
