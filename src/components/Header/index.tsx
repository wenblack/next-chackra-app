import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "../Logo";
import { MenuLeft } from "../MenuLeft";

interface resultProps {
  result?: string;
  submitEvent: any,
  changeEvent: any
}

export function Header({ result, submitEvent, changeEvent }: resultProps) {
  return (
    <Flex
      as={"nav"}
      style={{
        position: 'fixed',
        zIndex: 1
      }}
      alignItems='center'
      height={'8vh'}
      _dark={{
        background: '#1A202C'
      }}
      background={'white'}
      justify={{ base: 'center', md: 'center', lg: "flex-start" }}
      w={"100vw"}
      gap={{ base: 4, lg: 10 }}
      direction={'row'}
      boxShadow={'md'}
    >
      <Box
        as="picture"
        marginLeft={{ base: 0, md: 14, sm: 0 }}
        display={{
          base: "none", md: "none", sm: "none", lg: 'inline'
        }}
      >
        <Link href='/'>
          <Logo height={"5vh"} width="" />
        </Link>
      </Box>
      <InputGroup
        as={"form"}
        w={{ base: "55%", md: "55%" }} maxW={"md"}
        onSubmit={submitEvent}
      >
        <InputLeftElement
          as="picture"
          pointerEvents="none"
          mx={2}
        >
          <SearchIcon />
        </InputLeftElement>
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
      <MenuLeft></MenuLeft>
    </Flex>
  )
}
