import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Product } from "./ProductCard";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm mb-1 line-clamp-2">{item.product.name}</h4>
                    <p className="text-sm mb-2">${item.product.price}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onRemoveItem(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <p className="text-sm">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <>
            <Separator />
            <div className="space-y-2 py-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <SheetFooter>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
