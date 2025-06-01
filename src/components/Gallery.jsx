
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import gb1 from "../assets/gb1.jpg"
import gb2 from "../assets/gb2.jpg"
import gb3 from "../assets/gb3.jpg"
import gb4 from "../assets/gb4.jpg"
import gb5 from "../assets/gb5.jpg"
import gb6 from "../assets/gb6.jpg"
import gb7 from "../assets/gb7.jpg"


const Gallery = () => {
  const galleryRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: gb1,


    },
    {
      id: 2,
      src: gb2,


    },
    {
      id: 3,
      src: gb3,


    },
    {
      id: 4,
      src: gb4,


    },
    {
      id: 5,
      src: gb5,

    },
    {
      id: 6,
      src: gb6,


    },

  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="py-20 bg-gray-50" id="gallery" ref={galleryRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"> Schemes</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art medical facilities and equipment through our medical schemes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${image.aspect === "wide" ? "sm:col-span-2" :
                image.aspect === "tall" ? "row-span-2" : ""
                }`}
              onClick={() => openLightbox(image)}
            >
              <div className={`relative overflow-hidden ${image.aspect === "tall" ? "h-full" :
                image.aspect === "wide" ? "h-64" : "h-64 sm:h-80"
                }`}>
                <img
                  src={image.src}
                  // alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <p className="text-lg">{selectedImage.alt}</p>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery