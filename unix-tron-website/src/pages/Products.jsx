import { AnimatedSection, AnimatedDiv } from '../components/common/AnimatedSection';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Unixtron EduCore",
      category: "Education Management",
      description: "Comprehensive school administration platform that automates all academic operations from enrollment to graduation.",
      features: [
        "Student enrollment & attendance tracking",
        "Exam management & automated report cards",
        "Timetable & curriculum planning",
        "Fee collection & parent portal",
        "Integrated e-learning modules"
      ],
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      status: "Available Now",
      link: "/products/educore"
    },
    {
      id: 2,
      name: "Unixtron Hostify",
      category: "Hospitality Management",
      description: "End-to-end hotel management solution that streamlines operations from reservations to guest services.",
      features: [
        "Room booking & availability management",
        "Automated check-in/out systems",
        "Guest CRM & loyalty programs",
        "Multi-channel distribution",
        "Housekeeping optimization"
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      status: "Available Now",
      link: "/products/hostify"
    },
    {
      id: 3,
      name: "Unixtron RealSpace",
      category: "Real Estate Management",
      description: "Complete property management platform for brokers, agents, and property managers.",
      features: [
        "360° property listings & virtual tours",
        "Lease & contract automation",
        "Tenant screening & payment processing",
        "Maintenance request tracking",
        "Portfolio performance analytics"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      status: "Available Now",
      link: "/products/realspace"
    },
    {
      id: 4,
      name: "Unixtron LogistiCore",
      category: "Logistics Management",
      description: "Advanced logistics optimization platform with real-time tracking and route intelligence.",
      features: [
        "Fleet tracking with GPS integration",
        "AI-powered route optimization",
        "Automated dispatch & scheduling",
        "Warehouse management tools",
        "Fuel & cost efficiency analytics"
      ],
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      status: "Available Now",
      link: "/products/logisticore"
    },
    {
      id: 5,
      name: "Unixtron MediFlow",
      category: "Healthcare Management",
      description: "Integrated hospital management system connecting patients, providers, and administrators.",
      features: [
        "Electronic Health Records (EHR)",
        "Appointment scheduling system",
        "Pharmacy inventory management",
        "Lab diagnostics integration",
        "Telemedicine capabilities"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      status: "Available Now",
      link: "/products/mediflow"
    },
    {
      id: 6,
      name: "Unixtron RetailSync",
      category: "Retail Management",
      description: "Omnichannel retail platform unifying physical and digital commerce operations.",
      features: [
        "Unified POS & inventory management",
        "Customer loyalty program tools",
        "Omnichannel order fulfillment",
        "AI-powered sales analytics",
        "Integrated payment processing"
      ],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      status: "Available Now",
      link: "/products/retailsync"
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedDiv delay={0.1}>
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold tracking-wide mb-4 backdrop-blur-sm">
              INDUSTRY-SPECIFIC SOLUTIONS
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
                Unixtron Enterprise Softwares
              </span>
            </h1>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full opacity-80"></div>
          </AnimatedDiv>
          <AnimatedDiv delay={0.4}>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transformative digital solutions designed for specific industry verticals with proven results.
            </p>
          </AnimatedDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedDiv 
              key={product.id}
              delay={0.2 + index * 0.1}
              className="group bg-white/5 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm hover:border-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    product.status.includes('Coming') 
                      ? 'bg-purple-600/90 text-purple-100' 
                      : 'bg-green-600/90 text-green-100'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-3 py-1 bg-blue-600/90 text-white text-xs font-semibold rounded-full mb-2 backdrop-blur-sm">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">CORE FEATURES</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={product.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
                >
                  View Product Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        <AnimatedDiv delay={0.6} className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Need a customized solution for your specific business needs?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Request Custom Solution
          </a>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
};

export default Products;