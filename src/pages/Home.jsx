
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import AnimatedButton from "../components/ui/AnimatedButton"

import ServiceSection from "../components/ServiceSection"

import FloatingIcon from "../components/ui/FloatingIcon"
import HeroSlider from "../components/HeroSlider"
import Gallery from "../components/Gallery"
import useScrollAnimation from "../hooks/useScrollAnimation"
import VideoSection from "../components/VideoSection"
import cardiolody from "../assets/cardiology.jpg"
import diagnostic from "../assets/diagnostic.jpg"
import ECG from "../assets/ECG.jpg"
import neurology from "../assets/neurology.jpg"
import Nurseimage from "../assets/NurseImage.jpg"
import xray from "../assets/X-ray.jpg"
import doctor from "../assets/doctor.jpg"
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
    {
      id: 4,
      image: diagnostic,
      title: "Diagnostics",
      description: "Complete laboratory testing for accurate disease detection.",
      link: "/services/diagnostics"
    },
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
    {
      id: 10,
      image: doctor,
      title: "General Medicine",
      description: "Comprehensive primary care for all ages.",
      link: "/services/general-medicine"
    }
  
  ]

  return (
    <div className="pt-32">
 
      <section className="relative">
        <HeroSlider />
      </section>

      
      {/* Features Section */}
      <section className="py-20" ref={featureRef}>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featureVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <FloatingIcon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  }
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Qualified Specialists</h3>
              <p className="text-gray-600">
                We have the best specialists in their top-notch diagnostic services for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featureVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <FloatingIcon
                  delay={0.2}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  }
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Modern Equipment</h3>
              <p className="text-gray-600">
                We use the first-class medical equipment for timely diagnosis of various diseases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featureVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <FloatingIcon
                  delay={0.4}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  }
                />
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
      <section className="py-16 bg-gray-100" ref={diagnosticRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={diagnosticVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                All Kinds
                <br />
                of Diagnostics
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-6">
                Medina offers the region's most comprehensive range of diagnostic services, from MRI to X-ray.
              </p>
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
     
       
     
      <ServiceSection services={services} />
      {/* Gallery Section */}
      <Gallery />
      <VideoSection/>

    </div>
  )
}

export default Home
