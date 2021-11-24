import { Container } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);

const variants = {
  hidden: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Section = ({ children }) => {
  return (
    <MotionContainer
      maxW="container.sm"
      py="1rem"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      sx={{ position: "relative", overflow: "hidden" }}
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      {children}
    </MotionContainer>
  );
};

export default Section;
