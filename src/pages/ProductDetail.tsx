import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductGallery from "@/components/products/ProductGallery";
import { useProducts } from "@/contexts/ProductContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProduct } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // ✅ ADDED

  const product = getProduct(id || "");

  if (!product) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <Button onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </div>
      </MainLayout>
    );
  }

  const compareAt =
    product.compareAtPrice === undefined || product.compareAtPrice === null
      ? undefined
      : typeof product.compareAtPrice === "number"
        ? product.compareAtPrice
        : Number(product.compareAtPrice);

  const showCompareAt =
    typeof compareAt === "number" &&
    Number.isFinite(compareAt) &&
    compareAt > product.price;

  const discountPercentage = showCompareAt
    ? Math.round(((compareAt - product.price) / compareAt) * 100)
    : 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Select Size",
        description: "Please select a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, quantity, selectedSize);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div className="animate-fade-in">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-slide-up">
            {product.category && (
              <Badge variant="secondary">{product.category}</Badge>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {product.title}
            </h1>

            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </p>
              {showCompareAt && (
                <p className="text-xl text-muted-foreground line-through">
                  {formatPrice(compareAt)}
                </p>
              )}
            </div>
            {showCompareAt && (
              <Badge variant="destructive" className="w-fit">
                {discountPercentage}% OFF
              </Badge>
            )}

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <span className="text-sm font-medium text-foreground">
                  Select Size:
                </span>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition
                        ${
                          selectedSize === size
                            ? "bg-primary text-white border-primary"
                            : "border-border hover:border-primary"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">
                Quantity:
              </span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 btn-hover gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart : {formatPrice(product.price * quantity)}
              </Button>
            </div>

            {/* Features */}
            <div className="grid gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Fast Delivery to Your Doorstep
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Secure Payment</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Always Here to Help
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
