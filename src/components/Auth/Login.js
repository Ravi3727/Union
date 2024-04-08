import React, { useState } from "react";
import {
  VStack,
  useToast,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [show1, setShow1] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <VStack>
      <FormControl>
        <FormLabel>UserName:</FormLabel>
        <Input
          type="UserName"
          placeholder="Enter your username"
          onChange={(e) => setUserName(e.target.value)}
        />

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

        <Button
          bg="black"
          color={"white"}
          outlineColor={"black"}
          isLoading={loading}
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Login
        </Button>
      </FormControl>
    </VStack>
  );
};

export default Login;
