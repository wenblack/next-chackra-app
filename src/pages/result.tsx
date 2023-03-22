import { Flex, Box, Text, Input, InputGroup, InputLeftElement, IconButton, Button, InputRightElement, Divider } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Logo } from "@/components/Logo";
import { ChangeColorButton } from "@/components/ChangeColorButton";

export default function result() {
  return (
    <Flex
      align="center"
      justify="flex-start"
      w={'100vw'}
      gap={10}
      direction={{base:'column',md:'row',sm:'column'}}
      paddingTop={5}
    >
      <Box
        marginLeft={{base:0, md:10, sm:0}}
        
      >
        <Logo height={"5vh"} width=""/>
      </Box>
      <InputGroup
        w={{ base: "80%", md: "60%" }}
        maxW={'md'}
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
        />
      </InputGroup>
      <ChangeColorButton></ChangeColorButton>
    </Flex>
  );
}
