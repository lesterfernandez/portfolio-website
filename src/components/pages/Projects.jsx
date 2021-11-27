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
            title="Cubed Up"
            tags={["C#", "Unity", "Playfab PaaS", "OOP"]}
          />
          <Project
            src={twitterCloneLanding}
            previewSrc={twitterCloneFeedPic}
            label="Full Stack Micro Blog"
            title="Twitter Clone"
            tags={[
              "NodeJS",
              "PostgreSQL",
              "ExpressJS",
              "PassportJS",
              "Google OAuth 2.0",
              "ReactJS",
              "JavaScript",
              "React Router",
              "React Query",
            ]}
          />
        </Wrap>
      </VStack>
    </Section>
  );
};

export default Projects;
