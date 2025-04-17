import React from 'react';
import ServiceCard from '../components/common/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions engineered to optimize your business operations and drive growth.",
      icon: "💻",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Web Design & Development",
      description: "Responsive, user-centric websites that enhance engagement and convert visitors to customers.",
      icon: "🌐",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Office Supplies & Accessories",
      description: "Comprehensive supply of high-quality office accessories and productivity tools.",
      icon: "🖨️",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Hardware Repair & Maintenance",
      description: "Expert diagnostics and repair services to keep your systems running at peak performance.",
      icon: "🔧",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Web Content Management",
      description: "Strategic content solutions to maintain dynamic, relevant, and SEO-optimized digital presence.",
      icon: "📝",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Cybersecurity Services",
      description: "End-to-end protection for your digital assets with enterprise-grade security solutions.",
      icon: "🛡️",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Network Infrastructure",
      description: "Design, installation, and optimization of secure, high-performance business networks.",
      icon: "📶",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "System Configuration",
      description: "Precision setup and tuning of hardware/software systems for maximum efficiency.",
      icon: "⚙️",
      color: "from-gray-500 to-gray-600"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud architectures and migration services to transform your business operations.",
      icon: "☁️",
      color: "from-sky-500 to-sky-600"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600 opacity-5 -rotate-1 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-emerald-400 to-blue-500 opacity-5 rotate-1 translate-y-16"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-4 bg-blue-100 text-blue-600 rounded-full text-lg font-semibold mb-4 shadow-sm">
            Our Services
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-blue-600">Technology Solutions</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end IT solutions designed to streamline operations, enhance security, and accelerate your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team specializes in custom solutions tailored to your unique business needs.
          </p>
          <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Request Custom Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;