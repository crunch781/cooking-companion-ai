import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import IngredientList from "@/components/frigo/IngredientList";

const frigoIngredients = [
  { id: "1", name: "Lait", category: "frigo" as const },
  { id: "2", name: "Œufs", category: "frigo" as const },
  { id: "3", name: "Fromage", category: "frigo" as const },
];

const placardIngredients = [
  { id: "4", name: "Farine", category: "placard" as const },
  { id: "5", name: "Sucre", category: "placard" as const },
  { id: "6", name: "Pâtes", category: "placard" as const },
];

const congelateurIngredients = [
  { id: "7", name: "Légumes surgelés", category: "congelateur" as const },
  { id: "8", name: "Viande congelée", category: "congelateur" as const },
  { id: "9", name: "Glace", category: "congelateur" as const },
];

const Frigo = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleSelectionChange = (newSelection: string[]) => {
    setSelectedIngredients(newSelection);
    console.log("Selected ingredients:", newSelection);
  };

  return (
    <PageContainer className="space-y-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dans mon frigo</h1>
        <p className="text-muted-foreground mb-8">
          Sélectionnez les ingrédients disponibles pour trouver des recettes adaptées
        </p>

        <div className="space-y-12">
          <IngredientList
            category="frigo"
            ingredients={frigoIngredients}
            onSelectionChange={handleSelectionChange}
          />
          <IngredientList
            category="placard"
            ingredients={placardIngredients}
            onSelectionChange={handleSelectionChange}
          />
          <IngredientList
            category="congelateur"
            ingredients={congelateurIngredients}
            onSelectionChange={handleSelectionChange}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Frigo;