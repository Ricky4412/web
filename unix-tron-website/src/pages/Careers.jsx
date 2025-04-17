import { useState, useEffect } from 'react';
import { AnimatedSection, AnimatedDiv } from '../components/common/AnimatedSection';
import Button from '../components/common/Button';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, you would fetch from your API
  useEffect(() => {
    const fetchJobs = async () => {
      // Simulate API call
      setTimeout(() => {
        setJobs([
          {
            id: 1,
            title: 'Senior Frontend Developer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Engineering',
            description: 'We are looking for an experienced React developer to join our team.',
          },
          {
            id: 2,
            title: 'UX/UI Designer',
            type: 'Full-time',
            location: 'San Francisco, CA',
            department: 'Design',
            description: 'Help us create beautiful and intuitive user experiences.',
          },
          {
            id: 3,
            title: 'DevOps Engineer',
            type: 'Contract',
            location: 'Remote',
            department: 'Engineering',
            description: 'Build and maintain our cloud infrastructure.',
          },
        ]);
        setLoading(false);
      }, 500);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <AnimatedSection className="bg-gradient-to-r from-unix-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedDiv delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Help us build the future of technology at UnixTron
            </p>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-unix-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center mb-12">
            <h2 className="text-3xl font-bold">Current Openings</h2>
            <p className="text-xl mt-4 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team
            </p>
          </AnimatedDiv>

          {loading ? (
            <div className="text-center py-12">Loading job listings...</div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <AnimatedDiv
                  key={job.id}
                  delay={0.1 * index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                          {job.type}
                        </span>
                        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                          {job.location}
                        </span>
                        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      className="mt-4 md:mt-0"
                      onClick={() => console.log('Apply for', job.title)}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="mt-4 text-gray-600">{job.description}</p>
                </AnimatedDiv>
              ))}
            </div>
          )}

          {!loading && jobs.length === 0 && (
            <AnimatedDiv className="text-center py-12">
              <p className="text-xl">No current openings at this time.</p>
              <p className="mt-2">
                Check back later or{' '}
                <a href="/contact" className="text-unix-primary hover:underline">
                  contact us
                </a>{' '}
                to inquire about future opportunities.
              </p>
            </AnimatedDiv>
          )}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedDiv>
            <h2 className="text-3xl font-bold mb-6">Why Work at UnixTron?</h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Competitive Benefits',
                description: 'Health insurance, retirement plans, and generous PTO.',
                icon: '🏆',
              },
              {
                title: 'Flexible Work',
                description: 'Remote options and flexible hours to fit your lifestyle.',
                icon: '🏡',
              },
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career advancement programs.',
                icon: '📈',
              },
            ].map((item, index) => (
              <AnimatedDiv
                key={item.title}
                delay={0.1 * index}
                className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Careers;