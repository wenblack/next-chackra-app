import { Divider, Flex, List, ListItem } from "@chakra-ui/react";
import { ResultCard } from "../ResultCard";

export function ResultView() {
  return (
    <Flex
      mt={{ base: 2, md: 5, lg: 5, sm: 2 }}
      direction={"column"}
      w={"100vw"}
      height="full"
    >
      <Divider></Divider>
      <List
        id="Results"
        marginLeft={{ base: 0, md: 10, sm: 0 }}
        marginRight={{ base: 0, md: 10, sm: 0 }}
        w={'full'}
        maxW={'100vw'}
        justifyContent={'center'}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        display={'flex'}
        flexDirection="column"
        mt={4}
        spacing={1}
      >

        <ListItem>
          <ResultCard />
        </ListItem>
        <ListItem>
          <ResultCard />
        </ListItem>
        <ListItem>
          <ResultCard />
        </ListItem>
        <ListItem>
          <ResultCard />
        </ListItem>
      </List>
    </Flex>
  );
}
