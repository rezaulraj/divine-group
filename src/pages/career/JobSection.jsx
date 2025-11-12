import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

const JobSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    coverLetter: "",
    message: "",
    cv: null,
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [activeTab, setActiveTab] = useState("all");

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxSihU_-lx49-gr1h4oe6w1H621Nxy2QHfMEx87gGGQKzfvwyQ3V3TMOxx9ypsR_JFdow/exec?site=Divine_Group"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData((prev) => ({
      ...prev,
      subject: `Application for ${job.Title}`,
    }));
    setShowPopup(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setFormData((prev) => ({ ...prev, cv: file }));
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log("Job:", selectedJob);

    setShowPopup(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      coverLetter: "",
      message: "",
      cv: null,
    });
    setUploadProgress(0);
  };

  const getDepartmentColor = (industry) => {
    const colors = {
      Hospitality: "bg-blue-100 text-blue-800 border-blue-200",
      Construction: "bg-orange-100 text-orange-800 border-orange-200",
      Automotive: "bg-red-100 text-red-800 border-red-200",
      Manufacturing: "bg-purple-100 text-purple-800 border-purple-200",
      Technology: "bg-indigo-100 text-indigo-800 border-indigo-200",
      Healthcare: "bg-green-100 text-green-800 border-green-200",
    };
    return colors[industry] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getCountryCode = (countryName) => {
    const countryMap = {
      // Europe
      Albania: "AL",
      Andorra: "AD",
      Armenia: "AM",
      Austria: "AT",
      Azerbaijan: "AZ",
      Belarus: "BY",
      Belgium: "BE",
      Bosnia_and_Herzegovina: "BA",
      Bulgaria: "BG",
      Croatia: "HR",
      Cyprus: "CY",
      Czech_Republic: "CZ",
      Denmark: "DK",
      Estonia: "EE",
      Finland: "FI",
      France: "FR",
      Georgia: "GE",
      Germany: "DE",
      Greece: "GR",
      Hungary: "HU",
      Iceland: "IS",
      Ireland: "IE",
      Italy: "IT",
      Kazakhstan: "KZ",
      Kosovo: "XK",
      Latvia: "LV",
      Liechtenstein: "LI",
      Lithuania: "LT",
      Luxembourg: "LU",
      Malta: "MT",
      Moldova: "MD",
      Monaco: "MC",
      Montenegro: "ME",
      Netherlands: "NL",
      North_Macedonia: "MK",
      Norway: "NO",
      Poland: "PL",
      Portugal: "PT",
      Romania: "RO",
      Russia: "RU",
      San_Marino: "SM",
      Serbia: "RS",
      Slovakia: "SK",
      Slovenia: "SI",
      Spain: "ES",
      Sweden: "SE",
      Switzerland: "CH",
      Turkey: "TR",
      Ukraine: "UA",
      United_Kingdom: "GB",
      Vatican_City: "VA",

      // Asia
      Afghanistan: "AF",
      Armenia_: "AM", // also counted in Europe sometimes
      Azerbaijan_: "AZ",
      Bahrain: "BH",
      Bangladesh: "BD",
      Bhutan: "BT",
      Brunei: "BN",
      Cambodia: "KH",
      China: "CN",
      Cyprus_: "CY",
      Georgia_: "GE",
      India: "IN",
      Indonesia: "ID",
      Iran: "IR",
      Iraq: "IQ",
      Israel: "IL",
      Japan: "JP",
      Jordan: "JO",
      Kazakhstan_: "KZ",
      Kuwait: "KW",
      Kyrgyzstan: "KG",
      Laos: "LA",
      Lebanon: "LB",
      Malaysia: "MY",
      Maldives: "MV",
      Mongolia: "MN",
      Myanmar: "MM",
      Nepal: "NP",
      North_Korea: "KP",
      Oman: "OM",
      Pakistan: "PK",
      Palestine: "PS",
      Philippines: "PH",
      Qatar: "QA",
      Saudi_Arabia: "SA",
      Singapore: "SG",
      South_Korea: "KR",
      Sri_Lanka: "LK",
      Syria: "SY",
      Taiwan: "TW",
      Tajikistan: "TJ",
      Thailand: "TH",
      Timor_Leste: "TL",
      Turkmenistan: "TM",
      United_Arab_Emirates: "AE",
      Uzbekistan: "UZ",
      Vietnam: "VN",
      Yemen: "YE",

      // Extras (you already had)
      USA: "US",
      Canada: "CA",
      Australia: "AU",
      New_Zealand: "NZ",
      Brazil: "BR",
      Mexico: "MX",
      Egypt: "EG",
      Nigeria: "NG",
      Kenya: "KE",
      South_Africa: "ZA",
    };
    return countryMap[countryName] || "US";
  };

  const formatSalary = (salary) => {
    return salary || "Negotiable";
  };

  const formatExperience = (experience) => {
    return experience === "No Need"
      ? "No experience required"
      : `${experience} years experience`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getUniqueIndustries = () => {
    const industries = [...new Set(jobs.map((job) => job.Industry))];
    return ["All Industries", ...industries];
  };

  // Filter jobs based on active tab and industry
  const filteredJobs = jobs.filter((job) => {
    // Tab filtering
    const tabFilter =
      activeTab === "all"
        ? true
        : activeTab === "handson"
        ? job.JobCategory === "HandsOn_Jobs"
        : activeTab === "administrative"
        ? job.JobCategory === "Administrative_Jobs"
        : true;

    // Industry filtering
    const industryFilter =
      selectedIndustry === "All Industries"
        ? true
        : job.Industry === selectedIndustry;

    return tabFilter && industryFilter;
  });

  // Get candidate origin badge color
  const getCandidateOriginColor = (origin) => {
    const colors = {
      "Nepalese Only": "bg-gradient-to-r from-red-500 to-orange-500",
      "Romania Only": "bg-gradient-to-r from-blue-500 to-cyan-500",
      "All Nationalities": "bg-gradient-to-r from-green-500 to-emerald-500",
      "EU Only": "bg-gradient-to-r from-purple-500 to-indigo-500",
      "Asian Countries": "bg-gradient-to-r from-yellow-500 to-amber-500",
    };
    return colors[origin] || "bg-gradient-to-r from-gray-500 to-gray-600";
  };

  // Get job category display name
  const getJobCategoryName = (category) => {
    const names = {
      HandsOn_Jobs: "Hands-on Jobs",
      Administrative_Jobs: "Administrative Jobs",
    };
    return names[category] || category;
  };

  // Skeleton Loader Component
  const JobCardSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full animate-pulse">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>

        <div className="h-7 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>

        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-20"></div>
        </div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>

      <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-12"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
      </div>

      <div className="p-6 border-b border-gray-100 flex-grow">
        <div className="h-5 bg-gray-200 rounded w-32 mb-3"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>

      <div className="p-6 border-b border-gray-100">
        <div className="h-5 bg-gray-200 rounded w-36 mb-3"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-14"></div>
          <div className="h-6 bg-gray-200 rounded w-12"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="h-12 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Unable to load jobs
          </h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#80C3FF] text-[#0A1F44] font-semibold rounded-lg hover:bg-[#6ab0f0] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="jobs"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
            Explore Career Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing job opportunities across various industries and
            locations. Join our team and build your career with us.
          </p>
        </div>

        {/* Job Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 ease-in-out ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-[#80C3FF] to-[#0A1F44] text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-[#0A1F44] hover:bg-gray-50"
                }`}
              >
                All Jobs
                <span className="ml-2 text-sm opacity-80">({jobs.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("handson")}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 ease-in-out ${
                  activeTab === "handson"
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                Hands-on Jobs
                <span className="ml-2 text-sm opacity-80">
                  (
                  {
                    jobs.filter((job) => job.JobCategory === "HandsOn_Jobs")
                      .length
                  }
                  )
                </span>
              </button>

              <button
                onClick={() => setActiveTab("administrative")}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 ease-in-out ${
                  activeTab === "administrative"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Administrative Jobs
                <span className="ml-2 text-sm opacity-80">
                  (
                  {
                    jobs.filter(
                      (job) => job.JobCategory === "Administrative_Jobs"
                    ).length
                  }
                  )
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {getUniqueIndustries().map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                selectedIndustry === industry
                  ? "bg-[#80C3FF] text-[#0A1F44] shadow-md transform scale-105"
                  : "bg-white text-[#0A1F44] border border-gray-300 hover:bg-[#80C3FF] hover:border-[#80C3FF]"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Jobs Count */}
        {!loading && (
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Showing {filteredJobs.length} job
              {filteredJobs.length !== 1 ? "s" : ""}
              {activeTab !== "all" &&
                ` in ${getJobCategoryName(
                  activeTab === "handson"
                    ? "HandsOn_Jobs"
                    : "Administrative_Jobs"
                )}`}
              {selectedIndustry !== "All Industries" &&
                ` • ${selectedIndustry}`}
            </p>
          </div>
        )}

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 6 }).map((_, index) => (
              <JobCardSkeleton key={index} />
            ))
          ) : filteredJobs.length === 0 ? (
            // No jobs found
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No Jobs Available
              </h3>
              <p className="text-gray-600">
                {activeTab !== "all" || selectedIndustry !== "All Industries"
                  ? "Try changing your filters to see more opportunities."
                  : "Check back later for new opportunities."}
              </p>
            </div>
          ) : (
            // Display actual jobs
            filteredJobs.map((job) => (
              <div
                key={job.SL_No}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden flex flex-col h-full"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getDepartmentColor(
                          job.Industry
                        )} w-fit`}
                      >
                        {job.Industry}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCandidateOriginColor(
                          job.CandidatesOrigin
                        )} w-fit`}
                      >
                        {job.CandidatesOrigin}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDate(job.Date)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                    {job.Title}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-3">
                    <ReactCountryFlag
                      countryCode={getCountryCode(job.Country)}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        marginRight: "8px",
                        borderRadius: "2px",
                      }}
                      title={job.Country}
                    />
                    <span className="font-medium">{job.Country}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {job.JobType}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {formatExperience(job.Experience)}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {job.Vacancies} vacancy{job.Vacancies !== 1 ? "ies" : ""}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {job.Description}
                  </p>
                </div>

                <div className="px-6 py-3 bg-[#80C3FF]/10 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#0A1F44]">
                      Salary:
                    </span>
                    <span className="font-bold text-[#0A1F44]">
                      {formatSalary(job.Salary)}
                    </span>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-100 flex-grow">
                  <h4 className="font-semibold text-[#0A1F44] mb-3">
                    Job Details:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Shift:</span>
                      <span className="font-medium">{job.Shift}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Gender:</span>
                      <span className="font-medium">{job.Gender}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Category:</span>
                      <span className="font-medium">
                        {getJobCategoryName(job.JobCategory)}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Job Type:</span>
                      <span className="font-medium">{job.JobType}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-semibold text-[#0A1F44] mb-3">
                    Requirements:
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {job.Requirements}
                  </p>
                </div>

                <div className="p-6 mt-auto">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full bg-gradient-to-r from-[#80C3FF] to-[#0A1F44] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button (if needed) */}
        {!loading && filteredJobs.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-[#0A1F44] border border-gray-300 font-semibold rounded-lg hover:bg-[#80C3FF] hover:border-[#80C3FF] transition-all duration-300">
              Load More Jobs
            </button>
          </div>
        )}
      </div>

      {/* Application Popup */}
      {showPopup && selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A1F44]">
                    Apply for {selectedJob.Title}
                  </h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center">
                      <ReactCountryFlag
                        countryCode={getCountryCode(selectedJob.Country)}
                        svg
                        style={{
                          width: "1.2em",
                          height: "1.2em",
                          marginRight: "8px",
                          borderRadius: "2px",
                        }}
                      />
                      <span className="text-gray-600">
                        {selectedJob.Country}
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCandidateOriginColor(
                        selectedJob.CandidatesOrigin
                      )}`}
                    >
                      {selectedJob.CandidatesOrigin}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Rest of the popup form remains the same */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Form fields remain the same as before */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80C3FF] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80C3FF] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80C3FF] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80C3FF] focus:border-transparent transition-all duration-200"
                    placeholder="Application subject"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80C3FF] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Write your cover letter here..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80C3FF] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV/Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-200 hover:border-[#80C3FF] hover:bg-[#80C3FF]/5">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold text-[#80C3FF]">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX (Max. 5MB)
                    </p>
                  </label>
                </div>

                {isUploading && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Uploading CV...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#80C3FF] h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {formData.cv && !isUploading && (
                  <div className="mt-4 flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-green-700">
                        CV uploaded successfully
                      </span>
                    </div>
                    <span className="text-xs text-green-600">
                      {formData.cv.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!formData.cv || isUploading}
                  className="flex-1 px-6 py-3 bg-[#80C3FF] text-[#0A1F44] font-semibold rounded-lg hover:bg-[#6ab0f0] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobSection;
