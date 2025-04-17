import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "GiZ German Corporation",
      logo: "/assets/giz.png",
      category: "International Development",
      testimonial: "UnixTron's solutions transformed our vocational training programs across 50+ centers with scalable technology infrastructure."
    },
    {
      name: "CTVET",
      logo: "/assets/ctvet.jpeg",
      category: "Education",
      testimonial: "Reliable systems supporting 15,000+ students daily with 99.9% uptime across our technical institutes."
    },
    {
      name: "Erata Group",
      logo: "/assets/erata.jpeg",
      category: "Hospitality & Automotive",
      testimonial: "Integrated solutions that improved operational efficiency by 40% across our hotel and automotive divisions."
    },
    {
      name: "Porchester Executive",
      logo: "/assets/porchester.png",
      category: "Corporate Services",
      testimonial: "Custom workflow automation reduced our administrative processing time by 65%."
    },
    {
      name: "Sikabour Fertilizer Hub",
      logo: "/assets/sikabour.jpeg",
      category: "Agriculture",
      testimonial: "Real-time tracking system increased our distribution efficiency by 30% during peak seasons."
    },
    {
      name: "Edemtech Ghana",
      logo: "/assets/education.png",
      category: "Technology",
      testimonial: "Scalable solutions that met our nationwide implementation requirements with zero downtime."
    }
  ];

  // Updated industry partners with brand color information
  const industryPartners = [
    { logo: "/assets/microsoft.png", bgColor: "bg-white" },
    { logo: "/assets/cisco.png", bgColor: "bg-white" },
    { logo: "/assets/aws.png", bgColor: "bg-white" },
    { logo: "/assets/oracle.png", bgColor: "bg-white" },
    { logo: "/assets/google-cloud.png", bgColor: "bg-white" },
    { logo: "/assets/ibm.png", bgColor: "bg-white" }
  ];

  return (
    <section 
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/clientBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Trusted By Industry Leaders</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Partnering with organizations to deliver transformative technology solutions
          </p>
        </div>

        {/* Client Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all shadow-lg">
              All Industries
            </button>
            <button className="px-5 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full text-sm font-medium transition-all backdrop-blur-sm">
              Technology
            </button>
            <button className="px-5 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full text-sm font-medium transition-all backdrop-blur-sm">
              Hospitality
            </button>
            <button className="px-5 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full text-sm font-medium transition-all backdrop-blur-sm">
              Agriculture
            </button>
            <button className="px-5 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full text-sm font-medium transition-all backdrop-blur-sm">
              Corporate
            </button>
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-gray-200 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-[1.02]"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-white p-2 rounded-lg shadow-md flex items-center justify-center mr-4">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.innerHTML = `
                        <div class="text-blue-600 font-bold text-lg">
                          ${client.name.split(' ').map(word => word[0]).join('')}
                        </div>`;
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{client.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mt-1">
                    {client.category}
                  </span>
                </div>
              </div>
              
              <blockquote className="pl-4 border-l-4 border-blue-500 text-gray-700 italic relative">
                <svg className="absolute -top-3 -left-3 w-6 h-6 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="relative z-10">"{client.testimonial}"</p>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Technology Partners - Updated Section */}
        <div className="text-center bg-white py-8 rounded-xl border border-gray-200 shadow-sm -mt-6 -mb-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology Alliances</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
            {industryPartners.map((partner, index) => (
              <div 
                key={index} 
                className={`${partner.bgColor} p-3 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105`}
                style={{ minWidth: '120px', height: '60px' }}
              >
                <img 
                  src={partner.logo} 
                  alt={`Technology Partner ${index + 1}`} 
                  className="max-h-12 max-w-[150px] object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.parentElement.innerHTML = `<div class="text-gray-400 font-medium">Partner ${index + 1}</div>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;