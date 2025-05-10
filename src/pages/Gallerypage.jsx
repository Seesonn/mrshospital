
import { motion } from "framer-motion"

import Gallery from "../components/Gallery"

const GalleryPage = () => {
 


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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Gallery</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Take a visual tour of our state-of-the-art facilities, advanced medical equipment, and our dedicated team
              of healthcare professionals.
            </p>
            
          </motion.div>
        </div>
    
      
      </section>
      <Gallery/>

    </div>
  )
}

export default GalleryPage