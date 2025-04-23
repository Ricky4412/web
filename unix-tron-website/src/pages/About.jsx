import TeamSection from '../components/sections/TeamSection';
import ValuesSection from '../components/sections/ValuesSection';

const About = () => {
  return (
    <div className="space-y-0">
      <section className="relative py-20 overflow-hidden">
        {/* Techy Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-95"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
                Powering Digital Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed">
              Unixtron Africa is a full-spectrum technology partner established in 2023, delivering enterprise-grade solutions that bridge innovation with practical business applications.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Retention" },
              { value: "24/7", label: "Support Available" },
              { value: "15+", label: "Technology Partners" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105"
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValuesSection />
      <TeamSection />
    </div>
  );
};

export default About;