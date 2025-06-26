import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}
const Navbar = ({
  darkMode,
  setDarkMode
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Internships',
    href: '#internships'
  }, {
    name: 'Co-Curricular',
    href: '#cocurricular'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary">Devendra Ahire</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  {item.name}
                </a>)}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>)}
          </div>
        </div>}
    </nav>;
};
export default Navbar;