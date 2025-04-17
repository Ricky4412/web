import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const AnimatedSection = ({ children, className = '' }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
    className={className}
  >
    {children}
  </motion.section>
);

export const AnimatedDiv = ({ children, className = '', delay = 0 }) => (
  <motion.div
    variants={itemVariants}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);