export enum Category {
  AllProducts = 0,
  Vegetables = 1,
  Fruits = 2,
  Dairy = 3,
  Honey = 4,
  Grains = 5,
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: Uint8Array | null; // or string if base64 or URL
  price: number;
  category: Category;
  unit: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: 'credit' | 'debit' | 'cash';
  notes?: string;
}