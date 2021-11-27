import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";
import ProjectInfo from "./ProjectInfo";
import ProjectThumbnail from "./ProjectThumbnail";

const Project = ({ src, previewSrc, label, title, tags }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ProjectThumbnail
        src={src}
        previewSrc={previewSrc}
        onOpen={onOpen}
        label={label}
      />

      <ProjectInfo
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        previewSrc={previewSrc}
        tags={tags}
      />
    </>
  );
};

export default Project;
