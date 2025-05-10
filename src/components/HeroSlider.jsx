import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";
import h2 from "../assets/h2.jpg"
import h3 from "../assets/h3.jpg"
import h4 from "../assets/h4.jpg"

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  const slides = [
    {
      image: h3,
      title: "Take Care of Your Health",
      subtitle:
        "At Medina, we are dedicated to diagnosing all kinds of diseases.",
      buttonText: "MAKE AN APPOINTMENT",
    },
    {
      image: h4,
      title: "Professional Medical Care",
      subtitle:
        "Our team of specialists provides the highest quality healthcare services.",
      buttonText: "LEARN MORE",
    },
    {
      image: h2,
      title: "Advanced Diagnostic Services",
      subtitle: "State-of-the-art equipment for accurate and timely diagnosis.",
      buttonText: "VIEW SERVICES",
    },
  ];

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoplay) {
      startAutoplay();
    }

    return () => stopAutoplay();
  }, [isAutoplay, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);

    setIsAutoplay(false);
    stopAutoplay();

    setTimeout(() => {
      setIsAutoplay(true);
    }, 5000);
  };

  const handleSlideChange = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    setIsAutoplay(false);
    stopAutoplay();

    // Resume autoplay after 5 seconds
    setTimeout(() => {
      setIsAutoplay(true);
    }, 5000);
  };

  return (
    <div className="hero-slider">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="slide-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="slide-overlay"></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex items-center h-full">
                {index === currentSlide && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-lg text-white slide-content"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-4xl md:text-5xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-lg mb-6"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <AnimatedButton>{slide.buttonText}</AnimatedButton>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
