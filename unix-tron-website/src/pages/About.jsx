import TeamSection from '../components/sections/TeamSection';
import ValuesSection from '../components/sections/ValuesSection';

const About = () => {
  return (
    <div className="space-y-10">
      <section className="py-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Powering Digital Transformation</h1>
          <p className="text-xl md:text-2xl text-center max-w-5xl mx-auto leading-relaxed">
            Unixtron Africa is a full-spectrum technology partner established in 2023, delivering enterprise-grade solutions that bridge innovation with practical business applications. We combine technical excellence with deep industry knowledge to drive measurable results for our clients.
          </p>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Client Retention</div>
            </div>
            <div className="text-center p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="text-center p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Technology Partners</div>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <TeamSection />
    </div>
  );
};

export default About;