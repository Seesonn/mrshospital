
import { motion } from "framer-motion"
import h3 from "../assets/h3.jpg"
import TeamCard from "../components/TeamCard"

const TeamPage = () => {
  const doctors = [
    {
      name: "Dr. Shirish Shrestha",
      title: "Medical Superintendent, Consultant Orthopedic Surgeon",
      qualifications: ["MBBS (USTC)", "MS Orthopedic (TU)"],
      nmcNo: "18363",
      image: "https://imgs.search.brave.com/HIcZB4diKNSn4lTCujDoXvz0m9RYHjpgzrVhDlRKaeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc" // Add image path when available
    },
    {
      name: "Dr. Rupesh Jung Belbase",
      title: "Consultant Orthopedic Surgeon",
      qualifications: [
        "MBBS (KU)", 
        "MS (IMS, BHU)",
        "Dip Ebot (Portugal)", 
        "Fellowship in Joint Replacement & Sports Injury (Austria)",
        "AO Trauma Fellowship (Hungary)"
      ],
      nmcNo: "13874",
      image: "https://imgs.search.brave.com/HIcZB4diKNSn4lTCujDoXvz0m9RYHjpgzrVhDlRKaeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc" // Add image path when available
    },
    {
      name: "Dr. Sanju Ghimire",
      title: "Assistant Professor, Consultant General Surgeon",
      qualifications: ["MBBS (BPKIHS)", "MS (TU)"],
      nmcNo: "15591",
      image: "https://imgs.search.brave.com/HIcZB4diKNSn4lTCujDoXvz0m9RYHjpgzrVhDlRKaeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc" // Add image path when available
    },
    {
      name: "Dr. Subesh Kumar Shah",
      title: "Assistant Professor, Consultant Obstetrician & Gynecologist",
      qualifications: ["MBBS (BPKIHS)", "MS (BPKIHS)"],
      nmcNo: "16276",
      image: "https://imgs.search.brave.com/HIcZB4diKNSn4lTCujDoXvz0m9RYHjpgzrVhDlRKaeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc" // Add image path when available
    },
    {
      name: "Dr. Utsav Raj Karki",
      title: "Consultant ENT-Head & Neck Surgeon",
      qualifications: ["MBBS (TU)", "MS (TU)"],
      nmcNo: "23957",
      image: "https://imgs.search.brave.com/HIcZB4diKNSn4lTCujDoXvz0m9RYHjpgzrVhDlRKaeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc" // Add image path when available
    },
    {
      name: "Dr. Kishor Kumar Poudel",
      title: "Radiologist",
      qualifications: ["MBBS (CMC, Vellore)", "DMRD (RGUHS, Bangalore)"],
      nmcNo: "13362",
      image: "https://imgs.search.brave.com/HIcZB4diKNSn4lTCujDoXvz0m9RYHjpgzrVhDlRKaeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc" // Add image path when available
    }
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={h3}
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Team</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Our team of highly qualified medical professionals is dedicated to providing you with the best healthcare services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet Our Specialists</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of specialists brings years of experience and expertise to provide you with comprehensive healthcare services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <TeamCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage