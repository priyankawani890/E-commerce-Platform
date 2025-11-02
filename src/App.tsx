import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CategoryFilter } from "./components/CategoryFilter";
import { ProductCard, Product } from "./components/ProductCard";
import { Cart, CartItem } from "./components/Cart";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2MjAzNjQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 234,
    category: "Audio",
    inStock: true,
  },
  {
    id: 2,
    name: "True Wireless Earbuds Pro",
    price: 179,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYyMDE2MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 189,
    category: "Audio",
    inStock: true,
  },
  {
    id: 3,
    name: "Smart Watch Series X",
    price: 449,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2MjA3Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 512,
    category: "Wearables",
    inStock: true,
  },
  {
    id: 4,
    name: "Ultra-Thin Laptop 15.6\"",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjIwNDkzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 342,
    category: "Computers",
    inStock: true,
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYxOTg1ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 156,
    category: "Audio",
    inStock: true,
  },
  {
    id: 6,
    name: "Professional DSLR Camera",
    price: 899,
    image: "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjE5OTkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 278,
    category: "Cameras",
    inStock: false,
  },
  {
    id: 7,
    name: "5G Smartphone 256GB",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1732998369893-af4c9a4695fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc2MjA2NTg1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 423,
    category: "Mobile",
    inStock: true,
  },
  {
    id: 8,
    name: "Tablet Pro 12.9\" 512GB",
    price: 1099,
    image: "https://images.unsplash.com/photo-1672239069328-dd1535c0d78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYxOTY5NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 387,
    category: "Mobile",
    inStock: true,
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        toast.success("Updated quantity in cart");
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success("Added to cart");
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    toast.success("Removed from cart");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="mb-2">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Toaster />
    </div>
  );
}
