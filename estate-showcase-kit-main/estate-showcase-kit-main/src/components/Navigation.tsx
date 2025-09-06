import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'watch-us', label: 'Watch Us in Action' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'home-buying', label: 'Home Buying Explained' },
    { id: 'micro-knowledge', label: 'Micro Knowledge' },
    { id: 'contact', label: 'Contact Us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container-custom flex items-center justify-between h-16">
        {/* Skip to content link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>
        
        {/* Brand */}
        <div className="flex items-center">
          <h1 className="text-xl font-heading font-semibold text-primary">
            Elite Properties
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                activeSection === item.id ? 'text-accent' : 'text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden bg-background border-b border-border"
          role="menu"
        >
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-accent/10 text-accent' 
                    : 'text-foreground hover:bg-muted hover:text-accent'
                }`}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;