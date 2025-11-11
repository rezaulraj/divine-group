import React, { useState } from "react";
import {
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import TestimonialSlider from "../../components/TestimonialSlider";
import { Helmet } from "react-helmet";

const Partnership = () => {
  const [showPartnerForm, setShowPartnerForm] = useState(false);

  const benefits = [
    {
      icon: <FaHandshake className="w-10 h-10 text-blue-600" />,
      title: "Strategic Alliances",
      description:
        "Forge powerful connections that drive mutual growth and success",
    },
    {
      icon: <FaChartLine className="w-10 h-10 text-blue-600" />,
      title: "Growth Opportunities",
      description:
        "Unlock new markets and revenue streams through collaborative ventures",
    },
    {
      icon: <FaUsers className="w-10 h-10 text-blue-600" />,
      title: "Shared Expertise",
      description:
        "Combine strengths to create innovative solutions neither could achieve alone",
    },
    {
      icon: <FaLightbulb className="w-10 h-10 text-blue-600" />,
      title: "Innovation Synergy",
      description:
        "Spark creativity through diverse perspectives and complementary skills",
    },
    {
      icon: <FaGlobe className="w-10 h-10 text-blue-600" />,
      title: "Global Reach",
      description:
        "Expand your influence worldwide through our established networks",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
      <Helmet>
        <meta
          name="description"
          content="Partner with Divine Group to unlock global opportunities, share expertise, and create innovative solutions through strategic collaborations."
        />
        <meta
          name="keywords"
          content="Divine Group partnership, strategic alliances, business collaboration, global partnerships, joint ventures"
        />
        <meta name="author" content="Divine Group" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://thedivinegroup.eu/strategic-partnership"
        />
        <meta
          property="og:title"
          content="Strategic Partnerships | Divine Group"
        />
        <meta
          property="og:description"
          content="Join forces with Divine Group to expand your reach, drive growth, and build lasting impact through strategic partnerships."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://thedivinegroup.eu/strategic-partnership"
        />
        <meta
          name="twitter:title"
          content="Strategic Partnerships | Divine Group"
        />
        <meta
          name="twitter:description"
          content="Unlock new opportunities with Divine Group through strategic collaborations and global alliances."
        />

        <link
          rel="canonical"
          href="https://thedivinegroup.eu/strategic-partnership"
        />
      </Helmet>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-primary">Elevate Together</span> Through
          Partnership
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join forces with industry leaders to create extraordinary value and
          lasting impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-8 text-center hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-100 rounded-full">{benefit.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Partnership with{" "}
              <span className="text-blue-200">Divine Group</span>
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Together with Divine Group, we're redefining industry standards
              through innovation, shared values, and a commitment to excellence.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-blue-100">
                <svg
                  className="w-5 h-5 mr-2 text-blue-300"
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
                Joint ventures that leverage complementary strengths
              </li>
              <li className="flex items-center text-blue-100">
                <svg
                  className="w-5 h-5 mr-2 text-blue-300"
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
                Shared resources for maximum efficiency
              </li>
              <li className="flex items-center text-blue-100">
                <svg
                  className="w-5 h-5 mr-2 text-blue-300"
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
                Co-developed solutions for emerging challenges
              </li>
            </ul>
            <Link
              to={"/strategic-partnership"}
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Our Collaboration
            </Link>
          </div>
          <div className="hidden lg:block bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center">
           
          </div>
        </div>
      </div>

 
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-center text-[#0A1F44] mb-6">
          What Our Partner Say About Divine Group
        </h1>
        <TestimonialSlider />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to explore partnership opportunities?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create mutual success together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setShowPartnerForm(true)}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Become a Partner
          </button>
          <a
            href="/contact-us"
            className="bg-white border-2 border-primary text-primary hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Contact Our Team
          </a>
        </div>
      </div>
      {showPartnerForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Become a Partner
                </h3>
                <button
                  onClick={() => setShowPartnerForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-8 bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">
                  Partnership Benefits
                </h4>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <FaHandshake className="w-5 h-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Access to exclusive business opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <FaChartLine className="w-5 h-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Joint marketing and co-branded initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <FaUsers className="w-5 h-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Shared resources and expertise</span>
                  </li>
                </ul>
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
                  value="New Partner Inquiry"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
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
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
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
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company*
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How would you like to collaborate?*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Submit Partnership Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partnership;
