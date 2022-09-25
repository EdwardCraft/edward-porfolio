import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLayout from "Layouts/UserLayout";
import Home from "Screens/Home";
import About from "Screens/About";
import Contact from "Screens/Contact";
import Work from "Screens/Work";
import NotFound from "Screens/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
