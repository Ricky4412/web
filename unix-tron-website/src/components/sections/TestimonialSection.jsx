import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Unixtron transformed our business operations with their innovative software solutions. Their team delivered beyond our expectations with cutting-edge technology.",
    name: "Foster Osei Kwabena",
    role: "CEO, All-Green-Solutions LTD",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    quote: "The team at Unixtron delivered our project on time and exceeded our expectations. Their technical expertise and professionalism are unmatched in the industry.",
    name: "Seth Anum Mensah",
    role: "CTO, Nextforce Technologies",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5
  },
  {
    quote: "Their cloud computing solutions helped us scale our infrastructure seamlessly while reducing costs. We've seen a 300% improvement in system performance.",
    name: "Marilyn Williams",
    role: "Director of IT, GlobalSystems",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Techy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-95">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-300 bg-blue-900/30 rounded-full mb-4 backdrop-blur-sm">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-200">
              Trusted by Industry Leaders
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm"
            >
              {/* Card gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent p-px rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </div>

              <div className="relative h-full p-8 bg-gray-900/50 group-hover:bg-gray-900/70 transition-all duration-500 rounded-2xl">
                {/* Quote icons */}
                <FaQuoteLeft className="text-blue-400/20 text-5xl absolute top-4 left-4" />
                <FaQuoteRight className="text-purple-400/20 text-5xl absolute bottom-4 right-4" />

                <div className="relative z-10">
                  <StarRating rating={testimonial.rating} />
                  
                  <p className="text-gray-300 group-hover:text-white mb-6 text-lg leading-relaxed transition-colors duration-500">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover border-2 border-blue-400/30 group-hover:border-blue-400/70 transition-all duration-500"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-gray-900">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-500">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust UnixTron for their technology solutions.
          </p>
          <button className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:from-blue-500 hover:to-purple-500">
            <span className="relative z-10 flex items-center">
              View All Testimonials
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        .animate-float { animation: float 12s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 14s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default TestimonialSection;