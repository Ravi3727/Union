import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Signup = () => {
  const [Email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [domain, setDomain] = useState();
  const [password, setPassword] = useState();
  const [show1, setShow1] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <VStack margin={"8px"}>
      <FormControl>
        <FormLabel>UserName:</FormLabel>
        <Input type="text" onChange={(e) => setUserName(e.target.value)} />

        <FormLabel>Email:</FormLabel>
        <Input type="text" onChange={(e) => setEmail(e.target.value)} />

        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            type={show1 ? "text" : "password"}
            placeholder="Set your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick1}>
              {show1 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <FormLabel>Domain</FormLabel>
        <Input
          type="text"
          placeholder="Skip if You're not a creator"
          onChange={(e) => setDomain(e.target.value)}
        />
        <Button
          bg="black"
          color={"white"}
          outlineColor={"black"}
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Submit
        </Button>
      </FormControl>
    </VStack>
  );
};

export default Signup;
