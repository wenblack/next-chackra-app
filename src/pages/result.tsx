import { Header } from "@/components/Header";
import { ResultView } from "@/components/ResultView";
import { useRouter } from "next/router";

export default function result() {
  const router = useRouter();
  const { name } = router.query;
  let nameConverted = String(name);

  return (
    <>
      <header>
        <Header result={nameConverted}></Header>
      </header>
      <main>
        <ResultView></ResultView>
      </main>
    </>
  );
}
