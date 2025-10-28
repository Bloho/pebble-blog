import { useState } from "react";
import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { useTheme } from "next-themes";
import { Facebook, Instagram, Heart } from "lucide-react";
import footerDark from "@/assets/footer-dark.svg";
import footerLight from "@/assets/footer-light.svg";

const Index = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Articles Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="content-grid gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground font-details">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border mt-16">
        <div className="px-8 sm:px-12 lg:px-16 py-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm font-details">Facebook</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-details">Instagram</span>
              </a>
              <a 
                href="#sponsor" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span className="text-sm font-details">Sponsor</span>
              </a>
            </div>
            <img 
              src={theme === "dark" ? footerDark : footerLight}
              alt="Footer decoration" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
