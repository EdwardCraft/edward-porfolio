import { Routes, Route } from "react-router-dom";

import Home from "Screens/Home";
import About from "Screens/About";
import Contact from "Screens/Contact";
import Work from "Screens/Work";

const BaseRoutes = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/work" element={<Work />} />
  </Routes>;
};

export default BaseRoutes;
