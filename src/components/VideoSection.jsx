"use client"

import { useRef, useEffect, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa"

const VideoSection = () => {
  const sectionRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showCustomThumbnail, setShowCustomThumbnail] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in")
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
      } else {
        setShowCustomThumbnail(false)
        videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="video">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title centered animate-on-scroll opacity-0">See Our Facility</h2>
          <p className="section-subtitle max-w-3xl mx-auto animate-on-scroll opacity-0">
            Take a virtual tour of our state-of-the-art medical facility and learn about our commitment to patient care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll opacity-0">
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            {showCustomThumbnail && (
              <div className="absolute inset-0 z-10">
                <img
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Tour Our Hospital</h3>
                    <p className="mb-6 max-w-md mx-auto">
                      Experience our world-class facilities and meet our dedicated staff
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="aspect-video">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://www.youtube.com/embed/EngW7tLk6R8?enablejsapi=1&rel=0"
                title="MediCare Hospital Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Custom play/pause button */}
            <button
              className="absolute bottom-4 right-4 z-20 p-4 bg-[#f07208] rounded-full text-white hover:bg-[#ff8c2c] transition-all duration-300 transform hover:scale-110"
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "25+", text: "Years of Experience", delay: 0 },
              { number: "100+", text: "Medical Specialists", delay: 0.2 },
              { number: "50k+", text: "Satisfied Patients", delay: 0.4 },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-on-scroll opacity-0"
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <div className="text-[#f07208] text-4xl font-bold mb-2 counter">{stat.number}</div>
                <p className="text-gray-600">{stat.text}</p>

                {/* Decorative element */}
                <div className="w-12 h-1 bg-[#f07208]/30 mx-auto mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
