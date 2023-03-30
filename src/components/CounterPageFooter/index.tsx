import { Box, Button, Divider } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface FooterProps {
    hasNextPage: string | null
    hasPrevPage: string | null
    nextFunction: MouseEventHandler
    prevFunction: MouseEventHandler
}

export function CounterPageFooter({ prevFunction, nextFunction, hasNextPage, hasPrevPage }: FooterProps) {
    return (
        <Box
            display="flex"
            position={'relative'}
            bottom={0}
            justifyContent="center"
            alignItems="center"
            my={4}
            w='full'
            zIndex={1}
        >

            <Button
                variant={hasPrevPage === null ? 'ghost' : 'solid'}
                opacity={
                    hasPrevPage === null ? 0.4 : 1
                }
                onClick={prevFunction}
                cursor={
                    hasPrevPage === null ? 'not-allowed' : 'pointer'
                }
            >
                <ChevronLeftIcon boxSize={5} />
            </Button>

            <Button
                onClick={nextFunction}
                variant={hasNextPage === null ? 'ghost' : 'solid'}
                opacity={
                    hasNextPage === null ? 0.4 : 1
                }
                cursor={
                    hasNextPage === null ? 'not-allowed' : 'pointer'
                }
            >
                <ChevronRightIcon boxSize={5} />
            </Button>
        </Box>
    );
}

