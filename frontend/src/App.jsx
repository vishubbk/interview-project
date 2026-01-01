import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/ContactUs";
import Cardiology from "./pages/Cardiology";
import Neurology from "./pages/Neurology";
import Pediatrics from "./pages/Pediatrics";
import Orthopedics from "./pages/Orthopedics";
import Diagnostics from "./pages/Diagnostics";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/cardiology" element={<Cardiology />} />
      <Route path="/services/neurology" element={<Neurology/>} />
      <Route path="/services/pediatrics" element={<Pediatrics/>} />
      <Route path="/services/orthopedics" element={<Orthopedics/>} />
      <Route path="/services/diagnostics" element={<Diagnostics/>} />

    </Routes>
  );
};

export default App;
