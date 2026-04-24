import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductGrid from "@/components/products/ProductGrid";
import { useProducts } from "@/contexts/ProductContext";
import { categories } from "@/data/mockProducts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Products: React.FC = () => {
  const { products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All",
  );
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "newest":
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchQuery("");
    handleCategoryChange("All");
  };

  const FiltersContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-1">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="ghost"
              onClick={() => handleCategoryChange(cat)}
              className={`justify-start h-9 px-3 text-sm font-normal ${
                selectedCategory === cat
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Sort By
        </h4>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="h-10 border-border/60">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="border-b border-border">
        <div className="container py-10 md:py-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Collection
            </span>
            <h1 className="font-display text-display-sm md:text-display-md text-foreground mt-2">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h1>
            <p className="text-muted-foreground mt-3">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"} available
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-11 border-border/60 focus:border-foreground"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:flex gap-3 ml-auto">
            <Select
              value={selectedCategory}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-44 h-11 border-border/60">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-44 h-11 border-border/60">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Filters */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" className="gap-2 h-11 border-border/60">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="w-80">
              <SheetHeader>
                <SheetTitle className="text-left">Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-8">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No products found matching your criteria.
            </p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Products;
