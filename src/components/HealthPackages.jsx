

import { useState } from "react"
import { FaCheckCircle, FaArrowRight, FaShieldAlt, FaHeartbeat, FaFlask, FaStethoscope } from "react-icons/fa"
import { motion } from "framer-motion"

const HealthPackages = () => {
  const [activeTab, setActiveTab] = useState("basic")

  const basicPackageTests = [
    {
      category: "Complete Blood Count (CBC)",
      tests: [
        "RBC Count",
        "Total WBC Count",
        "Platelet Count",
        "Hemoglobin",
        "PCV (Packed Cell Volume)",
        "MCV (Mean Corpuscular Volume)",
        "MCH (Mean Corpuscular Hemoglobin)",
        "MCHC (Mean Corpuscular HB Conc)",
        "Neutrophils",
        "Lymphocyte",
        "Monocytes",
        "Eosinophils",
        "Basophils",
        "ESR",
        "AEC",
      ],
    },
    {
      category: "Lipid Profile",
      tests: ["S. Cholesterol", "HDL", "S. Cholesterol/HDL Ratio", "LDL Cholesterol", "VLDL", "S. Triglycerides"],
    },
    {
      category: "Liver Function Test (LFT)",
      tests: [
        "Bilirubin - Total",
        "Bilirubin - Direct",
        "Alkaline Phosphatase",
        "SGPT",
        "SGOT",
        "Total Protein",
        "Albumin",
        "Globulin",
      ],
    },
    {
      category: "Renal/Kidney Function Test (RFT)",
      tests: [
        "Blood Urea Nitrogen",
        "Serum Creatinine",
        "T. Protein",
        "S. Albumin",
        "S. Globulin",
        "Serum Sodium",
        "Serum Potassium",
      ],
    },
    {
      category: "Urine R/E",
      tests: [
        "Colour",
        "Transparency",
        "pH",
        "Protein",
        "Sugar",
        "Pus Cells",
        "RBC",
        "Epithelial Cells",
        "Crystal",
        "Casts",
      ],
    },
    {
      category: "Stool R/E",
      tests: [
        "Colour",
        "Consistency",
        "Reaction",
        "Odour",
        "Parasite",
        "Frank Blood",
        "Occult Blood",
        "Epithelial Cells",
        "Pus Cells",
        "Red Blood Cells",
        "Macrophage",
        "Crystal",
        "Trophozoite",
        "Ova",
        "Cyst",
        "Fat",
      ],
    },
    {
      category: "Diabetes",
      tests: ["Fasting, PP"],
    },
    {
      category: "Thyroid",
      tests: ["Thyroid Stimulating Hormone (TSH)"],
    },
  ]

  const premiumPackageTests = [
    ...basicPackageTests,
    {
      category: "Thyroid Panel",
      tests: ["Free T3", "Free T4", "Thyroid Stimulating Hormone (TSH)"],
    },
    {
      category: "Bone Profile",
      tests: ["Calcium", "Magnesium", "Phosphorus"],
    },
    {
      category: "Bone Marker",
      tests: ["Vitamin D", "PTH"],
    },
    {
      category: "Iron Profile",
      tests: ["Iron", "TIBC", "Ferritin", "Vitamin B12"],
    },
    {
      category: "Diabetes",
      tests: ["Fasting, PP", "HbA1C"],
    },
    {
      category: "X-Ray",
      tests: ["Single View Chest X-Ray"],
    },
    {
      category: "ECG",
      tests: ["Echocardiogram Test"],
    },
    {
      category: "USG",
      tests: ["USG-Abdomen/Pelvis"],
    },
    {
      category: "Vitamin Test",
      tests: ["Vitamin B12"],
    },
    {
      category: "Cardiac Profile",
      tests: ["CKMB", "CK NaC", "Tropinine THS"],
    },
  ]

  const packageFeatures = {
    basic: {
      name: "Basic Health Package",
      price: "Rs. 2,999/-",
      testCount: "65+ Tests",
      color: "green",
      bgColor: "bg-gradient-to-r from-green-600 to-green-700",
      borderColor: "border-green-500",
      shadowColor: "shadow-green-500/20",
      hoverShadowColor: "hover:shadow-green-500/40",
      icon: <FaHeartbeat className="w-8 h-8 text-green-500" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basic.jpg-Uai5PvUQxksXBETvLdYnFMSIScUUVD.jpeg",
    },
    premium: {
      name: "Premium Health Package",
      price: "Rs. 16,499/-",
      testCount: "80+ Tests",
      color: "orange",
      bgColor: "bg-gradient-to-r from-orange-600 to-red-600",
      borderColor: "border-orange-500",
      shadowColor: "shadow-orange-500/20",
      hoverShadowColor: "hover:shadow-orange-500/40",
      icon: <FaShieldAlt className="w-8 h-8 text-orange-500" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pr.jpg-rUoUhKzOckd3PPRMqSp3NdbSCMZ1Ng.jpeg",
    },
  }

  const activePackage = activeTab === "basic" ? packageFeatures.basic : packageFeatures.premium
  const activeTests = activeTab === "basic" ? basicPackageTests : premiumPackageTests

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Health Checkup Packages</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive health checkup packages designed to detect potential health issues early and provide a
            complete assessment of your overall health status.
          </p>
        </div>

        {/* Package Selection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveTab("basic")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "basic"
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Basic Package
            </button>
            <button
              onClick={() => setActiveTab("premium")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "premium"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Premium Package
            </button>
          </div>
        </div>

        {/* Package Header */}
        <div className={`rounded-2xl overflow-hidden shadow-xl mb-10 ${activePackage.shadowColor}`}>
          <div className={`${activePackage.bgColor} p-8 text-white relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="flex items-center mb-4">
                  {activePackage.icon}
                  <h3 className="text-3xl font-bold ml-3">{activePackage.name}</h3>
                </div>
                <p className="text-white/80 mb-4 max-w-xl">
                  Comprehensive health assessment with {activePackage.testCount} to detect potential health issues
                  early.
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{activePackage.price}</span>
                  <span className="ml-2 text-white/80">per person</span>
                </div>
              </div>

              <div className="mt-6 md:mt-0">
                <a
                  href="#book-now"
                  className="inline-flex items-center bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Book Now <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Package Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src={activePackage.image || "/placeholder.svg"}
            alt={`${activePackage.name} details`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Package Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaFlask className="mr-3 text-gray-700" />
            Included Tests & Examinations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTests.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border ${activePackage.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <h4 className="font-bold text-lg mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.tests.map((test, testIndex) => (
                    <li key={testIndex} className="flex items-start">
                      <FaCheckCircle
                        className={`mr-2 mt-1 flex-shrink-0 ${
                          activeTab === "basic" ? "text-green-500" : "text-orange-500"
                        }`}
                      />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaStethoscope className="mr-3 text-gray-700" />
            Additional Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-lg mb-4">Doctor's Consultation</h4>
              <p className="text-gray-600">
                Free consultation with our experienced physicians to discuss your test results and health concerns.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-lg mb-4">Digital Reports</h4>
              <p className="text-gray-600">
                Receive your test results digitally through email or our mobile app for easy access and sharing.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-lg mb-4">24/7 Emergency Support</h4>
              <p className="text-gray-600">
                Access to our emergency helpline for any urgent medical concerns or questions about your health.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-lg mb-4">Follow-up Care</h4>
              <p className="text-gray-600">
                Personalized follow-up recommendations based on your test results and health assessment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          id="book-now"
          className={`mt-12 rounded-2xl ${activePackage.bgColor} p-8 text-white text-center shadow-xl`}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to prioritize your health?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Book your health checkup package today and take the first step towards a healthier tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+97725580930"
              className="inline-flex items-center justify-center bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Call +977-25-580930
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center justify-center bg-black/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-black/30 transition-all duration-300"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthPackages
