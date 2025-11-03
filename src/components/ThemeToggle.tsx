import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Add theme transition class and direction class
    document.body.classList.add('theme-transitioning');
    document.body.classList.add(`transitioning-to-${newTheme}`);
    
    // Change theme
    setTheme(newTheme);
    
    // Remove transition classes after animation
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
      document.body.classList.remove(`transitioning-to-${newTheme}`);
    }, 500);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
