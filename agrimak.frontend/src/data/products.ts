import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    price: 4.99,
    unit: 'lb',
    description: 'Fresh, vine-ripened organic tomatoes grown locally. Perfect for salads, cooking, and sauces.',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Vegetables',
    availability: 'In Stock',
    featured: true
  },
  {
    id: '2',
    name: 'Farm Fresh Eggs',
    price: 6.50,
    unit: 'dozen',
    description: 'Free-range chicken eggs from our local partner farms. Rich in protein and perfect for any meal.',
    image: 'https://images.pexels.com/photos/162712/eggs-food-healthy-breakfast-162712.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Dairy',
    availability: 'In Stock',
    featured: true
  },
  {
    id: '3',
    name: 'Raw Wildflower Honey',
    price: 12.99,
    unit: '16oz jar',
    description: 'Pure, unprocessed wildflower honey harvested from local beehives. Natural sweetener with amazing flavor.',
    image: 'https://images.pexels.com/photos/315263/pexels-photo-315263.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Honey',
    availability: 'In Stock',
    featured: true
  },
  {
    id: '4',
    name: 'Organic Spinach',
    price: 3.49,
    unit: 'bunch',
    description: 'Fresh organic spinach leaves, perfect for salads, smoothies, and cooking. Packed with nutrients.',
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Vegetables',
    availability: 'In Stock'
  },
  {
    id: '5',
    name: 'Sweet Corn',
    price: 0.75,
    unit: 'ear',
    description: 'Sweet, tender corn on the cob. Locally grown and harvested at peak freshness.',
    image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Vegetables',
    availability: 'In Stock'
  },
  {
    id: '6',
    name: 'Fresh Strawberries',
    price: 8.99,
    unit: 'pint',
    description: 'Juicy, sweet strawberries picked at peak ripeness. Perfect for desserts or eating fresh.',
    image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fruits',
    availability: 'Low Stock'
  },
  {
    id: '7',
    name: 'Whole Wheat Bread',
    price: 5.99,
    unit: 'loaf',
    description: 'Freshly baked whole wheat bread made with organic flour from local grains.',
    image: 'https://images.pexels.com/photos/209117/pexels-photo-209117.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Grains',
    availability: 'In Stock'
  },
  {
    id: '8',
    name: 'Organic Carrots',
    price: 2.99,
    unit: 'lb',
    description: 'Crisp, sweet organic carrots grown in rich soil. Great for snacking, cooking, and juicing.',
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Vegetables',
    availability: 'In Stock'
  },
  {
    id: '9',
    name: 'Fresh Milk',
    price: 4.25,
    unit: 'gallon',
    description: 'Fresh, pasteurized milk from grass-fed cows at our partner dairy farms.',
    image: 'https://images.pexels.com/photos/416949/pexels-photo-416949.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Dairy',
    availability: 'In Stock'
  },
  {
    id: '10',
    name: 'Organic Quinoa',
    price: 9.99,
    unit: '2lb bag',
    description: 'Premium organic quinoa grain, perfect for healthy meals and side dishes.',
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Grains',
    availability: 'In Stock'
  }
];

export const categories = [
  'All Products',
  'Vegetables',
  'Fruits', 
  'Dairy',
  'Honey',
  'Grains'
];