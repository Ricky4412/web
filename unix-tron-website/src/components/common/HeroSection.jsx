import { useState, useEffect } from 'react';
import Button from './Button';

const HeroSection = ({ title, subtitle, primaryAction, secondaryAction }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['heroSlide1', 'heroSlide2', 'heroSlide3'];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/assets/${slide}.jpg)` }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fadeInUp">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fadeInUp delay-100">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeInUp delay-200">
            {primaryAction && (
              <Button 
                size="large" 
                variant="primary"
                className="hover:scale-105 transition-transform"
                {...primaryAction}
              >
                {primaryAction.text}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                size="large" 
                variant="outline-white"
                className="hover:scale-105 transition-transform"
                {...secondaryAction}
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;