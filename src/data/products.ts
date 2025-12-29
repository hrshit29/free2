import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eternal Rose Gold Ring',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    category: 'Rings',
    description: 'A stunning rose gold ring featuring intricate filigree work and a brilliant center diamond.',
  },
  {
    id: '2',
    name: 'Pearl Cascade Necklace',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    category: 'Necklaces',
    description: 'Elegant freshwater pearls cascade in a delicate arrangement on an 18k gold chain.',
  },
  {
    id: '3',
    name: 'Diamond Stud Earrings',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    category: 'Earrings',
    description: 'Classic diamond studs set in platinum, featuring exceptional clarity and brilliance.',
  },
  {
    id: '4',
    name: 'Sapphire Tennis Bracelet',
    price: 4599,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    category: 'Bracelets',
    description: 'A magnificent tennis bracelet featuring alternating sapphires and diamonds.',
  },
  {
    id: '5',
    name: 'Vintage Emerald Ring',
    price: 5299,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
    category: 'Rings',
    description: 'Art deco inspired emerald ring with diamond halo set in white gold.',
  },
  {
    id: '6',
    name: 'Gold Chain Necklace',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    category: 'Necklaces',
    description: 'Luxurious Italian gold chain with a timeless design for everyday elegance.',
  },
  {
    id: '7',
    name: 'Ruby Drop Earrings',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop',
    category: 'Earrings',
    description: 'Exquisite ruby drops surrounded by pavé diamonds on 18k gold settings.',
  },
  {
    id: '8',
    name: 'Diamond Bangle',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    category: 'Bracelets',
    description: 'Statement diamond bangle featuring channel-set brilliant cut diamonds.',
  },
];

export const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];