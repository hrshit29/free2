import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
            Welvara Collections
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-4 mb-6">
            Our Jewelry
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our carefully curated collection of handcrafted jewelry pieces, 
            each designed to capture your unique elegance.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`h-10 px-6 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gold hover:bg-gold-dark text-primary-foreground'
                    : 'border-border hover:border-gold hover:text-gold'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;