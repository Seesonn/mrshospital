import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const FloatingAppointmentButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [hasAppeared, setHasAppeared] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        if (!isVisible) {
          setIsVisible(true)
          setIsCompact(false) // Reset to expanded state when newly visible
          setHasAppeared(true)
        }

        // After button is visible for 3 seconds, make it compact
        if (hasAppeared && !isCompact && !isHovering) {
          const timer = setTimeout(() => {
            setIsCompact(true)
          }, 3000)

          return () => clearTimeout(timer)
        }
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible, isCompact, hasAppeared, isHovering])

  // Handle hover state changes
  const handleMouseEnter = () => {
    setIsHovering(true)
    setIsCompact(false)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Delay compacting to make it feel more natural
    setTimeout(() => {
      if (!isHovering) {
        setIsCompact(true)
      }
    }, 1500)
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
      }`}
    >
      <Link
        to="/appointments"
        className={`flex items-center justify-center bg-primary hover:bg-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isCompact ? "p-3" : "px-5 py-3 gap-3"
        } hover:scale-105 active:scale-95`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isCompact ? "scale-110" : "scale-100"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
        <span
          className={`font-medium whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden ${
            isCompact ? "max-w-0 opacity-0 ml-0" : "max-w-40 opacity-100"
          }`}
        >
          Book Appointment
        </span>
      </Link>
    </div>
  )
}

export default FloatingAppointmentButton