import { Text, WrapItem } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { chakra } from "@chakra-ui/system";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = chakra(motion.div);

const variants = {
  topInit: {
    y: "-100%",
    opacity: 0,
    transition: {
      type: "easeInOut",
    },
  },
  topAnim: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "easeInOut",
    },
  },
  bottomInit: {
    y: "100%",
    opacity: 0,
    transition: {
      type: "easeInOut",
    },
  },
  bottomAnim: {
    y: "-100%",
    opacity: 1,
    transition: {
      type: "easeInOut",
    },
  },
};
const ProjectThumbnail = ({ label, onOpen, src, previewSrc }) => {
  const [isMediumWidth] = useMediaQuery("(max-width: 1200px)");
  const [isHover, setHover] = useState(isMediumWidth ? true : false);
  return (
    <WrapItem onClick={() => onOpen()}>
      <MotionBox
        bg={`no-repeat center url(${src})`}
        outline="4px solid gray"
        bgSize="cover"
        w="200px"
        h="200px"
        borderRadius="lg"
        overflow="hidden"
        onHoverStart={() => {
          if (isMediumWidth) return;
          setHover(true);
        }}
        onHoverEnd={() => {
          if (isMediumWidth) return;
          setHover(false);
        }}
        cursor="pointer"
        zIndex="3"
      >
        <MotionBox
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          variants={variants}
          initial={isMediumWidth ? "topAnim" : "topInit"}
          animate={isHover ? "topAnim" : "topInit"}
          bg={`no-repeat center url(${previewSrc})`}
          bgSize="cover"
          zIndex="2"
        />

        <MotionBox
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="60px"
          variants={variants}
          initial={isMediumWidth ? "bottomAnim" : "bottomInit"}
          animate={isHover ? "bottomAnim" : "bottomInit"}
          bgColor="#2227"
          zIndex="2"
        >
          <Text color="white">{label}</Text>
        </MotionBox>
      </MotionBox>
    </WrapItem>
  );
};

export default ProjectThumbnail;
