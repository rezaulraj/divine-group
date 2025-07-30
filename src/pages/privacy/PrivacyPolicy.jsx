import React from "react";
import {
  FaShieldAlt,
  FaUserShield,
  FaCookieBite,
  FaCamera,
  FaExchangeAlt,
  FaLock,
  FaRobot,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { MdPrivacyTip, MdDataUsage } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
          <div className="flex items-center">
            <FaShieldAlt className="text-4xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
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
              <MdPrivacyTip className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  At Divine Group, we are committed to protecting your privacy
                  and handling your personal data with transparency and care.
                  This Privacy Notice ("Notice") outlines how Divine Group and
                  its affiliated companies collect, use, store, and safeguard
                  your personal information. It applies to data you provide
                  directly, as well as information we may obtain through third
                  parties or other sources.
                </p>
                <p className="text-gray-600">
                  We may process your personal data for the purposes described
                  in this Notice or as explained to you at the time of
                  collection.
                </p>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <RiContactsBookLine className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Who We Are
                </h2>
                <p className="text-gray-600 mb-4">
                  Divine Group acts as the data controller of your personal
                  data. This means we are responsible for determining the
                  purposes and means of processing your information, either
                  independently or in partnership with others.
                </p>
                <p className="text-gray-600">
                  If you interact with specific venues, services, or facilities
                  operated by Divine Group, the entity responsible for managing
                  that service or location may also act as a data controller. A
                  list of relevant entities and their contact details is
                  available upon request to help you identify which part of
                  Divine Group is responsible for managing your data.
                </p>
              </div>
            </div>
          </div>

          {/* Information Covered */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <MdDataUsage className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Information Covered by This Notice
                </h2>
                <p className="text-gray-600 mb-4">
                  In this Notice, we use the term "processing" to refer to any
                  activity involving your personal data—including collecting,
                  storing, using, sharing, or deleting it.
                </p>
                <p className="text-gray-600 mb-4">
                  Personal data means any information that can identify you as
                  an individual, either directly or indirectly—such as your
                  name, address, contact details, or other identifiers. When we
                  say "you" or "your," we are referring to the individual to
                  whom the personal data relates. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>
                    <span className="font-medium">Primary Customers:</span>{" "}
                    Individuals or entities who directly engage with Divine
                    Group's products or services.
                  </li>
                  <li>
                    <span className="font-medium">Secondary Customers:</span>{" "}
                    Individuals affiliated with or linked to Primary Customers,
                    such as employees, family members, or associates, who also
                    benefit from the service.
                  </li>
                  <li>
                    <span className="font-medium">Children:</span> Individuals
                    under the age of 16.
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We may also collect and process certain types of sensitive
                  data, which may include information about your:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Racial or ethnic background</li>
                      <li>Political views</li>
                      <li>Religious or philosophical beliefs</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Trade union membership</li>
                      <li>Health conditions</li>
                      <li>Genetic or biometric data used for identification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaCookieBite className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Use of Cookies
                </h2>
                <p className="text-gray-600">
                  Where applicable, our websites may use cookies to enhance user
                  experience, analyze traffic, or provide personalized content.
                  You can manage your cookie preferences and withdraw consent at
                  any time using the settings in your web browser. For more
                  information, please refer to our Cookie Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Data Collection */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaUserShield className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  What Personal Data We Collect and How We Use It
                </h2>
                <p className="text-gray-600 mb-4">
                  To deliver our services, we collect and process various types
                  of personal data. We only use what's necessary, and we always
                  comply with data protection laws.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Categories of Personal Data We Collect
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Contact Information
                    </h4>
                    <p className="text-gray-600">
                      Home address, phone numbers, email, emergency contact.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Identification Data
                    </h4>
                    <p className="text-gray-600">
                      Full name, title, photo, passport/ID details, visas,
                      driver's license, certificates, insurance numbers, etc.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Sensitive Data
                    </h4>
                    <p className="text-gray-600">
                      Includes health info, ethnicity, political/religious
                      beliefs, union membership, genetics, biometrics.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Web Data</h4>
                    <p className="text-gray-600">
                      Cookies, IP address, social media profiles, and browsing
                      activity.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  How We Use Your Data
                </h3>
                <p className="text-gray-600 mb-4">
                  We process your data for both external and internal
                  operations, including:
                </p>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <ul className="list-disc pl-6 text-gray-600 space-y-3">
                    <li>
                      <span className="font-medium">
                        Marketing & Analytics:
                      </span>{" "}
                      To personalize offers, track user activity, and improve
                      services (with your consent or legitimate interest).
                    </li>
                    <li>
                      <span className="font-medium">Bookings & Orders:</span> To
                      manage reservations and transactions (based on contract or
                      legitimate interest).
                    </li>
                    <li>
                      <span className="font-medium">
                        Wi-Fi Access & Events:
                      </span>{" "}
                      To provide on-site services or event participation (with
                      consent or contract).
                    </li>
                    <li>
                      <span className="font-medium">
                        Customer Support & Feedback:
                      </span>{" "}
                      For surveys, complaints, and quality improvement
                      (legitimate interest).
                    </li>
                    <li>
                      <span className="font-medium">
                        Membership Management:
                      </span>{" "}
                      To maintain account records (based on consent).
                    </li>
                    <li>
                      <span className="font-medium">Security & Safety:</span>{" "}
                      CCTV monitoring, system backups, health and safety
                      incidents (legitimate interest, legal obligation, or
                      consent).
                    </li>
                    <li>
                      <span className="font-medium">
                        Legal & Financial Operations:
                      </span>{" "}
                      For payments, audits, and legal compliance (contractual
                      and legal basis).
                    </li>
                    <li>
                      <span className="font-medium">
                        Business Development & CSR:
                      </span>{" "}
                      For sales, research, and corporate responsibility
                      initiatives (legitimate interest).
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-4">
                  Your data is retained for up to 7 years after your last
                  transaction, and sensitive data is kept for up to 2 years
                  unless laws require otherwise.
                </p>
              </div>
            </div>
          </div>

          {/* CCTV */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaCamera className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  CCTV Usage
                </h2>
                <p className="text-gray-600">
                  We use CCTV in our locations for the safety of customers and
                  staff. Signage is posted where required by law. Data is
                  retained only as long as necessary for security purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Data from Others */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaExchangeAlt className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Data Received from Others
                </h2>
                <p className="text-gray-600 mb-4">
                  In some cases, we receive your personal data from third
                  parties such as:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>
                        Medical providers – for incident response and health
                        support.
                      </li>
                      <li>Financial providers – for payments and contracts.</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>
                        Social media platforms – for analytics, marketing, or
                        managing feedback.
                      </li>
                      <li>
                        Group companies – including subsidiaries and affiliates
                        within our corporate group.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaLock className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Legal Basis
                </h2>
                <p className="text-gray-600">
                  We rely on different legal grounds such as:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Your consent
                    </h4>
                    <p className="text-gray-600">
                      For marketing communications and certain data processing
                      activities
                    </p>
                  </div>
                  <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Contractual necessity
                    </h4>
                    <p className="text-gray-600">
                      When processing is needed to fulfill our contract with you
                    </p>
                  </div>
                  <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Legal obligations
                    </h4>
                    <p className="text-gray-600">
                      When required by applicable laws and regulations
                    </p>
                  </div>
                  <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Legitimate interest
                    </h4>
                    <p className="text-gray-600">
                      Where we've balanced your rights with our need to operate
                      efficiently, ethically, and securely
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaLock className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  How Long Do We Keep Your Personal Data?
                </h2>
                <p className="text-gray-600 mb-4">
                  We will only retain your personal data for as long as
                  necessary to fulfill the purposes outlined in this notice. The
                  retention period is determined by factors such as the duration
                  of our relationship with you and any legal requirements (e.g.,
                  for accounting, litigation, or regulatory purposes). For more
                  details on storage periods, please refer to the section "What
                  Do We Collect from You and How Do We Use It?" above.
                </p>
                <p className="text-gray-600">
                  If we no longer need to retain your data, we will either
                  delete it or anonymize it so that you can no longer be
                  identified, unless we are required to keep it for legal or
                  regulatory reasons.
                </p>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaExchangeAlt className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Who Do We Share Your Personal Data With?
                </h2>
                <p className="text-gray-600 mb-4">
                  We may share your personal data with trusted third parties,
                  vendors, service providers, and affiliated employees as
                  necessary to fulfill the purposes described in this notice.
                  Where applicable, we may also share your data with other
                  entities within The divine group Corporate LLC, including
                  subsidiaries and holding companies.
                </p>
                <p className="text-gray-600 mb-6">
                  Here's a list of the categories of third parties with whom we
                  may share your data and why:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">
                          Category of Third Party
                        </th>
                        <th className="py-3 px-4 text-left">
                          Purpose for Disclosure
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-blue-50">
                        <td className="py-3 px-4 font-medium">
                          Legal and Professional Advisers
                        </td>
                        <td className="py-3 px-4">
                          Audits, invoicing, legal requirements, transaction
                          processing, accident/incidents, legal claims,
                          competitions, and IT security.
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="py-3 px-4 font-medium">
                          Health Providers
                        </td>
                        <td className="py-3 px-4">
                          Accident/incidents, legal requirements, medical care,
                          and legal claims.
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="py-3 px-4 font-medium">
                          Finance, Insurance, and Credit Providers
                        </td>
                        <td className="py-3 px-4">
                          Invoicing, payment processing, insurance, and
                          valuation.
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="py-3 px-4 font-medium">
                          Government Bodies, Regulators
                        </td>
                        <td className="py-3 px-4">
                          Audits, customer queries, invoicing, legal compliance,
                          service improvements, and transaction progress.
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="py-3 px-4 font-medium">
                          IT, Digital, Technology, and Telecoms
                        </td>
                        <td className="py-3 px-4">
                          Audits, customer queries, application security,
                          support, service improvement, analytics, marketing,
                          and memberships.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaLock className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Security of Your Personal Data
                </h2>
                <p className="text-gray-600">
                  We have implemented both technological and operational
                  security measures to safeguard your personal data from loss,
                  misuse, alteration, or destruction. Access to personal data is
                  granted only to authorized personnel, who are committed to
                  maintaining its confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaUserShield className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  Depending on the country in which you reside, you may have
                  specific rights related to your personal data. These rights
                  are determined by the laws of your country, and their
                  application may vary.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Right to Withdraw Consent
                </h3>
                <p className="text-gray-600">
                  If you have provided your consent for us to process your
                  personal data, you have the right to withdraw that consent at
                  any time. You can do so by following the instructions provided
                  when you initially gave consent or by contacting us. Please
                  note that withdrawing consent will not affect any processing
                  of your personal data that occurred before the withdrawal.
                </p>
              </div>
            </div>
          </div>

          {/* AI Implications */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaRobot className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  AI Implications
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Artificial Intelligence (AI) Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  We use AI Systems that process personal data to enhance our
                  services and improve user experiences. While utilizing AI, we
                  remain committed to safeguarding personal data, ensuring
                  customer privacy, and preventing unauthorized or fraudulent
                  activity. Our customers and stakeholders can trust that their
                  personal data is securely protected, especially in situations
                  where AI is involved in delivering our products or services.
                  The deployment of AI inherently enhances the protection of
                  personal data.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  How We Use AI Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  This notice provides details on how we protect your personal
                  data while using AI Systems.
                </p>
                <p className="text-gray-600 mb-4">
                  When personal data is processed through our AI Systems, we
                  remain the data controller. We process your data in compliance
                  with applicable data protection laws. If we engage a
                  third-party processor, we ensure that contracts are in place
                  to uphold our high standards and adhere to the relevant data
                  protection regulations.
                </p>
                <p className="text-gray-600 mb-4">
                  In some cases, we may process personal data through AI
                  Systems. Before using AI, we carefully evaluate the
                  opportunities and risks and ensure proper human oversight for
                  sensitive matters. If we provide interactions with AI, we will
                  clearly inform you and, when necessary, point out any
                  potential errors.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Personal Data Processed by AI Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  We may collect personal data directly from you, third parties,
                  or public sources. We process this data using AI Systems to
                  improve the efficiency, quality, and speed of our business
                  processes and to provide services. For more detailed
                  information, please refer to the section titled "What do we
                  collect from you and how do we use it?"
                </p>
                <p className="text-gray-600">
                  In certain circumstances, we may process sensitive personal
                  data through AI Systems. However, we will ensure that we have
                  the necessary lawful basis for doing so. For processing
                  existing personal data, we will continue to rely on the
                  appropriate lawful basis. In cases where we engage data
                  processors, they are unable to access personal data entered
                  into AI Systems. We ensure that contracts with data processors
                  require them to protect your personal data.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <div className="flex items-start mb-6">
              <FaEnvelope className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact us
                </h2>
                <p className="text-gray-600 mb-6">
                  If you want to exercise any of the rights set out above or
                  have any questions or concerns about how we treat your
                  personal data, please contact us at:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">UAE</h4>
                        <p className="text-gray-600">
                          Cuber Business Centre, Al Khazna Tower -18th Floor –
                          Al Najda Street – Al Danah – Zone 1 – Abu Dhabi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">MALTA</h4>
                        <p className="text-gray-600">
                          Amber Court,Block C,No 1, Qormi Road ,Santa Venera SVR
                          1301, Malta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">ROMANIA</h4>
                        <p className="text-gray-600">
                          Str. Augustin Buzura 1 Bl. A Ap. B10,Loc. Cluj Napoca,
                          Cluj, Romania.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <FaPhone className="text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">Phone</h4>
                        <p className="text-gray-600">Call +40763316510</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changes */}
          <div className="mb-6">
            <div className="flex items-start">
              <MdPrivacyTip className="text-2xl text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Changes to This Notice
                </h2>
                <p className="text-gray-600">
                  We regularly review this Notice and may update, modify, add,
                  or remove sections at our discretion. We encourage you to
                  periodically check this Notice for any updates. If required by
                  data protection laws, we will notify you of any changes,
                  including the effective date of those changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
