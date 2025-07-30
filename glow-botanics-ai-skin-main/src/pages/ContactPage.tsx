import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Clock } from "lucide-react";

export const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get in touch via email",
      contact: "hello@glowbotanics.com",
      available: "24/7 response within 2 hours",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support on WhatsApp",
      contact: "+91 98765 43210",
      available: "Mon-Fri, 9 AM - 8 PM IST",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our experts",
      contact: "+91 98765 43210",
      available: "Mon-Fri, 9 AM - 6 PM IST",
    },
  ];

  const officeLocations = [
    {
      city: "Bangalore",
      address: "123 Innovation Drive, Koramangala, Bangalore 560034",
      type: "Headquarters",
    },
    {
      city: "Mumbai",
      address: "456 Business Plaza, Bandra West, Mumbai 400050",
      type: "Regional Office",
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
                Get in{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Have questions about your skin or our products? We're here to help you glow!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="text-center group bg-card border border-border rounded-3xl p-8 hover:shadow-elegant transition-all duration-500 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-botanical rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="text-primary font-medium mb-2">{method.contact}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{method.available}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone (Optional)
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea placeholder="Tell us more about your inquiry..." rows={6} />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Visit our offices
                </h2>
                <p className="text-muted-foreground mb-8">
                  Come visit us at one of our office locations for a personal consultation.
                </p>

                <div className="space-y-6 mb-12">
                  {officeLocations.map((location, index) => (
                    <div key={location.city} className="bg-card border border-border rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {location.city} - {location.type}
                          </h3>
                          <p className="text-muted-foreground">{location.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Follow us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Stay updated with our latest products, tips, and community highlights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                Looking for quick answers?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" size="lg" className="text-left justify-start h-auto p-6">
                  <div>
                    <div className="font-medium mb-1">Shipping & Returns</div>
                    <div className="text-sm text-muted-foreground">
                      Learn about our shipping policy and easy returns
                    </div>
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="text-left justify-start h-auto p-6">
                  <div>
                    <div className="font-medium mb-1">Product Information</div>
                    <div className="text-sm text-muted-foreground">
                      Find detailed info about ingredients and usage
                    </div>
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="text-left justify-start h-auto p-6">
                  <div>
                    <div className="font-medium mb-1">Subscription Management</div>
                    <div className="text-sm text-muted-foreground">
                      Manage your monthly skincare subscriptions
                    </div>
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="text-left justify-start h-auto p-6">
                  <div>
                    <div className="font-medium mb-1">Skin Quiz Help</div>
                    <div className="text-sm text-muted-foreground">
                      Get help with taking your personalized skin quiz
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
