export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  category: string;
  availability: 'In Stock' | 'Low Stock' | 'Out of Stock';
  featured?: boolean;
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