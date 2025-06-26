import { Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <a href="#home" className="text-3xl font-bold text-primary">Devendra Ahire</a>
          </div>

          {/* Navigation Links */}
          <div className="mb-8">
            
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:devendraahire01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/devendra-ahire" className="text-muted-foreground hover:text-primary transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/Dahire100" className="text-muted-foreground hover:text-primary transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Devendra Ahire. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
          </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;