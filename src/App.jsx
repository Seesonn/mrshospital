import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"


import Contact from "./pages/Contact"
import GalleryPage from "./pages/Gallerypage"
import Appointments from "./pages/Appointments"
import Packages from "./pages/Packages"
import FloatingAppointmentButton from "./components/FloatingAppointmentButton"
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"
import AboutPage from "./pages/AboutPage"
import TeamPage from "./pages/Team"


const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight - 100
        if (isVisible) {
          el.classList.add("animate-visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />


            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/packages" element={<Packages />} />
          </Routes>
        </main>
        <Footer />
        <FloatingAppointmentButton />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  )
}

export default App
