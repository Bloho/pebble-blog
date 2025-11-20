import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getArticleById } from "@/data/articles";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Facebook, Instagram, School } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import footerDark from "@/assets/footer-dark.svg";
import footerLight from "@/assets/footer-light.svg";
import { getTagColor } from "@/lib/utils";

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-title">
                {article.title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-details">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })} • <span style={{ color: '#1b96c0' }}>{article.author}</span>
                  </span>
                </div>
                {article.tags && article.tags.map((tag, index) => {
                  const colors = getTagColor(tag);
                  return (
                    <Badge 
                      key={index} 
                      className="text-xs border-0"
                      style={{ 
                        backgroundColor: colors.bg, 
                        color: colors.text 
                      }}
                    >
                      {tag}
                    </Badge>
                  );
                })}
                {article.badges && article.badges.map((badge, index) => (
                  <Badge key={index} className={`${badge.color} text-white border-0`}>
                    {badge.text}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full border-b border-border">
          <div className="px-8 sm:px-12 lg:px-16 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg">
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
            <div className="article-content text-base leading-snug tracking-normal space-y-4 font-normal-text font-medium">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return (
                      <p key={index} className="leading-snug tracking-normal font-normal-text font-medium">
                        {block.content}
                      </p>
                    );
                  
                  case 'heading':
                    const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
                    return (
                      <HeadingTag 
                        key={index}
                        className={block.level === 2 ? 'text-3xl font-bold mt-16 mb-6 font-title' : 'text-2xl font-bold mt-12 mb-4 font-title'}
                      >
                        {block.content}
                      </HeadingTag>
                    );
                  
                  case 'image':
                    return (
                      <figure key={index} className="my-16">
                        <div className="aspect-video overflow-hidden rounded-lg">
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
                        className={`space-y-3 ${block.ordered ? 'list-decimal' : 'list-disc'} list-inside ml-4 font-normal-text font-medium`}
                      >
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-foreground leading-relaxed font-normal-text font-medium">
                            {item}
                          </li>
                        ))}
                      </ListTag>
                    );
                  
                  case 'code':
                    return (
                      <div key={index} className="my-8">
                        <pre className="bg-muted p-6 rounded-lg overflow-x-auto border border-border">
                          <code className="text-sm font-mono text-foreground">
                            {block.content}
                          </code>
                        </pre>
                        {block.language && (
                          <p className="text-xs text-muted-foreground mt-2 font-details">
                            {block.language}
                          </p>
                        )}
                      </div>
                    );
                  
                  case 'video':
                    const getVideoEmbedUrl = (url: string) => {
                      if (url.includes('youtube.com') || url.includes('youtu.be')) {
                        const videoId = url.includes('youtu.be') 
                          ? url.split('youtu.be/')[1]?.split('?')[0]
                          : url.split('v=')[1]?.split('&')[0];
                        return `https://www.youtube.com/embed/${videoId}`;
                      }
                      if (url.includes('vimeo.com')) {
                        const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
                        return `https://player.vimeo.com/video/${videoId}`;
                      }
                      return url;
                    };
                    
                    return (
                      <figure key={index} className="my-16">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <iframe
                            src={getVideoEmbedUrl(block.url)}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="text-sm text-muted-foreground mt-4 text-center italic">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="w-full border-t border-border">
          <div className="px-8 sm:px-12 lg:px-16 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-between gap-4">
                <a 
                  href="https://www.facebook.com/DPSPanipatref/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm font-details">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/dps_panipatrefinery/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm font-details">Instagram</span>
                </a>
                <a 
                  href="https://www.dpspr.edu.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <School className="h-5 w-5" />
                  <span className="text-sm font-details">School</span>
                </a>
              </div>
              <Separator className="my-4" />
              <img
                src={theme === "dark" ? footerDark : footerLight}
                alt="Footer decoration" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
