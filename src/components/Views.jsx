import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";

const Views = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route index element={<About key="home" />}></Route>
        <Route path="/projects" element={<Projects key="projects" />} />
        <Route path="/contactme" element={<ContactMe key="contactme" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Views;
