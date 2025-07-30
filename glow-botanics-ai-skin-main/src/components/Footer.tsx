import { Button } from "@/components/ui/button";
import { Instagram, Mail, MessageCircle, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-botanical rounded-full animate-float"></div>
              <span className="text-xl font-serif font-semibold text-foreground">
                GlowBotanics
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Nature meets skincare. Science meets glow. Curated skincare kits 
              for your unique skin – powered by nature and personalized by AI.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/quiz"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Skin Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GlowBotanics. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Sustainably crafted with love
            </span>
          </div>
        </div>

        {/* Centered Credit */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          Designed and Developed by <span className="text-primary font-medium">Mitbots</span>
        </p>
      </div>
    </footer>
  );
};
