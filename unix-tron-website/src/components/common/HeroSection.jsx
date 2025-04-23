import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const HeroSection = ({ 
  title, 
  subtitle, 
  primaryAction, 
  secondaryAction 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [displayTitle, setDisplayTitle] = useState("");
  const [displaySubtitle, setDisplaySubtitle] = useState("");
  
  const slides = [
    {
      id: 'heroSlide1',
      image: '/assets/heroSlide1.jpg',
      fallback: '/assets/hero-fallback.webp',
      overlay: 'bg-gradient-to-t from-black/20 via-black/10 to-transparent'
    },
    {
      id: 'heroSlide2',
      image: '/assets/heroSlide2.jpg',
      fallback: '/assets/hero-fallback.webp',
      overlay: 'bg-gradient-to-t from-black/25 via-black/15 to-transparent'
    },
    {
      id: 'heroSlide3',
      image: '/assets/heroSlide3.jpg',
      fallback: '/assets/hero-fallback.webp',
      overlay: 'bg-gradient-to-t from-black/30 via-black/20 to-transparent'
    }
  ];

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = slides.map(slide => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => resolve(true);
          img.onerror = () => {
            const fallbackImg = new Image();
            fallbackImg.src = slide.fallback;
            fallbackImg.onload = () => resolve(true);
          };
        });
      });
      
      await Promise.all(promises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  // Typewriter effect for title
  useEffect(() => {
    if (isLoading) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= title.length) {
        setDisplayTitle(title.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        // Start subtitle after title completes
        typeSubtitle();
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [title, isLoading]);

  // Typewriter effect for subtitle
  const typeSubtitle = () => {
    let j = 0;
    const subtitleInterval = setInterval(() => {
      if (j <= subtitle.length) {
        setDisplaySubtitle(subtitle.substring(0, j));
        j++;
      } else {
        clearInterval(subtitleInterval);
      }
    }, 30); // Faster typing for subtitle
  };

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  // Auto-rotate slides
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isLoading, slides.length]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 1.05,
      filter: 'blur(2px)',
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 + i * 0.15, // Adjusted delay to appear after text
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.96
    }
  };

  if (isLoading) {
    return (
      <section className="relative h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={slides[currentSlide].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              willChange: 'transform, filter, opacity'
            }}
          >
            {/* Subtle Gradient Overlay */}
            <div className={`absolute inset-0 ${slides[currentSlide].overlay}`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 overflow-hidden">
          {/* Title with typewriter effect */}
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              {displayTitle}
              <motion.span 
                className="inline-block w-1 h-10 sm:h-12 md:h-14 bg-white ml-1 -mb-1"
                variants={cursorVariants}
                animate="blink"
                style={{ verticalAlign: 'middle' }}
              />
            </h1>
          </motion.div>
          
          {/* Subtitle with typewriter effect */}
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              {displaySubtitle}
              <motion.span 
                className="inline-block w-1 h-6 md:h-7 bg-white ml-1 -mb-1"
                variants={cursorVariants}
                animate="blink"
                style={{ verticalAlign: 'middle' }}
              />
            </p>
          </motion.div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            {primaryAction && (
              <motion.button
                variants={buttonVariants}
                custom={0}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                onClick={primaryAction.onClick}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                  {primaryAction.text}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            )}
            {secondaryAction && (
              <motion.button
                variants={buttonVariants}
                custom={1}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group backdrop-blur-sm"
                onClick={secondaryAction.onClick}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                  {secondaryAction.text}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            {index === currentSlide && (
              <motion.span 
                className="absolute inset-0 rounded-full bg-white"
                layoutId="activeIndicator"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  primaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  secondaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

export default HeroSection;