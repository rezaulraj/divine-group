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

const Partnership = () => {
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
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
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    // Close the modal after submission
    setShowPartnerForm(false);
    setShowContactForm(false);
    // Show success message
    alert("Thank you for your submission! We will contact you shortly.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };
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
      {/* Header Section */}
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

      {/* Partnership Benefits */}
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

      {/* Divine Group Section */}
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
            {/* Image background */}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white rounded-xl shadow-xl p-10 mb-16 border border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-blue-600 text-6xl mb-4">"</div>
          <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            Our partnership has exceeded all expectations, delivering 40% growth
            in our first year together and opening doors we couldn't have
            accessed alone.
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael Chen"
              className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-200"
            />
            <div>
              <p className="font-semibold text-gray-800">Michael Chen</p>
              <p className="text-gray-600">
                Director of Strategic Partnerships, Divine Group
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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

              <form onSubmit={handleSubmit}>
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
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.company}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
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

      {/* Contact Our Team Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Contact Our Team
                </h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How can we help you?*
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Other ways to reach us
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span>Romania: +40763316510</span>
                  </p>
                  <p className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>contact@thedivinegroup.eu</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partnership;
