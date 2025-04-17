import React from 'react';

const ServiceCard = ({ title, description, icon, color }) => {
  return (
    <div className="group relative h-full bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 hover:border-transparent">
      {/* Gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`}></div>
      
      <div className="p-6">
        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white text-3xl mb-6 shadow-md`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="mt-6">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-300">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;