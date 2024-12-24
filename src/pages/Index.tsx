import { Link } from "react-router-dom";
import { Refrigerator, Globe, History, ListChecks } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const features = [
  {
    icon: Refrigerator,
    title: "Dans mon frigo",
    description: "Trouvez des recettes avec vos ingrédients disponibles",
    path: "/frigo",
  },
  {
    icon: Globe,
    title: "Recette du monde",
    description: "Découvrez des recettes du monde entier",
    path: "/recettes",
  },
  {
    icon: History,
    title: "Historique",
    description: "Consultez vos recettes précédentes",
    path: "/historique",
  },
  {
    icon: ListChecks,
    title: "Mes listes",
    description: "Gérez vos listes de courses",
    path: "/listes",
  },
];

const Index = () => {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 fade-in">
          Votre assistant culinaire intelligent
        </h1>
        <p className="text-xl text-muted-foreground fade-in">
          Découvrez des recettes personnalisées et simplifiez votre cuisine quotidienne
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Link
            key={feature.path}
            to={feature.path}
            className={cn(
              "p-6 rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300",
              "transform hover:-translate-y-1",
              "slide-in"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <feature.icon className="w-12 h-12 text-accent mb-4" />
            <h2 className="text-xl font-semibold mb-3">{feature.title}</h2>
            <p className="text-muted-foreground">{feature.description}</p>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
};

export default Index;