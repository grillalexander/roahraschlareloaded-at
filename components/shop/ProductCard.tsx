import Link from "next/link";
import {
  categoryLabel,
  formatPrice,
  type Product,
} from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}/`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden bg-[#F5F0EB]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="font-glitch-sm text-xs tracking-wide text-gray-400 mb-1">
          {categoryLabel(product.category).toUpperCase()}
        </p>
        <h3 className="text-lg text-gray-900 mb-1">{product.name}</h3>
        <p className="text-[#821110] font-medium">
          {formatPrice(product.priceEuro)}
        </p>
        {!product.inStock && (
          <p className="mt-2 text-sm text-gray-500">Derzeit nicht verfügbar</p>
        )}
      </div>
    </Link>
  );
}
