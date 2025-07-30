import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonialsImage from "@/assets/testimonials.jpg";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "GlowBotanics transformed my skin! The AI-personalized kit was exactly what my sensitive skin needed. My friends keep asking about my glow!",
      skinType: "Sensitive & Dry",
      kit: "Hydration Kit",
    },
    {
      name: "Arjun Patel",
      location: "Bangalore",
      rating: 5,
      text: "As someone with stubborn acne, I was skeptical. But the Anti-Acne Kit worked wonders! My skin is clearer than it's been in years.",
      skinType: "Oily & Acne-Prone",
      kit: "Anti-Acne Kit",
    },
    {
      name: "Kavya Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "The Brightening Kit gave me the radiant skin I always dreamed of. Natural ingredients with visible results - couldn't ask for more!",
      skinType: "Combination",
      kit: "Brightening Kit",
    },
    {
      name: "Rohit Verma",
      location: "Delhi",
      rating: 5,
      text: "The skin quiz was spot-on! My personalized routine fits perfectly into my busy lifestyle. Highly recommend to everyone!",
      skinType: "Normal",
      kit: "Custom Kit",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={testimonialsImage}
          alt="Happy customers"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What Our{" "}
            <span className="bg-gradient-botanical bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of happy customers who have transformed their skin with GlowBotanics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">

            {/* Testimonial Content */}
            <div className="text-center animate-fade-in" key={currentIndex}>
              {/* Stars */}
              <div className="flex justify-center items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].skinType}
                </p>
                <p className="text-sm text-primary font-medium">
                  Used: {testimonials[currentIndex].kit}
                </p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
