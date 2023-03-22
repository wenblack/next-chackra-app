import { Divider, Flex } from "@chakra-ui/react";

export function ResultView() {
  return (
    <Flex
      mt={{ base: 2, md: 5, lg: 5, sm: 2 }}
      direction={"column"}
      w={"100vw"}
      h={"max-content"}
      height="full"
    >
      <Divider></Divider>
      <ul>
        <li>ITEM 1</li>
        <li>ITEM 2</li>
        <li>ITEM 3</li>
      </ul>
    </Flex>
  );
}
