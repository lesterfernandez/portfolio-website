import { Heading, Text, VStack } from "@chakra-ui/layout";
import Header from "../Header";
import Section from "../Section";

const About = () => {
  return (
    <Section>
      <Header />
      <Heading size="lg">About Me</Heading>
      <VStack spacing={3} align="start">
        <Text fontSize="lg">
          I am a full stack developer from Miami, Fl. I have a passion for
          programming. My favorite programming language is JavaScript but I have
          experience with C#, Python, and Java. In my freetime I work on
          side-projects and create YouTube videos about what I am working on.
        </Text>
        <Text fontSize="lg">
          I am currently majoring in Computer Science at Miami-Dade College.
        </Text>
      </VStack>
    </Section>
  );
};

export default About;
