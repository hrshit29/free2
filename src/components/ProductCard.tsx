import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Eye } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden border border-border transition-all duration-500 hover:shadow-xl hover:shadow-gold/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div
          className={`absolute inset-0 bg-foreground/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button
            onClick={() => addToCart(product)}
            size="icon"
            className="bg-background text-foreground hover:bg-gold hover:text-primary-foreground h-12 w-12 rounded-full transition-all duration-300"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="bg-background/80 border-background text-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold h-12 w-12 rounded-full transition-all duration-300"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 space-y-2">
        <p className="text-xs text-gold uppercase tracking-widest font-medium">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description}
        </p>
        <p className="font-display text-xl font-semibold text-gold pt-2">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;