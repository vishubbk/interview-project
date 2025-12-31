import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from "../Context/ThemeContext";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`pt-24 min-h-screen transition
        ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* ================= CONTACT FORM ================= */}
        <form>


        <div
          className={`p-8 rounded-2xl shadow
            ${isDark ? "bg-gray-800" : "bg-white"}`}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <input
            className="w-full mb-4 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
          <input
            className="w-full mb-4 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          <input
            className="w-full mb-4 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone"
          />
          <textarea
            rows="4"
            className="w-full mb-4 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message"
          />

          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Submit Message
          </button>
        </div>
        </form>

        {/* ================= ADDRESS + MAP ================= */}
        <div
          className={`p-8 rounded-2xl shadow
            ${isDark ? "bg-gray-800" : "bg-white"}`}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Hospital Address
          </h3>

          <p className="flex items-center gap-3 mb-2">
            <FaMapMarkerAlt className="text-blue-600" />
            SDK Hospital,Lucknow, Uttar Pradesh 226012
          </p>
          <p className="flex items-center gap-3 mb-2">
            <FaPhoneAlt className="text-blue-600" />
            +321 567 89 0123
          </p>
          <p className="flex items-center gap-3 mb-6">
            <FaEnvelope className="text-blue-600" />
            info@abchospital.com
          </p>

          {/* GOOGLE MAP */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <iframe
              title="Hospital Location"
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14245.291561055958!2d80.88205275541992!3d26.797845600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc02b585fce3%3A0xa84493c88b8a02f7!2sSKD%20Hospital!5e0!3m2!1sen!2sin!4v1767201361995!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
