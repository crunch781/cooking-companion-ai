import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Refrigerator, Globe, History, ListChecks } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Dans mon frigo", icon: Refrigerator, path: "/frigo" },
    { name: "Recette du monde", icon: Globe, path: "/recettes" },
    { name: "Historique", icon: History, path: "/historique" },
    { name: "Mes listes", icon: ListChecks, path: "/listes" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold">
            CuisineAI
          </Link>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200",
                  location.pathname === item.path
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;