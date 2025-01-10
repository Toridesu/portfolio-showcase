import { fetchRepoData } from "@/utils/api";
import Hero from "./_components/hero"
import { PROJECTS } from "../../../../_data/contents";

export default async function Home() {
  const res = fetchRepoData(PROJECTS[0].repoUrl);
  console.log(res)
  return (
    <main className="space-y-32 pt-16">
	    {/* <p>ヒーローセクション</p> */}
      <Hero/>
	    <p>ギャラリー一覧</p>
    </main>
  );
}