import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import heroDoctor from "../assets/hero-doctor.png";
import cardiologyImg from "../assets/cardiology.png";
import neurologyImg from "../assets/neurology.png";
import emergencyImg from "../assets/emergency.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-28 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4">
              Caring For Life
            </h1>
            <p className="text-xl text-gray-700 mb-3">
              Quality Healthcare for Everyone
            </p>
            <p className="text-gray-600 max-w-md mb-8">
              ABC Hospital provides advanced medical services with experienced
              doctors, modern facilities and 24/7 emergency support.
            </p>

            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={heroDoctor}
              alt="Doctor"
              className="w-[420px] drop-shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Welcome to ABC Hospital
          </h2>
          <p className="text-gray-700 text-lg">
            ABC Hospital is a multi-specialty healthcare center committed to
            delivering world-class medical services. Our focus is on patient
            safety, advanced treatments and compassionate care.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our Medical Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow text-center"
            >
              <img src={cardiologyImg} className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Cardiology
              </h3>
              <p className="text-gray-600">
                Comprehensive heart care with modern technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow text-center"
            >
              <img src={neurologyImg} className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Neurology
              </h3>
              <p className="text-gray-600">
                Advanced treatment for brain and nervous system.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow text-center"
            >
              <img src={emergencyImg} className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Emergency Care
              </h3>
              <p className="text-gray-600">
                24/7 emergency services with rapid response.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EMERGENCY HIGHLIGHT */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-400 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">
          Emergency Call: +91 98765 43210
        </h2>
        <p className="text-lg">Available 24/7</p>
      </section>
    </div>
  );
};

export default Home;
