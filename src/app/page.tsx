import ArticleList from "./ArticleList";
import { Heading } from "./common/components";
import type { Article } from "./types";

async function getArticles() {
  const res = await fetch("https://study-react-tau-woad.vercel.app/api/articles", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}