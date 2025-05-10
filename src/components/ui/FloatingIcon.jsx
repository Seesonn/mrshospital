
import { motion } from "framer-motion"

const FloatingIcon = ({ icon, delay = 0, duration = 3 }) => {
  return (
    <motion.div
      className="text-primary"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {icon}
    </motion.div>
  )
}

export default FloatingIcon
