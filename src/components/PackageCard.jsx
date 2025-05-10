
import { motion } from "framer-motion"
import AnimatedButton from "./ui/AnimatedButton"



const getColorClasses = (color) => {
  const colorMap = {
    red: {
      bg: "bg-red-500",
      light: "bg-red-100",
      text: "text-red-600",
      border: "border-red-500",
      hover: "hover:bg-red-600",
    },
    green: {
      bg: "bg-green-600",
      light: "bg-green-100",
      text: "text-green-600",
      border: "border-green-600",
      hover: "hover:bg-green-700",
    },
    blue: {
      bg: "bg-blue-600",
      light: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-600",
      hover: "hover:bg-blue-700",
    },
    purple: {
      bg: "bg-purple-600",
      light: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-600",
      hover: "hover:bg-purple-700",
    },
    teal: {
      bg: "bg-teal-600",
      light: "bg-teal-100",
      text: "text-teal-600",
      border: "border-teal-600",
      hover: "hover:bg-teal-700",
    },
    gold: {
      bg: "bg-yellow-600",
      light: "bg-yellow-100",
      text: "text-yellow-600",
      border: "border-yellow-600",
      hover: "hover:bg-yellow-700",
    },
  }

  return colorMap[color] || colorMap.red
}

// Add a helper function to calculate discount percentage
const calculateDiscount = (originalPrice, price) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100)
}

const PackageCard = ({ package: pkg, onViewDetails, onBookNow }) => {
  const colorClasses = getColorClasses(pkg.color)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 package-card h-full flex flex-col"
    >
      <div className={`${colorClasses.bg} text-white p-6`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
            <p className="opacity-90 text-sm">{pkg.description}</p>
          </div>
          <div className="bg-white text-primary font-bold rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 ml-2">
            {pkg.testCount.split(" ")[0]}
          </div>
        </div>
        <div className="mt-4 flex items-baseline flex-wrap">
          <span className="text-2xl md:text-3xl font-bold">
            {pkg.currency} {pkg.price.toLocaleString()}
          </span>
          <span className="text-sm line-through ml-2 opacity-75">
            {pkg.currency} {pkg.originalPrice.toLocaleString()}
          </span>
          <span className="ml-2 bg-white text-xs font-semibold px-2 py-1 rounded text-primary">
            {calculateDiscount(pkg.originalPrice, pkg.price)}% OFF
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-6 flex-grow">
          <div className="font-semibold text-gray-800 mb-3">Package Includes:</div>
          <ul className="space-y-2">
            {pkg.highlights.slice(0, 5).map((highlight, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className={`w-5 h-5 ${colorClasses.text} mt-1 mr-2 flex-shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-700 text-sm md:text-base">{highlight}</span>
              </li>
            ))}
            {pkg.highlights.length > 5 && (
              <li className={`${colorClasses.text} font-medium text-sm md:text-base`}>
                + {pkg.highlights.length - 5} more tests
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col space-y-3 mt-auto">
          <AnimatedButton
            className={`${colorClasses.bg} hover:opacity-90 text-sm md:text-base py-2 px-4 md:py-3 md:px-6`}
            onClick={() => onBookNow && onBookNow(pkg)}
          >
            Book Now
          </AnimatedButton>
          <button
            onClick={() => onViewDetails && onViewDetails(pkg)}
            className="text-center text-gray-600 hover:text-primary transition-colors text-sm font-medium py-2"
          >
            View Full Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PackageCard
