import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import IngredientList from "@/components/frigo/IngredientList";

const frigoIngredients = [
  { id: "1", name: "Lait", category: "frigo" as const },
  { id: "2", name: "Œufs", category: "frigo" as const },
  { id: "3", name: "Fromage", category: "frigo" as const },
  { id: "4", name: "Beurre", category: "frigo" as const },
  { id: "5", name: "Crème fraîche", category: "frigo" as const },
  { id: "6", name: "Yaourt", category: "frigo" as const },
  { id: "7", name: "Jus d'orange", category: "frigo" as const },
  { id: "8", name: "Jambon", category: "frigo" as const },
  { id: "9", name: "Bacon", category: "frigo" as const },
  { id: "10", name: "Saumon fumé", category: "frigo" as const },
];

const placardIngredients = [
  { id: "11", name: "Farine", category: "placard" as const },
  { id: "12", name: "Sucre", category: "placard" as const },
  { id: "13", name: "Pâtes", category: "placard" as const },
  { id: "14", name: "Riz", category: "placard" as const },
  { id: "15", name: "Huile d'olive", category: "placard" as const },
  { id: "16", name: "Vinaigre balsamique", category: "placard" as const },
  { id: "17", name: "Sel", category: "placard" as const },
  { id: "18", name: "Poivre", category: "placard" as const },
  { id: "19", name: "Thym", category: "placard" as const },
  { id: "20", name: "Romarin", category: "placard" as const },
  { id: "21", name: "Curry", category: "placard" as const },
  { id: "22", name: "Paprika", category: "placard" as const },
  { id: "23", name: "Cannelle", category: "placard" as const },
  { id: "24", name: "Chocolat", category: "placard" as const },
];

const congelateurIngredients = [
  { id: "25", name: "Légumes surgelés", category: "congelateur" as const },
  { id: "26", name: "Viande congelée", category: "congelateur" as const },
  { id: "27", name: "Glace", category: "congelateur" as const },
  { id: "28", name: "Petits pois", category: "congelateur" as const },
  { id: "29", name: "Épinards", category: "congelateur" as const },
  { id: "30", name: "Frites", category: "congelateur" as const },
  { id: "31", name: "Poisson pané", category: "congelateur" as const },
  { id: "32", name: "Pizza", category: "congelateur" as const },
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