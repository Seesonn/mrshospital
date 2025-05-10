import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  const slides = [
    {
      image:
        "https://www.skppn.org.np/_next/image?url=https%3A%2F%2Fwww.skppn.org.np%2Fapi%2Fmedia%2Ffile%2F475414923_9291312310888973_7208302037116584524_n.jpg%3F2025-02-23T07%3A38%3A02.518Z&w=1920&q=100",
      title: "Take Care of Your Health",
      subtitle:
        "At Medina, we are dedicated to diagnosing all kinds of diseases.",
      buttonText: "MAKE AN APPOINTMENT",
    },
    {
      image:
        "https://www.skppn.org.np/_next/image?url=https%3A%2F%2Fwww.skppn.org.np%2Fapi%2Fmedia%2Ffile%2F475414923_9291312310888973_7208302037116584524_n.jpg%3F2025-02-23T07%3A38%3A02.518Z&w=1920&q=100",
      title: "Professional Medical Care",
      subtitle:
        "Our team of specialists provides the highest quality healthcare services.",
      buttonText: "LEARN MORE",
    },
    {
      image:
        "https://www.skppn.org.np/_next/image?url=https%3A%2F%2Fwww.skppn.org.np%2Fapi%2Fmedia%2Ffile%2F475414923_9291312310888973_7208302037116584524_n.jpg%3F2025-02-23T07%3A38%3A02.518Z&w=1920&q=100",
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
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-lg text-white slide-content"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-4xl md:text-5xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-lg mb-6"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
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
