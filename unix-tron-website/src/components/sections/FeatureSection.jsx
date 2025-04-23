import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiUsers, FiTarget } from 'react-icons/fi';
import { FaConnectdevelop } from 'react-icons/fa';

const features = [
  {
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest tech stack to deliver superior performance and future-proof solutions.',
    icon: <FiCpu className="w-8 h-8" />,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Expert Team',
    description: 'Our team consists of industry veterans and top engineering talent with proven track records.',
    icon: <FiUsers className="w-8 h-8" />,
    color: 'from-purple-500 to-fuchsia-600'
  },
  {
    title: 'Client-Focused',
    description: 'Your success drives our process, with tailored solutions for your unique business needs.',
    icon: <FiTarget className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-600'
  },
];

const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Futuristic Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-95">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTAgMCBMMTAwIDEwMCBNMTAwIDAgTDAgMTAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2)_0,transparent_70%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <FaConnectdevelop className="text-indigo-400 text-3xl mr-3" />
            <span className="text-sm font-semibold tracking-wider text-indigo-300 uppercase">
              Our Advantages
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Unixtron</span>
          </h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We deliver exceptional value through innovation, expertise, and relentless focus on client success
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative h-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 group-hover:border-transparent group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className={`mb-6 w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-6 left-8 right-8 h-0.5 bg-gray-700 overflow-hidden">
                  <div className={`absolute inset-0 w-0 bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default FeatureSection;