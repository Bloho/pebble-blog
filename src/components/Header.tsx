import { Link, useLocation } from "react-router-dom";
import logoLight from "@/assets/logos/logo-light.svg";
import logoDark from "@/assets/logos/logo-dark.svg";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export function Header({ searchQuery = "", setSearchQuery }: HeaderProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="w-full border-b bg-background">
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
          <div className="flex items-center gap-4">
            {isHomePage && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="pl-9 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery?.(e.target.value)}
                />
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
