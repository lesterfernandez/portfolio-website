import { Heading, VStack, Wrap } from "@chakra-ui/layout";
import cubedUpIconPic from "../../assets/cubedupicon.png";
import cubedUpPreview from "../../assets/ipadscreenshot.png";
import twitterCloneFeedPic from "../../assets/twitterclonefeed.png";
import twitterCloneLanding from "../../assets/twitterclonelanding.png";
import Project from "../Project";

const Projects = () => {
  return (
    <VStack spacing="3rem" py="4rem">
      <Heading textAlign="center">Things I've Done</Heading>
      <Wrap justify="center" spacing="1.4rem">
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
            "React Router",
            "React Query",
            "JavaScript",
          ]}
          architecture={{
            "Front End": "hi",
            "Back End": "hi",
            Authentication: "hi",
            Code: "hi",
          }}
        />
        <Project
          src={cubedUpIconPic}
          previewSrc={cubedUpPreview}
          label="IOS Mobile Game"
          title="Cubed Up"
          tags={[
            "C#",
            "Unity",
            "Mirror Multiplayer Framework",
            "Playfab PaaS",
            "OOP",
          ]}
          description="When players first open the app they are greeted with a sign up screen. Their account is saved in a Microsoft PlayFab back-end. The game is made with C# and Unity. The code is written in an OOP paradigm. Players can play multiplayer through a dedicated C# server written using the Mirror framework."
          architecture={{
            Authentication: "hi",
            Multiplayer: "hi",
            Leaderboard: "hi",
            Code: "hi",
          }}
        />
      </Wrap>
    </VStack>
  );
};

export default Projects;
