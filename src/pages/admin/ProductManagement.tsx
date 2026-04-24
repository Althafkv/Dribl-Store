import React, { useState } from "react";
import { Plus, Pencil, Trash2, ImagePlus, X } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useProducts } from "@/contexts/ProductContext";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";

interface ProductFormData {
  title: string;
  price: string;
  compareAtPrice: string;
  description: string;
  category: string;
  images: string[];
  sizes: string[];
}

const emptyForm: ProductFormData = {
  title: "",
  price: "",
  compareAtPrice: "",
  description: "",
  category: "",
  images: [],
  sizes: [],
};

const ProductManagement: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProductFormData>(emptyForm);
  const [newImageUrl, setNewImageUrl] = useState("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        title: product.title,
        price: product.price.toString(),
        compareAtPrice: product.compareAtPrice?.toString() || "",
        description: product.description,
        category: product.category || "",
        images: [...product.images],
        sizes: product.sizes || [],
      });
    } else {
      setEditingProduct(null);
      setFormData(emptyForm);
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingProduct(null);
    setFormData(emptyForm);
    setNewImageUrl("");
  };

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, newImageUrl.trim()],
      }));
      setNewImageUrl("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.price ||
      formData.images.length === 0
    ) {
      toast({
        title: "Error",
        description:
          "Please fill in all required fields and add at least one image.",
        variant: "destructive",
      });
      return;
    }

    const price = Number(formData.price);
    const compareAtRaw = formData.compareAtPrice.trim();
    const compareAtPrice =
      compareAtRaw === "" ? undefined : Number(compareAtRaw);

    if (!Number.isFinite(price) || price < 0) {
      toast({
        title: "Error",
        description: "Please enter a valid sale price.",
        variant: "destructive",
      });
      return;
    }

    if (compareAtPrice !== undefined) {
      if (!Number.isFinite(compareAtPrice) || compareAtPrice <= price) {
        toast({
          title: "Invalid original price",
          description: "Original price must be greater than the sale price.",
          variant: "destructive",
        });
        return;
      }
    }

    const productData = {
      title: formData.title,
      price,
      compareAtPrice,
      description: formData.description,
      category: formData.category,
      images: formData.images,
      sizes: formData.sizes, // ✅ ADDED
      inStock: true,
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
      toast({ title: "Success", description: "Product updated successfully" });
    } else {
      addProduct(productData);
      toast({ title: "Success", description: "Product added successfully" });
    }

    handleCloseDialog();
  };

  const handleDelete = () => {
    if (deleteProductId) {
      deleteProduct(deleteProductId);
      toast({ title: "Success", description: "Product deleted successfully" });
      setDeleteProductId(null);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground">Manage your product catalog</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2" onClick={() => handleOpenDialog()}>
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      placeholder="Product title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      placeholder="e.g., Jerseys, Stickers"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Sizes</Label>
                  <div className="flex gap-3 flex-wrap">
                    {["S", "M", "L", "XL"].map((size) => (
                      <label key={size} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.sizes.includes(size)}
                          onChange={() => {
                            setFormData((prev) => ({
                              ...prev,
                              sizes: prev.sizes.includes(size)
                                ? prev.sizes.filter((s) => s !== size)
                                : [...prev.sizes, size],
                            }));
                          }}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="price">Sale Price (₹) *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          price: e.target.value,
                        }))
                      }
                      placeholder="0"
                      min="0"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="compareAtPrice">Original Price (₹)</Label>
                    <Input
                      id="compareAtPrice"
                      type="number"
                      value={formData.compareAtPrice}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          compareAtPrice: e.target.value,
                        }))
                      }
                      placeholder="0"
                      min="0"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty if no discount
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Product description"
                    rows={3}
                  />
                </div>

                {/* IMAGES */}
                <div className="space-y-2">
                  <Label>Images *</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="Enter image URL"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddImage}
                    >
                      <ImagePlus className="h-4 w-4" />
                    </Button>
                  </div>
                  {formData.images.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.images.map((img, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={img}
                            alt={`Product ${index + 1}`}
                            className="w-20 h-20 object-cover rounded-lg border border-border"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute -top-2 -right-2 p-1 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseDialog}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProduct ? "Update" : "Add"} Product
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Original</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">
                      {product.title}
                    </TableCell>
                    <TableCell>{product.category || "-"}</TableCell>
                    <TableCell>{formatPrice(product.price)}</TableCell>
                    <TableCell className="text-muted-foreground line-through">
                      {product.compareAtPrice
                        ? formatPrice(product.compareAtPrice)
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleOpenDialog(product)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeleteProductId(product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <AlertDialog
          open={!!deleteProductId}
          onOpenChange={() => setDeleteProductId(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Product</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this product? This action cannot
                be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export default ProductManagement;
