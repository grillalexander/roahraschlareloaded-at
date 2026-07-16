"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProductById, type Product } from "@/lib/products";

const STORAGE_KEY = "rrr-merch-cart-v1";

export type CartItem = {
  productId: string;
  size?: string;
  color?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (productId: string, size?: string, color?: string) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    size?: string,
    color?: string
  ) => void;
  clearCart: () => void;
  itemCount: number;
  subtotalEuro: number;
  getLineProduct: (item: CartItem) => Product | undefined;
};

const CartContext = createContext<CartContextValue | null>(null);

function lineKey(productId: string, size?: string, color?: string) {
  return `${productId}::${size ?? ""}::${color ?? ""}`;
}

function matchLine(
  item: CartItem,
  productId: string,
  size?: string,
  color?: string
) {
  return (
    item.productId === productId &&
    (item.size ?? "") === (size ?? "") &&
    (item.color ?? "") === (color ?? "")
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
      const qty = item.quantity ?? 1;
      setItems((prev) => {
        const idx = prev.findIndex((p) =>
          matchLine(p, item.productId, item.size, item.color)
        );
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = {
            ...next[idx],
            quantity: next[idx].quantity + qty,
          };
          return next;
        }
        return [
          ...prev,
          {
            productId: item.productId,
            size: item.size,
            color: item.color,
            quantity: qty,
          },
        ];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, size?: string, color?: string) => {
      setItems((prev) =>
        prev.filter((p) => !matchLine(p, productId, size, color))
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (
      productId: string,
      quantity: number,
      size?: string,
      color?: string
    ) => {
      if (quantity <= 0) {
        removeItem(productId, size, color);
        return;
      }
      setItems((prev) =>
        prev.map((p) =>
          matchLine(p, productId, size, color) ? { ...p, quantity } : p
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const getLineProduct = useCallback(
    (item: CartItem) => getProductById(item.productId),
    []
  );

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotalEuro = useMemo(
    () =>
      items.reduce((sum, i) => {
        const product = getProductById(i.productId);
        return sum + (product?.priceEuro ?? 0) * i.quantity;
      }, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotalEuro,
      getLineProduct,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotalEuro,
      getLineProduct,
    ]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

export { lineKey };
