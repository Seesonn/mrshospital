import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF } from 'react-icons/fa';
import logo from "../assets/mrs.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Hospital Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center bg-white p-2 rounded-lg w-fit">
              <img
                src={logo}
                alt="Medina"
                className="h-8"
              />
            </div>
            <p className="text-gray-200 text-2xl font-semibold italic">सेवा नै धर्म हो</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <FaPhone className="text-xl text-secondary" />
                <p>+977 9764453354</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <FaMapMarkerAlt className="text-xl text-secondary" />
                <p>Itahari, Sunsari, Nepal</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <FaClock className="text-xl text-secondary" />
                <p>24/7 Available</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:ml-8"
          >
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-secondary inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Appointments</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Our Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-secondary inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/cardiology" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Free General OPD</span>
                </Link>
              </li>
              <li>
                <Link to="/services/neurology" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Clinical Departments</span>
                </Link>
              </li>
              <li>
                <Link to="/services/radiology" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Radio-Imaging Diagnostic</span>
                </Link>
              </li>
              <li>
                <Link to="/services/nursing" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Nursing Care</span>
                </Link>
              </li>
              <li>
                <Link to="/services/pathology" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Pharmacy</span>
                </Link>
              </li>
              <li>
                <Link to="/services/lab-tests" className="hover:text-secondary transition-colors flex items-center group">
                  <span className="mr-3 text-secondary">›</span>
                  <span>Lab Testing</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Emergency Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-secondary inline-block">
              Emergency Contact
            </h3>
            <div className="space-y-6">
              {/* Emergency Card */}
              <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-4">24/7 Emergency</h4>
                <div className="flex items-center space-x-3 text-secondary">
                  <FaPhone className="text-2xl animate-pulse" />
                  <p className="text-2xl font-bold">+977 9764453354</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <a
                  href="https://www.facebook.com/mrsphospital"
                  className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-secondary transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-xl" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-gray-300">© {new Date().getFullYear()} MRSPS. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
