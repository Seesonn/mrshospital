import { motion } from "framer-motion";

const Events = () => {
    const events = [
        {
            title: "Free Health Camp",
            date: "April 15, 2024",
            time: "9:00 AM - 4:00 PM",
            description: "Join us for a free health checkup camp including general health screening, blood pressure monitoring, and basic diagnostic tests.",
            location: "Hospital Main Building"
        },
        {
            title: "Diabetes Awareness Workshop",
            date: "April 20, 2024",
            time: "2:00 PM - 4:00 PM",
            description: "Learn about diabetes prevention, management, and lifestyle modifications from our expert endocrinologists.",
            location: "Conference Hall"
        },
        {
            title: "Women's Health Seminar",
            date: "April 25, 2024",
            time: "11:00 AM - 1:00 PM",
            description: "Special session on women's health issues, preventive care, and wellness by our gynecology department.",
            location: "Seminar Room"
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with our latest events, health camps, and educational programs designed to promote community health and wellness.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg p-6 border-2 border-gray-200"
                        >
                            <div className="flex flex-col">
                                <h3 className="text-base font-semibold text-gray-800 mb-2">
                                    {event.title}
                                </h3>
                                <div className="flex items-center text-gray-600 text-xs mb-2">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {event.date}
                                </div>
                                <div className="flex items-center text-gray-600 text-xs mb-2">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {event.time}
                                </div>
                                <div className="flex items-center text-gray-600 text-xs mb-3">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {event.location}
                                </div>
                                <p className="text-gray-600 text-xs">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events; 