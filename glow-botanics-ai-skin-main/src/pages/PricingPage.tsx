import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

export const PricingPage = () => {
  const plans = [
    {
      name: "One-Time",
      price: "₹799",
      period: "per kit",
      description: "Perfect for trying our personalized skincare",
      features: [
        "1 Personalized Kit",
        "AI Skin Analysis",
        "Free Shipping",
        "30-Day Money Back",
        "Customer Support",
      ],
      cta: "Order Now",
      popular: false,
      gradient: "from-muted to-muted/50",
    },
    {
      name: "Monthly Glow",
      price: "₹699",
      period: "per month",
      originalPrice: "₹799",
      description: "For consistent skincare with fresh recommendations",
      features: [
        "AI Kits every month",
        "Continuous skin tracking",
        "Priority customer support",
        "Free shipping always",
        "Exclusive member benefits",
        "Cancel anytime",
      ],
      cta: "Start Monthly Plan",
      popular: true,
      gradient: "from-primary to-primary-glow",
    },
    {
      name: "3-Month Boost",
      price: "₹1,899",
      period: "total (₹633/month)",
      originalPrice: "₹2,397",
      description: "Best value for serious skin transformation",
      features: [
        "3 Curated kits delivered",
        "Complete skin transformation",
        "VIP customer support",
        "Bonus skincare accessories",
        "Progress tracking app",
        "Satisfaction guarantee",
      ],
      cta: "Get 3-Month Plan",
      popular: false,
      gradient: "from-accent to-yellow-400",
    },
  ];

  const faqs = [
    {
      question: "How does the AI personalization work?",
      answer: "Our AI analyzes your skin quiz responses, considers your environment, lifestyle, and preferences to create a unique skincare routine just for you.",
    },
    {
      question: "Can I change or cancel my subscription?",
      answer: "Yes! You can modify, pause, or cancel your subscription anytime from your account dashboard or by contacting our support team.",
    },
    {
      question: "What if the products don't work for me?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "Are the ingredients really natural?",
      answer: "Absolutely! We use 100% natural, vegan ingredients sourced ethically. All our products are dermatologist-tested and cruelty-free.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24">
          {/* Darker gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9] to-[#86dba9] z-0" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Choose Your{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Glow Journey
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Personalized skincare plans designed to fit your lifestyle and budget
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-card border-2 rounded-3xl p-8 hover:shadow-elegant transition-all duration-500 animate-fade-in-scale ${
                    plan.popular 
                      ? "border-primary shadow-botanical scale-105" 
                      : "border-border hover:border-primary/40"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-botanical text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      {plan.originalPrice && (
                        <div className="text-lg text-muted-foreground line-through mb-1">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </div>
                      <div className="text-muted-foreground">
                        {plan.period}
                      </div>
                    </div>

                    {/* Savings Badge */}
                    {plan.originalPrice && (
                      <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        Save ₹{parseInt(plan.originalPrice.replace('₹', '').replace(',', '')) - 
                                parseInt(plan.price.replace('₹', '').replace(',', ''))}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                      >
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full text-lg py-6"
                  >
                    {plan.cta}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                All plans include AI-powered skin analysis and personalized recommendations
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Dermatologist Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Vegan & Cruelty-Free</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                  Frequently Asked{" "}
                  <span className="bg-gradient-botanical bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know about our pricing and plans
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 animate-fade-in-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-botanical text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to start your glow journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of happy customers who have transformed their skin with GlowBotanics
            </p>
            <Button variant="premium" size="lg" className="text-xl px-12 py-6">
              Take Your Skin Quiz
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};