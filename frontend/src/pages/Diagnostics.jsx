import { useContext } from "react";
import { AppContext } from "../Context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Diagnostics = () => {
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
          Diagnostics Department
        </h1>

        <p
          className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg mb-6`}
        >
          Our Diagnostics department offers accurate and reliable testing
          services using advanced laboratory equipment and imaging technology.
        </p>

        <ul
          className={`list-disc pl-6 ${isDark ? "text-gray-400" : "text-gray-600"} space-y-2`}
        >
          <li>Blood and pathology tests</li>
          <li>Digital X-ray and imaging</li>
          <li>Ultrasound and scan services</li>
          <li>Fast and accurate diagnostic reports</li>
        </ul>

        <p
          className={`mt-8 text-sm ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}
        >
          *Backend integration and reports can be added in future enhancements.
        </p>
        </div>
        <div className="right w-full md:w-[40%] flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQHhkCUfT0SQXg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691127475634?e=2147483647&v=beta&t=-WDC7Mqlj3VHPZvGa34Kj_ukGfXO-oCDn-cthA5V3Qs"
            alt="Diagnostics Department"
            className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg"
          />
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Diagnostics;
