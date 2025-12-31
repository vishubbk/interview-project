import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="pt-20">
      <Navbar />

      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <input className="w-full mb-4 p-3 border rounded" placeholder="Name" />
          <input className="w-full mb-4 p-3 border rounded" placeholder="Email" />
          <input className="w-full mb-4 p-3 border rounded" placeholder="Phone" />
          <textarea className="w-full mb-4 p-3 border rounded" placeholder="Message"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded">
            Submit
          </button>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Hospital Address</h3>
          <p>ABC Hospital</p>
          <p>MG Road, Lucknow</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@abchospital.com</p>

          <div className="mt-6 w-full h-64 bg-gray-200 flex items-center justify-center">
            Google Map Here
          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;
