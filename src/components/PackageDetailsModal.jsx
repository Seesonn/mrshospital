

import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "./ui/AnimatedButton"
import { useState } from "react"

const PackageDetailsModal = ({ isOpen, onClose, package: pkg }) => {
  const [activeTab, setActiveTab] = useState("details")

  if (!pkg) return null


  const groupTestsByCategory = (tests) => {
    const categories = {
      "Blood Tests": ["CBC", "RBC Count", "WBC Count", "Hemoglobin", "Platelet Count", "ESR", "AEC"],
      "Diabetes Screening": ["Fasting Blood Sugar", "Postprandial Blood Sugar", "HbA1c"],
      "Lipid Profile": ["S. Cholesterol", "HDL", "LDL", "VLDL", "Triglycerides", "Cholesterol/HDL Ratio"],
      "Liver Function": ["Bilirubin", "Alkaline Phosphatase", "SGPT", "SGOT", "Total Protein", "Albumin", "Globulin"],
      "Kidney Function": ["Blood Urea Nitrogen", "Serum Creatinine", "Total Protein", "S. Albumin", "S. Globulin"],
      "Thyroid Panel": ["TSH", "Free T3", "Free T4"],
      "Vitamin Tests": ["Vitamin B12", "Vitamin D"],
      "Cardiac Tests": ["ECG", "CKMB", "Troponin"],
      Imaging: ["Chest X-Ray", "Abdomen/Pelvis Ultrasound"],
      "Other Tests": ["Urine R/E", "Stool R/E", "Doctor Consultation"],
    }


    const groupedTests = {}

    Object.keys(categories).forEach((category) => {
      const testsInCategory = pkg.testDetails.filter((test) =>
        categories[category].some((categoryTest) => test.toLowerCase().includes(categoryTest.toLowerCase())),
      )

      if (testsInCategory.length > 0) {
        groupedTests[category] = testsInCategory
      }
    })


    const categorizedTests = Object.values(groupedTests).flat()
    const uncategorizedTests = pkg.testDetails.filter((test) => !categorizedTests.includes(test))

    if (uncategorizedTests.length > 0) {
      if (!groupedTests["Other Tests"]) {
        groupedTests["Other Tests"] = []
      }
      groupedTests["Other Tests"] = [...groupedTests["Other Tests"], ...uncategorizedTests]
    }

    return groupedTests
  }

  const groupedTests = groupTestsByCategory(pkg.testDetails || [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-lg border-2 border-gray-200 w-full max-w-4xl max-h-[90vh] flex flex-col my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`bg-primary text-white p-6 rounded-t-lg`}>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">{pkg.name}</h2>
                  <p className="text-white text-opacity-90 text-sm md:text-base">{pkg.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-2xl md:text-3xl font-bold">
                  {pkg.currency} {pkg.price.toLocaleString()}
                </span>
                <span className="text-sm line-through ml-2 opacity-75">
                  {pkg.currency} {pkg.originalPrice.toLocaleString()}
                </span>
                <span className="ml-2 bg-white text-xs font-semibold px-2 py-1 rounded text-primary">
                  {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex  rounded-xl border-b border-gray-200">
              <button
                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === "details"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={() => setActiveTab("details")}
              >
                Package Details
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === "booking"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={() => setActiveTab("booking")}
              >
                Booking Process
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {activeTab === "details" ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Package Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-primary font-bold text-lg mb-1">{pkg.testCount}</div>
                        <div className="text-gray-600">Comprehensive Tests</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-primary font-bold text-lg mb-1">2-3 Hours</div>
                        <div className="text-gray-600">Completion Time</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-primary font-bold text-lg mb-1">24-48 Hours</div>
                        <div className="text-gray-600">Report Delivery</div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-yellow-800 mb-2">Preparation Instructions</h4>
                      <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm md:text-base">
                        <li>Fast for 8-12 hours before the test (water is allowed)</li>
                        <li>Avoid alcohol consumption for 24 hours before the test</li>
                        <li>Avoid strenuous exercise for 24 hours before the test</li>
                        <li>Bring your ID and any previous test reports</li>
                        <li>Wear comfortable clothing with short sleeves</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tests Included</h3>
                    <div className="space-y-6">
                      {Object.entries(groupedTests).map(([category, tests]) => (
                        <div key={category} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-800 mb-3">{category}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {tests.map((test, index) => (
                              <div key={index} className="flex items-start">
                                <svg
                                  className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span className="text-gray-700 text-sm md:text-base">{test}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">How to Book This Package</h3>



                  <h4 className="font-semibold text-green-800 mb-2">Available soon</h4>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-600 text-sm md:text-base">
                    For more information, call us at{" "}
                    <a href="tel:+97725580930" className="text-primary font-semibold">
                      +977-25-580930
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <AnimatedButton className="text-sm md:text-base py-2 px-4 md:py-3 md:px-6">
                    Book This Package
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PackageDetailsModal