
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedButton from "../components/ui/AnimatedButton"


const Appointments = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    appointmentType: "regular",
    package: "",
    reason: "",
    symptoms: [],
    previousVisit: "no",
    insurance: "no",
    insuranceProvider: "",
    policyNumber: "",
    emergencyContact: "",
    emergencyPhone: "",
    additionalNotes: "",
  })

  const [availableTimes, setAvailableTimes] = useState([
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      const updatedSymptoms = [...formData.symptoms]
      if (checked) {
        updatedSymptoms.push(value)
      } else {
        const index = updatedSymptoms.indexOf(value)
        if (index > -1) {
          updatedSymptoms.splice(index, 1)
        }
      }
      setFormData({ ...formData, symptoms: updatedSymptoms })
    } else {
      setFormData({ ...formData, [name]: value })
    }

    // Update available times based on selected date (just a simulation)
    if (name === "date") {
      // Simulate different available times for different dates
      const day = new Date(value).getDay()
      if (day === 0) {
        // Sunday
        setAvailableTimes(["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"])
      } else if (day === 6) {
        // Saturday
        setAvailableTimes(["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"])
      } else {
        setAvailableTimes([
          "09:00 AM",
          "09:30 AM",
          "10:00 AM",
          "10:30 AM",
          "11:00 AM",
          "11:30 AM",
          "01:00 PM",
          "01:30 PM",
          "02:00 PM",
          "02:30 PM",
          "03:00 PM",
          "03:30 PM",
          "04:00 PM",
          "04:30 PM",
        ])
      }
    }

    // Update available doctors based on department
    if (name === "department") {
      // Reset doctor selection when department changes
      setFormData({ ...formData, [name]: value, doctor: "" })
    }
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit form logic would go here
    alert("Appointment booked successfully!")
    // Reset form or redirect
  }

  const departments = [
    { id: "cardiology", name: "Cardiology" },
    { id: "neurology", name: "Neurology" },
    { id: "orthopedics", name: "Orthopedics" },
    { id: "pediatrics", name: "Pediatrics" },
    { id: "dermatology", name: "Dermatology" },
    { id: "gynecology", name: "Gynecology" },
    { id: "ophthalmology", name: "Ophthalmology" },
    { id: "ent", name: "ENT (Ear, Nose, Throat)" },
    { id: "dental", name: "Dental" },
    { id: "general", name: "General Medicine" },
  ]

  const doctors = {
    cardiology: [
      { id: "dr-smith", name: "Dr. John Smith" },
      { id: "dr-chen", name: "Dr. Lisa Chen" },
    ],
    neurology: [
      { id: "dr-johnson", name: "Dr. Sarah Johnson" },
      { id: "dr-wilson", name: "Dr. James Wilson" },
    ],
    orthopedics: [
      { id: "dr-martinez", name: "Dr. David Martinez" },
      { id: "dr-patel", name: "Dr. Anita Patel" },
    ],
    pediatrics: [
      { id: "dr-brown", name: "Dr. Michael Brown" },
      { id: "dr-garcia", name: "Dr. Maria Garcia" },
    ],
    dermatology: [
      { id: "dr-lee", name: "Dr. Jennifer Lee" },
      { id: "dr-taylor", name: "Dr. Robert Taylor" },
    ],
    gynecology: [
      { id: "dr-rodriguez", name: "Dr. Elena Rodriguez" },
      { id: "dr-kim", name: "Dr. Susan Kim" },
    ],
    ophthalmology: [
      { id: "dr-wang", name: "Dr. David Wang" },
      { id: "dr-singh", name: "Dr. Priya Singh" },
    ],
    ent: [
      { id: "dr-miller", name: "Dr. Thomas Miller" },
      { id: "dr-jackson", name: "Dr. Emily Jackson" },
    ],
    dental: [
      { id: "dr-white", name: "Dr. Jessica White" },
      { id: "dr-thompson", name: "Dr. Mark Thompson" },
    ],
    general: [
      { id: "dr-davis", name: "Dr. Emily Davis" },
      { id: "dr-reynolds", name: "Dr. Elizabeth Reynolds" },
    ],
  }

  const packages = [
    { id: "basic", name: "Basic Health Package", price: 2999 },
    { id: "premium", name: "Premium Health Package", price: 16499 },
    { id: "cardiac", name: "Cardiac Health Package", price: 8999 },
    { id: "women", name: "Women's Health Package", price: 9999 },
    { id: "executive", name: "Executive Health Package", price: 24999 },
    { id: "senior", name: "Senior Citizen Package", price: 12999 },
  ]

  const commonSymptoms = [
    "Fever",
    "Cough",
    "Headache",
    "Fatigue",
    "Shortness of breath",
    "Chest pain",
    "Abdominal pain",
    "Nausea/Vomiting",
    "Dizziness",
    "Rash",
    "Joint pain",
    "Back pain",
    "Sore throat",
  ]

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-center">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === step
                    ? "bg-primary text-white"
                    : currentStep > step
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > step ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step
                )}
              </div>
              {step < 4 && <div className={`w-20 h-1 ${currentStep > step ? "bg-green-500" : "bg-gray-200"}`}></div>}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 px-4">
          <div className="text-center w-20">
            <div className="text-sm font-medium">Personal Info</div>
          </div>
          <div className="text-center w-20">
            <div className="text-sm font-medium">Appointment</div>
          </div>
          <div className="text-center w-20">
            <div className="text-sm font-medium">Medical Info</div>
          </div>
          <div className="text-center w-20">
            <div className="text-sm font-medium">Confirmation</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://imgs.search.brave.com/UOtEK61oqKRa51O--udkIM77PGtOmBirxkZo88GhOIA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/Y2luZS5maXUuZWR1/L19hc3NldHMvaW1h/Z2VzL2JlY29taW5n/LXZvbHVudGFyeS1m/YWN1bHR5LTIuanBl/Zw"
            alt="Book Appointment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Schedule your visit with our specialists for personalized care and treatment. Our easy booking process
              ensures you get the care you need, when you need it.
            </p>
          </motion.div>
        </div>

        {/* <ModernWaveDivider position="bottom" color="#ffffff" height={70} /> */}
      </section>

      {/* Appointment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              {renderStepIndicator()}

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
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
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Phone"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="gender" className="block text-gray-700 mb-2">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="dob" className="block text-gray-700 mb-2">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="emergencyContact" className="block text-gray-700 mb-2">
                          Emergency Contact Name
                        </label>
                        <input
                          type="text"
                          id="emergencyContact"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Emergency Contact Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="emergencyPhone" className="block text-gray-700 mb-2">
                          Emergency Contact Phone
                        </label>
                        <input
                          type="tel"
                          id="emergencyPhone"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Emergency Contact Phone"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <AnimatedButton onClick={nextStep}>Next: Appointment Details</AnimatedButton>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Appointment Details */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Appointment Details</h2>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">
                        Appointment Type <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            formData.appointmentType === "regular"
                              ? "border-primary bg-primary bg-opacity-10"
                              : "border-gray-200 hover:border-primary"
                          }`}
                          onClick={() => setFormData({ ...formData, appointmentType: "regular" })}
                        >
                          <div className="flex items-center mb-2">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                formData.appointmentType === "regular" ? "border-primary" : "border-gray-400"
                              }`}
                            >
                              {formData.appointmentType === "regular" && (
                                <div className="w-3 h-3 rounded-full bg-primary"></div>
                              )}
                            </div>
                            <span className="ml-2 font-medium">Regular Visit</span>
                          </div>
                          <p className="text-sm text-gray-600">Standard consultation with a doctor</p>
                        </div>

                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            formData.appointmentType === "specialist"
                              ? "border-primary bg-primary bg-opacity-10"
                              : "border-gray-200 hover:border-primary"
                          }`}
                          onClick={() => setFormData({ ...formData, appointmentType: "specialist" })}
                        >
                          <div className="flex items-center mb-2">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                formData.appointmentType === "specialist" ? "border-primary" : "border-gray-400"
                              }`}
                            >
                              {formData.appointmentType === "specialist" && (
                                <div className="w-3 h-3 rounded-full bg-primary"></div>
                              )}
                            </div>
                            <span className="ml-2 font-medium">Specialist Consultation</span>
                          </div>
                          <p className="text-sm text-gray-600">Consultation with a specialist doctor</p>
                        </div>

                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            formData.appointmentType === "package"
                              ? "border-primary bg-primary bg-opacity-10"
                              : "border-gray-200 hover:border-primary"
                          }`}
                          onClick={() => setFormData({ ...formData, appointmentType: "package" })}
                        >
                          <div className="flex items-center mb-2">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                formData.appointmentType === "package" ? "border-primary" : "border-gray-400"
                              }`}
                            >
                              {formData.appointmentType === "package" && (
                                <div className="w-3 h-3 rounded-full bg-primary"></div>
                              )}
                            </div>
                            <span className="ml-2 font-medium">Health Package</span>
                          </div>
                          <p className="text-sm text-gray-600">Comprehensive health checkup package</p>
                        </div>
                      </div>
                    </div>

                    {formData.appointmentType === "package" ? (
                      <div className="mb-6">
                        <label htmlFor="package" className="block text-gray-700 mb-2">
                          Select Package <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="package"
                          name="package"
                          value={formData.package}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required={formData.appointmentType === "package"}
                        >
                          <option value="">Select Package</option>
                          {packages.map((pkg) => (
                            <option key={pkg.id} value={pkg.id}>
                              {pkg.name} - Rs. {pkg.price}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="department" className="block text-gray-700 mb-2">
                              Department <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="department"
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              required={formData.appointmentType !== "package"}
                            >
                              <option value="">Select Department</option>
                              {departments.map((dept) => (
                                <option key={dept.id} value={dept.id}>
                                  {dept.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label htmlFor="doctor" className="block text-gray-700 mb-2">
                              Doctor <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="doctor"
                              name="doctor"
                              value={formData.doctor}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              required={formData.appointmentType !== "package"}
                              disabled={!formData.department}
                            >
                              <option value="">
                                {formData.department ? "Select Doctor" : "Please select a department first"}
                              </option>
                              {formData.department &&
                                doctors[formData.department].map((doctor) => (
                                  <option key={doctor.id} value={doctor.id}>
                                    {doctor.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="date" className="block text-gray-700 mb-2">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-gray-700 mb-2">
                          Preferred Time <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          disabled={!formData.date}
                        >
                          <option value="">{formData.date ? "Select Time" : "Please select a date first"}</option>
                          {formData.date &&
                            availableTimes.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="reason" className="block text-gray-700 mb-2">
                        Reason for Visit <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Please describe your symptoms or reason for appointment"
                        required
                      ></textarea>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <AnimatedButton onClick={prevStep} className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                        Back
                      </AnimatedButton>
                      <AnimatedButton onClick={nextStep}>Next: Medical Information</AnimatedButton>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Medical Information */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Medical Information</h2>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Common Symptoms </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {commonSymptoms.map((symptom) => (
                          <div key={symptom} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`symptom-${symptom}`}
                              name="symptoms"
                              value={symptom}
                              checked={formData.symptoms.includes(symptom)}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label htmlFor={`symptom-${symptom}`} className="ml-2 text-sm text-gray-700">
                              {symptom}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Have you visited our hospital before?</label>
                      <div className="flex space-x-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="previousVisitYes"
                            name="previousVisit"
                            value="yes"
                            checked={formData.previousVisit === "yes"}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="previousVisitYes" className="ml-2 text-gray-700">
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="previousVisitNo"
                            name="previousVisit"
                            value="no"
                            checked={formData.previousVisit === "no"}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="previousVisitNo" className="ml-2 text-gray-700">
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Do you have health insurance?</label>
                      <div className="flex space-x-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="insuranceYes"
                            name="insurance"
                            value="yes"
                            checked={formData.insurance === "yes"}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="insuranceYes" className="ml-2 text-gray-700">
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="insuranceNo"
                            name="insurance"
                            value="no"
                            checked={formData.insurance === "no"}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="insuranceNo" className="ml-2 text-gray-700">
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    {formData.insurance === "yes" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="insuranceProvider" className="block text-gray-700 mb-2">
                            Insurance Provider
                          </label>
                          <input
                            type="text"
                            id="insuranceProvider"
                            name="insuranceProvider"
                            value={formData.insuranceProvider}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Insurance Provider"
                          />
                        </div>
                        <div>
                          <label htmlFor="policyNumber" className="block text-gray-700 mb-2">
                            Policy Number
                          </label>
                          <input
                            type="text"
                            id="policyNumber"
                            name="policyNumber"
                            value={formData.policyNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Policy Number"
                          />
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <label htmlFor="additionalNotes" className="block text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Any additional information you would like to provide"
                      ></textarea>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <AnimatedButton onClick={prevStep} className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                        Back
                      </AnimatedButton>
                      <AnimatedButton onClick={nextStep}>Review & Confirm</AnimatedButton>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Review & Confirm</h2>

                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Appointment Summary</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-700">Personal Information</h4>
                          <ul className="mt-2 space-y-1 text-gray-600">
                            <li>
                              <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                            </li>
                            <li>
                              <span className="font-medium">Email:</span> {formData.email}
                            </li>
                            <li>
                              <span className="font-medium">Phone:</span> {formData.phone}
                            </li>
                            <li>
                              <span className="font-medium">Gender:</span>{" "}
                              {formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)}
                            </li>
                            <li>
                              <span className="font-medium">Date of Birth:</span> {formData.dob}
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-700">Appointment Details</h4>
                          <ul className="mt-2 space-y-1 text-gray-600">
                            <li>
                              <span className="font-medium">Type:</span>{" "}
                              {formData.appointmentType.charAt(0).toUpperCase() + formData.appointmentType.slice(1)}
                            </li>
                            {formData.appointmentType === "package" ? (
                              <li>
                                <span className="font-medium">Package:</span>{" "}
                                {packages.find((p) => p.id === formData.package)?.name || ""}
                              </li>
                            ) : (
                              <>
                                <li>
                                  <span className="font-medium">Department:</span>{" "}
                                  {departments.find((d) => d.id === formData.department)?.name || ""}
                                </li>
                                <li>
                                  <span className="font-medium">Doctor:</span>{" "}
                                  {formData.department && formData.doctor
                                    ? doctors[formData.department].find((d) => d.id === formData.doctor)?.name || ""
                                    : ""}
                                </li>
                              </>
                            )}
                            <li>
                              <span className="font-medium">Date:</span> {formData.date}
                            </li>
                            <li>
                              <span className="font-medium">Time:</span> {formData.time}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium text-gray-700">Reason for Visit</h4>
                        <p className="mt-1 text-gray-600">{formData.reason}</p>
                      </div>

                      {formData.symptoms.length > 0 && (
                        <div className="mt-4 t">
                          <h4 className="font-medium text-gray-700">Symptoms</h4>
                          <div className="mt-1  flex flex-wrap gap-2">
                            {formData.symptoms.map((symptom) => (
                              <span
                                key={symptom}
                                className="bg-primary bg-opacity-10 text-white px-2 py-1 rounded-full text-sm"
                              >
                                {symptom}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-yellow-600 mt-0.5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <h4 className="font-medium text-yellow-800">Important Information</h4>
                          <ul className="mt-1 text-sm text-yellow-700 list-disc list-inside space-y-1">
                            <li>Please arrive 15 minutes before your scheduled appointment time.</li>
                            <li>Bring your insurance card and photo ID.</li>
                            <li>
                              If you need to cancel or reschedule, please give at least 24 hours notice by calling
                              1-800-1234-567.
                            </li>
                            {formData.appointmentType === "package" && (
                              <li>
                                For health packages, please fast for 8-12 hours prior to your appointment (water is
                                allowed).
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-gray-700">
                        I confirm that the information provided is accurate and I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          terms and conditions
                        </a>
                        .
                      </label>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <AnimatedButton onClick={prevStep} className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                        Back
                      </AnimatedButton>
                      <AnimatedButton type="submit">Confirm Appointment</AnimatedButton>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Working Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8:00am - 7:00pm</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00am - 6:00pm</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>10:00am - 4:00pm</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency Cases</h3>
              <p className="text-gray-600 mb-3">
                For emergency cases, please call our emergency hotline. Our team is available 24/7 to assist you.
              </p>
              <p className="text-2xl font-bold text-primary">1-800-1234-567</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Appointment Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Arrive 15 minutes early</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bring insurance card and ID</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bring list of current medications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>24-hour cancellation notice required</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our appointment process and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How do I schedule an appointment?",
                  answer:
                    "You can schedule an appointment through our online booking system, by calling our appointment line at 1-800-1234-567, or by visiting our reception desk in person.",
                },
                {
                  question: "What should I bring to my appointment?",
                  answer:
                    "Please bring your insurance card, photo ID, a list of current medications, and any relevant medical records or test results. If you're a new patient, please arrive 15 minutes early to complete paperwork.",
                },
                {
                  question: "How do I cancel or reschedule my appointment?",
                  answer:
                    "To cancel or reschedule, please call our appointment line at least 24 hours in advance. You can also log in to your patient portal to make changes to your appointment.",
                },
                {
                  question: "Do you accept insurance?",
                  answer:
                    "Yes, we accept most major insurance plans. Please contact our billing department for specific information about your insurance coverage.",
                },
                {
                  question: "How long will my appointment take?",
                  answer:
                    "Regular consultations typically last 15-30 minutes. Specialist consultations may take 30-45 minutes. Health package appointments can take 2-4 hours depending on the tests included.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointments
