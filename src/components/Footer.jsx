import React from "react";
import logo from "/logo-white.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C3F75] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-12">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-3 flex flex-wrap gap-6">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="#"
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
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaYoutube className="h-5 w-5" />
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
            Powered by{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Clicktap Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
