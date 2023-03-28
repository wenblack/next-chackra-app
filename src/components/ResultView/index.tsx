import { PeopleProps } from "@/interfaces/global";
import { Divider, Flex, List, ListItem, Box } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ResultCard } from "../ResultCard";

export function ResultView() {
  const [peopleDetail, setPeopleDetail] = useState<PeopleProps[]>([])
  const [count, setCount] = useState(0)
  const router = useRouter();
  const { name } = router.query;
  let nameConverted = String(name)


  useEffect(() => {
    getData()
  }, [name])

  async function getData() {
    try {
      const res = await axios.get(
        `https://swapi.dev/api/people/?search=${nameConverted}`
      )
      setPeopleDetail(res.data.results)
      setCount(res.data.count)
    } catch (eror) {
      console.error()
    }
  }


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
      >{
          count > 10 ? `Showing 10 of ${count} Results` : `Found ${count} Results`
        }
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
        {
          peopleDetail.map((peoples, i) =>
            <ListItem
              key={i}
            >
              <ResultCard
                gender={peoples.gender}
                birth_year={peoples.birth_year}
                mass={peoples.mass}
                name={peoples.name}
                height={peoples.height}
                films={peoples.films}
                homeworld={peoples.homeworld}
              />
            </ListItem>
          )
        }

      </List>
    </Flex>
  );
}
