import React from "react";

const JobSection = () => {
  const jobs = [
    {
      id: 1,
      title: "Hotel Operations Manager",
      location: "Dubai, UAE",
      country: "United Arab Emirates",
      type: "Full-time",
      department: "Hospitality",
      salary: "$65,000 - $85,000",
      experience: "5+ years",
      description:
        "Oversee daily hotel operations and ensure exceptional guest experiences in a luxury hotel environment.",
      responsibilities: [
        "Manage front desk, housekeeping, and maintenance teams",
        "Implement quality standards and service protocols",
        "Handle guest complaints and special requests",
        "Monitor inventory and supply chain management",
      ],
      requirements: [
        "Bachelor's in Hospitality Management",
        "Proven experience in hotel operations",
        "Excellent leadership and communication skills",
      ],
      eligibleCountries: ["USA", "UK", "UAE", "India", "Philippines"],
      applyWithin: "14 days",
    },
    {
      id: 2,
      title: "UX/UI Product Designer",
      location: "Berlin, Germany",
      country: "Germany",
      type: "Full-time",
      department: "Design",
      salary: "€55,000 - €75,000",
      experience: "3+ years",
      description:
        "Create beautiful and intuitive user experiences for our digital products and platforms.",
      responsibilities: [
        "Design user interfaces and interactive prototypes",
        "Conduct user research and usability testing",
        "Collaborate with development teams",
        "Create design systems and maintain brand consistency",
      ],
      requirements: [
        "Portfolio showcasing UX/UI projects",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Understanding of responsive design principles",
      ],
      eligibleCountries: ["Germany", "EU Countries", "UK", "Canada"],
      applyWithin: "30 days",
    },
    {
      id: 3,
      title: "Tourism Marketing Specialist",
      location: "Bali, Indonesia",
      country: "Indonesia",
      type: "Full-time",
      department: "Tourism",
      salary: "$35,000 - $50,000",
      experience: "2+ years",
      description:
        "Develop and execute marketing strategies to promote tourism packages and travel experiences.",
      responsibilities: [
        "Create digital marketing campaigns for travel packages",
        "Manage social media and content creation",
        "Collaborate with travel agencies and partners",
        "Analyze market trends and customer feedback",
      ],
      requirements: [
        "Degree in Marketing or Tourism",
        "Experience in travel industry marketing",
        "Strong copywriting and SEO skills",
      ],
      eligibleCountries: [
        "Indonesia",
        "Malaysia",
        "Singapore",
        "Thailand",
        "Australia",
      ],
      applyWithin: "21 days",
    },
    {
      id: 4,
      title: "Retail Store Manager",
      location: "London, UK",
      country: "United Kingdom",
      type: "Full-time",
      department: "Retail",
      salary: "£40,000 - £55,000",
      experience: "4+ years",
      description:
        "Lead a high-performing retail team and drive sales in our flagship London store.",
      responsibilities: [
        "Manage daily store operations and staff scheduling",
        "Achieve sales targets and KPIs",
        "Train and develop retail team members",
        "Maintain visual merchandising standards",
      ],
      requirements: [
        "Proven retail management experience",
        "Strong leadership and customer service skills",
        "Inventory management knowledge",
      ],
      eligibleCountries: ["UK", "Ireland", "EU Countries"],
      applyWithin: "10 days",
    },
    {
      id: 5,
      title: "Production Supervisor",
      location: "Tokyo, Japan",
      country: "Japan",
      type: "Full-time",
      department: "Manufacturing",
      salary: "¥6,000,000 - ¥8,000,000",
      experience: "5+ years",
      description:
        "Oversee manufacturing operations and ensure production efficiency and quality control.",
      responsibilities: [
        "Supervise production line operations",
        "Implement quality control procedures",
        "Manage production schedules and deadlines",
        "Train and mentor production staff",
      ],
      requirements: [
        "Engineering or manufacturing background",
        "Experience in lean manufacturing",
        "Strong problem-solving skills",
      ],
      eligibleCountries: ["Japan", "South Korea", "Taiwan", "Singapore"],
      applyWithin: "20 days",
    },
    {
      id: 6,
      title: "Executive Chef",
      location: "Paris, France",
      country: "France",
      type: "Full-time",
      department: "Hospitality",
      salary: "€60,000 - €80,000",
      experience: "8+ years",
      description:
        "Lead kitchen operations and create exceptional culinary experiences in a Michelin-star restaurant.",
      responsibilities: [
        "Develop menus and culinary concepts",
        "Manage kitchen staff and operations",
        "Maintain food quality and safety standards",
        "Control food costs and inventory",
      ],
      requirements: [
        "Culinary degree or equivalent experience",
        "Extensive fine dining experience",
        "Leadership and creative culinary skills",
      ],
      eligibleCountries: ["France", "EU Countries", "Switzerland"],
      applyWithin: "15 days",
    },
  ];

  const getDepartmentColor = (department) => {
    const colors = {
      Hospitality: "bg-blue-100 text-blue-800 border-blue-200",
      Design: "bg-purple-100 text-purple-800 border-purple-200",
      Tourism: "bg-green-100 text-green-800 border-green-200",
      Retail: "bg-orange-100 text-orange-800 border-orange-200",
      Manufacturing: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[department] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getCountryFlag = (country) => {
    const flags = {
      "United Arab Emirates": "🇦🇪",
      Germany: "🇩🇪",
      Indonesia: "🇮🇩",
      "United Kingdom": "🇬🇧",
      Japan: "🇯🇵",
      France: "🇫🇷",
    };
    return flags[country] || "🌍";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
            Explore Career Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our diverse team across multiple industries. Find your perfect
            role in hospitality, design, tourism, retail, or manufacturing.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="px-6 py-3 bg-[#80C3FF] text-[#0A1F44] font-semibold rounded-full hover:bg-[#6ab0f0] transition-colors">
            All Departments
          </button>
          {["Hospitality", "Design", "Tourism", "Retail", "Manufacturing"].map(
            (dept) => (
              <button
                key={dept}
                className="px-6 py-3 bg-white text-[#0A1F44] border border-gray-300 font-semibold rounded-full hover:bg-[#80C3FF] hover:border-[#80C3FF] transition-colors"
              >
                {dept}
              </button>
            )
          )}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden flex flex-col h-full"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getDepartmentColor(
                      job.department
                    )}`}
                  >
                    {job.department}
                  </span>
                  <span className="text-sm text-gray-500">
                    {job.applyWithin} to apply
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                  {job.title}
                </h3>

                <div className="flex items-center text-gray-600 mb-3">
                  <span className="mr-2 text-lg">
                    {getCountryFlag(job.country)}
                  </span>
                  <span>{job.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                    {job.type}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                    {job.experience}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Salary */}
              <div className="px-6 py-3 bg-[#80C3FF]/10 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#0A1F44]">Salary:</span>
                  <span className="font-bold text-[#0A1F44]">{job.salary}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="p-6 border-b border-gray-100 flex-grow">
                <h4 className="font-semibold text-[#0A1F44] mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities
                    .slice(0, 3)
                    .map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="text-[#80C3FF] mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Eligible Countries */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-semibold text-[#0A1F44] mb-3">
                  Eligible Countries:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.eligibleCountries.slice(0, 3).map((country, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#0A1F44] text-white text-sm rounded-full"
                    >
                      {country}
                    </span>
                  ))}
                  {job.eligibleCountries.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      +{job.eligibleCountries.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Apply Button - Now at the bottom */}
              <div className="p-6 mt-auto">
                <button className="w-full bg-[#80C3FF] hover:bg-[#6ab0f0] text-[#0A1F44] font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSection;
