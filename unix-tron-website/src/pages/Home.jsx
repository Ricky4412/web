import { lazy, Suspense } from 'react';
import HeroSection from '../components/common/HeroSection';
import Chatbot from '../components/common/Chatbot';

// Lazy load sections
const FeatureSection = lazy(() => import('../components/sections/FeatureSection'));
const TestimonialSection = lazy(() => import('../components/sections/TestimonialSection'));
const StatsSection = lazy(() => import('../components/sections/StatsSection'));
const ClientsSection = lazy(() => import('../components/sections/ClientsSection'));
const CtaSection = lazy(() => import('../components/sections/CtaSection'));

const Home = () => {
  return (
    <div className="relative">
      {/* Main content container with safe area padding */}
      <div className="pb-24"> {/* Increased padding to account for chatbot */}
        <a href='contact' className="block">
          <HeroSection
            title="Innovative Tech Solutions for the Future"
            subtitle="Unixtron Africa delivers cutting-edge technology solutions to transform your business and drive growth in the digital age."
            primaryAction={{
              text: "Get Started",
              onClick: () => console.log("Get Started clicked"),
            }}
            secondaryAction={{
              text: "Learn More",
              onClick: () => console.log("Learn More clicked"),
            }}
          />
        </a>

        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
          <FeatureSection />
          <ClientsSection />
          <TestimonialSection />
          <StatsSection />
          <CtaSection />
        </Suspense>
      </div>

      {/* Chatbot container with proper layering */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;