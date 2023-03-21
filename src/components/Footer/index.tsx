import { Flex, Box, Text, Link, Divider } from "@chakra-ui/react";




export function Footer() {
    return (
        <Box
            position={'fixed'}
            bottom={0}
            as="footer"
            py="8"
            color="white"
            width={"full"}
        >
            <Divider></Divider>
            <Flex alignItems="center" justifyContent="center">
                <Link href="https://github.com/" isExternal>
                    <Text mr="2">Built with Chakra UI</Text>
                </Link>
            </Flex>
            <Text mt="4" textAlign="center" fontSize="sm">
                © {new Date().getFullYear()} Your Name Here. All rights reserved.
            </Text>
        </Box>
    );
}
