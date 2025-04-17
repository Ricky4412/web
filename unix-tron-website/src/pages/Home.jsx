import HeroSection from '../components/common/HeroSection';
import FeatureSection from '../components/sections/FeatureSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import StatsSection from '../components/sections/StatsSection';
import ClientsSection from '../components/sections/ClientsSection';
import CtaSection from '../components/sections/CtaSection';

const Home = () => {
  return (
    <div>
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

      <FeatureSection />
      <ClientsSection />
      <TestimonialSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
};

export default Home;