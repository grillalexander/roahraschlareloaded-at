"use client";

import { useMemo, useState } from "react";
import {
  CATEGORIES,
  products,
  type ProductCategory,
} from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function ProductCatalog() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`rounded-full px-5 py-2 text-sm tracking-wide transition ${
              filter === cat.id
                ? "bg-[#FFDE00] text-[#2D245F] font-medium"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-gray-500">
          Keine Artikel in dieser Kategorie.
        </p>
      )}
    </div>
  );
}
