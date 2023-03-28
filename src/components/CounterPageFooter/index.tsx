import { Box, Button, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface FooterProps {
    totalPages: number

}

export function CounterPageFooter({ totalPages }: FooterProps) {
    const [page, setPage] = useState(1)
    const [disableNext, setdisableNext] = useState(false)
    const [disablePrev, setdisablePrev] = useState(false)

    function next() {
        if (page === totalPages) {
            return false
        } else {
            setPage(Number(page + 1))

        }
    }
    function prev() {
        if (page === 1) {
            return false
        }
        else {
            setPage(Number(page - 1))
        }
    }

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
                variant={page === 1 ? 'ghost' : 'solid'}
                opacity={
                    page === 1 ? 0.4 : 1
                }
                onClick={prev}
                cursor={
                    page === 1 ? 'not-allowed' : 'pointer'
                }
            >
                <ChevronLeftIcon boxSize={5} />
            </Button>
            <Box mx={4}>{`Page ${page}`}</Box>
            <Button
                onClick={next}
                variant={page === totalPages ? 'ghost' : 'solid'}
                opacity={
                    page === totalPages ? 0.4 : 1
                }
                cursor={
                    page === totalPages ? 'not-allowed' : 'pointer'
                }
            >
                <ChevronRightIcon boxSize={5} />
            </Button>
        </Box>
    );
}

