import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "UnixTron transformed our business operations with their innovative software solutions.",
    name: "Foster Osei Kwabena",
    role: "CEO, All-Green-Solutions LTD",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote: "The team at UnixTron delivered our project on time and exceeded our expectations.",
    name: "Seth Anum Mensah",
    role: "CTO, Nextforce Technologies",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote: "Their expertise in cloud computing helped us scale our infrastructure seamlessly.",
    name: "Marilyn Williams",
    role: "Director of IT, GlobalSystems",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-unix-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-unix-primary"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;