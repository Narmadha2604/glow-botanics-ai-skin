import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import featuredKits from "@/assets/featured-kits.jpg";

export const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "GlowKit: Brightening Edition",
      price: "₹799",
      originalPrice: "₹999",
      rating: 4.8,
      reviews: 234,
      description: "Illuminate your skin with vitamin C and natural botanicals",
      ingredients: ["Vitamin C", "Turmeric", "Niacinamide", "Kojic Acid"],
      benefits: ["Reduces dark spots", "Evens skin tone", "Adds natural glow", "Fights free radicals"],
      includes: ["Brightening Cleanser (100ml)", "Vitamin C Serum (30ml)", "Glow Moisturizer (50ml)", "Turmeric Face Mask (75ml)"],
      skinTypes: ["All Skin Types", "Dull Skin", "Uneven Tone"],
      badge: "Best Seller",
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 2,
      name: "GlowKit: Anti-Acne Edition",
      price: "₹849",
      originalPrice: "₹1049",
      rating: 4.9,
      reviews: 187,
      description: "Clear complexion with tea tree and salicylic acid",
      ingredients: ["Tea Tree Oil", "Salicylic Acid", "Zinc", "Neem Extract"],
      benefits: ["Clears acne", "Prevents breakouts", "Reduces inflammation", "Controls oil"],
      includes: ["Purifying Cleanser (100ml)", "Acne Treatment Serum (30ml)", "Oil-Free Moisturizer (50ml)", "Clay Mask (75ml)"],
      skinTypes: ["Oily Skin", "Acne-Prone", "Combination Skin"],
      badge: "Dermatologist Choice",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 3,
      name: "GlowKit: Hydration Edition",
      price: "₹749",
      originalPrice: "₹949",
      rating: 4.7,
      reviews: 298,
      description: "Deep moisture with hyaluronic acid and aloe vera",
      ingredients: ["Hyaluronic Acid", "Aloe Vera", "Ceramides", "Squalane"],
      benefits: ["Deep hydration", "Restores moisture barrier", "Plumps skin", "Soothes dryness"],
      includes: ["Hydrating Cleanser (100ml)", "Hyaluronic Serum (30ml)", "Moisture Cream (50ml)", "Overnight Mask (75ml)"],
      skinTypes: ["Dry Skin", "Sensitive Skin", "Mature Skin"],
      badge: "Customer Favorite",
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 4,
      name: "GlowKit: Anti-Aging Edition",
      price: "₹899",
      originalPrice: "₹1199",
      rating: 4.9,
      reviews: 156,
      description: "Youth-boosting formula with retinol and peptides",
      ingredients: ["Retinol", "Peptides", "Vitamin E", "Collagen Boosters"],
      benefits: ["Reduces fine lines", "Firms skin", "Boosts collagen", "Improves elasticity"],
      includes: ["Anti-Aging Cleanser (100ml)", "Retinol Serum (30ml)", "Firming Cream (50ml)", "Eye Cream (20ml)"],
      skinTypes: ["Mature Skin", "All Skin Types", "Aging Concerns"],
      badge: "Premium",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 5,
      name: "GlowKit: Sensitive Edition",
      price: "₹799",
      originalPrice: "₹999",
      rating: 4.8,
      reviews: 203,
      description: "Gentle care for sensitive and reactive skin",
      ingredients: ["Chamomile", "Calendula", "Oat Extract", "Allantoin"],
      benefits: ["Soothes irritation", "Reduces redness", "Gentle cleansing", "Calms reactions"],
      includes: ["Gentle Cleanser (100ml)", "Calming Serum (30ml)", "Soothing Cream (50ml)", "Recovery Mask (75ml)"],
      skinTypes: ["Sensitive Skin", "Reactive Skin", "Rosacea-Prone"],
      badge: "Hypoallergenic",
      color: "from-pink-300 to-rose-400",
    },
    {
      id: 6,
      name: "GlowKit: Men's Edition",
      price: "₹799",
      originalPrice: "₹999",
      rating: 4.6,
      reviews: 89,
      description: "Specially formulated for men's skin needs",
      ingredients: ["Charcoal", "Menthol", "Green Tea", "Caffeine"],
      benefits: ["Deep cleansing", "Energizes skin", "Reduces razor burn", "Controls shine"],
      includes: ["Charcoal Cleanser (100ml)", "Energizing Serum (30ml)", "Matte Moisturizer (50ml)", "After-Shave Balm (75ml)"],
      skinTypes: ["Men's Skin", "Oily Skin", "Post-Shave Care"],
      badge: "New Launch",
      color: "from-gray-600 to-slate-700",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-24">
          {/* Darker gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9] to-[#86dba9] z-0" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto"></div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-botanical bg-clip-text text-transparent">
                  Premium Kits
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover scientifically-formulated skincare kits designed for every skin type and concern.
              </p>
              <Link to="/quiz">
                <Button variant="hero" size="lg">
                  Find Your Perfect Kit
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elegant transition-all duration-500 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredKits}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
                      {product.badge}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>

                    {/* Wishlist */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white/90 h-10 w-10"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {product.description}
                    </p>

                    {/* Key Ingredients */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.ingredients.slice(0, 3).map((ingredient) => (
                        <span
                          key={ingredient}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {product.ingredients.length > 3 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          +{product.ingredients.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Skin Types */}
                    <div className="text-xs text-muted-foreground mb-4">
                      Perfect for: {product.skinTypes.join(", ")}
                    </div>

                    {/* Price and Reviews */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.reviews} reviews
                      </span>
                    </div>

                    {/* CTA */}
                    <Link to={`/products/${product.id}`}>
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-botanical text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Not sure which kit is right for you?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take our personalized skin quiz to find your perfect match.
            </p>
            <Link to="/quiz">
              <Button variant="premium" size="lg">
                Take Skin Quiz
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};