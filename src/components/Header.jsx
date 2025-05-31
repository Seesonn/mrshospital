import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/mrs.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hideContact, setHideContact] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()
  const headerRef = useRef(null)
  const scrollTimeout = useRef(null)

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      // Set a timeout to prevent rapid changes
      scrollTimeout.current = setTimeout(() => {
        setScrolled(currentScrollY > 20)

        // Handle navigation visibility based on scroll direction
        if (currentScrollY > 150) { // Increased threshold for better UX
          if (currentScrollY > lastScrollY + 15) { // Increased threshold to prevent jitter
            setHideNav(true)
            setHideContact(true)
          } else if (currentScrollY < lastScrollY - 15) {
            setHideNav(false)
            // Only show contact when near top
            setHideContact(currentScrollY > 100)
          }
        } else {
          setHideNav(false)
          setHideContact(false)
        }

        setLastScrollY(currentScrollY)
      }, 10) // Small timeout for performance
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    {
      name: "HOME",
      path: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      name: "ABOUT",
      path: "/about",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "SERVICES",
      path: "/services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "PACKAGES",
      path: "/packages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path
            fillRule="evenodd"
            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: " TEAM",
      path: "/team",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
    {
      name: "SCHEMES",
      path: "/gallery",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "EVENTS",
      path: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "CONTACT",
      path: "/contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm14 1H4v12h12V4z"
            clipRule="evenodd"
          />
          <path d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H4a1 1 0 01-1-1z" />
        </svg>
      ),
    },
  ]

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: 0 }}
      animate={{
        y: hideNav ? -100 : 0,
        transition: {
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      className={`fixed w-full z-50 transition-all duration-500 border-b-2 border-gray-200 ${scrolled ? "bg-white py-0.5 md:py-1" : "bg-white py-1 md:py-2"
        }`}
    >
      <div className="container mx-auto px-2 md:px-4">
        {/* Top Bar */}
        <AnimatePresence mode="wait">
          {!hideContact && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col md:flex-row justify-between items-center mb-1 md:mb-2 overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center"
              >
                <img src={logo} alt="M.R.S. Pranami Hospital" className="h-6 md:h-10" />
                <p className="text-lg md:text-xl font-semibold ml-2"></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-center mt-1 md:mt-0 space-y-1 md:space-y-0 md:space-x-4 lg:space-x-6"
              >
                <div className="flex items-center">
                  <div className="hidden md:block bg-primary rounded-full p-2 mr-2 md:mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 md:h-5 w-4 md:w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">025-580930</p>
                </div>

                <div className="flex items-center">
                  <div className="hidden md:block bg-primary rounded-full p-2 mr-2 md:mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 md:h-5 w-4 md:w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Muktidham, Itahari, Sunsari, Nepal</p>
                </div>

                {/* Lab Report Button - Desktop only */}
                <div className="hidden md:flex items-center">
                  <Link
                    to="/lab-reports"
                    className="flex items-center bg-primary rounded-lg px-4 py-2 text-white transition-colors duration-300 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Lab Reports</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
          className={`bg-primary rounded-lg border border-gray-200 transition-all duration-300 ease-in-out`}
        >
          <div className={`flex justify-between items-center px-2 md:px-4 transition-all duration-300`}>
            {/* Show logo when contact is hidden */}
            <div className="flex items-center">
              {/* Lab Report Link - Mobile Only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hideContact ? 0 : 1,
                  scale: hideContact ? 0.8 : 1,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                className="md:hidden absolute left-8"
              >
                <Link
                  to="/lab-reports"
                  className="relative text-white text-[11px] flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="relative">Lab Reports</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{
                      scaleX: 1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 35
                      }
                    }}
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hideContact ? 1 : 0,
                  scale: hideContact ? 1 : 0.8,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                className="flex items-center ml-auto md:ml-0"
              >
                <img
                  src={logo}
                  alt="M.R.S. Pranami Hospital"
                  className={`h-6 md:h-7 bg-white p-1 rounded-md transition-all duration-300 ${hideContact ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                />
              </motion.div>
            </div>

            <div className="hidden md:flex">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`relative flex items-center px-3 lg:px-4 py-2 md:py-3 text-white transition-all duration-300 ${location.pathname === link.path ? "text-white" : "text-white/90 hover:text-white"
                    }`}
                >
                  <span className="relative z-10 text-sm md:text-base -translate-y-0.5">{link.name}</span>

                  {/* Active state underline */}
                  <motion.div
                    className="absolute bottom-1 left-0 w-full h-0.5 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === link.path ? 1 : 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }
                    }}
                  />

                  {/* Hover state underline */}
                  <motion.div
                    className="absolute bottom-1 left-0 w-full h-0.5 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{
                      scaleX: 1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 35
                      }
                    }}
                    animate={{
                      opacity: location.pathname === link.path ? 0 : 1
                    }}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden md:block p-3 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 md:h-5 w-4 md:w-5 text-white"
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-sm rounded-b-md">
              <div className="grid grid-cols-4 gap-1 p-1.5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex flex-col items-center justify-center p-1.5 rounded-lg ${location.pathname === link.path ? "bg-secondary" : "bg-white bg-opacity-10"
                        } transition-colors duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-0.5"
                      >
                        {link.icon}
                      </motion.div>
                      <span className="text-white text-[10px] font-medium">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile contact info */}
              <div className="px-2 py-1.5 bg-white bg-opacity-10 mt-1 rounded-lg mx-2 mb-2">
                <div className="flex items-center mb-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+97725580930" className="text-white text-[10px]">
                    +977 9764453354
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-white text-[10px]">Muktidham, Itahari, Sunsari, Nepal</span>
                </div>

                {/* Lab Report Link - Mobile */}
                <div className="mt-1.5">
                  <Link
                    to="/lab-reports"
                    className="flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg py-1 px-2 transition-colors duration-300 text-[10px]"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Lab Reports</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header 