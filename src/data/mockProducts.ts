import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Lionel Messi Argentina Jersey 2022',
    price: 2499,
    description: 'Official Argentina national team jersey worn during the 2022 World Cup victory. Premium quality breathable fabric with authentic crest.',
    images: [
      'https://images.unsplash.com/photo-1577212017184-80cc0da11082?w=800',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'
    ],
    category: 'Jerseys',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Cristiano Ronaldo Framed Poster',
    price: 1299,
    description: 'High-quality framed poster featuring CR7 in his iconic celebration pose. Premium matte finish, ready to hang.',
    images: [
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800'
    ],
    category: 'Frames & Posters',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '3',
    title: 'Football Club Sticker Pack (50 pcs)',
    price: 299,
    description: 'Collection of 50 premium vinyl stickers featuring top football clubs and legendary players. Waterproof and durable.',
    images: [
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800'
    ],
    category: 'Stickers',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '4',
    title: 'Football Keychain Set (3 pcs)',
    price: 399,
    description: 'Set of 3 premium metal keychains featuring football, boot, and trophy designs. Perfect gift for football fans.',
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'
    ],
    category: 'Keychains & Accessories',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '5',
    title: 'Real Madrid Home Jersey 2024',
    price: 2299,
    description: 'Official Real Madrid home jersey for the 2024 season. Breathable Dri-FIT fabric with embroidered club crest.',
    images: [
      'https://images.unsplash.com/photo-1577212017184-80cc0da11082?w=800',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800'
    ],
    category: 'Jerseys',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '6',
    title: 'Champions League Final Poster',
    price: 999,
    description: 'Limited edition poster commemorating the UEFA Champions League final. Premium glossy finish, A2 size.',
    images: [
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'
    ],
    category: 'Frames & Posters',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '7',
    title: 'Barcelona FC Sticker Collection',
    price: 249,
    description: 'Premium Barcelona FC sticker collection featuring club legends, iconic moments, and team badges.',
    images: [
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800'
    ],
    category: 'Stickers',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '8',
    title: 'Golden Ball Trophy Keychain',
    price: 199,
    description: 'Premium metal keychain replica of the iconic Ballon dOr trophy. Gold finish with detailed craftsmanship.',
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'
    ],
    category: 'Keychains & Accessories',
    inStock: true,
    createdAt: new Date()
  }
];

export const categories = ['All', 'Jerseys', 'Frames & Posters', 'Stickers', 'Keychains & Accessories'];