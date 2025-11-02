import { Button } from "./ui/button";

const categories = ["All", "Audio", "Wearables", "Computers", "Cameras", "Mobile"];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onSelectCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
