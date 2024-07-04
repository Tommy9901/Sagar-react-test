import { Nav } from "@/components/header/header-nav";
import { Header } from "@/components/header/header-nav";
import { Subfeature } from "@/components/subfeature/subfeature";
import { Experience, Work } from "@/components/work/work";


export default function Home() {
  return (
    <main>
      <div className="max-w-[1440px]">

    <Nav/>
    <Header />
    <Subfeature />
    <Work />
    <Experience />

      </div>
    </main>
  );
}
