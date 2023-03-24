import { Divider, Flex, List, ListItem, Box, Text } from "@chakra-ui/react";
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
      <Box
        mt='2'
        w={{ base: '90vw', md: '80vw', sm: '90vw' }}
        fontWeight='medium'
        as='span'
        noOfLines={1}
        display='flex'
        alignItems={'center'}
        justifyContent={'flex-start'}
        marginLeft={{ base: "16", md: 16, sm: 20 }}
        fontSize='sm'
        color={'gray.600'}
        _dark={{
          color: 'gray.300'
        }}
      >
        Found 4 Result(s)
      </Box>

      <List
        id="Results"
        marginLeft={{ base: 0, md: 10, sm: 0 }}
        marginRight={{ base: 0, md: 10, sm: 0 }}
        w={'full'}
        maxW={'100vw'}
        justifyContent={'center'}
        alignItems={{ base: 'center', md: 'flex-start', lg: 'flex-start' }}
        display={'flex'}
        flexDirection="column"
        mt={4}
        spacing={1}
      >

        <ListItem>
          <ResultCard
            gender="male"
            name="Luke Skywalker"
            height={172}
            films={['1', '2', '3']}
            homeworld='Earth'
          />
        </ListItem>
      </List>
    </Flex>
  );
}
