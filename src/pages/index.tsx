import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Logo } from "@/components/Logo";
import { useState } from "react";

export default function index() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [phraseInformed, setIsPhraseInformed] = useState(false);

  function getSearch(e: any) {
    let tempSearch = e.target.value;
    setSearchPhrase(tempSearch);
    console.log(searchPhrase);
  }

  function validateSearch(e: any) {
    let searchToValidate = searchPhrase;

    if (searchToValidate === "") {
      alert("Please inform something to search");
    } else {
      alert("Please Wait");
      setIsPhraseInformed(true);
    }
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      _light={{
        background: "white",
      }}
      bg={"blackAlpha.900"}
      gap={14}
    >
      <Box>
        <Logo height={"10vh"} width={"100vw"} />
      </Box>
      <InputGroup
        w={{ base: "80%", md: "60%" }}
        maxW={"xl"}
        height="fit-content"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon />}
          mx={2}
          color="gray.500"
          _dark={{
            color: "gray.600",
          }}
        />
        <Input
          rounded={"full"}
          pl={12}
          color={"gray.900"}
          placeholder="Search Google or type a URL"
          bgColor={"whiteAlpha.900"}
          _dark={{
            _placeholder: { color: "gray.600" },
          }}
          onChange={getSearch}
        />
      </InputGroup>
    </Flex>
  );
}
