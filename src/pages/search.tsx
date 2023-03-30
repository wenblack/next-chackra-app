import { CounterPageFooter } from "@/components/CounterPageFooter";
import { Header } from "@/components/Header";
import { MenuLeft } from "@/components/MenuLeft";
import { ResultView } from "@/components/ResultView";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function search() {
  const router = useRouter();
  const { name } = router.query;
  let nameConverted = String(name)
  const [newName, setNewName] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setIsLoading] = useState(1);

  useEffect(() => {
    getSearch()
  }, [name])

  function changeName(e: any) {
    setNewName(e.target.value)
    console.log(newName)
  }

  function getSearch() {
    setSearch(nameConverted)
  }

  function validateName(e: any) {
    e.preventDefault()
    router.push(`http://localhost:3000/search?name=${newName}`)
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
        bgColor: 'blackAlpha.600'
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
      <aside>
        <MenuLeft></MenuLeft>
      </aside>
      <main>
        <ResultView
          search={search}
        />
      </main>
      <footer>
        <CounterPageFooter
          totalPages={10}
        />
      </footer>
    </Flex>
  );
}
