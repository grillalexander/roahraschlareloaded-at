"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/shop/CartProvider";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    getLineProduct,
    updateQuantity,
    removeItem,
    subtotalEuro,
    itemCount,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Warenkorb schließen"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2 className="font-glitch-sm text-lg tracking-wide text-gray-900">
            WARENKORB ({itemCount})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-900"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-gray-500">
              Dein Warenkorb ist leer.
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => {
                const product = getLineProduct(item);
                if (!product) return null;
                return (
                  <li
                    key={`${item.productId}-${item.size}-${item.color}`}
                    className="flex gap-4"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-20 w-20 rounded-xl object-cover bg-gray-50"
                      width={80}
                      height={80}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {[item.size, item.color].filter(Boolean).join(" · ")}
                      </p>
                      <p className="mt-1 text-sm text-[#821110]">
                        {formatPrice(product.priceEuro)}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center rounded-full border border-gray-200">
                          <button
                            type="button"
                            className="px-3 py-1 text-gray-600"
                            aria-label="Weniger"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.quantity - 1,
                                item.size,
                                item.color
                              )
                            }
                          >
                            −
                          </button>
                          <span className="min-w-[1.5rem] text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="px-3 py-1 text-gray-600"
                            aria-label="Mehr"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.quantity + 1,
                                item.size,
                                item.color
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-sm text-gray-400 hover:text-red-700"
                          onClick={() =>
                            removeItem(item.productId, item.size, item.color)
                          }
                        >
                          Entfernen
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-gray-100 px-6 py-5 space-y-3">
          <div className="flex justify-between text-gray-900">
            <span>Zwischensumme</span>
            <span className="font-medium">{formatPrice(subtotalEuro)}</span>
          </div>
          <p className="text-xs text-gray-500">
            Versandkosten werden im Checkout berechnet bzw. kommuniziert.
          </p>
          <Link
            href="/shop/cart/"
            onClick={closeCart}
            className="block w-full rounded-full border border-gray-300 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            Warenkorb ansehen
          </Link>
          <Link
            href="/shop/checkout/"
            onClick={closeCart}
            className={`block w-full rounded-full py-3 text-center text-sm font-medium text-white transition ${
              items.length === 0
                ? "pointer-events-none bg-gray-300"
                : "bg-[#821110] hover:bg-[#6a0e0d]"
            }`}
          >
            Zur Kasse
          </Link>
        </div>
      </aside>
    </div>
  );
}

export function CartBadgeButton({ className = "" }: { className?: string }) {
  const { openCart, itemCount } = useCart();
  return (
    <button
      type="button"
      onClick={openCart}
      className={`relative w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300 ${className}`}
      aria-label={`Warenkorb, ${itemCount} Artikel`}
      title="Warenkorb"
    >
      <ShoppingBag className="h-4 w-4" aria-hidden />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-[#FFDE00] px-1 text-[10px] font-bold text-[#2D245F]">
          {itemCount}
        </span>
      )}
    </button>
  );
}
