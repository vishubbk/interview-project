import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isDark, setIsDark } = useContext(AppContext);

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow z-50 transition
        ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className={`text-2xl font-bold ${isDark ? "text-blue-400" : "text-blue-700"}`}>
          ABC Hospital
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-3 py-2 rounded text-sm
              ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`${isDark ? "bg-gray-900" : "bg-white"} md:hidden shadow`}>
          <ul className="flex flex-col gap-4 px-6 py-4 font-medium">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/services">Services</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
