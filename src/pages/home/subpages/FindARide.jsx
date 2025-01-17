import { motion } from "framer-motion";

const FindARide = () => {
  return (
    <motion.div
      className="flex flex-col items-center p-8"
      key="find-a-ride-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
    >
      We're gonna need some deets for that. Help us out with ...
    </motion.div>
  );
};

export default FindARide;
