import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import h3 from "../assets/h3.jpg";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = {
    emergency: [
      {
        title: "24/7 Emergency Service",
        description: "Round-the-clock emergency medical care for all urgent health needs.",
        link: "/services/emergency"
      },
      {
        title: "24/7 Ambulance Service",
        description: "Quick response ambulance service equipped with modern life-support systems.",
        link: "/services/ambulance"
      }
    ],
    clinicalDepartments: [
      {
        title: "Free General OPD",
        description: "Complimentary outpatient consultations for general medical concerns.",
        link: "/services/opd"
      },
      {
        title: "Internal Medicine",
        description: "Comprehensive care for adult diseases and chronic conditions.",
        link: "/services/internal-medicine"
      },
      {
        title: "Gynecology",
        description: "Specialized care for women's health and reproductive system.",
        link: "/services/gynecology"
      },
      {
        title: "Orthopedics",
        description: "Expert care for bone, joint, and musculoskeletal conditions.",
        link: "/services/orthopedics"
      },
      {
        title: "General Surgery",
        description: "Advanced surgical procedures with experienced surgeons.",
        link: "/services/surgery"
      },
      {
        title: "ENT – HNS",
        description: "Specialized care for ear, nose, throat, and head-neck conditions.",
        link: "/services/ent"
      },
      {
        title: "Pediatrics",
        description: "Comprehensive healthcare for infants, children, and adolescents.",
        link: "/services/pediatrics"
      }
    ],
    diagnostics: [
      {
        title: "Radio-Imaging Diagnostic",
        description: "Advanced imaging services including DR System X-ray and 4D Scan Ultrasound.",
        link: "/services/radio-imaging"
      },
      {
        title: "Lab Diagnostic",
        description: "Comprehensive laboratory testing and diagnostic services.",
        link: "/services/lab"
      }
    ],
    patientCare: [
      {
        title: "General Ward",
        description: "Comfortable inpatient facilities with round-the-clock care.",
        link: "/services/general-ward"
      },
      {
        title: "Post-Op Ward",
        description: "Specialized care for post-operative recovery and monitoring.",
        link: "/services/post-op"
      },
      {
        title: "Nursing Care",
        description: "Professional nursing services with compassionate care.",
        link: "/services/nursing"
      }
    ],
    support: [
      {
        title: "Pharmacy",
        description: "24/7 pharmacy services with a wide range of medications.",
        link: "/services/pharmacy"
      },
      {
        title: "Supportive Care",
        description: "Additional support services for comprehensive patient care.",
        link: "/services/support"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'emergency', name: 'Emergency Services' },
    { id: 'clinicalDepartments', name: 'Clinical Departments' },
    { id: 'diagnostics', name: 'Diagnostics' },
    { id: 'patientCare', name: 'Patient Care' },
    { id: 'support', name: 'Support Services' }
  ];

  const getAllServices = () => {
    if (activeCategory === 'all') {
      return Object.values(services).flat();
    }
    return services[activeCategory] || [];
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={h3} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Comprehensive healthcare services delivered with excellence and compassion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllServices().map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border-2 border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <div className="max-w-3xl mx-auto bg-white  rounded-lg p-8 border-2 border-gray-200 ">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Quality Healthcare Services</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8 text-center">
                Our comprehensive range of medical services is delivered by experienced healthcare professionals using state-of-the-art equipment. We are committed to providing accessible and affordable healthcare to our community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-700">Emergency Care</div>
                </div>
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-primary mb-2">Expert</div>
                  <div className="text-gray-700">Medical Team</div>
                </div>
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-primary mb-2">Modern</div>
                  <div className="text-gray-700">Facilities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
