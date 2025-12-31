import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../Context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// demo icons (emoji used to keep it simple)
const servicesData = [
  {
    title: "Emergency Care",
    path: "/services/emergency-care",
    icon: "🚑",
    desc: "24/7 emergency services with rapid medical response.",
  },
  {
    title: "Cardiology",
    path: "/services/cardiology",
    icon: "❤️",
    desc: "Advanced heart care with modern diagnostic technology.",
  },
  {
    title: "Orthopedics",
    path: "/services/orthopedics",
    icon: "🦴",
    desc: "Bone, joint and spine treatments by expert surgeons.",
  },
  {
    title: "Neurology",
    path: "/services/neurology",
    icon: "🧠",
    desc: "Specialized care for brain and nervous system disorders.",
  },
  {
    title: "Pediatrics",
    path: "/services/pediatrics",
    icon: "👶",
    desc: "Comprehensive healthcare services for children.",
  },
  {
    title: "Diagnostics",
    path: "/services/diagnostics",
    icon: "🧪",
    desc: "Accurate lab tests and imaging services.",
  },
];

const Services = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen pt-20 transition
        ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}
    >
      <Navbar />

      {/* Header */}
      <section className="py-16 text-center">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4
            ${isDark ? "text-blue-400" : "text-blue-800"}`}
        >
          Our Medical Services
        </h1>
        <p
          className={`max-w-2xl mx-auto text-lg
            ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          We offer a wide range of medical services delivered by experienced
          doctors using advanced healthcare technology.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {servicesData.map((item, index) => (
            <Link to={item.path} className="block" key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-2xl shadow-lg text-center transition
                  ${isDark ? "bg-gray-800" : "bg-white"}`}
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3
                  className={`text-xl font-semibold mb-2
                    ${isDark ? "text-blue-400" : "text-blue-700"}`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {item.desc}
                </p>
                <span className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                  View More &rarr;
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
     <Footer/>
    </div>
  );
};

export default Services;
