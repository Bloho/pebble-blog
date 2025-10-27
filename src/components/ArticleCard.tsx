import { Link } from "react-router-dom";
import { Card, CardHeader } from "@/components/ui/card";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/article/${article.id}`} className="block">
      <Card className="h-full overflow-hidden border shadow-sm rounded-lg">
        <div className="aspect-video overflow-hidden bg-muted rounded-t-lg">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader className="space-y-2 p-6">
          <p className="text-sm text-muted-foreground font-details">
            {new Date(article.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })} • {article.author}
          </p>
          <h3 className="text-xl font-semibold leading-tight font-title">
            {article.title}
          </h3>
        </CardHeader>
      </Card>
    </Link>
  );
}
