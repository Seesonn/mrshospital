
import { motion } from "framer-motion"

const PackageFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap justify-center mb-12 gap-3"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
            activeCategory === category.id
              ? "bg-primary text-white "
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category.name}
        </button>
      ))}
    </motion.div>
  )
}

export default PackageFilter
