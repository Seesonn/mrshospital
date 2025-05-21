

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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Story</h2>
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

        
          <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
            {/* Text Content */}

            {/* Image */}
            <div className="md:col-span-2 hidden md:block relative">
              <img 
                src={founderPhoto} 
                alt="Spiritual foundation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 "></div>
            </div>


            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
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
To deliver exceptional, ethical healthcare through experienced specialists and advanced technology while keeping services affordable for all community members; to educate patients on preventive health; to expand access through strategic growth; and to maintain healing environments that respect both modern medicine and traditional values                </p>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-secondary mb-3">Vision</h3>
                <p className="text-gray-700">
We envision transforming into Eastern Nepal's premier 500-bed multi-super specialty hospital that integrates world-class medical technology with affordable care, serving as a regional healthcare hub with centers of excellence in maternal-child health, chronic disease management, and surgical specialties, while maintaining our founding principles of community service and spiritual healing values that honor our connection to Shree Krishna Pranami Mandir.                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}

  
   

    

    {/* Values List */}
    <motion.div
      
      className=" bg-white mt-10 rounded-xl border-2 border-gray-200 p-8 md:p-10 max-w-4xl mx-auto"
    >
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Commitment</h2>
      <ul className="space-y-4">
        {[
          "Compassionate patient-centered care",
          "Medical excellence with integrity",
          "Community trust & transparency",
          "Affordable access for all",
          "Spiritual harmony in healing"
        ].map((item, index) => (
          <motion.li
            key={index}
            
            className="flex items-start"
          >
            <span className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-700 text-lg">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  

      </div>
    </section>
  );
};

export default AboutSection;