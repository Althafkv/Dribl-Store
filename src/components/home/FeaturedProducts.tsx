import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/contexts/ProductContext";
import ProductGrid from "@/components/products/ProductGrid";

const FeaturedProducts: React.FC = () => {
  const { products } = useProducts();

  const featuredProducts = [...products]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 8);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Curated Selection
            </span>
            <h2 className="font-display text-display-sm md:text-display-md text-foreground">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity group"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
