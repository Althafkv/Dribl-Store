import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Order } from "@/types";
import { orderService } from "@/services/orderService";

interface OrderContextType {
  orders: Order[];
  loading: boolean;
  addOrder: (order: Omit<Order, "id" | "createdAt">) => Promise<string>;
  updateOrderStatus: (
    id: string,
    status: Order["orderStatus"],
  ) => Promise<void>;
  getOrder: (id: string) => Order | undefined;
  refreshOrders: () => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshOrders = async () => {
    setLoading(true);
    try {
      const data = await orderService.getAll();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  const addOrder = async (
    order: Omit<Order, "id" | "createdAt">,
  ): Promise<string> => {
    const orderId = await orderService.create(order);
    await refreshOrders();
    return orderId;
  };

  const updateOrderStatus = async (
    id: string,
    status: Order["orderStatus"],
  ) => {
    await orderService.updateStatus(id, status);
    await refreshOrders();
  };

  const getOrder = (id: string) => orders.find((o) => o.id === id);

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        addOrder,
        updateOrderStatus,
        getOrder,
        refreshOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrders must be used within OrderProvider");
  return context;
};
