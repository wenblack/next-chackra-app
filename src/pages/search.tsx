import { CounterPageFooter } from "@/components/CounterPageFooter";
import { Header } from "@/components/Header";
import { MenuLeft } from "@/components/MenuLeft";
import { ResultView } from "@/components/ResultView";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Search() {
  const router = useRouter();
  const { name } = router.query;
  let nameConverted = String(name)
  const [newName, setNewName] = useState("");
  const [search, setSearch] = useState("");
  const [newLoading, setNewLoading] = useState(false)

  useEffect(() => {
    getSearch()
  }, [newLoading, name])

  function changeName(e: any) {
    setNewName(e.target.value)
    console.log(newName)
    setNewLoading(true)
  }

  function getSearch() {
    setSearch(nameConverted)
    setNewLoading(true)
    return (false)
  }



  function validateName(e: any) {
    e.preventDefault()
    router.push(`/search?name=${newName}`)
  }

  return (
    <Flex
      as={'div'}
      id="content"
      direction={'column'}
      h={'100vh'}
      w='full'
      maxW={'100vw'}
      _dark={{
        background: '#1A202C'
      }}

      overflowX={'hidden'}
      overflowY={'auto'}
      justifyContent='flex-start'
    >
      <header>
        <Header
          changeEvent={changeName}
          submitEvent={validateName}
          result={nameConverted}
        ></Header>
      </header>
      <main>
        <ResultView
          search={search}
        />
      </main>
    </Flex>
  );
}
