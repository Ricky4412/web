import { AnimatedSection, AnimatedDiv } from '../common/AnimatedSection';

const features = [
  {
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest tech stack to deliver superior performance.',
    icon: '💻',
  },
  {
    title: 'Expert Team',
    description: 'Our team consists of industry veterans and top talent.',
    icon: '👨‍💻',
  },
  {
    title: 'Client-Focused',
    description: 'Your success is our top priority in every engagement.',
    icon: '🤝',
  },
];

const FeatureSection = () => {
  return (
    <AnimatedSection className="py-5 bg-slate-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center mb-12">
          <h2 className="text-2xl font-semibold">Why Choose Unixtron</h2>
          <p className="text-xl font-medium mt-4  max-w-2xl mx-auto">
            We deliver exceptional value through our unique approach
          </p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedDiv
              key={feature.title}
              delay={0.1 * index}
              className="bg-unix-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeatureSection;