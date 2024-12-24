import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import RecipeCard from "@/components/recipes/RecipeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sampleHistory = [
  {
    id: "1",
    title: "Ratatouille Provençale",
    cuisine: "Française",
    time: "45 min",
    image: "/placeholder.svg",
    date: "2024-02-20",
  },
  {
    id: "2",
    title: "Pasta Carbonara",
    cuisine: "Italienne",
    time: "30 min",
    image: "/placeholder.svg",
    date: "2024-02-19",
  },
];

const Historique = () => {
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
        <h1 className="text-3xl font-bold mb-6">Historique</h1>
        <p className="text-muted-foreground mb-8">
          Retrouvez vos recettes consultées et favorites
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">Toutes les recettes</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleHistory.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  {...recipe}
                  isFavorite={favorites.includes(recipe.id)}
                  onFavoriteClick={() => toggleFavorite(recipe.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleHistory
                .filter(recipe => favorites.includes(recipe.id))
                .map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    {...recipe}
                    isFavorite={true}
                    onFavoriteClick={() => toggleFavorite(recipe.id)}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
};

export default Historique;