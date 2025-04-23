import React from 'react';

const ServiceCard = ({ title, description, icon, color, border, index }) => {
  return (
    <div className={`group relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border ${border} hover:border-transparent`}>
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${color}`}></div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color}`}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col p-8 bg-white/90 group-hover:bg-white/80 backdrop-blur-sm transition-all duration-500">
        {/* Icon with floating animation */}
        <div 
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-4xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 animate-float`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        </div>
        
        {/* Title with gradient text on hover */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-500">
            {title}
          </span>
        </h3>
        
        {/* Description with smooth appearance */}
        <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-all duration-500">
          {description}
        </p>
        
        {/* Learn more button with animated arrow */}
        <div className="mt-auto">
          <button className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-500 group/button">
            <span className="mr-2">Learn more</span>
            <svg 
              className="w-4 h-4 transition-transform duration-500 transform group-hover/button:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Add to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;