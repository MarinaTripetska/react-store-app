import { createContext } from "react";
import type { CartContextType } from "@/types/CartTypes";

export const CartContext = createContext<CartContextType | null>(
  null
);