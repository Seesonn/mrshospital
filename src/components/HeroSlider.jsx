// // // import { useState, useEffect, useRef } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import AnimatedButton from "./ui/AnimatedButton";
// // // import h2 from "../assets/h2.jpg"
// // // import h3 from "../assets/h3.jpg"
// // // import h4 from "../assets/h4.jpg"

// // // const HeroSlider = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const [isAutoplay, setIsAutoplay] = useState(true);
// // //   const autoplayRef = useRef(null);

// // //   const slides = [
// // //     {
// // //       image: h3,
// // //       title: "Take Care of Your Health",
// // //       subtitle:
// // //         "At Medina, we are dedicated to diagnosing all kinds of diseases.",
// // //       buttonText: "MAKE AN APPOINTMENT",
// // //     },
// // //     {
// // //       image: h4,
// // //       title: "Professional Medical Care",
// // //       subtitle:
// // //         "Our team of specialists provides the highest quality healthcare services.",
// // //       buttonText: "LEARN MORE",
// // //     },
// // //     {
// // //       image: h2,
// // //       title: "Advanced Diagnostic Services",
// // //       subtitle: "State-of-the-art equipment for accurate and timely diagnosis.",
// // //       buttonText: "VIEW SERVICES",
// // //     },
// // //   ];

// // //   const startAutoplay = () => {
// // //     autoplayRef.current = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// // //     }, 5000);
// // //   };

