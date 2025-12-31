import React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className="pt-20">
      <Navbar />

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Our Services</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {["Emergency", "Cardiology", "Orthopedics", "Neurology", "Pediatrics"].map(
            (service, index) => (
              <div key={index} className="p-6 bg-white shadow rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Professional medical care with expert doctors.
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
