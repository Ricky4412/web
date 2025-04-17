const StatsSection = () => {
    return (
      <section className="py-20 bg-unix-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support' },
              { number: '50+', label: 'Projects Completed' },
              { number: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;