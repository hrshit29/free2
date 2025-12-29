import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Diamond, Award, Shield, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop"
            alt="Luxury jewelry"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-2xl space-y-8 animate-fade-up">
            <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] font-medium">
              Timeless Elegance
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight">
              Discover the Art of Fine Jewelry
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Each piece in our collection is meticulously crafted to capture moments 
              that last forever. Explore our exquisite range of handcrafted jewelry.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products">
                <Button className="bg-gold hover:bg-gold-dark text-primary-foreground h-14 px-8 text-base font-medium">
                  Explore Collections
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="h-14 px-8 text-base font-medium border-foreground/20 hover:bg-foreground hover:text-background"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Diamond, title: 'Premium Quality', desc: 'Only the finest materials and gemstones' },
              { icon: Award, title: 'Expert Craftsmanship', desc: 'Over 30 years of artisan expertise' },
              { icon: Shield, title: 'Lifetime Warranty', desc: 'Every piece guaranteed for life' },
              { icon: Truck, title: 'Free Shipping', desc: 'Complimentary insured delivery' },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-lg bg-background border border-border hover:border-gold/50 transition-colors duration-300"
              >
                <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Our Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              Featured Pieces
            </h2>
            <p className="text-muted-foreground">
              Discover our most coveted pieces, each one a testament to our commitment 
              to exceptional quality and timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button
                variant="outline"
                className="h-12 px-8 border-gold text-gold hover:bg-gold hover:text-primary-foreground"
              >
                View All Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop"
                alt="Jewelry craftsmanship"
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="bg-gold text-primary-foreground p-8 rounded-lg">
                  <p className="font-display text-5xl font-bold">30+</p>
                  <p className="text-sm uppercase tracking-wider mt-1">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                Our Heritage
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
                A Legacy of Brilliance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Since 1990, Welvara has been the epitome of luxury jewelry craftsmanship. 
                Our master artisans combine traditional techniques with modern innovation 
                to create pieces that transcend generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every gemstone is hand-selected, every setting meticulously crafted, and 
                every piece polished to perfection. This is the Welvara promise—jewelry 
                that tells your story.
              </p>
              <Link to="/about">
                <Button className="bg-foreground hover:bg-foreground/90 text-background h-12 px-8">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Join Our World
            </h2>
            <p className="text-background/70">
              Subscribe to receive exclusive access to new collections, special offers, 
              and behind-the-scenes stories from our atelier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-6 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-gold"
              />
              <Button className="bg-gold hover:bg-gold-dark text-primary-foreground h-12 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;