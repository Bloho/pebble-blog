import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { useTheme } from "next-themes";
import footerDark from "@/assets/footer-dark.svg";
import footerLight from "@/assets/footer-light.svg";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Articles Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="content-grid gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={theme === "dark" ? footerDark : footerLight}
            alt="Footer decoration" 
            className="w-full h-auto object-cover"
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;
