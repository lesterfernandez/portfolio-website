import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Divider, Stack, Text, VStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import profilePic from "../../../assets/profilepicgithub.jpeg";

const Header = () => {
  return (
    <Stack
      alignItems="center"
      justify="center"
      m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
      spacing="2rem"
      direction={{ base: "column", md: "row-reverse" }}
    >
      <VStack
        bgColor={useColorModeValue("gray.100", "gray.700")}
        borderRadius="lg"
        p="1rem 2rem"
        textAlign="center"
      >
        <Avatar
          borderWidth="3px"
          borderStyle="solid"
          borderColor={useColorModeValue("gray.500", "white")}
          boxSizing="border-box"
          size="2xl"
          display="inline-block"
          src={profilePic}
        ></Avatar>
        <Text fontWeight="bold" fontSize="xl">
          Lester Fernandez
        </Text>
        <Divider />
        <Text as="p" fontSize="md" fontWeight="semibold">
          Full-stack developer based in Miami, FL
        </Text>
      </VStack>
      <VStack spacing={7}>
        <Text fontSize="xl" textAlign="center">
          I create beautiful applications and have fun while I'm at it
        </Text>
        <Button
          as={Link}
          to="/projects"
          colorScheme="blue"
          className="primary-btn"
          rightIcon={
            <ArrowForwardIcon
              w={5}
              h={5}
              sx={{
                ".primary-btn:hover &": {
                  transform: "rotate(90deg)",
                },
              }}
              transition="transform 150ms ease"
            />
          }
        >
          My Projects
        </Button>
      </VStack>
    </Stack>
  );
};

export default Header;
