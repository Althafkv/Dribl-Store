export interface Product {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  images: string[];
  category?: string;
  inStock?: boolean;
  createdAt: Date;
  sizes?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  cartItems: CartItem[];
  totalAmount: number;
  paymentMethod: "cod" | "razorpay";
  paymentStatus?: "pending" | "paid" | "failed";
  orderStatus: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  razorpayPaymentId?: string;
  createdAt: Date;
}

export interface AdminCredentials {
  username: string;
  password: string;
}
