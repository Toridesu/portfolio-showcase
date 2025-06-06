import Hero from "./_components/hero";
import Gallery from "./_components/gallery";
import { fetchRepoData } from "@/utils/api";
import { PROJECTS } from "../../../../_data/contents";

export default async function Home() {
  const projects = await Promise.all(
    PROJECTS.map(async (project) => {
      const data = await fetchRepoData(project.repoUrl);
      return {
        owner: data.owner,
        slug: data.slug,
        repoName: data.repoName,
        topics: data.topics,
        imageURL: project.imageURL,
      };
    })
  );

  return (
    <main className="space-y-16 pt-16">
      <Hero />
      <Gallery projects={projects.reverse()} />
    </main>
  );
}