import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stories, thoughts, and ideas
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of articles exploring design, creativity, and the art of building meaningful things.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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
