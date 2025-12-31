import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/ContactUs";

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={< Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
};

export default App;
