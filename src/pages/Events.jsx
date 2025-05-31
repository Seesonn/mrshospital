import { motion } from "framer-motion";
import h3 from "../assets/h3.jpg";

const Events = () => {
    // Empty events array - no events currently scheduled
    const events = [];

    return (
        <div className="pt-32 pb-20">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={h3}
                        alt="Events"
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
                        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-lg mb-8">
                            Stay tuned for our upcoming health camps, workshops, and community events. We're committed to promoting health awareness and community wellness.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Events</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We regularly organize various health-related events for our community. Check back soon for upcoming events.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center py-12"
                    >
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                            <div className="mb-8">
                                <div className="bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Events Currently Scheduled</h3>
                                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                                    We're currently planning our next series of health camps, workshops, and community events.
                                    Subscribe to our updates to be notified when new events are announced.
                                </p>
                                <div className="space-y-4">

                                    <p className="text-sm text-gray-500 mt-6">
                                        You can also follow us on social media for real-time updates about upcoming events
                                    </p>
                                </div>
                            </div>


                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Events; 