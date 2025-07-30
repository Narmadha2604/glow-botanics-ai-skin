import productsImage from "@/assets/glow-product.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Award, Users, Heart } from "lucide-react";
import botanicalBg from "@/assets/botanical-bg.jpg";

export const AboutPage = () => {
  const values = [
    {
      icon: Leaf,
      title: "Natural First",
      description: "We believe in the power of nature's finest ingredients, sourced sustainably and ethically.",
    },
    {
      icon: Award,
      title: "Science-Backed",
      description: "Every formula is developed with rigorous scientific research and dermatologist testing.",
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Your skin is unique, and our AI-powered recommendations ensure you get exactly what you need.",
    },
    {
      icon: Heart,
      title: "Conscious Beauty",
      description: "Vegan, cruelty-free, and sustainable practices that care for you and the planet.",
    },
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & Chief Formulator",
      bio: "Dermatologist with 15+ years of experience in botanical skincare research.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Arjun Patel",
      role: "Head of AI Technology",
      bio: "AI expert specializing in personalized beauty recommendations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Kavya Reddy",
      role: "Sustainability Director",
      bio: "Environmental scientist ensuring our practices protect the planet.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "The Problem",
      desc:
        "We noticed how overwhelming the skincare world had become. Too many products, conflicting advice, and generic solutions that didn't work for individual skin needs.",
    },
    {
      step: "02",
      title: "The Solution",
      desc:
        "We combined cutting-edge AI technology with traditional botanical wisdom. Our platform analyzes your unique skin characteristics and creates personalized recommendations.",
    },
    {
      step: "03",
      title: "The Future",
      desc:
        "We're just getting started. Our vision is to make personalized, natural skincare accessible to everyone.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={botanicalBg}
              alt="Botanical background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/40" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Our{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Story
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                GlowBotanics began with one belief: Skincare should be clean, effective, 
                and deeply personal. We blend nature's finest ingredients with AI-powered 
                personalization to deliver skincare that truly understands you.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
                Nature meets skincare.{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Science meets glow.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                In a world full of one-size-fits-all solutions, we recognized that every person's 
                skin tells a unique story. Founded in 2023 by a team of dermatologists, AI experts, 
                and sustainability advocates, GlowBotanics was born from the vision to create 
                skincare that's as individual as you are.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="animate-fade-in">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground text-sm">Happy Customers</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground text-sm">Natural Ingredients</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <img
                src={productsImage}
                alt="glow-product"
                className="w-full max-w-xs md:max-w-sm h-auto rounded-2xl shadow-xl max-h-[300px] md:max-h-[400px] object-contain mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide everything we do, from ingredient sourcing to product development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center group animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-botanical rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Meet Our{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate experts dedicated to revolutionizing skincare through science and nature.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center group relative bg-card rounded-2xl p-8 hover:shadow-xl hover:shadow-green-400/40 transition-all duration-500 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-botanical opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Final Working Animated Journey Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center animate-fade-in-scale">
                Our{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <div className="space-y-12">
                {journeySteps.map((item, i) => (
                  <div
                    key={item.step}
                    className="flex items-start space-x-8 animate-slide-up"
                    style={{
                      animationDelay: `${i * 0.3}s`,
                      animationFillMode: "forwards"
                    }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-botanical rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
