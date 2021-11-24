import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Heading, Text, VStack, Wrap } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import Header from "../Header";
import Section from "../Section";

const About = () => {
  return (
    <Section>
      <Header />

      <Flex flexDir="column" m="2rem 0 0.4rem" justify="center">
        <Heading size="lg" py="1rem">
          Technologies I Know{" "}
          <CheckCircleIcon color="green.200" mx="0.4rem" pb="2px" />
        </Heading>
      </Flex>

      <Wrap spacing="0.5rem" maxW="70%">
        <Tag>JavaScript</Tag>
        <Tag>Java</Tag>
        <Tag>C#</Tag>
        <Tag>Git</Tag>
        <Tag>React</Tag>
        <Tag>NodeJS</Tag>
        <Tag>Express</Tag>
        <Tag>PostgreSQL</Tag>
      </Wrap>

      <Flex flexDir="column" m="2rem 0 0.4rem" justify="center">
        <Heading size="lg">About Me</Heading>
      </Flex>
      <VStack spacing={3} align="start" pl={1}>
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
