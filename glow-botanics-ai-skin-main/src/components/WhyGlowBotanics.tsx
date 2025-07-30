import { Leaf, TestTube, Brain } from "lucide-react";

export const WhyGlowBotanics = () => {
  const features = [
    {
      icon: Leaf,
      title: "Botanical & Vegan",
      description: "Pure plant-based ingredients sourced ethically from nature's finest botanical gardens.",
    },
    {
      icon: TestTube,
      title: "Dermatologist Tested",
      description: "Every formula is rigorously tested and approved by certified dermatologists for safety.",
    },
    {
      icon: Brain,
      title: "AI-Personalized Kits",
      description: "Advanced AI analyzes your skin needs to create perfectly curated skincare routines.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="bg-gradient-botanical bg-clip-text text-transparent">
              GlowBotanics?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine the power of nature with cutting-edge technology to deliver 
            skincare that's as unique as you are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-green-glow hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-scale hover:animate-glow animate-float"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + index * 0.5}s`
              }}
            >
              {/* Icon with same green gradient */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
