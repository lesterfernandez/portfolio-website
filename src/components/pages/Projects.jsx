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
            "Front End":
              "React is used along with modern features such as React Context and Hooks. Client-Side Routing is done with React Router v6.",
            "Data Caching":
              "Data is frequently being requested from the back-end, so in order to keep a good user experience server-side data is cached on the client. This is done with React Query and results in users only seeing a loading screen on the first request.",
            "Back End":
              "NodeJS is used as the server-side language, along with ExpressJS as the back-end framework. Routing is used to keep the files small and maintainable.",
            Authentication:
              "Users are authenticated through Google OAuth 2.0. PassportJS helps reduce redundancy in the code. Express-session stores user sessions and sets a cookie on the client's browser.",
            Database:
              "All user accounts are stored and managed in a PostgreSQL database. Relations are used to tie user accounts to their posts.",
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
          architecture={{
            Authentication:
              "Players can sign up or log into previous accounts. The PlayFab API is used to implement user Authentication.",
            Multiplayer:
              "I wrote custom dedicated C# servers for players to connect to. The servers are written using the Mirror framework. They are containerized with Docker and hosted on Microsoft PlayFab.",
            "Global Leaderboard":
              "Using PlayFab's API I implemented a leaderboard where players can see where they rank and if they made it to the top 10 players world-wide.",
            Code: "This app was coded in C# using the Unity Framework. It implements an Object-Oriented programming paradigm. This results in the codebase being maintable and easy to expand upon.",
          }}
        />
      </Wrap>
    </VStack>
  );
};

export default Projects;
