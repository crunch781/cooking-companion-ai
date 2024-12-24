import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Ingredient {
  id: string;
  name: string;
  category: "frigo" | "placard" | "congelateur";
}

interface IngredientListProps {
  category: "frigo" | "placard" | "congelateur";
  ingredients: Ingredient[];
  onSelectionChange: (selectedIds: string[]) => void;
}

const IngredientList = ({
  category,
  ingredients,
  onSelectionChange,
}: IngredientListProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    const newSelection = selectedIngredients.includes(id)
      ? selectedIngredients.filter((i) => i !== id)
      : [...selectedIngredients, id];
    
    setSelectedIngredients(newSelection);
    onSelectionChange(newSelection);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold capitalize">{category}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient.id}
            onClick={() => handleToggle(ingredient.id)}
            className={cn(
              "flex items-center space-x-3 p-4 rounded-lg border transition-all duration-200",
              selectedIngredients.includes(ingredient.id)
                ? "border-accent bg-accent/5"
                : "border-border hover:border-accent/50"
            )}
          >
            <div className={cn(
              "w-5 h-5 rounded-md border flex items-center justify-center transition-colors",
              selectedIngredients.includes(ingredient.id)
                ? "bg-accent border-accent"
                : "border-muted-foreground"
            )}>
              {selectedIngredients.includes(ingredient.id) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <span className="text-sm">{ingredient.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;