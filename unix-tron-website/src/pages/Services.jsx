import React from 'react';
import ServiceCard from '../components/common/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions engineered to optimize your business operations and drive growth.",
      icon: "💻",
      color: "from-blue-500 via-blue-400 to-blue-600",
      border: "border-blue-500/20"
    },
    {
      title: "Web Design & Development",
      description: "Responsive, user-centric websites that enhance engagement and convert visitors to customers.",
      icon: "🌐",
      color: "from-purple-500 via-purple-400 to-purple-600",
      border: "border-purple-500/20"
    },
    {
      title: "Office Supplies & Accessories",
      description: "Comprehensive supply of high-quality office accessories and productivity tools.",
      icon: "🖨️",
      color: "from-amber-500 via-amber-400 to-amber-600",
      border: "border-amber-500/20"
    },
    {
      title: "Hardware Repair & Maintenance",
      description: "Expert diagnostics and repair services to keep your systems running at peak performance.",
      icon: "🔧",
      color: "from-emerald-500 via-emerald-400 to-emerald-600",
      border: "border-emerald-500/20"
    },
    {
      title: "Web Content Management",
      description: "Strategic content solutions to maintain dynamic, relevant, and SEO-optimized digital presence.",
      icon: "📝",
      color: "from-pink-500 via-pink-400 to-pink-600",
      border: "border-pink-500/20"
    },
    {
      title: "Cybersecurity Services",
      description: "End-to-end protection for your digital assets with enterprise-grade security solutions.",
      icon: "🛡️",
      color: "from-red-500 via-red-400 to-red-600",
      border: "border-red-500/20"
    },
    {
      title: "Network Infrastructure",
      description: "Design, installation, and optimization of secure, high-performance business networks.",
      icon: "📶",
      color: "from-indigo-500 via-indigo-400 to-indigo-600",
      border: "border-indigo-500/20"
    },
    {
      title: "System Configuration",
      description: "Precision setup and tuning of hardware/software systems for maximum efficiency.",
      icon: "⚙️",
      color: "from-gray-500 via-gray-400 to-gray-600",
      border: "border-gray-500/20"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud architectures and migration services to transform your business operations.",
      icon: "☁️",
      color: "from-sky-500 via-sky-400 to-sky-600",
      border: "border-sky-500/20"
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent rounded-full animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent rounded-full animate-float-reverse"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            Our Services
          </span>
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
              Comprehensive Technology Solutions
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full opacity-80"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              border={service.border}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Can't find what you're looking for? Our team specializes in custom solutions tailored to your unique business needs.
          </p>
          <a href='contact'>
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-4 px-10 rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-1">
            <span className="relative z-10">Request Custom Solution</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-300 group-hover:bg-blue-200 transition-all duration-300"></span>
          </button>
          </a>
        </div>
      </div>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        .animate-pulse-slow { animation: pulse-slow 15s ease-in-out infinite; }
        .animate-float { animation: float 12s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 14s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Services;