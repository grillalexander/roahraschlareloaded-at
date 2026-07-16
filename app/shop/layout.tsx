"use client";

import { CartProvider } from "@/components/shop/CartProvider";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { ShopFooter } from "@/components/shop/ShopFooter";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="font-body min-h-screen flex flex-col bg-white text-gray-900">
        <ShopHeader />
        <main className="flex-1 pt-16">{children}</main>
        <ShopFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
