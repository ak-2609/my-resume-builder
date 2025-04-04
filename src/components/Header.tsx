import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { FileText, Home } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-resume-blue" />
          <Link to="/" className="text-xl font-bold text-resume-blue">MockAI</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-resume-blue ${
              location.pathname === "/" ? "text-resume-blue" : "text-resume-dark-gray"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/builder" 
            className={`text-sm font-medium transition-colors hover:text-resume-blue ${
              location.pathname === "/builder" ? "text-resume-blue" : "text-resume-dark-gray"
            }`}
          >
            Resume Builder
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {location.pathname === "/" ? (
            <Button asChild className="bg-resume-blue hover:bg-resume-dark-blue text-white">
              <Link to="/builder">Create Resume</Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link to="/"><Home className="mr-2 h-4 w-4" /> Home</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
