import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { Order } from "@/types";

const ORDERS_COLLECTION = "orders";

export const orderService = {
  async getAll(): Promise<Order[]> {
    const q = query(
      collection(db, ORDERS_COLLECTION),
      orderBy("createdAt", "desc"),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Order[];
  },

  async getById(id: string): Promise<Order | null> {
    const docRef = doc(db, ORDERS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return null;
    return {
      id: snapshot.id,
      ...snapshot.data(),
      createdAt: snapshot.data().createdAt?.toDate(),
    } as Order;
  },

  async create(order: Omit<Order, "id" | "createdAt">): Promise<string> {
    const docRef = await addDoc(collection(db, ORDERS_COLLECTION), {
      ...order,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  },

  async updateStatus(id: string, status: Order["orderStatus"]): Promise<void> {
    const docRef = doc(db, ORDERS_COLLECTION, id);
    await updateDoc(docRef, { orderStatus: status });
  },
};
