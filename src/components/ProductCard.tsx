import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2"
            >
              -{discount}%
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary">Out of Stock</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="mb-2 line-clamp-2">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
