

import { motion } from "framer-motion";
import hospitalBuilding from "../assets/ourstory.jpg";
import founderPhoto from "../assets/h3.jpg";
import missionBg from "../assets/cardiology.jpg"; // Add a suitable background image

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            MRS Pranami Hospital
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
             Mangal Radhika Sadananda Pranami Hospital is a premier multi-specialty healthcare institution committed to delivering high-quality, ethical, and affordable medical services to the community. Located in Itahari, Sunsari, Nepal, the hospital stands as a symbol of care, compassion, and clinical excellence — serving patients with dedication and integrity.
          </p>
        </motion.div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Established under the divine inspiration of Shree Krishna Pranami Dharma, MRS Pranami Hospital began as a humble initiative to address the critical healthcare needs of Eastern Nepal.
              </p>
              <p>
                The name "Mangal Radhika Sadananda" reflects our threefold commitment: to bring auspiciousness (Mangal) through healthcare, divine love (Radhika) through compassionate service, and eternal bliss (Sadananda) through healing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl h-96 order-1 md:order-2"
          >
            <img 
              src={hospitalBuilding} 
              alt="Cardiology Department" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">Advanced Medical Facilities</h3>
            </div>
          </motion.div>
        </div>

        {/* Divine Inspiration Section - Simplified */}
        {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20"> */}
          <div className="grid md:grid-cols-5">
            {/* Text Content */}

            {/* Image */}
            <div className="md:col-span-2 hidden md:block relative">
              <img 
                src={founderPhoto} 
                alt="Spiritual foundation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-30"></div>
            </div>


            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Divine Inspiration
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  The vision for MRS Pranami Hospital emerged during a spiritual gathering in 2005, when senior devotees recognized the region's urgent need for quality healthcare that combined medical excellence with spiritual values.
                </p>

                <p>
                  Through the collective efforts of the Pranami community, local families donated land, professionals volunteered expertise, and devotees contributed resources to make this vision a reality.
                </p>

                <p>
                  Our emblem symbolizes the sacred synthesis of spiritual wisdom and medical science that guides our healing philosophy.
                </p>
              </div>
            </div>

          </div>
        {/* </div> */}

        {/* Mission & Vision with Fixed Background */}
        <div 
          className="relative rounded-2xl overflow-hidden  bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${missionBg})` }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          <div className="relative p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mission & vision</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold text-secondary mb-3">Mission</h3>
                <p className="text-gray-700">
                  To provide ethical, affordable healthcare that blends modern medicine with compassionate, spiritually-grounded service.
                </p>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-secondary mb-3">Vision</h3>
                <p className="text-gray-700">
                  To be Eastern Nepal's most trusted healthcare institution, renowned for clinical excellence within a healing environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Divine Compassion",
                icon: "❤️",
                description: "Treating every patient with the love and respect we would offer to the divine."
              },
              {
                title: "Service Excellence",
                icon: "⭐",
                description: "Providing the highest standard of care through continuous improvement."
              },
              {
                title: "Community Spirit",
                icon: "🤝",
                description: "Working together as an extended family to serve our community."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 p-6 rounded-lg text-center border-t-4 border-secondary"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;