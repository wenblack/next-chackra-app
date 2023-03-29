import { Flex, Text, Spinner, Box } from "@chakra-ui/react";


export default function loading() {

  return (
    <Flex
      as={'main'}
      id="content"
      direction={'column'}
      h={'100vh'}
      w='100vw'
      overflowX={'hidden'}
      overflowY={'auto'}
      justifyContent='center'
      alignItems={'center'}>
      <Box
        display={'flex'}
        flexDirection='column'
        justifyContent='center'
        alignItems={'center'}
        w={'80%'}
        maxW={'md'}
        height='15vh'
        border='1px'
        borderRadius={'lg'}
        borderColor={'gray.50'}
        boxShadow='lg'
      >
        <Text mb={4}>Loading... Please Wait</Text>
        <Spinner _light={{
          color: "gray"
        }} ></Spinner>
      </Box>
    </Flex>
  );
}
