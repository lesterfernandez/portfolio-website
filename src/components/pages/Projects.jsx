import { Heading, VStack, Wrap } from "@chakra-ui/layout";
import cubedUpIconPic from "../../assets/cubedupicon.png";
import cubedUpPreview from "../../assets/ipadscreenshot.png";
import twitterCloneFeedPic from "../../assets/twitterclonefeed.png";
import twitterCloneLanding from "../../assets/twitterclonelanding.png";
import Project from "../Project";
import Section from "../Section";

const Projects = () => {
  return (
    <Section>
      <VStack spacing="3rem" py="4rem">
        <Heading textAlign="center">My Works</Heading>
        <Wrap justify="center" spacing="1.4rem">
          <Project
            src={cubedUpIconPic}
            previewSrc={cubedUpPreview}
            label="IOS Mobile Game"
          />
          <Project
            src={twitterCloneLanding}
            previewSrc={twitterCloneFeedPic}
            label="Full Stack Micro Blog"
          />
        </Wrap>
      </VStack>
    </Section>
  );
};

export default Projects;
