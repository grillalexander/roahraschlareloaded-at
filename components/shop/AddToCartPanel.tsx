"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { formatPrice, type Product } from "@/lib/products";

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const sizes = product.sizes ?? [];
  const colors = product.colors ?? [];
  const [size, setSize] = useState(sizes[0] ?? "");
  const [color, setColor] = useState(colors[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const canAdd = useMemo(() => {
    if (!product.inStock) return false;
    if (sizes.length > 0 && !size) return false;
    if (colors.length > 0 && !color) return false;
    return quantity > 0;
  }, [product.inStock, sizes.length, size, colors.length, color, quantity]);

  const handleAdd = () => {
    if (!canAdd) return;
    addItem({
      productId: product.id,
      size: size || undefined,
      color: color || undefined,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-3xl font-medium text-[#821110]">
          {formatPrice(product.priceEuro)}
        </p>
      </div>

      {sizes.length > 0 && (
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Größe
          </label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  size === s
                    ? "border-[#821110] bg-[#821110] text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Farbe
          </label>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  color === c
                    ? "border-[#2D245F] bg-[#2D245F] text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Menge
        </label>
        <div className="inline-flex items-center rounded-full border border-gray-200">
          <button
            type="button"
            className="px-4 py-2 text-gray-600"
            aria-label="Weniger"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="min-w-[2rem] text-center">{quantity}</span>
          <button
            type="button"
            className="px-4 py-2 text-gray-600"
            aria-label="Mehr"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        disabled={!canAdd}
        onClick={handleAdd}
        className={`w-full rounded-full py-3.5 text-sm font-medium tracking-wide transition ${
          canAdd
            ? "bg-[#821110] text-white hover:bg-[#6a0e0d]"
            : "cursor-not-allowed bg-gray-200 text-gray-500"
        }`}
      >
        {added
          ? "Im Warenkorb ✓"
          : product.inStock
            ? "In den Warenkorb"
            : "Nicht verfügbar"}
      </button>
    </div>
  );
}
