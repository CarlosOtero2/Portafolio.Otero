import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-24 flex items-center justify-center"
    >
      <div className="absolute w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
    </motion.div>
  );
};

export default SectionDivider;