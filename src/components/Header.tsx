import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Start Here", href: "#start" },
    { name: "About", href: "#about" },
    { name: "Gather", href: "#gather" },
    { name: "People", href: "#people" },
    { name: "Connect", href: "#connect" },
    { name: "Engage", href: "#engage" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="flex items-center gap-1">
            Sundays at 9am in <strong>Nairobi</strong>, 10:30am in <strong>Mombasa</strong> & <strong>Kisumu</strong>, 3pm in <strong>Nakuru</strong>
          </span>
          <span className="hidden md:flex items-center gap-4">
            <a href="#locations" className="flex items-center gap-1 hover:text-primary-light transition-colors">
              <MapPin className="w-3 h-3" />
              Get Directions
            </a>
            <a href="#contact" className="flex items-center gap-1 hover:text-primary-light transition-colors">
              <Phone className="w-3 h-3" />
              Contact Us
            </a>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-hero rounded-full w-10 h-10 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <span className="ml-3 text-xl font-bold text-primary">Living Rock Church</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Start Here Button */}
            <div className="hidden lg:block">
              <Button variant="hero" className="px-6">
                👉 Start Here
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-background/95 backdrop-blur-sm">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <Button variant="hero" className="w-full">
                    👉 Start Here
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;