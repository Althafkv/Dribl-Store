import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { Product } from "@/types";

const PRODUCTS_COLLECTION = "products";

export const productService = {
  async getAll(): Promise<Product[]> {
    const q = query(
      collection(db, PRODUCTS_COLLECTION),
      orderBy("createdAt", "desc"),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Product[];
  },

  async getById(id: string): Promise<Product | null> {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return null;
    return {
      id: snapshot.id,
      ...snapshot.data(),
      createdAt: snapshot.data().createdAt?.toDate(),
    } as Product;
  },

  async create(product: Omit<Product, "id" | "createdAt">): Promise<string> {
    // This spreads ALL fields including compareAtPrice
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
      ...product,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  },

  async update(id: string, updates: Partial<Product>): Promise<void> {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    // This spreads ALL fields including compareAtPrice
    await updateDoc(docRef, updates);
  },

  async delete(id: string): Promise<void> {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    await deleteDoc(docRef);
  },
};
