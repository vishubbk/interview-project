import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";

// demo icons (emoji used to keep it simple)
const servicesData = [
  {
    title: "Emergency Care",
    icon: "🚑",
    desc: "24/7 emergency services with rapid medical response.",
  },
  {
    title: "Cardiology",
    icon: "❤️",
    desc: "Advanced heart care with modern diagnostic technology.",
  },
  {
    title: "Orthopedics",
    icon: "🦴",
    desc: "Bone, joint and spine treatments by expert surgeons.",
  },
  {
    title: "Neurology",
    icon: "🧠",
    desc: "Specialized care for brain and nervous system disorders.",
  },
  {
    title: "Pediatrics",
    icon: "👶",
    desc: "Comprehensive healthcare services for children.",
  },
  {
    title: "Diagnostics",
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
            <motion.div
              key={index}
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
