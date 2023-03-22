import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Logo } from "@/components/Logo";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function index() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const router = useRouter();

  function getSearch(e: any) {
    let tempSearch = e.target.value;
    setSearchPhrase(tempSearch);
    console.log(searchPhrase);
  }

  async function validateSearch(e: any) {
    let searchToValidate = searchPhrase;
    e.preventDefault();

    if (searchToValidate === "") {
      alert("Please inform something to search");
    } else {
      alert("Please Wait");
      const response = await fetch('https://swapi.dev/api/films/1/')
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    }
    router.push(`http://localhost:3000/result?name=${searchPhrase}`);
  }

  return (
    <Flex
      as={"main"}
      id="content"
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
      <Box as="figure" aria-label="Logo" id='logo'>
        <Logo height={"15vh"} width={"100vw"} />
      </Box>
      <InputGroup
        w={{ base: "80%", md: "60%" }}
        maxW={"xl"}
        height="fit-content"
        as={"form"}
        onSubmit={validateSearch}
        id='InputForm'
        aria-label="Input Form"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon />}
          mx={2}
          color="gray.500"
          _dark={{
            color: "gray.600",
          }}
          as={"picture"}
        />
        <Input
          type={"text"}
          rounded={"full"}
          pl={12}
          color={"gray.900"}
          placeholder="Search Google or type a URL"
          bgColor={"whiteAlpha.900"}
          _dark={{
            _placeholder: { color: "gray.600" },
          }}
          onChange={getSearch}
          onSubmit={validateSearch}
        />
      </InputGroup>
    </Flex>
  );
}
