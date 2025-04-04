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
        <FileText className="h-6 w-6 text-blue-600" />
        <Link to="/" className="text-xl font-bold text-blue-600">MockAI</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
              location.pathname === "/" ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/builder" 
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
              location.pathname === "/builder" ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Resume Builder
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {location.pathname === "/" ? (
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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