// // //   const stopAutoplay = () => {
// // //     if (autoplayRef.current) {
// // //       clearInterval(autoplayRef.current);
// // //       autoplayRef.current = null;
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (isAutoplay) {
// // //       startAutoplay();
// // //     }

// // //     return () => stopAutoplay();
// // //   }, [isAutoplay, slides.length]);

  

  

// // //   return (
// // //     <div className="hero-slider">
// // //       <AnimatePresence mode="wait">
// // //         {slides.map((slide, index) => (
// // //           <div
// // //             key={index}
// // //             className={`hero-slide ${index === currentSlide ? "active" : ""}`}
// // //             style={{ zIndex: index === currentSlide ? 1 : 0 }}
// // //           >
// // //             <img
// // //               src={slide.image || "/placeholder.svg"}
// // //               // alt={slide.title}
// // //               className="slide-image"
// // //               loading={index === 0 ? "eager" : "lazy"}
// // //             />
// // //             <div className="slide-overlay"></div>
// // //             <div className="container mx-auto px-4 h-full">
// // //               <div className="flex items-center h-full">
// // //                 {index === currentSlide && (
// // //                   <motion.div
// // //                     key={`content-${index}`}
// // //                     initial={{ opacity: 0, x: -30 }}
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     exit={{ opacity: 0, x: 30 }}
// // //                     transition={{ duration: 0.6 }}
// // //                     className="max-w-lg text-white slide-content"
// // //                   >
// // //                     <motion.h1
// // //                       initial={{ opacity: 0, y: -10 }}
// // //                       animate={{ opacity: 1, y: 0 }}
// // //                       transition={{ duration: 0.5, delay: 0.2 }}
// // //                       className="text-8xl lg:text-7xl md:text-5xl font-bold mb-4"
// // //                     >
// // //                       {slide.title}
// // //                     </motion.h1>
// // //                     <motion.p
// // //                       initial={{ opacity: 0, y: -10 }}
// // //                       animate={{ opacity: 1, y: 0 }}
// // //                       transition={{ duration: 0.5, delay: 0.4 }}
// // //                       className="text-lg mb-6"
// // //                     >
// // //                       {slide.subtitle}
// // //                     </motion.p>
// // //                     <motion.div
// // //                       initial={{ opacity: 0, y: -10 }}
// // //                       animate={{ opacity: 1, y: 0 }}
// // //                       transition={{ duration: 0.5, delay: 0.6 }}
// // //                     >
// // //                       <AnimatedButton>{slide.buttonText}</AnimatedButton>
// // //                     </motion.div>
// // //                   </motion.div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default HeroSlider;

// // import { useState, useEffect, useRef } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import AnimatedButton from "./ui/AnimatedButton";
// // import h2 from "../assets/h2.jpg";
// // import h3 from "../assets/h3.jpg";
// // import h4 from "../assets/h4.jpg";
// // import { FaPhoneAlt, FaUserMd, FaMicroscope } from "react-icons/fa";

// // const HeroSlider = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isAutoplay, setIsAutoplay] = useState(true);
// //   const autoplayRef = useRef(null);

// //   const slides = [
// //     {
// //       image: h3,
// //       title: "24/7 Emergency Care",
// //       subtitle: "At Medina, we are dedicated to diagnosing all kinds of diseases.",
// //       buttonText: " APPOINTMENT",
// //     },
// //     {
// //       image: h4,
// //       title: "Professional Medical Care",
// //       subtitle: "Our team of specialists provides the highest quality healthcare services.",
// //       buttonText: "LEARN MORE",
// //     },
// //     {
// //       image: h2,
// //       title: "Advanced Diagnostic Services",
// //       subtitle: "State-of-the-art equipment for accurate and timely diagnosis.",
// //       buttonText: " SERVICES",
// //     },
// //   ];

// //   const features = [
// //     {
// //       icon: <FaPhoneAlt className="text-2xl text-white" />,
// //       title: "24/7 Emergency Care",
// //       description: " +977 9764453354"
// //     },
    
// //     {
// //       icon: <FaMicroscope className="text-2xl text-white" />,
// //       title: "Advanced Diagnostics",
// //       description: "State-of-the-art imaging and laboratory systems."
// //     }
// //   ];

// //   const startAutoplay = () => {
// //     autoplayRef.current = setInterval(() => {
// //       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// //     }, 5000);
// //   };

// //   const stopAutoplay = () => {
// //     if (autoplayRef.current) {
// //       clearInterval(autoplayRef.current);
// //       autoplayRef.current = null;
// //     }
// //   };

// //   useEffect(() => {
// //     if (isAutoplay) {
// //       startAutoplay();
// //     }

// //     return () => stopAutoplay();
// //   }, [isAutoplay, slides.length]);

// //   return (
// //     <div className="hero-slider relative h-screen">
// //       {/* Glassmorphism Cards Container - Right Side */}
// //       <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-80 mr-8 hidden lg:block">
// //         <div className="space-y-4">
// //           {features.map((feature, index) => (
// //             <motion.div 
// //               key={index}
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
// //               className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
// //             >
// //               <div className="flex items-start space-x-4">
// //                 <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
// //                   {feature.icon}
// //                 </div>
// //                 <div>
// //                   <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
// //                   <p className="text-white/80 text-sm">{feature.description}</p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       <AnimatePresence mode="wait">
// //         {slides.map((slide, index) => (
// //           <div
// //             key={index}
// //             className={`hero-slide ${index === currentSlide ? "active" : ""}`}
// //             style={{ zIndex: index === currentSlide ? 1 : 0 }}
// //           >
// //             <img
// //               src={slide.image || "/placeholder.svg"}
// //               className="slide-image object-cover w-full h-full"
// //               loading={index === 0 ? "eager" : "lazy"}
// //             />
// //             <div className="slide-overlay absolute inset-0 bg-black/40"></div>
// //             <div className="container mx-auto px-4 h-full">
// //               <div className="flex items-center h-full pr-80 lg:pr-0">
// //                 {index === currentSlide && (
// //                   <motion.div
// //                     key={`content-${index}`}
// //                     initial={{ opacity: 0, x: -30 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     exit={{ opacity: 0, x: 30 }}
// //                     transition={{ duration: 0.6 }}
// //                     className="max-w-lg text-white slide-content"
// //                   >
// //                     <motion.h1
// //                       initial={{ opacity: 0, y: -10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.5, delay: 0.2 }}
// //                       className="text-5xl lg:text-6xl xl:text-5xl font-bold mb-4"
// //                     >
// //                       {slide.title}
// //                     </motion.h1>
// //                     <motion.p
// //                       initial={{ opacity: 0, y: -10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.5, delay: 0.4 }}
// //                       className="text-lg mb-6"
// //                     >
// //                       {slide.subtitle}
// //                     </motion.p>
// //                     <motion.div
// //                       initial={{ opacity: 0, y: -10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.5, delay: 0.6 }}
// //                     >
// //                       <AnimatedButton>{slide.buttonText}</AnimatedButton>
// //                     </motion.div>
// //                   </motion.div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </AnimatePresence>

// //       {/* Add this to your CSS file or as a global style */}
// //       <style jsx>{`
// //         .glass-card {
// //           background: rgba(255, 255, 255, 0.1);
// //           box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
// //           backdrop-filter: blur(8px);
// //           -webkit-backdrop-filter: blur(8px);
// //         }
// //         .glass-card:hover {
// //           background: rgba(255, 255, 255, 0.15);
// //           box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default HeroSlider;

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import AnimatedButton from "./ui/AnimatedButton";
// import h2 from "../assets/h2.jpg";
// import h3 from "../assets/h3.jpg";
// import h4 from "../assets/h4.jpg";
// import { FaPhoneAlt, FaUserMd, FaMicroscope } from "react-icons/fa";

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const autoplayRef = useRef(null);

//   const slides = [
//     {
//       image: h3,
//       title: "24/7 Emergency Care",
//       subtitle: "At Medina, we are dedicated to diagnosing all kinds of diseases.",
//       buttonText: "APPOINTMENT",
//     },
//     {
//       image: h4,
//       title: "Professional Medical Care",
//       subtitle: "Our team of specialists provides the highest quality healthcare services.",
//       buttonText: "LEARN MORE",
//     },
//     {
//       image: h2,
//       title: "Advanced Diagnostic Services",
//       subtitle: "State-of-the-art equipment for accurate and timely diagnosis.",
//       buttonText: "SERVICES",
//     },
//   ];

//   const features = [
//     {
//       icon: <FaPhoneAlt className="text-xl md:text-2xl text-white" />,
//       title: "Emergency Call",
//       description: "+977 9764453354",
//       action: "tel:+9779764453354"
//     },
//     {
//       icon: <FaMicroscope className="text-xl md:text-2xl text-white" />,
//       title: "Diagnostics",
//       description: "Advanced imaging systems",
//       action: "/services"
//     }
//   ];

//   const startAutoplay = () => {
//     autoplayRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//   };

//   const stopAutoplay = () => {
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//       autoplayRef.current = null;
//     }
//   };

//   useEffect(() => {
//     if (isAutoplay) {
//       startAutoplay();
//     }

//     return () => stopAutoplay();
//   }, [isAutoplay, slides.length]);

//   return (
//     <div className="hero-slider relative h-screen">
//       {/* Desktop Glassmorphism Cards - Right Side */}
//       <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-72 mr-4 lg:mr-8 hidden md:block">
//         <div className="space-y-4">
//           {features.map((feature, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
//               className="glass-card p-4 md:p-6 rounded-xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
//             >
//               <div className="flex items-start space-x-3 md:space-x-4">
//                 <div className="bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-sm">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-base md:text-lg text-white mb-1 md:mb-2">{feature.title}</h3>
//                   <p className="text-white/80 text-xs md:text-sm">{feature.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Glassmorphism Buttons - Bottom Center */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 md:hidden">
//         <div className="flex justify-center space-x-4">
//           {features.map((feature, index) => (
//             <motion.a
//               href={feature.action}
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
//               className="glass-card px-4 py-3 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-2"
//             >
//               <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
//                 {feature.icon}
//               </div>
//               <div className="text-center">
//                 <span className="font-semibold text-sm text-white">{feature.title}</span>
//                                   <p className="text-white/80 text-xs md:text-sm">{feature.description}</p>

//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence mode="wait">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-slide ${index === currentSlide ? "active" : ""}`}
//             style={{ zIndex: index === currentSlide ? 1 : 0 }}
//           >
//             <img
//               src={slide.image || "/placeholder.svg"}
//               className="slide-image object-cover w-full h-full"
//               loading={index === 0 ? "eager" : "lazy"}
//               alt={slide.title}
//             />
//             <div className="slide-overlay absolute inset-0 bg-black/40"></div>
//             <div className="container mx-auto px-4 h-full">
//               <div className="flex items-center h-full md:pr-80 lg:pr-0">
//                 {index === currentSlide && (
//                   <motion.div
//                     key={`content-${index}`}
//                     initial={{ opacity: 0, x: -30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 30 }}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-lg text-white slide-content"
//                   >
//                     <motion.h1
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                       className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
//                     >
//                       {slide.title}
//                     </motion.h1>
//                     <motion.p
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.4 }}
//                       className="text-base sm:text-lg mb-6"
//                     >
//                       {slide.subtitle}
//                     </motion.p>
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.6 }}
//                     >
//                       <AnimatedButton>{slide.buttonText}</AnimatedButton>
//                     </motion.div>
//                   </motion.div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </AnimatePresence>

