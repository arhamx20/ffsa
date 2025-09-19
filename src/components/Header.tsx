import { FileText, BarChart3 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-brand">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">Resume Orchestrator</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            <Button variant="ghost" size="sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button className="hidden md:flex" onClick={() => window.location.href = '/analyze'}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}