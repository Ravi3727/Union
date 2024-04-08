import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Auth/login";
import Signup from "../components/Auth/signup";

const Register = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="2px"
      >
        <Text
          textAlign={"center"}
          color={"black"}
          fontFamily="Work sans"
          fontSize="4xl"
        >
          UNION
        </Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        color={"black"}
        borderRadius={"lg"}
        borderWidth={"2px"}
      >
        <Tabs variant="unstyled">
          <TabList>
            <Tab _selected={{ color: "white", bg: "black" }} width={"25%"}>
              Login
            </Tab>
            <Tab _selected={{ color: "white", bg: "black" }} width={"25%"}>
              Sign-Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {" "}
              <Login />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Signup />{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Register;
