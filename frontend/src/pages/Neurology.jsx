import { useContext } from "react";
import { AppContext } from "../Context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Neurology = () => {
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
            Neurology Department
          </h1>

          <p
            className={`${
              isDark ? "text-gray-400" : "text-gray-600"
            } text-lg mb-6`}
          >
            Our Neurology department specializes in diagnosing and treating
            disorders of the brain, spinal cord, and nervous system using
            advanced medical technology.
          </p>

          <ul
            className={`list-disc pl-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            } space-y-2`}
          >
            <li>Stroke and paralysis treatment</li>
            <li>Epilepsy and seizure management</li>
            <li>Brain and nerve disorder diagnosis</li>
            <li>Neurological rehabilitation</li>
          </ul>

          <p
            className={`mt-8 text-sm ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            *This page demonstrates modular routing and scalable component design.
          </p>
        </div>
        <div className="right w-full md:w-[40%] flex justify-center">
          <img
            src="https://hindumissionhospital.in/wp-content/uploads/2022/09/neurology-human.webp"
            alt="Neurology Department"
            className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Neurology;
