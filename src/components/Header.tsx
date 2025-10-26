import { Link } from "react-router-dom";
import logoLight from "@/assets/logos/logo-light.svg";
import logoDark from "@/assets/logos/logo-dark.svg";

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
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
        </div>
      </div>
    </header>
  );
}
