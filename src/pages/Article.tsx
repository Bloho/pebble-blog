import { useParams, Link } from "react-router-dom";
import { getArticleById } from "@/data/articles";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

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
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-8">
                <span className="font-medium text-foreground">{article.author}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
            <div className="max-w-4xl">
              <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
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
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div 
              className={`article-content text-lg leading-relaxed prose prose-lg max-w-none ${
                article.fontFamily ? `font-${article.fontFamily}` : 'font-serif'
              }`}
              dangerouslySetInnerHTML={{ __html: article.content.trim().split('\n').map(line => {
                if (line.startsWith('## ')) {
                  return `<h2>${line.slice(3)}</h2>`;
                } else if (line.startsWith('### ')) {
                  return `<h3>${line.slice(4)}</h3>`;
                } else if (line.startsWith('> ')) {
                  return `<blockquote>${line.slice(2)}</blockquote>`;
                } else if (line.startsWith('- ') || line.startsWith('* ')) {
                  return `<li>${line.slice(2)}</li>`;
                } else if (/^\d+\./.test(line)) {
                  return `<li>${line.replace(/^\d+\.\s*/, '')}</li>`;
                } else if (line.trim() === '') {
                  return '<br/>';
                } else if (line.startsWith('**') && line.endsWith('**')) {
                  return `<p><strong>${line.slice(2, -2)}</strong></p>`;
                } else {
                  return `<p>${line}</p>`;
                }
              }).join('') }}
            />
          </div>
        </article>
      </main>
    </div>
  );
}
