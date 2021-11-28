import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import About from "./pages/About/About";
import ContactMe from "./pages/ContactMe/ContactMe";
import Projects from "./pages/Projects/Projects";
import Section from "./Section";

const Views = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Section />}>
          <Route index element={<About key="home" />} />
          <Route path="/projects" element={<Projects key="projects" />} />
          <Route path="/contactme" element={<ContactMe key="contactme" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Views;
