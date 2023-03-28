import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeColorButton } from "../ChangeColorButton";
import { Logo } from "../Logo";

interface resultProps {
  result?: string;
  submitEvent: any,
  changeEvent: any
}

export function Header({ result, submitEvent, changeEvent }: resultProps) {
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
      <InputGroup
        as={"form"}
        w={{ base: "60%", md: "60%" }} maxW={"md"}
        onSubmit={submitEvent}
      >
        <InputLeftElement
          as="picture"
          pointerEvents="none"
          children={<SearchIcon />}
          mx={2}
        />
        <Input
          rounded={"full"}
          pl={12}
          onChange={changeEvent}
          bg={"transparent"}
          _dark={{
            _placeholder: { color: "gray.400" },
          }}
          placeholder={result}
        />
      </InputGroup>
      <ChangeColorButton></ChangeColorButton>
    </Flex>
  );
}
