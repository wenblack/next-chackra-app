import { Divider, Flex, List, ListItem, UnorderedList } from "@chakra-ui/react";

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
      <List id="Results ">
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </List>
    </Flex>
  );
}
