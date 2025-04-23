import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      title: "Client-Centric Approach",
      description: "We listen first, then innovate. Every solution begins with understanding your unique business challenges.",
      icon: "🤝",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Technical Excellence",
      description: "Relentless pursuit of cutting-edge solutions implemented with precision and best practices.",
      icon: "🏆",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Integrity & Transparency",
      description: "Open communication and ethical practices form the foundation of all our engagements.",
      icon: "🔍",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Collaborative Innovation",
      description: "We believe the best solutions emerge from cross-functional teamwork and knowledge sharing.",
      icon: "🧩",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Results-Driven",
      description: "We measure success by the tangible business impact we deliver to our clients.",
      icon: "📈",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of constant improvement to stay ahead in a rapidly evolving industry.",
      icon: "🎯",
      gradient: "from-indigo-500 to-indigo-600"
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Techy background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJyZ2JhKDEwMiwxMjYsMjM0LDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-semibold tracking-wider mb-6">
            OUR VALUES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Foundation of Our Excellence
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The core principles that guide every decision and innovation at Unixtron Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient}`}></div>
              
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-3xl text-white mb-6 transition-transform duration-300 group-hover:rotate-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-gray-200 to-gray-300 group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${value.gradient} transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;