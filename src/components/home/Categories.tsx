import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Jerseys",
    description: "Authentic team jerseys",
    image:
      "https://images.unsplash.com/photo-1577212017184-80cc0da11082?w=400&q=60&auto=format",
  },
  {
    name: "Frames & Posters",
    description: "Iconic football moments",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&q=60&auto=format",
  },
  {
    name: "Stickers",
    description: "Collectible fan stickers",
    image:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&q=60&auto=format",
  },
  {
    name: "Keychains & Accessories",
    description: "Show your team pride",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=60&auto=format",
  },
];

const Categories: React.FC = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Browse Categories
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-foreground mt-2">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="group relative aspect-[4/5] overflow-hidden bg-muted animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-background mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-background/70">
                      {category.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-background group-hover:text-foreground">
                    <ArrowUpRight className="h-5 w-5 text-background group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
