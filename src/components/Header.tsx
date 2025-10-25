import { Link } from "react-router-dom";
import logoLight from "@/assets/logos/logo-light.svg";
import logoDark from "@/assets/logos/logo-dark.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logoLight} 
              alt="Logo" 
              className="h-8 dark:hidden"
            />
            <img 
              src={logoDark} 
              alt="Logo" 
              className="h-8 hidden dark:block"
            />
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Articles
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
