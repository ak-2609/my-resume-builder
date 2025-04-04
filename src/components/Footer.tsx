import React from "react";
import { FileText, Github, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-resume-blue" />
          <span className="text-lg font-semibold">MockAI</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} MockAI. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-muted-foreground hover:text-resume-blue"
            aria-label="Github"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-resume-blue"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-resume-blue"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
