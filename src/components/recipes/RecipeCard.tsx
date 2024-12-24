import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  title: string;
  cuisine: string;
  time: string;
  image: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  onClick?: () => void;
}

const RecipeCard = ({
  title,
  cuisine,
  time,
  image,
  isFavorite,
  onFavoriteClick,
  onClick,
}: RecipeCardProps) => {
  return (
    <div
      onClick={onClick}
      className="recipe-card group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {onFavoriteClick && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteClick();
            }}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm",
              "transition-colors duration-200 hover:bg-white"
            )}
          >
            <Heart
              className={cn(
                "w-5 h-5 transition-colors",
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              )}
            />
          </button>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{cuisine}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default RecipeCard;