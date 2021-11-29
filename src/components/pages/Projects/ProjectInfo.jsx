import { Button } from "@chakra-ui/button";
import { LinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Heading, HStack, Link, Text, Wrap } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Tag } from "@chakra-ui/tag";
import Article from "../../Article";
import ProjectArchitecture from "./ProjectArchitecture";

const ProjectInfo = ({
  isOpen,
  onClose,
  title,
  previewSrc,
  tags,
  architecture,
  demoText,
  demoLink,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      size="md"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="1.7rem">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={previewSrc}
            boxSize="200px"
            objectFit="cover"
            mx="auto"
            rounded="lg"
          />
          <HStack justify="center" py="1rem">
            <Text>{demoText}</Text>
            <LinkIcon />{" "}
            <Link textDecoration="underline" href={demoLink} target="_blank">
              {demoLink}
            </Link>
          </HStack>
          <Article my="0" m="1.2rem 0 3rem">
            <Heading size="lg">Technologies Used</Heading>
            <Wrap>
              {tags.map((tag, idx) => (
                <Tag key={title + "-tag-" + idx}>{tag}</Tag>
              ))}
            </Wrap>
          </Article>
          <ProjectArchitecture title={title} architecture={architecture} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="blue">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectInfo;
