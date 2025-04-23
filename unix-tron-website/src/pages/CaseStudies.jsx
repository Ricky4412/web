import { AnimatedSection, AnimatedDiv } from '../components/common/AnimatedSection';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Cloud Migration for Financial Services',
      excerpt: 'How we helped a major bank transition to a secure cloud infrastructure.',
      outcome: 'Reduced costs by 40% and improved system reliability.',
      logo: '🏦',
      industry: 'Financial Services',
    },
    {
      id: 2,
      title: 'AI-Powered Customer Support',
      excerpt: 'Implementing machine learning to transform customer service operations.',
      outcome: 'Increased customer satisfaction by 35% while reducing support costs.',
      logo: '🤖',
      industry: 'E-commerce',
    },
    {
      id: 3,
      title: 'Legacy System Modernization',
      excerpt: 'Revitalizing outdated systems for a government agency.',
      outcome: 'Improved processing times from days to minutes.',
      logo: '🔄',
      industry: 'Government',
    },
  ];

  return (
    <div>
      <AnimatedSection className="bg-gradient-to-r from-unix-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedDiv delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore how we've helped clients solve complex challenges with technology
            </p>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-unix-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedDiv
                key={study.id}
                delay={0.1 * index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">{study.logo}</div>
                  <div className="text-sm text-unix-primary font-semibold mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.excerpt}</p>
                  <div className="bg-unix-light p-4 rounded-md">
                    <h4 className="font-semibold text-sm mb-1">Key Outcome:</h4>
                    <p className="text-sm">{study.outcome}</p>
                  </div>
                  <button className="mt-6 text-unix-primary font-medium hover:underline">
                    Read Full Case Study →
                  </button>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CaseStudies;