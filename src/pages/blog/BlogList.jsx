import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Recruitment: 5 Trends Shaping 2025",
      subtitle:
        "From AI-powered screening to virtual reality interviews - how technology is revolutionizing talent acquisition while preserving human connection",
      slug: "future-of-recruitment-5-trends-2025-ai-virtual-reality-interviews",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      date: "2025-06-15",
      tags: [
        "recruitment",
        "HR tech",
        "future of work",
        "AI hiring",
        "virtual recruitment",
      ],
    },
    {
      id: 2,
      title: "ICT Talent Shortage: Strategies for Tech Hiring",
      subtitle:
        "7 proven solutions to attract and retain top developers in today's competitive market including upskilling programs and innovative compensation models",
      slug: "ict-talent-shortage-strategies-tech-hiring-attract-retain-developers",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      date: "2025-07-22",
      tags: [
        "ICT",
        "tech recruitment",
        "software developers",
        "talent gap",
        "IT staffing solutions",
      ],
    },
    {
      id: 3,
      title: "Commercial Real Estate Trends Post-Pandemic",
      subtitle:
        "How hybrid work models and the flight-to-quality movement are reshaping office space demand and investment opportunities in 2025",
      slug: "commercial-real-estate-trends-post-pandemic-hybrid-work-office-space",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      date: "2025-05-10",
      tags: [
        "real estate",
        "commercial property",
        "workplace evolution",
        "office trends",
        "property investment",
      ],
    },
    {
      id: 4,
      title: "Rebuilding Hospitality Workforces After Crisis",
      subtitle:
        "Innovative staffing solutions for hotels and restaurants - from cross-training programs to reimagined employee benefits packages",
      slug: "rebuilding-hospitality-workforces-staffing-solutions-hotels-restaurants",
      image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae",
      date: "2025-08-05",
      tags: [
        "hospitality",
        "staffing",
        "tourism",
        "hotel recruitment",
        "restaurant HR",
      ],
    },
    {
      id: 5,
      title: "Content Creation in the Age of AI Media",
      subtitle:
        "How media professionals are balancing human creativity with AI tools to enhance storytelling while maintaining authenticity and brand voice",
      slug: "content-creation-age-ai-media-balancing-creativity-automation",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093",
      date: "2025-04-18",
      tags: [
        "media",
        "content creation",
        "AI tools",
        "digital storytelling",
        "journalism innovation",
      ],
    },
    {
      id: 6,
      title: "Design Thinking for Business Growth",
      subtitle:
        "Transforming operations across HR, internal tools and physical workspaces through user-centered design principles and methodologies",
      slug: "design-thinking-business-growth-transforming-operations-ux-methods",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
      date: "2025-09-12",
      tags: [
        "design",
        "UX",
        "business strategy",
        "innovation",
        "process improvement",
      ],
    },
    {
      id: 7,
      title: "Supply Chain Resilience in Manufacturing",
      subtitle:
        "Key lessons from recent global disruptions and how leading manufacturers are building more agile, responsive supply networks",
      slug: "supply-chain-resilience-manufacturing-lessons-global-disruptions",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      date: "2025-07-30",
      tags: [
        "manufacturing",
        "logistics",
        "supply chain",
        "operations",
        "risk management",
      ],
    },
    {
      id: 8,
      title: "EdTech Revolution: Changing How We Learn",
      subtitle:
        "The future of education and corporate training - from personalized learning platforms to immersive VR classrooms and skills-based microcredentials",
      slug: "edtech-revolution-changing-education-corporate-training-vr-microcredentials",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      date: "2025-06-28",
      tags: [
        "education",
        "edtech",
        "training",
        "digital learning",
        "workforce development",
      ],
    },
    {
      id: 9,
      title: "Sustainable Tourism in 2025",
      subtitle:
        "How destinations and travel companies are balancing visitor growth with environmental responsibility through regenerative tourism practices",
      slug: "sustainable-tourism-2025-balancing-growth-environmental-responsibility",
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995",
      date: "2025-08-19",
      tags: [
        "tourism",
        "sustainability",
        "travel",
        "eco-tourism",
        "destination management",
      ],
    },
    {
      id: 10,
      title: "Funding Options for SMEs and Startups",
      subtitle:
        "A comprehensive guide to navigating venture capital, government grants, angel investors and alternative financing solutions in 2025",
      slug: "funding-options-smes-startups-venture-capital-grants-alternative-financing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      date: "2025-05-03",
      tags: [
        "SMEs",
        "entrepreneurs",
        "funding",
        "startup financing",
        "business grants",
      ],
    },
    {
      id: 11,
      title: "Biotech Breakthroughs and Talent Needs",
      subtitle:
        "How the genomics revolution and personalized medicine are creating unprecedented demand for specialized scientific talent in 2025",
      slug: "biotech-breakthroughs-talent-needs-genomics-personalized-medicine-hiring",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      date: "2025-09-01",
      tags: [
        "biotech",
        "scientific recruitment",
        "pharma talent",
        "genomics",
        "medical research",
      ],
    },
    {
      id: 12,
      title: "Omnichannel Retail Staffing Strategies",
      subtitle:
        "Building seamless customer experiences requires integrated teams - here's how leading retailers are structuring their physical and digital store workforces",
      slug: "omnichannel-retail-staffing-strategies-physical-digital-workforce-integration",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
      date: "2025-04-22",
      tags: [
        "retail",
        "ecommerce",
        "store staffing",
        "customer experience",
        "workforce planning",
      ],
    },
    {
      id: 13,
      title: "Hybrid Work Models: HR Challenges",
      subtitle:
        "Managing distributed teams effectively - proven frameworks for maintaining culture, collaboration and productivity in flexible work environments",
      slug: "hybrid-work-models-hr-challenges-managing-distributed-teams-frameworks",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      date: "2025-07-14",
      tags: [
        "remote work",
        "HR strategy",
        "team management",
        "workplace flexibility",
        "employee engagement",
      ],
    },
    {
      id: 14,
      title: "Upskilling Your Workforce for Digital Transformation",
      subtitle:
        "A step-by-step guide to identifying critical skill gaps and implementing effective training programs for AI, data literacy and automation tools",
      slug: "upskilling-workforce-digital-transformation-ai-data-literacy-training",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      date: "2025-08-09",
      tags: [
        "digital skills",
        "workforce development",
        "reskilling",
        "future skills",
        "corporate training",
      ],
    },
    {
      id: 15,
      title: "Diversity in Tech Recruitment",
      subtitle:
        "Actionable strategies for building inclusive engineering teams - from eliminating bias in hiring to creating equitable career progression pathways",
      slug: "diversity-tech-recruitment-inclusive-engineering-teams-bias-free-hiring",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
      date: "2025-06-02",
      tags: [
        "DEI",
        "tech hiring",
        "inclusive workplaces",
        "engineering talent",
        "workplace equity",
      ],
    },
    {
      id: 16,
      title: "Commercial Property Management Trends",
      subtitle:
        "How smart building technologies and tenant experience innovations are redefining office space value in the post-pandemic era",
      slug: "commercial-property-management-trends-smart-buildings-tenant-experience",
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128",
      date: "2025-05-17",
      tags: [
        "proptech",
        "facility management",
        "office innovation",
        "building automation",
        "CRE trends",
      ],
    },
    {
      id: 17,
      title: "The Psychology of Hospitality Design",
      subtitle:
        "Evidence-based approaches to creating spaces that enhance guest experience through lighting, layout and sensory design principles",
      slug: "psychology-hospitality-design-guest-experience-lighting-sensory-principles",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      date: "2025-09-08",
      tags: [
        "interior design",
        "hotel psychology",
        "space planning",
        "sensory marketing",
        "experience design",
      ],
    },
    {
      id: 18,
      title: "Data Storytelling for Media Professionals",
      subtitle:
        "Transforming complex analytics into compelling narratives - tools and techniques for journalists and content creators in the age of information overload",
      slug: "data-storytelling-media-professionals-analytics-narratives-journalism-tools",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      date: "2025-07-19",
      tags: [
        "data journalism",
        "content strategy",
        "visual storytelling",
        "media analytics",
        "information design",
      ],
    },
    {
      id: 19,
      title: "Lean Manufacturing in Small Businesses",
      subtitle:
        "Practical adaptations of industrial efficiency principles for SMEs - cost-effective ways to reduce waste and improve production flow",
      slug: "lean-manufacturing-small-businesses-smes-waste-reduction-production-flow",
      image: "https://images.unsplash.com/photo-1581093450023-4c5d8a1d6d9b",
      date: "2025-08-28",
      tags: [
        "process improvement",
        "operational efficiency",
        "SME manufacturing",
        "kaizen",
        "production optimization",
      ],
    },
    {
      id: 20,
      title: "The Science of Learning: Training Methods That Work",
      subtitle:
        "Neuroscience-backed approaches to workforce development - how spacing, interleaving and retrieval practice dramatically improve training outcomes",
      slug: "science-learning-training-methods-neuroscience-workforce-development",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      date: "2025-04-30",
      tags: [
        "learning science",
        "corporate training",
        "adult education",
        "cognitive psychology",
        "skills acquisition",
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-amber-100">
      <div className="relative flex w-full h-full justify-center items-center">
        {blogs.map((blog, idx) => {
          const offset = (idx - activeIndex + blogs.length) % blogs.length;

          let className =
            "absolute transition-all duration-700 ease-in-out rounded-xl shadow-lg overflow-hidden";
          let style = {};

          if (offset === 0) {
            className += " w-[60%] h-[80%] z-20";
            style = { transform: "translateX(0) scale(1)" };
          } else if (offset === 1) {
            className += " w-[40%] h-[65%] z-10";
            style = { transform: "translateX(70%) scale(0.9)" };
          } else if (offset === blogs.length - 1) {
            className += " w-[40%] h-[65%] z-10";
            style = { transform: "translateX(-70%) scale(0.9)" };
          } else {
            className += " opacity-0 pointer-events-none";
          }

          return (
            <div
              key={idx}
              className={className}
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...style,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {offset === 0 && (
                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <h2 className="text-3xl font-bold">{blog.title}</h2>
                  <p className="mt-3">{blog.subtitle}</p>
                  <button className="mt-4 px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                    Read More
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 hover:bg-white/50 rounded-full"
      >
        <FaArrowLeft className="text-black" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 hover:bg-white/50 rounded-full"
      >
        <FaArrowRight className="text-black" />
      </button>
    </div>
  );
};

export default BlogList;
