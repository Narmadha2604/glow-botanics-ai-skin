import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Skin Quiz", href: "/quiz" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-botanical rounded-full animate-float group-hover:animate-glow transition-all duration-300"></div>
            <span className="text-xl font-serif font-semibold text-foreground">
              GlowBotanics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Cart and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="relative group hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:shadow-glow bg-gradient-to-r from-primary/5 to-primary-glow/5 hover:from-primary/10 hover:to-primary-glow/10"
            >
              <ShoppingBag className="h-5 w-5 mr-2 text-primary group-hover:animate-bounce transition-colors duration-300" />
              <span className="font-medium text-primary group-hover:text-primary-glow transition-colors duration-300">Cart</span>
              <span className="absolute -top-3 -right-3 bg-gradient-botanical text-white text-xs rounded-full w-7 h-7 flex items-center justify-center font-bold animate-pulse shadow-glow border-2 border-white group-hover:scale-110 transition-transform duration-300">
                0
              </span>
              <div className="absolute inset-0 rounded-md bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};