import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      title: "Client-Centric Approach",
      description: "We listen first, then innovate. Every solution begins with understanding your unique business challenges.",
      icon: "🤝",
      color: "bg-blue-50"
    },
    {
      title: "Technical Excellence",
      description: "Relentless pursuit of cutting-edge solutions implemented with precision and best practices.",
      icon: "🏆",
      color: "bg-purple-50"
    },
    {
      title: "Integrity & Transparency",
      description: "Open communication and ethical practices form the foundation of all our engagements.",
      icon: "🔍",
      color: "bg-emerald-50"
    },
    {
      title: "Collaborative Innovation",
      description: "We believe the best solutions emerge from cross-functional teamwork and knowledge sharing.",
      icon: "🧩",
      color: "bg-amber-50"
    },
    {
      title: "Results-Driven",
      description: "We measure success by the tangible business impact we deliver to our clients.",
      icon: "📈",
      color: "bg-red-50"
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of constant improvement to stay ahead in a rapidly evolving industry.",
      icon: "🎯",
      color: "bg-indigo-50"
    },
  ];

  return (
    <section className="py-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-4 bg-blue-100 text-blue-600 rounded-full text-lg font-semibold -mb-3">
            Our Values
          </span>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-unix-neutral max-w-3xl mx-auto -mb-4">
            The foundation of everything we do at Unixtron Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`${value.color} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
            >
              <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center text-3xl mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {value.description}
              </p>
              <div className="mt-6">
                <div className="w-12 h-1 bg-blue-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;