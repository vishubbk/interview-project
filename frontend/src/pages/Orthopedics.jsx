import { useContext } from "react";
import { AppContext } from "../Context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orthopedics = () => {
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
          Orthopedics Department
        </h1>

        <p
          className={`${
            isDark ? "text-gray-400" : "text-gray-600"
          } text-lg mb-6`}
        >
          Our Orthopedics department focuses on bone, joint, and muscle care
          with modern treatment techniques and skilled surgeons.
        </p>

        <ul className={`list-disc pl-6 ${isDark ? "text-gray-400" : "text-gray-600"} space-y-2`}>
          <li>Bone fracture treatment</li>
          <li>Joint replacement surgery</li>
          <li>Spine and back care</li>
          <li>Sports injury treatment</li>
        </ul>

        <p className={`mt-8 text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
          *This section demonstrates routing and component structure.
        </p>
        </div>
        <div className="right w-full md:w-[40%] flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7r94zVndS_1M0wf4v3MvtNzsXbmKgzJfnQ&s"
            alt="Orthopedics Department"
            className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Orthopedics;
