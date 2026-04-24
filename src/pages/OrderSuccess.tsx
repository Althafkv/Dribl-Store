import React from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, Package, Phone, MapPin } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { useOrders } from "@/contexts/OrderContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const OrderSuccess: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrder } = useOrders();
  const order = getOrder(orderId || "");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!order) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Order Not Found
          </h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8 animate-scale-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your order. We'll send you a confirmation shortly.
            </p>
          </div>

          {/* Order Details */}
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="text-lg font-bold text-foreground">
                    {order.id}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-warning/10 text-warning text-sm font-medium">
                  {(order.orderStatus || "pending").charAt(0).toUpperCase() +
                    (order.orderStatus || "pending").slice(1)}
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Customer Details */}
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-foreground">
                  Delivery Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {order.customerName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <p className="text-muted-foreground">{order.phone}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <p className="text-muted-foreground">{order.address}</p>
                  </div>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-foreground">Order Items</h3>
                {order.cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {item.product.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-foreground">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="mb-6" />

              {/* Payment & Total */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="text-foreground font-medium">
                    {order.paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : "Razorpay"}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total Amount</span>
                  <span className="text-primary">
                    {formatPrice(order.totalAmount)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link to="/products">
              <Button className="btn-hover">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderSuccess;
