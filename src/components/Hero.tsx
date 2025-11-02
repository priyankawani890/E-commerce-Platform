import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="mb-4">New Collection 2025</h2>
          <h1 className="mb-6">Premium Tech Accessories</h1>
          <p className="mb-8 text-lg text-blue-50">
            Discover the latest gadgets and accessories with up to 50% off.
            Limited time offer on selected items.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Deals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
