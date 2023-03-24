import { Badge, Box, Divider, Link, Text } from "@chakra-ui/react";



export function ResultCard() {
    const personTest = {
        "name": "Luke Skywalker",
        "height": 172,
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    }

    let age
    if (personTest.birth_year.includes('BBY')) {
        age = "Before the Battle of Yavin"
    } else if (personTest.birth_year.includes('ABY')) {
        age = "After the Battle of Yavin"

    }

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
                    {personTest.name}
                    <Badge display={'none'} borderRadius='full' px='2' colorScheme='teal'>
                        {personTest.gender}
                    </Badge>
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
                        <Text>{personTest.hair_color}</Text>
                        <Text>
                            {personTest.height / 100}cm
                        </Text>
                        <Text>{personTest.mass}Kg</Text>
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    <Box as='span' color='gray.600' fontSize='xs' _dark={{
                        color: 'gray.200',
                        fontWeight: '500'
                    }}>
                        Present in {personTest.films.length} Episodes
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