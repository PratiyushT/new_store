import { readable } from 'svelte/store';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Luminous Elegance',
    description: 'A sophisticated gold and crystal pendant necklace that captures and reflects light beautifully. Perfect for both formal occasions and adding elegance to everyday outfits.',
    price: 149.99,
    discountPrice: null,
    images: [
      '/images/products/luminous-elegance-1.jpg',
      '/images/products/luminous-elegance-2.jpg',
    ],
    category: 'jewelry',
    collection: 'timeless',
    featured: true,
    new: true,
    inStock: true,
    attributes: {
      materials: 'Gold-plated brass, Austrian crystal',
      dimensions: 'Chain length: 18 inches, Pendant: 1.2 inches'
    },
    options: null
  },
  {
    id: 2,
    name: 'Royal Velvet Cushion',
    description: 'Add a touch of luxury to your living space with our Royal Velvet Cushion. Made from premium velvet with gold accents and embroidery.',
    price: 79.99,
    discountPrice: 59.99,
    images: [
      '/images/products/royal-velvet-cushion-1.jpg',
      '/images/products/royal-velvet-cushion-2.jpg',
    ],
    category: 'home',
    collection: 'royal',
    featured: true,
    new: false,
    inStock: true,
    attributes: {
      materials: 'Premium velvet, Gold embroidery thread',
      dimensions: '50cm x 50cm',
      care: 'Dry clean only'
    },
    options: {
      colors: [
        { name: 'Emerald Green', value: '#0c6b3d' },
        { name: 'Sapphire Blue', value: '#0e4d8f' },
        { name: 'Ruby Red', value: '#9b1b30' }
      ]
    }
  },
  {
    id: 3,
    name: 'Golden Hour Watch',
    description: 'A timeless timepiece featuring a gold-tone stainless steel case and bracelet with a minimalist white dial. Water-resistant up to 30 meters.',
    price: 249.99,
    discountPrice: null,
    images: [
      '/images/products/golden-hour-watch-1.jpg',
      '/images/products/golden-hour-watch-2.jpg',
    ],
    category: 'accessories',
    collection: 'timeless',
    featured: true,
    new: true,
    inStock: true,
    attributes: {
      materials: 'Gold-tone stainless steel, Mineral crystal',
      dimensions: 'Case diameter: 38mm, Band width: 18mm',
      features: 'Japanese quartz movement, Water-resistant up to 30m'
    },
    options: null
  },
  {
    id: 4,
    name: 'Silk Harmony Scarf',
    description: 'Drape yourself in luxury with our 100% silk scarf featuring an elegant abstract pattern in gold and white tones. Perfect for all seasons.',
    price: 89.99,
    discountPrice: null,
    images: [
      '/images/products/silk-harmony-scarf-1.jpg',
      '/images/products/silk-harmony-scarf-2.jpg',
    ],
    category: 'accessories',
    collection: 'harmony',
    featured: false,
    new: true,
    inStock: true,
    attributes: {
      materials: '100% Mulberry silk',
      dimensions: '90cm x 90cm',
      care: 'Hand wash in cold water with mild detergent'
    },
    options: null
  },
  {
    id: 5,
    name: 'Marble & Gold Coasters',
    description: 'Set of four luxurious white marble coasters with gold-leaf edging. Protect your surfaces with style and sophistication.',
    price: 59.99,
    discountPrice: null,
    images: [
      '/images/products/marble-gold-coasters-1.jpg',
      '/images/products/marble-gold-coasters-2.jpg',
    ],
    category: 'home',
    collection: 'harmony',
    featured: false,
    new: false,
    inStock: true,
    attributes: {
      materials: 'White marble, Gold leaf, Cork backing',
      dimensions: '10cm diameter x 1cm thickness',
      includes: 'Set of 4 coasters'
    },
    options: null
  },
  {
    id: 6,
    name: 'Opulent Candle Set',
    description: 'A trio of luxurious scented candles in glass vessels with gold accents. Features three complementary scents to create the perfect ambiance.',
    price: 119.99,
    discountPrice: 99.99,
    images: [
      '/images/products/opulent-candle-set-1.jpg',
      '/images/products/opulent-candle-set-2.jpg',
    ],
    category: 'home',
    collection: 'royal',
    featured: true,
    new: false,
    inStock: true,
    attributes: {
      materials: 'Soy wax blend, Premium fragrance oils, Glass containers with gold detailing',
      dimensions: 'Each candle: 8cm diameter x 10cm height',
      includes: 'Set of 3 candles: Vanilla & Gold Amber, White Jasmine & Sandalwood, Fig & Cashmere',
      burnTime: 'Approximately 40 hours each'
    },
    options: null
  },
  {
    id: 7,
    name: 'Regal Writing Set',
    description: 'Elevate your correspondence with our elegant gold-plated pen and letter opener set, presented in a white leather case with gold embossing.',
    price: 129.99,
    discountPrice: null,
    images: [
      '/images/products/regal-writing-set-1.jpg',
      '/images/products/regal-writing-set-2.jpg',
    ],
    category: 'accessories',
    collection: 'royal',
    featured: false,
    new: true,
    inStock: true,
    attributes: {
      materials: 'Gold-plated brass, White genuine leather case',
      dimensions: 'Case: 20cm x 8cm x 3cm',
      includes: 'Fountain pen, Ballpoint pen, Letter opener, White leather case'
    },
    options: null
  },
  {
    id: 8,
    name: 'Crystal Whiskey Glasses',
    description: 'Set of two hand-cut crystal whiskey tumblers with subtle gold detailing. Perfect for the connoisseur who appreciates fine craftsmanship.',
    price: 89.99,
    discountPrice: null,
    images: [
      '/images/products/crystal-whiskey-glasses-1.jpg',
      '/images/products/crystal-whiskey-glasses-2.jpg',
    ],
    category: 'home',
    collection: 'timeless',
    featured: false,
    new: false,
    inStock: true,
    attributes: {
      materials: 'Hand-cut crystal, Gold detailing',
      dimensions: '8cm diameter x 9.5cm height, 300ml capacity',
      includes: 'Set of 2 glasses',
      care: 'Hand wash only with mild detergent'
    },
    options: null
  }
];

// Create a categories store
export const categories = readable([
  { id: 'all', name: 'All Products' },
  { id: 'jewelry', name: 'Jewelry' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'home', name: 'Home & Decor' }
]);

// Create a collections store
export const collections = readable([
  { id: 'all', name: 'All Collections' },
  { id: 'timeless', name: 'Timeless Elegance' },
  { id: 'royal', name: 'Royal Collection' },
  { id: 'harmony', name: 'Harmony & Balance' }
]);

// Export the products
export const allProducts = readable(products);

// Helper function to get a product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};
