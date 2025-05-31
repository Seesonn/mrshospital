import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import AnimatedButton from "../components/ui/AnimatedButton"
import { FaUserMd, FaHospital, FaAmbulance, FaXRay, FaFlask, FaBed } from 'react-icons/fa';

import ServiceSection from "../components/ServiceSection"

import s1 from "../assets/qualified.png"
import m1 from "../assets/modern.png"
import e1 from "../assets/medical.png"
import HeroSlider from "../components/HeroSlider"
import Gallery from "../components/Gallery"
import useScrollAnimation from "../hooks/useScrollAnimation"
// import VideoSection from "../components/VideoSection"
import cardiolody from "../assets/cardiology.jpg"
// import diagnostic from "../assets/diagnostic.jpg"
import ECG from "../assets/ECG.jpg"
import neurology from "../assets/neurology.jpg"
import Nurseimage from "../assets/NurseImage.jpg"
import xray from "../assets/X-ray.jpg"

import microscope from "../assets/Microscope.jpg"
import roche from "../assets/roche cobas machine .jpg"
import labBoy from "../assets/labBoyExamingTheResult.jpg"

const Home = () => {
  const [featureRef, featureVisible] = useScrollAnimation()
  const [servicesRef, servicesVisible] = useScrollAnimation()

  const [diagnosticRef, diagnosticVisible] = useScrollAnimation()
  const services = [
    {
      id: 1,
      image: cardiolody,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostic tools and treatments.",
      link: "/services/cardiology"
    },
    {
      id: 2,
      image: neurology,
      title: "Neurology",
      description: "Specialized care for brain and nervous system disorders.",
      link: "/services/neurology"
    },
    {
      id: 3,
      image: xray,
      title: "Radiology",
      description: "Advanced imaging services including X-ray, CT scans, and MRIs.",
      link: "/services/radiology"
    },
    // {
    //   id: 4,
    //   image: diagnostic,
    //   title: "Diagnostics",
    //   description: "Complete laboratory testing for accurate disease detection.",
    //   link: "/services/diagnostics"
    // },
    {
      id: 5,
      image: Nurseimage,
      title: "Nursing Care",
      description: "Professional nursing services for inpatient and outpatient care.",
      link: "/services/nursing"
    },
    {
      id: 6,
      image: microscope,
      title: "Pathology",
      description: "Advanced microscopic analysis for disease diagnosis.",
      link: "/services/pathology"
    },
    {
      id: 7,
      image: ECG,
      title: "Cardiac Diagnostics",
      description: "ECG and other cardiac function tests with expert interpretation.",
      link: "/services/cardiac-diagnostics"
    },
    {
      id: 8,
      image: roche,
      title: "Lab Testing",
      description: "Automated laboratory testing with Roche Cobas systems.",
      link: "/services/lab-tests"
    },
    {
      id: 9,
      image: labBoy,
      title: "Clinical Research",
      description: "Participate in cutting-edge medical research studies.",
      link: "/services/research"
    },


  ]

  return (
    <div className="pt-32">

      <section className="relative">
        <HeroSlider />
      </section>


      {/* Features Section */}
      <section className="py-16 md:py-20" ref={featureRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featureVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Makes Us Different</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Specialist Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featureVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border-2 border-gray-200 transition-shadow duration-300 p-6 text-center"
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-50 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={s1}
                    alt="Qualified Specialists"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Qualified Specialists</h3>
              <p className="text-gray-600">
                We have the best specialists in their top-notch diagnostic services for you.
              </p>
            </motion.div>

            {/* Equipment Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featureVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border-2 border-gray-200 transition-shadow duration-300 p-6 text-center"
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-50 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={m1}
                    alt="Modern Equipment"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Modern Equipment</h3>
              <p className="text-gray-600">
                We use the first-class medical equipment for timely diagnosis of various diseases.
              </p>
            </motion.div>

            {/* Emergency Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featureVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl border-2 border-gray-200 transition-shadow duration-300 p-6 text-center"
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-50 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={e1}
                    alt="Emergency Diagnostics"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Emergency Diagnostics</h3>
              <p className="text-gray-600">
                Our emergency diagnostics services help you get the most accurate diagnosis in a critical time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section className="py-16 " ref={diagnosticRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={diagnosticVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Mangal Radhika Sadananda
                <br />
                Pranami Hospital
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-6">
                Mangal Radhika Sadananda Pranami Hospital is a premier multi-specialty healthcare institution committed to delivering high-quality, ethical, and affordable medical services to the community. Located in Itahari, Sunsari, Nepal, the hospital stands as a symbol of care, compassion, and clinical excellence — serving patients with dedication and integrity.              </p>
              <AnimatedButton>FREE CONSULTATION</AnimatedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={diagnosticVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src={"https://www.skppn.org.np/_next/image?url=https%3A%2F%2Fwww.skppn.org.np%2Fapi%2Fmedia%2Ffile%2F475414923_9291312310888973_7208302037116584524_n.jpg%3F2025-02-23T07%3A38%3A02.518Z&w=1920&q=100"}
                alt="Diagnostic Equipment"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Medical Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaUserMd className="w-8 h-8 text-primary mb-4" />,
                title: "Free General OPD",
                description: "Complimentary outpatient consultations for general medical concerns."
              },
              {
                icon: <FaHospital className="w-8 h-8 text-primary mb-4" />,
                title: "Clinical Departments",
                description: "Specialized departments including Internal Medicine, Gynecology, Orthopedics, General Surgery, ENT-HNS, and Pediatrics."
              },
              {
                icon: <FaAmbulance className="w-8 h-8 text-primary mb-4" />,
                title: "24/7 Emergency Services",
                description: "Round-the-clock emergency medical care and ambulance services for urgent health needs."
              },
              {
                icon: <FaXRay className="w-8 h-8 text-primary mb-4" />,
                title: "Radio-Imaging Diagnostic",
                description: "Advanced imaging services including DR System X-ray and 4D Scan Ultrasound."
              },
              {
                icon: <FaFlask className="w-8 h-8 text-primary mb-4" />,
                title: "Lab Diagnostic",
                description: "Comprehensive laboratory testing and diagnostic services."
              },
              {
                icon: <FaBed className="w-8 h-8 text-primary mb-4" />,
                title: "Patient Care",
                description: "Dedicated nursing care, general ward, and post-operative care facilities."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border-2 border-gray-200 "
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-primary mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white hover:bg-primary-dark rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />
      {/* <VideoSection/> */}

    </div>
  )
}

export default Home
