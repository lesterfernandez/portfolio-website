import { Heading, VStack, Wrap } from "@chakra-ui/layout";
import pic from "../../assets/profilepicgithub.jpeg";
import Project from "../Project";
import Section from "../Section";

const Projects = () => {
  return (
    <Section>
      <VStack spacing="3rem" py="4rem">
        <Heading textAlign="center">My Works</Heading>
        <Wrap justify="center" spacing="1.4rem">
          <Project src={pic} previewSrc={pic} />
          <Project src={pic} previewSrc={pic} />
        </Wrap>
      </VStack>
    </Section>
  );
};

export default Projects;
