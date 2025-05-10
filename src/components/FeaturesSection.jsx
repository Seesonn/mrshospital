

import { useEffect, useRef } from "react"
import { FaUserMd, FaLaptopMedical, FaHeartbeat } from "react-icons/fa"

const FeaturesSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const features = sectionRef.current.querySelectorAll(".feature-card")
    features.forEach((feature) => {
      observer.observe(feature)
    })

    return () => {
      features.forEach((feature) => {
        observer.unobserve(feature)
      })
    }
  }, [])

  const features = [
    {
      title: "Qualified Specialists",
      description: "We hire the best specialists to deliver top-notch diagnostic services for you.",
      icon: <FaUserMd className="w-16 h-16" />,
      delay: 0,
    },
    {
      title: "Modern Equipment",
      description: "We use the first-class medical equipment for timely diagnostics of various diseases.",
      icon: <FaLaptopMedical className="w-16 h-16" />,
      delay: 0.2,
    },
    {
      title: "Emergency Diagnostics",
      description: "Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.",
      icon: <FaHeartbeat className="w-16 h-16" />,
      delay: 0.4,
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title centered opacity-0 animate-slide-up">What Makes Us Different</h2>
          <p className="section-subtitle max-w-3xl mx-auto opacity-0 animate-slide-up delay-200">
            Our commitment to excellence sets us apart from other healthcare providers. We combine cutting-edge
            technology with compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center opacity-0 group"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              <div className="text-[#f07208] mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f07208] transition-colors duration-300">
                  {feature.title}
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#f07208] transition-all duration-500 group-hover:w-20"></div>
              </div>
              <p className="text-gray-600 mt-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
