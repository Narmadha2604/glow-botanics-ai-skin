import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import featuredKits from "@/assets/featured-kits.jpg";

export const FeaturedKits = () => {
  const kits = [
    {
      id: 1,
      name: "Brightening Kit",
      description: "Illuminate your skin with vitamin C and natural botanicals",
      price: "₹799",
      rating: 4.8,
      reviews: 234,
      ingredients: ["Vitamin C", "Turmeric", "Niacinamide"],
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 2,
      name: "Anti-Acne Kit",
      description: "Clear complexion with tea tree and salicylic acid",
      price: "₹849",
      rating: 4.9,
      reviews: 187,
      ingredients: ["Tea Tree", "Salicylic Acid", "Zinc"],
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 3,
      name: "Hydration Kit",
      description: "Deep moisture with hyaluronic acid and aloe vera",
      price: "₹749",
      rating: 4.7,
      reviews: 298,
      ingredients: ["Hyaluronic Acid", "Aloe Vera", "Ceramides"],
      color: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured{" "}
            <span className="bg-gradient-botanical bg-clip-text text-transparent">
              Skincare Kits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular scientifically-formulated kits, 
            each designed to address specific skin concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {kits.map((kit, index) => (
            <div
              key={kit.id}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elegant transition-all duration-500 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={featuredKits}
                  alt={kit.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${kit.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{kit.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {kit.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {kit.description}
                </p>

                {/* Ingredients */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {kit.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>

                {/* Price and Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-foreground">
                    {kit.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {kit.reviews} reviews
                  </span>
                </div>

                {/* CTA */}
                <Link to={`/products/${kit.id}`}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    View Kit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/products">
            <Button variant="hero" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};