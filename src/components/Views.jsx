import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Section from "./Section";

const Views = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          location={location}
          key={location.pathname}
          path="/"
          element={<Section />}
        >
          <Route index element={<About key="home" />} />
          <Route path="/projects" element={<Projects key="projects" />} />
          <Route path="/contactme" element={<ContactMe key="contactme" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Views;
