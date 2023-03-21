import { Flex, Box, Text, Input, InputGroup, InputLeftElement, IconButton, Button, InputRightElement, Divider } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Logo } from "@/components/Logo";
import { useState } from "react";

export default function index() {
  const [searchPhrase, setSearchPhrase] = useState('')
  const [phraseInformed, setIsPhraseInformed] = useState(false)

  function getSearch(e: any) {
    let tempSearch = e.target.value
    setSearchPhrase(tempSearch)
    console.log(searchPhrase)
  }

  function validateSearch(e: any) {
    let searchToValidate = searchPhrase

    if (searchToValidate === '') {
      alert("Please inform something to search")

    } else {
      alert('Please Wait')
      setIsPhraseInformed(true)
    }
  }


  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bg={'blackAlpha.900'}
      gap={10}
    >
      <Box
      >
        <Logo height={"auto"} width="40vh" />
      </Box>
      <InputGroup
        w={{ base: "80%", md: "60%" }}
        maxW={'xl'}
        height='fit-content'
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon />}
          mx={2}
        />
        <Input
          rounded={'full'}
          pl={12}
          placeholder="Search Google or type a URL"
          bgColor={'whiteAlpha.900'}
          onChange={getSearch}

        />
      </InputGroup>
    </Flex>
  );
}
