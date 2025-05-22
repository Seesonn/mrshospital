

import { useEffect } from "react"
import ScrollToTop from "./pages/ScrollToTop";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';
import Appointments from './pages/Appointments';
import Packages from './pages/Packages';
import EmergencyBanner from './components/EmergencyBanner';
import FloatingAppointmentButton from './components/FloatingAppointmentButton';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/Team';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <EmergencyBanner />
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
  );
};

export default App;