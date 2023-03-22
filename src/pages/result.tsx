import { Header } from "@/components/Header";
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
      w='100vw'
      _dark={{
        bgColor: 'blackAlpha.600'
      }}
    >
      <header>
        <Header result={nameConverted}></Header>
      </header>
      <main>
        <ResultView></ResultView>
      </main>
    </Flex>
  );
}
