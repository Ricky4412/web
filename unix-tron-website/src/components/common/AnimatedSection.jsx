import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 30, 
    opacity: 0,
    scale: 0.98
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200
    }
  },
};

export const AnimatedSection = ({ children, className = '' }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={containerVariants}
    className={className}
  >
    {children}
  </motion.section>
);

export const AnimatedDiv = ({ children, className = '', delay = 0 }) => (
  <motion.div
    variants={itemVariants}
    transition={{ delay }}
    className={className}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.div>
);