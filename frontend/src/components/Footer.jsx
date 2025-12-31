import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/ThemeContext";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const { isDark } = useContext(AppContext);

  return (
    <footer
      className={`transition
        ${isDark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"}`}
    >
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            SDK Hospital
          </h2>
          <p className="text-sm leading-relaxed">
            SDK Hospital is committed to providing high-quality healthcare
            services with advanced facilities, experienced doctors, and
            compassionate patient care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link
        to="/"
        className="hover:text-blue-600 transition cursor-pointer"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/services"
        className="hover:text-blue-600 transition cursor-pointer"
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        className="hover:text-blue-600 transition cursor-pointer"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Emergency Care</li>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              MG Road, Lucknow, India
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
             +321 567 89 0123
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              info@SDKhospital.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className={`${isDark ? "border-gray-700" : "border-gray-300"} border-t`} />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>
          © {new Date().getFullYear()} SDK Hospital. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
            <FaFacebookF />
          </Link>
          <Link className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
            <FaTwitter />
          </Link>
          <Link className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
            <FaInstagram />
          </Link>
          <Link  className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
