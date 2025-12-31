import { useContext } from "react";
import { AppContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pediatrics = () => {
  const { isDark } = useContext(AppContext);
  return (
    <div
      className={`pt-24 min-h-screen transition ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        <div className="left w-full md:w-[60%]">
          <h1
            className={`text-4xl font-bold mb-4 ${
              isDark ? "text-blue-400" : "text-blue-700"
            }`}
          >
            Pediatrics Department
          </h1>

          <p
            className={`${
              isDark ? "text-gray-400" : "text-gray-600"
            } text-lg mb-6`}
          >
            Our Pediatrics department provides compassionate healthcare for
            infants, children, and adolescents in a safe and friendly
            environment.
          </p>

          <ul
            className={`list-disc pl-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            } space-y-2`}
          >
            <li>Newborn and child health checkups</li>
            <li>Vaccination and immunization</li>
            <li>Child growth and development care</li>
            <li>Pediatric emergency services</li>
          </ul>

          <p
            className={`mt-8 text-sm ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            *Designed to showcase reusable layout and clean UI practices.
          </p>
        </div>
        <div className="right w-full md:w-[40%] flex justify-center">
          <img
            src="https://devrajhospital.co.in/wp-content/uploads/2023/03/pediatric-surgery-1.jpeg"
            alt="Pediatrics Department"
            className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pediatrics;
