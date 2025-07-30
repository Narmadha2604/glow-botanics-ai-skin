import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import botanicalBg from "@/assets/botanical-bg.jpg";

export const CTAStrip = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={botanicalBg}
          alt="Botanical background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-glow/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-fade-in-scale">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
            Don't guess your skincare.{" "}
            <span className="block md:inline">
              Know it.
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Start your personalized skin journey today with our AI-powered skin analysis.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/quiz">
              <Button 
                variant="premium" 
                size="lg" 
                className="text-xl px-12 py-6 shadow-glow hover:shadow-botanical transition-all duration-300"
              >
                Take Your Skin Quiz
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicator */}
          <p className="text-white/70 text-sm mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            ✨ Free personalized recommendations in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};