import { useParams, Link } from "react-router-dom";
import { getArticleById } from "@/data/articles";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import footerSvg from "@/assets/footer.svg";

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 border-l border-r border-border max-w-7xl mx-auto w-full">
        {/* Title Section */}
        <div className="w-full border-b border-border">
          <div className="px-8 sm:px-12 lg:px-16 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full border-b border-border">
          <div className="px-8 sm:px-12 lg:px-16 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="px-8 sm:px-12 lg:px-16 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="article-content text-base leading-snug tracking-tight space-y-4">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return (
                      <p key={index} className="text-foreground leading-snug tracking-tight">
                        {block.content}
                      </p>
                    );
                  
                  case 'heading':
                    const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
                    return (
                      <HeadingTag 
                        key={index}
                        className={block.level === 2 ? 'text-3xl font-bold mt-16 mb-6' : 'text-2xl font-bold mt-12 mb-4'}
                      >
                        {block.content}
                      </HeadingTag>
                    );
                  
                  case 'image':
                    return (
                      <figure key={index} className="my-16">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={block.src}
                            alt={block.alt}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="text-sm text-muted-foreground mt-4 text-center italic">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  
                  case 'quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-6 py-4 my-12 italic text-muted-foreground">
                        {block.content}
                      </blockquote>
                    );
                  
                  case 'list':
                    const ListTag = block.ordered ? 'ol' : 'ul';
                    return (
                      <ListTag 
                        key={index}
                        className={`space-y-3 ${block.ordered ? 'list-decimal' : 'list-disc'} list-inside ml-4`}
                      >
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-foreground leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ListTag>
                    );
                  
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </article>
      </main>
      
      {/* Footer */}
      <footer className="w-full">
        <img 
          src={footerSvg} 
          alt="Footer decoration" 
          className="w-full h-auto object-cover"
        />
      </footer>
    </div>
  );
}
