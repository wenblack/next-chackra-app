import { Badge, Box, Divider, Link, Text } from "@chakra-ui/react";

import { PeopleProps } from "@/interfaces/global";

export function ResultCard({ ...rest }: PeopleProps) {
    let totalFilms = rest.films?.length

    return (
        <Box
            w={{ base: '80vw', md: '80vw', sm: '80vw' }}
        >
            <Box px='6' py='2'>
                <Box
                    _dark={{
                        color: 'blue.500',
                        fontWeight: '500'
                    }}
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    display='flex'
                    alignItems={'center'}
                    justifyContent='space-between'
                    maxW={"xl"}
                    color={'gray.700'}
                >
                    {rest.name}
                </Box>
                <Box display='flex' alignItems='baseline'>

                    <Box
                        _dark={{
                            color: 'gray.200',
                            fontWeight: '500'
                        }}
                        color='gray.600'
                        fontWeight='medium'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='capitalize'
                        display={'flex'}
                        flexDirection={'column'}
                        mt={2}
                    >
                        <Text>{rest.gender}</Text>
                        <Text>
                            {rest.height} cm
                        </Text>
                        <Text>{rest.mass} Kg</Text>
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    <Box as='span' color='gray.600' fontSize='xs' _dark={{
                        color: 'gray.200',
                        fontWeight: '500'
                    }}>
                        Present in {totalFilms} Episodes
                    </Box>
                </Box>

                <Box
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    display='flex'
                    alignItems={'center'}
                    justifyContent='flex-end'
                    maxW={"xl"}
                >
                    <Link
                        textDecoration={'underline'}
                        textTransform={'capitalize'}
                        _hover={{
                            color: 'blueviolet'
                        }}
                        _visited={{
                            color: 'blueviolet'
                        }}
                        color={'blue.500'}
                        _dark={{
                            color: 'blue.600'
                        }}>Show More...
                    </Link>
                </Box>


            </Box>
            <Divider borderWidth={'thin'}></Divider>
        </Box>


    );
}