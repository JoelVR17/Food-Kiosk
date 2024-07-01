import { create } from "zustand";
import { OrderItem } from "./types";

interface Store {
  order: OrderItem[];
}

export const useStore = create<Store>(() => ({
  order: [],
}));
