
import { Experience } from "@/components/Skills/Experience";
import { Skill } from "@/components/Skills/Skill";

import { Work } from "@/components/Works/work";
import { Nav } from "@/components/header/header-nav";
import { Header } from "@/components/header/header-nav";
import { Subfeature } from "@/components/subfeature/subfeature";




export default function Home() {
  return (
    <main>
      <div className="max-w-[1440px]">

    <Nav/>
    <Header />
    <Subfeature />
    <Skill />
    <Experience />

    <Work />


      </div>
    </main>
  );
}
