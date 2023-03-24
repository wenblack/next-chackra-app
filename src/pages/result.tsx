import { Header } from "@/components/Header";
import { MenuLeft } from "@/components/MenuLeft";
import { ResultView } from "@/components/ResultView";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function result() {
  const router = useRouter();
  const { name } = router.query;
  let nameConverted = String(name);


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
        <Header result={nameConverted}></Header>
      </header>
      <aside>
        <MenuLeft></MenuLeft>
      </aside>
      <main>
        <ResultView></ResultView>
      </main>
    </Flex>
  );
}
