import { Header } from "@/components/Header";
import { ResultView } from "@/components/ResultView";

export default function result() {
  return (
    <>
      <header>
        <Header result="Luke SkyWalker"></Header>
      </header>
      <main>
        <ResultView></ResultView>
      </main>
    </>
  );
}
