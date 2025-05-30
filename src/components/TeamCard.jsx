import { motion } from "framer-motion"

const TeamCard = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      className="bg-white overflow-hidden flex flex-col border border-gray-200 "
    >
      {/* Image container */}
      <div className="relative w-full  overflow-hidden">
        {doctor.image ? (
          <motion.img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "/placeholder-doctor.jpg";
              e.target.className = "w-full h-full object-contain p-4 bg-gray-50";
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4">
            <svg
              className="w-10 h-10 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Doctor info - Compact but shows all details */}
      <div className="p-3 flex-grow flex flex-col bg-white space-y-1.5">
        <h3 className="text-[15px] font-semibold text-gray-800 leading-tight">
          {doctor.name}
        </h3>
        <p className="text-xs text-primary font-medium mb-1">
          {doctor.title}
        </p>
        
        {/* Qualifications - Smaller but fully visible */}
        <div className="space-y-1 text-[11px] text-gray-600">
          {doctor.qualifications.map((qualification, index) => (
            <p key={index} className="flex items-start">
              <span className="text-primary mr-1 text-[8px] mt-[3px]">•</span>
              <span className="leading-tight">{qualification}</span>
            </p>
          ))}
        </div>
        
        {/* NMC Number (if exists) */}
        {doctor.nmcNo && (
          <p className="text-[10px] font-medium text-gray-700 pt-1.5 border-t border-gray-100 mt-1.5">
            <span className="font-semibold">NMC:</span> {doctor.nmcNo}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default TeamCard