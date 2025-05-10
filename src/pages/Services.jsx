import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import AnimatedButton from "../components/ui/AnimatedButton";
import mri from "../assets/MRI Machine.jpg"
import cardiolody from "../assets/cardiology.jpg";
import diagnostic from "../assets/diagnostic.jpg";
import ECG from "../assets/ECG.jpg";
import neurology from "../assets/neurology.jpg";
import Nurseimage from "../assets/NurseImage.jpg";
import xray from "../assets/X-ray.jpg";
import doctor from "../assets/doctor.jpg";
import microscope from "../assets/Microscope.jpg";
import roche from "../assets/roche cobas machine .jpg";
import labBoy from "../assets/labBoyExamingTheResult.jpg";
import { Import } from "lucide-react";
import ServiceSection from "../components/ServiceSection";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: 1,
      image: cardiolody,
      title: "Cardiology",
      description:
        "Comprehensive heart care with advanced diagnostic tools and treatments.",
      link: "/services/cardiology",
    },
    {
      id: 2,
      image: neurology,
      title: "Neurology",
      description: "Specialized care for brain and nervous system disorders.",
      link: "/services/neurology",
    },
    {
      id: 3,
      image: xray,
      title: "Radiology",
      description:
        "Advanced imaging services including X-ray, CT scans, and MRIs.",
      link: "/services/radiology",
    },
    {
      id: 4,
      image: diagnostic,
      title: "Diagnostics",
      description:
        "Complete laboratory testing for accurate disease detection.",
      link: "/services/diagnostics",
    },
    {
      id: 5,
      image: Nurseimage,
      title: "Nursing Care",
      description:
        "Professional nursing services for inpatient and outpatient care.",
      link: "/services/nursing",
    },
    {
      id: 6,
      image: microscope,
      title: "Pathology",
      description: "Advanced microscopic analysis for disease diagnosis.",
      link: "/services/pathology",
    },
    {
      id: 7,
      image: ECG,
      title: "Cardiac Diagnostics",
      description:
        "ECG and other cardiac function tests with expert interpretation.",
      link: "/services/cardiac-diagnostics",
    },
    {
      id: 8,
      image: roche,
      title: "Lab Testing",
      description: "Automated laboratory testing with Roche Cobas systems.",
      link: "/services/lab-tests",
    },
    {
      id: 9,
      image: labBoy,
      title: "Clinical Research",
      description: "Participate in cutting-edge medical research studies.",
      link: "/services/research",
    },
    {
      id: 10,
      image: doctor,
      title: "General Medicine",
      description: "Comprehensive primary care for all ages.",
      link: "/services/general-medicine",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

  const categories = [
    { id: "all", name: "All Services" },
    { id: "diagnostics", name: "Diagnostics" },
    { id: "imaging", name: "Imaging" },
    { id: "treatment", name: "Treatment" },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Medical Services
            </h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Medina offers a comprehensive range of medical services to meet
              all your healthcare needs. Our team of specialists uses
              state-of-the-art equipment to provide the highest quality care.
            </p>
          </motion.div>
        </div>

      
      </section>

      {/* Services Categories */}
      <ServiceSection services={services} />

      {/* Featured Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={mri}
                alt="Advanced MRI Machine"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Advanced Diagnostic Imaging
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art diagnostic imaging center features the
                latest technology to provide accurate and detailed images for
                precise diagnosis. Our team of radiologists and technicians are
                highly trained to ensure you receive the highest quality care.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "MRI",
                  "CT Scan",
                  "X-Ray",
                  "Ultrasound",
                  "Mammography",
                  "Bone Density Scanning",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mt-1 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton>Learn More</AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Need a Specialized Service?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8"
            >
              Our team of specialists is ready to provide personalized care
              tailored to your specific health needs. Contact us today to
              schedule a consultation or learn more about our services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <AnimatedButton>Contact Us</AnimatedButton>
              <Link to="/appointments">
                <AnimatedButton>Book Appointment</AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
