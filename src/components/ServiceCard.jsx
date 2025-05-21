import { motion } from "framer-motion";

const ServiceCard = ({ image, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
     
     
      viewport={{ once: true, margin: "-20px" }}
      className="w-full max-w-[300px] bg-white rounded-lg overflow-hidden flex flex-col border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
    >
      {/* Image container */}
      <div className="relative w-full aspect-[1/1] overflow-hidden border-b-2 border-gray-200">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            
            
            
            onError={(e) => {
              e.target.src = "/placeholder-service.jpg";
              e.target.className = "w-full h-full object-contain p-6 bg-gray-50";
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-50 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Title area */}
      <div className="p-3  text-center bg-primary">
        <h3 className="text-sm font-medium text-white line-clamp-2 leading-tight">
          {title || "Service"}
        </h3>
      </div>
    </motion.div>
  );
};

export default ServiceCard;