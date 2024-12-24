import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ShoppingItem {
  id: string;
  name: string;
  completed: boolean;
  category: string;
}

interface ShoppingList {
  id: string;
  title: string;
  recipe: string;
  date: string;
  items: ShoppingItem[];
}

const sampleLists: ShoppingList[] = [
  {
    id: "1",
    title: "Liste pour Ratatouille",
    recipe: "Ratatouille Provençale",
    date: "2024-02-20",
    items: [
      { id: "1", name: "Aubergines", completed: false, category: "Légumes" },
      { id: "2", name: "Courgettes", completed: false, category: "Légumes" },
      { id: "3", name: "Tomates", completed: false, category: "Légumes" },
    ],
  },
  {
    id: "2",
    title: "Liste pour Carbonara",
    recipe: "Pasta Carbonara",
    date: "2024-02-19",
    items: [
      { id: "4", name: "Pâtes", completed: false, category: "Épicerie" },
      { id: "5", name: "Parmesan", completed: false, category: "Fromages" },
      { id: "6", name: "Lardons", completed: false, category: "Viandes" },
    ],
  },
];

const Listes = () => {
  const [lists, setLists] = useState<ShoppingList[]>(sampleLists);

  const toggleItem = (listId: string, itemId: string) => {
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === listId
          ? {
              ...list,
              items: list.items.map(item =>
                item.id === itemId
                  ? { ...item, completed: !item.completed }
                  : item
              ),
            }
          : list
      )
    );
  };

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Mes listes de courses</h1>
        <p className="text-muted-foreground mb-8">
          Gérez vos listes de courses pour chaque recette
        </p>

        <div className="space-y-6">
          {lists.map(list => (
            <Card key={list.id}>
              <CardHeader>
                <CardTitle className="text-xl">
                  {list.title}
                  <span className="text-sm text-muted-foreground ml-2">
                    pour {list.recipe}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {list.items.map(item => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={`item-${item.id}`}
                        checked={item.completed}
                        onCheckedChange={() => toggleItem(list.id, item.id)}
                      />
                      <Label
                        htmlFor={`item-${item.id}`}
                        className={`${
                          item.completed ? "line-through text-muted-foreground" : ""
                        }`}
                      >
                        {item.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Listes;