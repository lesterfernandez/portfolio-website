import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Heading, ListItem, UnorderedList, Wrap } from "@chakra-ui/layout";
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
import Article from "./Article";

const ProjectInfo = ({
  isOpen,
  onClose,
  title,
  previewSrc,
  tags,
  architecture,
}) => {
  return (
    <>
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
            <Article>
              <Heading size="lg">Technologies Used</Heading>
              <Wrap>
                {tags.map(tag => (
                  <Tag key={title + "-" + tag}>{tag}</Tag>
                ))}
              </Wrap>
            </Article>
            <Article>
              <Heading size="lg">Architecture</Heading>
              <UnorderedList>
                {architecture.map(item => (
                  <ListItem key={title + "-" + item}></ListItem>
                ))}
              </UnorderedList>
            </Article>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectInfo;
