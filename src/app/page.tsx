import Image from "next/image";
import { About, Intro, Projects, SectionDivider } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />

      <Projects />
    </main>
  );
}
