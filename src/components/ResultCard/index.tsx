import { StarIcon, CheckIcon } from "@chakra-ui/icons";
import { Badge, Box, Divider, Link, Text } from "@chakra-ui/react";



export function ResultCard() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

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
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    display='flex'
                    alignItems={'center'}
                    justifyContent='space-between'
                    maxW={"xl"}
                >
                    {personTest.name}
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {personTest.gender}
                    </Badge>
                </Box>
                <Box display='flex' alignItems='baseline'>

                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='capitalize'
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Text>{personTest.hair_color}</Text>
                        <Text>
                            {personTest.height / 100}cm
                        </Text>
                        <Text>{personTest.mass}Kg</Text>
                    </Box>
                </Box>

                <Box display={'none'}>
                    Participated in {personTest.films.length} episodes
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    <Box as='span' color='gray.600' fontSize='sm'>
                        Present in {personTest.films.length} Episodes
                    </Box>
                </Box>

                <Box
                    mt='1'
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
                        }}>Show More
                    </Link>
                </Box>


            </Box>
            <Divider borderWidth={'thin'}></Divider>
        </Box>


    );
}