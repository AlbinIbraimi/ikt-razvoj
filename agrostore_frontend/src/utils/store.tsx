import { create } from "zustand";
import type { Product } from "../models/iproduc";

interface StoreState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<StoreState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));