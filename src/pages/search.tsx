import { Header } from "@/components/Header";
import { MenuLeft } from "@/components/MenuLeft";
import { ResultView } from "@/components/ResultView";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function search() {
  const router = useRouter();
  const { name } = router.query;
  let nameConverted = String(name);
  const [newName, setNewName] = useState("");

  function fectchNewUser(event: any) {
    event.preventDefault()
    router.push(`http://localhost:3000/search?name=${newName}`);
  }

  function changeName(e: any) {
    setNewName(e.target.value);
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
      overflowX='hidden'
      overflowY={'scroll'}
    >
      <header>
        <Header
          changeEvent={changeName}
          submitEvent={fectchNewUser}
          result={nameConverted}></Header>
      </header>
      <aside>
        <MenuLeft></MenuLeft>
      </aside>
      <main>
        <ResultView
          person={nameConverted}
        />
      </main>
    </Flex>
  );
}
