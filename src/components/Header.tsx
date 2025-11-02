import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl">TechStore</h1>
            <nav className="hidden lg:flex gap-6">
              <a href="#" className="text-sm hover:text-gray-600">
                Products
              </a>
              <a href="#" className="text-sm hover:text-gray-600">
                Categories
              </a>
              <a href="#" className="text-sm hover:text-gray-600">
                Deals
              </a>
              <a href="#" className="text-sm hover:text-gray-600">
                About
              </a>
            </nav>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-1 -top-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
