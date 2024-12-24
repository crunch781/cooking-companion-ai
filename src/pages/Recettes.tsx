import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import RecipeCard from "@/components/recipes/RecipeCard";

const cuisines = [
  { id: "fr", name: "Française" },
  { id: "it", name: "Italienne" },
  { id: "jp", name: "Japonaise" },
  { id: "th", name: "Thaïlandaise" },
  { id: "in", name: "Indienne" },
  { id: "mx", name: "Mexicaine" },
  { id: "lb", name: "Libanaise" },
  { id: "gr", name: "Grecque" },
  { id: "vn", name: "Vietnamienne" },
  { id: "ma", name: "Marocaine" },
  { id: "kr", name: "Coréenne" },
  { id: "es", name: "Espagnole" },
];

const Recettes = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev =>
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Recettes du monde</h1>
        <p className="text-muted-foreground mb-8">
          Découvrez des recettes de différentes cuisines du monde
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {cuisines.map(cuisine => (
            <button
              key={cuisine.id}
              onClick={() => setSelectedCuisine(cuisine.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCuisine === cuisine.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {cuisine.name}
            </button>
          ))}
        </div>

        {selectedCuisine && (
          <div className="text-center text-muted-foreground py-12">
            Sélectionnez vos préférences pour voir des suggestions de recettes
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Recettes;