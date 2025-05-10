
import { motion } from "framer-motion"
import AnimatedButton from "./ui/AnimatedButton"

const FeaturedPackageCard = ({ package: pkg, onViewDetails, onBookNow }) => {
  const calculateDiscount = (originalPrice, price) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl overflow-hidden max-w-5xl mx-auto package-card"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 md:p-8 lg:p-12">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            MOST POPULAR
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{pkg.name}</h3>
          <div className="flex items-baseline mb-6 flex-wrap">
            <span className="text-3xl md:text-4xl font-bold text-primary">
              {pkg.currency} {pkg.price.toLocaleString()}
            </span>
            <span className="text-base md:text-lg text-gray-500 line-through ml-2">
              {pkg.currency} {pkg.originalPrice.toLocaleString()}
            </span>
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
              {calculateDiscount(pkg.originalPrice, pkg.price)}% OFF
            </span>
          </div>
          <p className="text-gray-600 mb-6 text-sm md:text-base">{pkg.description}</p>
          <div className="mb-8">
            <div className="font-semibold text-gray-800 mb-3">Package Highlights:</div>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {pkg.highlights.slice(0, 6).map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm md:text-base">{highlight}</span>
                </li>
              ))}
            </ul>
            {pkg.highlights.length > 6 && (
              <p className="text-primary font-medium mt-2 text-sm md:text-base">
                + {pkg.highlights.length - 6} more tests
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton
              onClick={() => onBookNow && onBookNow(pkg)}
              className="text-sm md:text-base py-2 px-4 md:py-3 md:px-6"
            >
              Book This Package
            </AnimatedButton>
            
          </div>
        </div>
        <div className="bg-red-500 flex items-center justify-center p-6 md:p-8 lg:p-0">
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-4">{pkg.testCount}</div>
            <p className="text-lg md:text-xl mb-6">Comprehensive Tests</p>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">Includes</div>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                <div className="bg-white bg-opacity-10 p-2 rounded">Complete Blood Count</div>
                <div className="bg-white bg-opacity-10 p-2 rounded">Lipid Profile</div>
                <div className="bg-white bg-opacity-10 p-2 rounded">Thyroid Panel</div>
                <div className="bg-white bg-opacity-10 p-2 rounded">Cardiac Profile</div>
                <div className="bg-white bg-opacity-10 p-2 rounded">X-Ray</div>
                <div className="bg-white bg-opacity-10 p-2 rounded">Ultrasound</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FeaturedPackageCard