//       {/* Navigation Dots */}
      

//       {/* Add this to your CSS file or as a global style */}
//       <style jsx>{`
//         .glass-card {
//           background: rgba(255, 255, 255, 0.1);
//           box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.15);
//           backdrop-filter: blur(8px);
//           -webkit-backdrop-filter: blur(8px);
//         }
//         .glass-card:hover {
//           background: rgba(255, 255, 255, 0.15);
//           box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.25);
//         }
//         @media (min-width: 768px) {
//           .glass-card {
//             box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
//           }
//           .glass-card:hover {
//             box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSlider;

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import { FaPhoneAlt, FaMicroscope } from "react-icons/fa";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  const slides = [
    {
      image: h3,
      title: "24/7 Emergency Care",
      subtitle: "At Medina, we are dedicated to diagnosing all kinds of diseases.",
      buttonText: "APPOINTMENT",
    },
    {
      image: h4,
      title: "Professional Medical Care",
      subtitle: "Our team of specialists provides the highest quality healthcare services.",
      buttonText: "LEARN MORE",
    },
    {
      image: h2,
      title: "Advanced Diagnostic Services",
      subtitle: "State-of-the-art equipment for accurate and timely diagnosis.",
      buttonText: "SERVICES",
    },
  ];

  const features = [
    {
      icon: <FaPhoneAlt className="text-xl md:text-2xl text-white" />,
      title: "Emergency Call",
      description: "+977 9764453354",
      action: "tel:+9779764453354",
      showOnMobile: true
    },
    {
      icon: <FaMicroscope className="text-xl md:text-2xl text-white" />,
      title: "Diagnostics",
      description: "Advanced imaging systems",
      action: "/services",
      showOnMobile: false
    }
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

  return (
    <div className="hero-slider relative h-screen">
      {/* Desktop Glassmorphism Cards - Right Side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-72 mr-4 lg:mr-8 hidden md:block">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
              className="glass-card p-4 md:p-6 rounded-xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-white mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Emergency Button - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 md:hidden">
        <div className="flex justify-center">
          {features.filter(f => f.showOnMobile).map((feature, index) => (
            <motion.a
              href={feature.action}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="glass-card px-6 py-3 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-3"
            >
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                {feature.icon}
              </div>
              <div className="text-center">
                <span className="font-semibold text-sm text-white">{feature.title}</span>
                <p className="text-white/80 text-xs">{feature.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              className="slide-image object-cover w-full h-full"
              loading={index === 0 ? "eager" : "lazy"}
              alt={slide.title}
            />
            <div className="slide-overlay absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex items-center h-full md:pr-80 lg:pr-0">
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
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-base sm:text-lg mb-6"
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

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.25);
        }
        @media (min-width: 768px) {
          .glass-card {
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          }
          .glass-card:hover {
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;