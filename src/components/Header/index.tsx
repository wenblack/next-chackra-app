import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChangeColorButton } from "../ChangeColorButton";
import { Logo } from "../Logo";

interface resultProps {
  result?: string;
}

export function Header({ result }: resultProps) {
  const [newName, setNewName] = useState("");
  const [name, setName] = useState("");

  function getName() {
    setName("" + result);
    return name;
  }
  function changeName(e: any) {
    setNewName(e.target.value);
    return console.log(newName);
  }

  useEffect(() => {
    getName();
  });

  return (
    <Flex
      as={"nav"}
      align="center"
      justify="flex-start"
      w={"100vw"}
      gap={{ base: 4, lg: 10 }}
      direction={{ base: "column", md: "row", sm: "column" }}
      paddingTop={5}
    >
      <Box
        as="picture"
        marginLeft={{ base: 0, md: 10, sm: 0 }}
        display={{
          base: "none", md: "inline", sm: "none", lg: 'inline'
        }}
      >
        <Link href='/'>
          <Logo height={"5vh"} width="" />
        </Link>
      </Box>
      <InputGroup as={"form"} w={{ base: "60%", md: "60%" }} maxW={"md"}>
        <InputLeftElement
          as="picture"
          pointerEvents="none"
          children={<SearchIcon />}
          mx={2}
        />
        <Input
          rounded={"full"}
          pl={12}
          onChange={changeName}
          bg={"transparent"}
          _dark={{
            _placeholder: { color: "gray.400" },
          }}
          placeholder={name}
        />
      </InputGroup>
      <ChangeColorButton></ChangeColorButton>
    </Flex>
  );
}
