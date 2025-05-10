
import { motion } from "framer-motion"

const AnimatedButton = ({ children, className, onClick, type = "button" }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden bg-primary text-white font-medium py-3 px-6 rounded-md ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 bg-secondary"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default AnimatedButton
