import { motion } from "framer-motion";
import { useContext } from "react";
import {
  FaAmbulance,
  FaBaby,
  FaBone,
  FaBrain,
  FaHeartbeat,
  FaHospital,
  FaMicroscope,
  FaPhoneAlt,
  FaUserMd,
  FaXRay,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AppContext } from "../Context/ThemeContext";

/* ================= DEPARTMENTS DATA ================= */
const departments = [
  {
    title: "Cardiology",
    desc: "Advanced heart care with modern diagnostic and treatment facilities.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Neurology",
    desc: "Specialized care for brain, spine, and nervous system disorders.",
    icon: <FaBrain />,
  },
  {
    title: "Orthopedics",
    desc: "Bone, joint, and spine treatments by expert surgeons.",
    icon: <FaBone />,
  },
  {
    title: "Emergency Care",
    desc: "24/7 emergency services with rapid medical response.",
    icon: <FaAmbulance />,
  },
  {
    title: "Pediatrics",
    desc: "Compassionate healthcare services specially designed for children.",
    icon: <FaBaby />,
  },
  {
    title: "General Medicine",
    desc: "Comprehensive primary care and diagnosis for all age groups.",
    icon: <FaUserMd />,
  },
];

/* ================= CONSULTANTS ================= */
const consultants = [
  {
    name: "Marc Parcival",
    specialty: "Cardiologist",
    photo: "https://st.ourhtmldemo.com/new/Hospitals/images/team/1.jpg",
    email: "marc@gmail.com",
    phone: "+321 567 89 0123",
  },
  {
    name: "Sarah Johnson",
    specialty: "Neurologist",
    photo: "https://st.ourhtmldemo.com/new/Hospitals/images/team/2.jpg",
    email: "sarah@gmail.com",
    phone: "+321 567 89 0123",
  },
  {
    name: "James William",
    specialty: "Orthopedic",
    photo: "https://st.ourhtmldemo.com/new/Hospitals/images/team/3.jpg",
    email: "james@gmail.com",
    phone: "+321 567 89 0123",
  },
  {
    name: "Emily Stone",
    specialty: "Pediatrician",
    photo: "https://st.ourhtmldemo.com/new/Hospitals/images/team/4.jpg",
    email: "emily@gmail.com",
    phone: "+321 567 89 0123",
  },
];

/* ================= FACILITIES ================= */
const facilities = [
  {
    title: "Modern Laboratory",
    icon: <FaMicroscope />,
    desc: "Advanced diagnostic labs with accurate and fast reports.",
  },
  {
    title: "Digital X-Ray",
    icon: <FaXRay />,
    desc: "High-quality imaging for precise diagnosis.",
  },
  {
    title: "ICU & Operation Theatres",
    icon: <FaHospital />,
    desc: "Fully equipped ICUs and modern operation theatres.",
  },
];

const Home = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen transition
        ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <Navbar />

      {/* ================= EMERGENCY BAR ================= */}
      <div
        className={`fixed top-15 left-0 w-full z-[60] py-2 text-sm font-semibold tracking-wide
    ${isDark ? "bg-red-700 text-white" : "bg-red-600 text-white"}`}
      >
        <span className="animate-pulse  flex justify-center items-center gap-2">
          <FaPhoneAlt />
          Emergency Helpline:+321 567 89 0123 (24/7)
        </span>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg"
          alt="Hospital background"
        />

        <div
          className={`absolute inset-0
            ${
              isDark
                ? "bg-gradient-to-r from-black/90 via-black/70 to-transparent"
                : "bg-gradient-to-r from-white/90 via-white/70 to-transparent"
            }`}
        />

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative z-10 max-w-xl ml-6 md:ml-20 rounded-xl p-8 shadow-xl
            ${isDark ? "bg-gray-800/90" : "bg-white/90"}`}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Hospitals providing total healthcare{" "}
            <span className="text-blue-600">Solutions.</span>
          </h1>

          <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-6`}>
            Complete healthcare services with advanced facilities and
            experienced doctors.
          </p>
        </motion.div>
      </section>

      {/* ================= MEDICAL DEPARTMENTS ================= */}
      <section className={`${isDark ? "bg-gray-900" : "bg-white"} py-24`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Medical Departments
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`p-8 rounded-2xl shadow transition
                  ${isDark ? "bg-gray-800" : "bg-gray-50 hover:shadow-2xl"}`}
              >
                <div className="text-4xl text-blue-600 mb-4">{dept.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {dept.desc}
                </p>
                {/* Add Link to department page if route exists */}
                {dept.title === "Cardiology" && (
                  <Link
                    to="/services/cardiology"
                    className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                  >
                    Go to Cardiology
                  </Link>
                )}
                {dept.title === "Neurology" && (
                  <Link
                    to="/services/neurology"
                    className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                  >
                    Go to Neurology
                  </Link>
                )}
                {dept.title === "Orthopedics" && (
                  <Link
                    to="/services/orthopedics"
                    className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                  >
                    Go to Orthopedics
                  </Link>
                )}
                {dept.title === "Pediatrics" && (
                  <Link
                    to="/services/pediatrics"
                    className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                  >
                    Go to Pediatrics
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONSULTANTS ================= */}
      <section className={`${isDark ? "bg-gray-800" : "bg-gray-100"} py-24`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our Expert Consultants
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {consultants.map((c, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-2xl shadow transition text-center
                  ${isDark ? "bg-gray-900" : "bg-white hover:shadow-xl"}`}
              >
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="text-blue-600 mb-2">{c.specialty}</p>
                <p className="text-sm text-gray-500">{c.email}</p>
                <p className="text-sm text-gray-500">{c.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className={`${isDark ? "bg-gray-900" : "bg-white"} py-24`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {facilities.map((f, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`p-8 rounded-2xl shadow text-center transition
                  ${isDark ? "bg-gray-800" : "bg-gray-50 hover:shadow-xl"}`}
              >
                <div className="text-5xl text-blue-600 mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
