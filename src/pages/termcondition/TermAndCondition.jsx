import React from "react";
import {
  FaBalanceScale,
  FaCopyright,
  FaExclamationTriangle,
  FaGlobe,
  FaInfoCircle,
  FaLaptop,
  FaLightbulb,
  FaLink,
  FaRegHandshake,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";
import { MdGavel, MdPrivacyTip, MdSecurity } from "react-icons/md";

const TermAndCondition = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-bebasneue">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-8 text-white">
          <div className="flex items-center">
            <FaBalanceScale className="text-4xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Terms & Conditions</h1>
              <p className="text-blue-100 mt-1">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Introduction */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaRegHandshake className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Terms & Conditions
                </h2>
                <p className="text-gray-600 mb-4">
                  These Conditions of Use and Disclaimer ("Conditions") outline
                  the terms governing your access to and use of the Divine Group
                  website (the "Website"). Please read these Conditions
                  carefully, as they affect your legal rights and
                  responsibilities. If you do not agree with any part of these
                  Conditions, you should not use the Website.
                </p>
              </div>
            </div>
          </div>

          {/* 1.0 Use of the Website */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaLaptop className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1.0 Use of the Website
                </h2>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    1.1
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This Website is provided for your personal use, subject to
                    these Conditions. By accessing or using the Website, you
                    agree to be bound by these Conditions as set forth by Divine
                    Group ("Divine Group," "we," or "us").
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    1.2
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Divine Group reserves the right to revise these Conditions
                    at any time for legal, regulatory, or operational reasons.
                    Your continued use of the Website following any updates
                    constitutes your agreement to the revised Conditions.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    1.3
                  </h3>
                  <p className="text-gray-600 mb-2">
                    As a condition of using the Website, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      Use the Website for any purpose that is unlawful or
                      prohibited by these Conditions;
                    </li>
                    <li>
                      Defame, harass, abuse, stalk, threaten, or violate the
                      rights of others;
                    </li>
                    <li>
                      Share, transmit, or publish any content that is unlawful,
                      offensive, or inappropriate;
                    </li>
                    <li>
                      Use automated tools or scripts to access the Website;
                    </li>
                    <li>
                      Engage in spam, phishing, pyramid schemes, or unsolicited
                      promotions;
                    </li>
                    <li>Impersonate any individual or entity;</li>
                    <li>
                      Upload materials you are not legally authorized to share
                      or that contain viruses or harmful code;
                    </li>
                    <li>
                      Breach any applicable local or international laws or
                      regulations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 2.0 Intellectual Property */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaCopyright className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2.0 Intellectual Property
                </h2>
                <p className="text-gray-600">
                  All content on the Website is protected by copyright,
                  trademarks, and other intellectual property rights. You may
                  view, download, or print content for personal, non-commercial
                  use, provided that all copyright and proprietary notices are
                  preserved. Reproduction, modification, or redistribution for
                  commercial purposes is prohibited without prior written
                  permission from Divine Group.
                </p>
              </div>
            </div>
          </div>

          {/* 3.0 Disclaimer */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaExclamationTriangle className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3.0 Disclaimer
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <FaShieldAlt className="mr-2 text-blue-500" /> 3.1 Website
                    Availability:
                  </h3>
                  <p className="text-gray-600">
                    Divine Group strives to maintain the availability and
                    performance of the Website but cannot guarantee
                    uninterrupted or error-free access. Any technical issues
                    should be reported to our support team. Temporary service
                    interruptions may occur due to maintenance or updates.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <MdSecurity className="mr-2 text-blue-500" /> 3.2 Liability:
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      While we aim to ensure the accuracy and reliability of
                      Website content, we do not guarantee that all information
                      is current or complete.
                    </li>
                    <li>
                      Divine Group is not liable for any direct, indirect, or
                      consequential losses resulting from your use of the
                      Website.
                    </li>
                    <li>
                      This clause does not exclude liability for death or
                      personal injury caused by our negligence.
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <FaGlobe className="mr-2 text-blue-500" /> 3.3
                    Jurisdictional Use:
                  </h3>
                  <p className="text-gray-600">
                    The Website may not be appropriate or accessible in some
                    regions. Users accessing the Website from outside their
                    legal jurisdiction do so at their own risk and are
                    responsible for complying with local laws.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <FaInfoCircle className="mr-2 text-blue-500" /> 3.4 General
                    Information Disclaimer:
                  </h3>
                  <p className="text-gray-600">
                    The information on the Website is intended for general
                    purposes only and should not be considered professional or
                    legal advice. Users are encouraged to seek independent
                    guidance before making any decisions based on Website
                    content.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <FaLightbulb className="mr-2 text-blue-500" /> 3.5
                    Investment Disclaimer:
                  </h3>
                  <p className="text-gray-600">
                    Any reference to financial or investment-related information
                    does not constitute an offer or solicitation by Divine
                    Group. Users must ensure that any such information is in
                    compliance with applicable local laws and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4.0 General */}
          <div className="mb-6">
            <div className="flex items-start mb-6">
              <MdGavel className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4.0 General
                </h2>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <MdPrivacyTip className="mr-2 text-blue-500" /> 4.1
                  </h3>
                  <p className="text-gray-600">
                    Divine Group may collect certain user information when you
                    access or interact with the Website. For details, please
                    refer to our Privacy Policy.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <FaBalanceScale className="mr-2 text-blue-500" /> 4.2
                  </h3>
                  <p className="text-gray-600">
                    These Conditions are governed by the laws of the
                    jurisdiction in which Divine Group is legally established.
                    Any legal proceedings must be initiated in the appropriate
                    courts within that jurisdiction.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <FaLink className="mr-2 text-blue-500" /> 4.3
                  </h3>
                  <p className="text-gray-600">
                    The Website is owned and operated by Divine Group.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                    <FaUserShield className="mr-2 text-blue-500" /> 4.4
                  </h3>
                  <p className="text-gray-600">
                    For questions or support, please contact our team directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
