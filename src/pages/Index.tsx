import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Articles Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="content-grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
