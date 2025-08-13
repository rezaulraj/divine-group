import React from "react";
import logo from "/divinelogo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-12">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <a href="/">
              <img src={logo} alt="Company Logo" className="h-24 w-auto" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-3 flex flex-wrap gap-6">
              <li>
                <a
                  href="/about-us"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/divinegroup6061"
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaFacebook className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/DivineGroup817"
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaTwitter className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/divinegroup20/"
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/106544941/admin/dashboard/"
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>

            <a
              href="https://www.youtube.com/@DivineGroup25"
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaYoutube className="h-8 w-8" />
            </a>
            <a
              href="https://www.pinterest.com/divinegroup25/"
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaPinterest className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            Divine Group Company © Copyright {new Date().getFullYear()} All
            Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            <a
              href="/terms-and-conditions"
              className="text-blue-400 hover:text-blue-300"
            >
              Terms And Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
