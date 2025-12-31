import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
          ABC Hospital
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl dark:text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow">
          <ul className="flex flex-col gap-4 px-6 py-4 font-medium text-gray-700 dark:text-gray-200">
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
