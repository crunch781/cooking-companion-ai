import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import RecipeCard from "@/components/recipes/RecipeCard";

const cuisines = [
  { id: "fr", name: "Française" },
  { id: "it", name: "Italienne" },
  { id: "jp", name: "Japonaise" },
];

const sampleRecipes = [
  {
    id: "1",
    title: "Ratatouille Provençale",
    cuisine: "Française",
    time: "45 min",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Pasta Carbonara",
    cuisine: "Italienne",
    time: "30 min",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Sushi Rolls",
    cuisine: "Japonaise",
    time: "60 min",
    image: "/placeholder.svg",
  },
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

        <div className="flex gap-4 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              isFavorite={favorites.includes(recipe.id)}
              onFavoriteClick={() => toggleFavorite(recipe.id)}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Recettes;