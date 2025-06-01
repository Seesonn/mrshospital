import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../components/ui/AnimatedButton";
import h2 from "../assets/h2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState("contact");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans, including Medicare, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please contact our billing department for specific information about your insurance coverage.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our main number at   +977 9764453354, using our online appointment booking system, or visiting one of our locations in person. We strive to accommodate urgent cases as quickly as possible.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring your insurance card, photo ID, a list of current medications, any relevant medical records or test results, and a list of questions you may have for the doctor. Arriving 15 minutes early to complete paperwork is recommended.",
    },
    {
      question: "Do you offer telehealth services?",
      answer:
        "Yes, we offer telehealth services for many types of appointments. Please call our office to determine if your medical concern is appropriate for a virtual visit. Our telehealth platform is secure, easy to use, and accessible from most devices.",
    },
    {
      question: "What are your payment options?",
      answer:
        "We accept cash, checks, and all major credit cards. Payment plans are available for those who qualify. Please speak with our billing department to discuss your specific situation and options.",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={h2}
            alt="Contact Us"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              We're here to help. Reach out to us with any questions or to
              schedule an appointment. Our team is dedicated to providing you
              with the best possible care and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-10 gap-3">
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${activeTab === "contact"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab("locations")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${activeTab === "locations"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Our Locations
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${activeTab === "faq"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              FAQs
            </button>
          </div>

          {/* Contact Form */}
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <AnimatedButton type="submit">Send Message</AnimatedButton>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">Muktidham, Itahari, Sunsari, Koshi Province, NEPAL </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+977 9764453354</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">mrsphospital@gmail.com</p>

                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Available
                      </h3>
                      <p className="text-gray-600">
                        24/7 for medical emergencies

                      </p>

                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/mrsphospital"
                      className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    {/* <a
                      href="#"
                      className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a> */}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Locations Tab */}
          {activeTab === "locations" && (
            <div>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.175497085545!2d87.2841078!3d26.6609569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d0061863dc7%3A0xe9593d949a697997!2sMRS%20Pranami%20Hospital-%20Itahari!5e0!3m2!1sen!2snp!4v1712345678901!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location of MRS Pranami Hospital, Itahari"
                  aria-label="Location of MRS Pranami Hospital on Google Maps"
                  className="absolute top-0 left-0"
                ></iframe>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">
                  Find answers to common questions about our services,
                  appointments, and policies. If you don't see your question
                  here, please contact us directly.
                </p>
              </motion.div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <svg
                          className="w-6 h-6 text-primary mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-10">
                <p className="text-gray-600 mb-6">
                  Don't see your question here? Contact us directly and we'll be
                  happy to help.
                </p>
                <AnimatedButton onClick={() => setActiveTab("contact")}>
                  Ask a Question
                </AnimatedButton>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="mb-8">
              Our team is available 24/7 to assist you with any medical
              emergencies or urgent inquiries. Don't hesitate to call our
              emergency hotline for immediate assistance.
            </p>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2">Emergency </h3>
              <p className="text-3xl font-bold">+977 9764453354</p>
              <p className="text-sm mt-2">
                Available 24/7 for medical emergencies
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
