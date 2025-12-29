import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Gem, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Gem,
      title: 'Exceptional Quality',
      description: 'We source only the finest gemstones and materials, ensuring each piece meets our exacting standards.',
    },
    {
      icon: Users,
      title: 'Master Craftsmanship',
      description: 'Our artisans bring decades of experience and passion to every piece they create.',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Every customer receives personalized attention and guidance in their jewelry journey.',
    },
    {
      icon: Award,
      title: 'Timeless Design',
      description: 'Our designs transcend trends, creating pieces that remain beautiful for generations.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                Our Story
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground leading-tight">
                Crafting Dreams Into Reality
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 1990, Welvara began as a small family atelier with a simple vision: 
                to create jewelry that captures life's most precious moments and transforms them 
                into wearable art.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Three decades later, we remain true to our founding principles—exceptional 
                craftsmanship, uncompromising quality, and designs that speak to the heart. 
                Each piece that leaves our workshop carries with it the dedication of our 
                master artisans and the promise of enduring beauty.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
                alt="Jewelry artisan at work"
                className="rounded-lg w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '30+', label: 'Years of Excellence' },
              { value: '15K+', label: 'Happy Customers' },
              { value: '500+', label: 'Unique Designs' },
              { value: '50+', label: 'Master Artisans' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="font-display text-4xl md:text-5xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-background/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-300 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&h=600&fit=crop"
                alt="Jewelry workshop"
                className="rounded-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                The Process
              </span>
              <h2 className="font-display text-4xl font-semibold text-foreground">
                From Vision to Masterpiece
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every Welvara piece begins as a sketch and evolves through countless hours 
                of meticulous work. Our artisans hand-select each gemstone, carefully set 
                each diamond, and polish every surface to perfection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We use time-honored techniques passed down through generations, combined 
                with modern precision tools, to create jewelry that meets the highest 
                standards of quality and beauty.
              </p>
              <Link to="/products">
                <Button className="bg-gold hover:bg-gold-dark text-primary-foreground h-12 px-8">
                  Explore Our Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Ready to Find Your Perfect Piece?
            </h2>
            <p className="text-muted-foreground text-lg">
              Visit our collections and discover jewelry that speaks to your unique style.
            </p>
            <Link to="/products">
              <Button className="bg-foreground hover:bg-foreground/90 text-background h-14 px-10 text-base mt-4">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;