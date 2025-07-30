import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium botanical skincare"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-glow/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 right-32 w-8 h-8 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-60 left-32 w-14 h-14 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-60 right-16 w-10 h-10 bg-primary/8 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-80 right-60 w-6 h-6 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-80 left-40 w-18 h-18 bg-primary-glow/12 rounded-full animate-float" style={{ animationDelay: '3.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in-scale">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered Skincare Personalization
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in">
            Your Skin.{" "}
            <span className="bg-gradient-botanical bg-clip-text text-transparent">
              Your Ritual.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Curated skincare kits for your unique skin – powered by nature and 
            personalized by AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/quiz">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Take Skin Quiz
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-sm text-muted-foreground">✨ Dermatologist Tested</div>
            <div className="text-sm text-muted-foreground">🌿 100% Natural</div>
            <div className="text-sm text-muted-foreground">🧪 AI Personalized</div>
            <div className="text-sm text-muted-foreground">💚 Vegan & Cruelty-Free</div>
          </div>
        </div>
      </div>
    </section>
  );
};