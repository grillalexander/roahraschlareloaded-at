"use client";

import Link from "next/link";
import { useCart } from "@/components/shop/CartProvider";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const {
    items,
    getLineProduct,
    updateQuantity,
    removeItem,
    subtotalEuro,
    clearCart,
  } = useCart();

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-script text-5xl font-bold text-[#821110] mb-4">
            Warenkorb
          </h1>
          <div className="mx-auto h-1 w-24 bg-[#821110]" />
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-lg">
            <p className="mb-6 text-gray-600">Dein Warenkorb ist leer.</p>
            <Link
              href="/shop/"
              className="inline-flex rounded-full bg-[#821110] px-6 py-3 text-sm font-medium text-white hover:bg-[#6a0e0d]"
            >
              Zum Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <ul className="space-y-4 rounded-2xl bg-white p-6 shadow-lg">
              {items.map((item) => {
                const product = getLineProduct(item);
                if (!product) return null;
                return (
                  <li
                    key={`${item.productId}-${item.size}-${item.color}`}
                    className="flex flex-col gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-24 w-24 rounded-xl object-cover bg-gray-50"
                      width={96}
                      height={96}
                    />
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/shop/${product.slug}/`}
                        className="font-medium text-gray-900 hover:text-[#821110]"
                      >
                        {product.name}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {[item.size, item.color].filter(Boolean).join(" · ")}
                      </p>
                      <p className="mt-1 text-[#821110]">
                        {formatPrice(product.priceEuro)}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center rounded-full border border-gray-200">
                        <button
                          type="button"
                          className="px-3 py-1"
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
                          className="px-3 py-1"
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
                  </li>
                );
              })}
            </ul>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-4 flex justify-between text-lg">
                <span>Zwischensumme</span>
                <span className="font-medium text-[#821110]">
                  {formatPrice(subtotalEuro)}
                </span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-gray-800"
                >
                  Warenkorb leeren
                </button>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/shop/"
                    className="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-medium hover:bg-gray-50"
                  >
                    Weiter einkaufen
                  </Link>
                  <Link
                    href="/shop/checkout/"
                    className="rounded-full bg-[#821110] px-6 py-3 text-center text-sm font-medium text-white hover:bg-[#6a0e0d]"
                  >
                    Zur Kasse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
