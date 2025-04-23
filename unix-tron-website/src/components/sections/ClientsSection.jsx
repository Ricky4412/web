import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ClientsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { name: "GiZ German Corporation", logo: "/assets/giz.png" },
    { name: "CTVET", logo: "/assets/ctvet.jpeg" },
    { name: "Erata Group", logo: "/assets/erata.jpeg" },
    { name: "Porchester Executive", logo: "/assets/porchester.png" },
    { name: "Sikabour Fertilizer Hub", logo: "/assets/sikabour.jpeg" },
    { name: "Edemtech Ghana", logo: "/assets/education.png" },
    { name: "Netflix", logo: "/assets/netflix.png" },
    { name: "Tesla", logo: "/assets/tesla.png" }
  ];

  const techPartners = [
    { logo: "/assets/microsoft.png", name: "Microsoft" },
    { logo: "/assets/cisco.png", name: "Cisco" },
    { logo: "/assets/aws.png", name: "AWS" },
    { logo: "/assets/oracle.png", name: "Oracle" },
    { logo: "/assets/google-cloud.png", name: "Google Cloud" },
    { logo: "/assets/ibm.png", name: "IBM" }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Futuristic Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTAgMCBMMTAwIDEwMCBNMTAwIDAgTDAgMTAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Global Innovators</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Partnering with visionary organizations to build transformative digital solutions
          </p>
        </motion.div>

        {/* Client Logo Carousel */}
        <div className="relative mb-20 group">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 py-4 px-2"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-32 bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center p-6 hover:bg-white/10 hover:border-blue-400 transition-all duration-300">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.innerHTML = `
                        <div class="text-white font-bold text-lg text-center">
                          ${client.name}
                        </div>`;
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
              aria-label="Scroll right"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Technology Partners Section */}
        <div className="text-center">
          <motion.h3 
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1,
                transition: { delay: 0.4, duration: 0.6 }
              }
            }}
          >
            Technology Alliances
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.6,
                  duration: 0.6,
                  staggerChildren: 0.1,
                  when: "beforeChildren"
                }
              }
            }}
          >
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-4 h-24 flex items-center justify-center hover:shadow-lg transition-all"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-[120px] max-h-16 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = `
                      <div class="text-gray-700 font-medium text-sm">
                        ${partner.name}
                      </div>`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default ClientsSection;