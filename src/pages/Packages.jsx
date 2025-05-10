
import { useState } from "react"
import { motion } from "framer-motion"


import PackageCard from "../components/PackageCard"

import FeaturedPackageCard from "../components/FeaturedPackageCard"
import PackageFilter from "../components/PackageFilter"
import PackageDetailsModal from "../components/PackageDetailsModal"

const Packages = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const packageCategories = [
    { id: "all", name: "All Packages" },
    // { id: "health", name: "Health Checkups" },
  ]

  const packages = [
    {
      id: 1,
      name: "Basic Health Package",
      price: 2999,
      originalPrice: 4000,
      currency: "₹",
      description: "Comprehensive basic health screening with 65+ essential tests",
      image: "basicPackageImage",
      category: "health",
      featured: false,
      testCount: "65+ Tests",
      highlights: [
        "Complete Blood Count (CBC)",
        "Renal Function Test (RFT)",
        "Liver Function Test (LFT)",
        "Lipid Profile",
        "Diabetes Screening",
        "Thyroid Screening (TSH)",
        "Urine & Stool Examination",
        "Doctor Consultation",
      ],
      testDetails: [
        "CBC (Complete Blood Count)",
        "RBC Count, Total WBC Count, Platelet Count",
        "Hemoglobin, PCV, MCV, MCH, MCHC",
        "Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils",
        "ESR, AEC",
        "Blood Urea Nitrogen, Serum Creatinine",
        "Total Protein, S. Albumin, S. Globulin",
        "Fasting & Postprandial (PP) Blood Sugar",
        "S. Cholesterol, HDL, LDL, VLDL",
        "Cholesterol/HDL Ratio, Triglycerides",
        "Bilirubin (Total/Direct), Alkaline Phosphatase",
        "SGPT, SCOT, Total Protein, Albumin, Globulin",
        "Urine R/E (Color, Transparency, pH, Protein, Sugar, Pus Cells)",
        "Stool R/E (Color, Consistency, Occult Blood, Parasites, Fat Analysis)",
        "TSH (Thyroid Stimulating Hormone)",
        "Doctor Consultation",
      ],
      color: "green",
    },
    {
      id: 2,
      name: "Wellness Health Package",
      price: 4999,
      originalPrice: 7599,
      currency: "₹",
      description: "Enhanced wellness screening with 70+ comprehensive tests",
      image: "/placeholder.svg?height=300&width=400",
      category: "health",
      featured: false,
      testCount: "70+ Tests",
      highlights: [
        "All Basic Package Tests",
        "Vitamin B12 Test",
        "ECG (Echocardiogram)",
        "Abdomen/Pelvis Ultrasound",
        "Advanced Thyroid Panel (Free T3, Free T4)",
        "Doctor Consultation",
      ],
      testDetails: [
        "CBC (Complete Blood Count)",
        "RBC Count, Total WBC Count, Platelet Count",
        "Hemoglobin, PCV, MCV, MCH, MCHC",
        "Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils",
        "ESR, AEC",
        "Blood Urea Nitrogen, Serum Creatinine",
        "Total Protein, S. Albumin, S. Globulin",
        "Fasting & Postprandial (PP) Blood Sugar",
        "S. Cholesterol, HDL, LDL, VLDL",
        "Cholesterol/HDL Ratio, Triglycerides",
        "Bilirubin (Total/Direct), Alkaline Phosphatase",
        "SGPT, SCOT, Total Protein, Albumin, Globulin",
        "Urine R/E (Color, Transparency, pH, Protein, Sugar, Pus Cells)",
        "Stool R/E (Color, Consistency, Occult Blood, Parasites, Fat Analysis)",
        "TSH (Thyroid Stimulating Hormone)",
        "Free T3, Free T4",
        "Vitamin B12",
        "ECG (Echocardiogram)",
        "Abdomen/Pelvis Ultrasound",
        "Doctor Consultation",
      ],
      color: "blue",
    },
    {
      id: 3,
      name: "Premium Health Package",
      price: 16499,
      originalPrice: 21500,
      currency: "₹",
      description: "Comprehensive premium health screening with 80+ advanced tests",
      image: "premiumPackageImage",
      category: "health",
      featured: true,
      testCount: "80+ Tests",
      highlights: [
        "All Wellness Package Tests",
        "Bone Health (Calcium, Vitamin D)",
        "Iron Profile (Iron, TIBC, Ferritin)",
        "Cardiac Markers (CKMB, Troponin)",
        "Chest X-Ray",
        "Specialist Consultation",
      ],
      testDetails: [
        "CBC (Complete Blood Count)",
        "RBC Count, Total WBC Count, Platelet Count",
        "Hemoglobin, PCV, MCV, MCH, MCHC",
        "Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils",
        "ESR, AEC",
        "Blood Urea Nitrogen, Serum Creatinine",
        "Total Protein, S. Albumin, S. Globulin",
        "Fasting & Postprandial (PP) Blood Sugar",
        "S. Cholesterol, HDL, LDL, VLDL",
        "Cholesterol/HDL Ratio, Triglycerides",
        "Bilirubin (Total/Direct), Alkaline Phosphatase",
        "SGPT, SCOT, Total Protein, Albumin, Globulin",
        "Urine R/E (Color, Transparency, pH, Protein, Sugar, Pus Cells)",
        "Stool R/E (Color, Consistency, Occult Blood, Parasites, Fat Analysis)",
        "TSH (Thyroid Stimulating Hormone)",
        "Free T3, Free T4",
        "Vitamin B12",
        "Vitamin D",
        "Calcium, Magnesium, Phosphorus",
        "PTH (Parathyroid Hormone)",
        "Iron, TIBC, Ferritin",
        "CKMB, Troponin",
        "ECG (Echocardiogram)",
        "Abdomen/Pelvis Ultrasound",
        "Chest X-Ray (Single View)",
        "Specialist Consultation",
      ],
      color: "red",
    },
  ]

  const filteredPackages = activeTab === "all" ? packages : packages.filter((pkg) => pkg.category === activeTab)
  const featuredPackage = packages.find((pkg) => pkg.featured)

  const handleViewDetails = (pkg) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }

  const handleBookNow = (pkg) => {
    
    alert(`Booking ${pkg.name}. This feature comingsoon.`)
  }

  // Render sections
  const renderHeroSection = () => (
    <section className="relative bg-primary text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
  <img
    src="https://imgs.search.brave.com/titcyRczIcuFxrIQ_yNZm67MMs4wp4Fbc6YdpEOAh-k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5tZWhybmV3cy5j/b20vZC8yMDI1LzA1/LzA1LzMvNTQ5MDE5/MC5qcGc_dHM9MTc0/NjQ0MjQ2NTU1Mg"
    alt="Contact Us"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-primary opacity-70"></div>
</div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Health Packages</h1>
          <p className="text-lg mb-4">M.R.S. Pranami Hospital</p>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-base md:text-lg mb-6 md:mb-8">
            Muktidham, Itahari, Sunsari, Nepal
            
          </p>
          
        </motion.div>
      </div>

    
    </section>
  )

  

  const renderWhyChooseUs = () => (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Health Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            M.R.S. Pranami Hospital is committed to providing high-quality healthcare services with a focus on patient
            comfort and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
              title: "NABL-Accredited Laboratory",
              description:
                "Our laboratory is accredited by the National Accreditation Board for Testing and Calibration Laboratories, ensuring accurate and reliable test results.",
            },
            {
              icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              title: "Same-Day Report Delivery",
              description:
                "We understand the importance of timely results. Most of our test reports are delivered on the same day, allowing for prompt medical decisions.",
            },
            {
              icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              ),
              title: "Advanced Diagnostic Equipment",
              description:
                "Our facility is equipped with state-of-the-art diagnostic equipment, ensuring accurate and comprehensive health assessments.",
            },
            {
              icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
              title: "Experienced Medical Team",
              description:
                "Our team of doctors and technicians are highly qualified and experienced, providing expert care and accurate interpretations of test results.",
            },
            {
              icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              title: "Affordable Preventive Healthcare",
              description:
                "We believe in making preventive healthcare accessible to all. Our packages are competitively priced with significant discounts to encourage regular health check-ups.",
            },
            {
              icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              ),
              title: "Comfortable Facilities",
              description:
                "Our hospital is designed with patient comfort in mind, featuring clean, spacious areas and a calm environment for a stress-free experience.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      {renderHeroSection()}

      {/* Featured Package */}
      {featuredPackage && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Package</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our most comprehensive health assessment package, designed to provide a thorough evaluation of your
                overall health status.
              </p>
            </div>

            <FeaturedPackageCard
              package={featuredPackage}
              onViewDetails={handleViewDetails}
              onBookNow={handleBookNow}
            />
          </div>
        </section>
      )}

      {/* Package Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Health Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of health packages designed to meet different needs and budgets. Each package
              includes a comprehensive set of tests to assess your health status.
            </p>
          </div>

          <PackageFilter categories={packageCategories} activeCategory={activeTab} onCategoryChange={setActiveTab} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onViewDetails={() => handleViewDetails(pkg)}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
    

      {/* Package Comparison */}
      

      {/* Why Choose Us Section */}
      {renderWhyChooseUs()}

      {/* CTA Section */}
      {/* {renderCTASection()} */}

      {/* Package Details Modal */}
      <PackageDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} package={selectedPackage} />
    </div>
  )
}

export default Packages
