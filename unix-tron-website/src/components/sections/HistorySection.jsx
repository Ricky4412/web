const HistorySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-500 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-16 md:space-y-0">
            {/* Foundation */}
            <div className="relative md:flex justify-between items-center">
              <div className="md:w-5/12 md:pr-8 mb-8 md:mb-0 text-right">
                <h3 className="text-xl font-semibold text-blue-700">Company Foundation</h3>
                <p className="text-gray-600">Q1 2023</p>
                <p className="mt-2">Established with a vision to deliver integrated technology solutions across multiple industries.</p>
              </div>
              <div className="hidden md:block w-2/12 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>
              <div className="md:w-5/12"></div>
            </div>

            {/* First Major Client */}
            <div className="relative md:flex justify-between items-center">
              <div className="md:w-5/12"></div>
              <div className="hidden md:block w-2/12 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>
              <div className="md:w-5/12 md:pl-8">
                <h3 className="text-xl font-semibold text-blue-700">Strategic Partnership with GIZ</h3>
                <p className="text-gray-600">Q3 2023</p>
                <p className="mt-2">Implemented digital transformation solutions for GIZ's technical education programs across Ghana.</p>
              </div>
            </div>

            {/* Service Expansion */}
            <div className="relative md:flex justify-between items-center">
              <div className="md:w-5/12 md:pr-8 mb-8 md:mb-0 text-right">
                <h3 className="text-xl font-semibold text-blue-700">CTVET Infrastructure Project</h3>
                <p className="text-gray-600">Q1 2024</p>
                <p className="mt-2">Deployed nationwide network infrastructure and learning management systems for 50+ technical institutes.</p>
              </div>
              <div className="hidden md:block w-2/12 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>
              <div className="md:w-5/12"></div>
            </div>

            {/* Hospitality Sector */}
            <div className="relative md:flex justify-between items-center">
              <div className="md:w-5/12"></div>
              <div className="hidden md:block w-2/12 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>
              <div className="md:w-5/12 md:pl-8">
                <h3 className="text-xl font-semibold text-blue-700">Erata Hotel Digital Upgrade</h3>
                <p className="text-gray-600">Q2 2024</p>
                <p className="mt-2">Complete property management system overhaul and guest experience digital transformation.</p>
              </div>
            </div>

            {/* Current */}
            <div className="relative md:flex justify-between items-center">
              <div className="md:w-5/12 md:pr-8 mb-8 md:mb-0 text-right">
                <h3 className="text-xl font-semibold text-blue-700">Enterprise Solutions Provider</h3>
                <p className="text-gray-600">Present</p>
                <p className="mt-2">Trusted technology partner for government agencies, educational institutions, and hospitality businesses.</p>
              </div>
              <div className="hidden md:block w-2/12 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>
              <div className="md:w-5/12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HistorySection;