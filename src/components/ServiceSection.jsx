import { motion } from "framer-motion"
import ServiceCard from "./ServiceCard"
import useScrollAnimation from "../hooks/useScrollAnimation"

const ServiceSection = ({ services }) => {
  const [servicesRef, servicesVisible] = useScrollAnimation()

  return (
    <section className="py-20" ref={servicesRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every day, we provide the best and the most extensive range of diagnostic services in the state. Feel free
            to browse our website for more information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection