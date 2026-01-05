import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { CartContext } from "./cartContext";
import type {CartItem} from "@/types/CartTypes";

const CART_STORAGE_KEY = "cart";

function CartProvider({children}: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === productId);

      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }

      return [...prev, {productId, quantity: 1}];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? {...item, quantity: item.quantity + 1}
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId
            ? {...item, quantity: item.quantity - 1}
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;