import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartPanel } from "@/components/shop/AddToCartPanel";
import {
  categoryLabel,
  getProductBySlug,
  products,
} from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produkt | Shop" };
  return {
    title: `${product.name} | Shop | RoahRaschlaReloaded`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/shop/"
          className="mb-8 inline-block text-sm text-gray-500 hover:text-[#821110]"
        >
          ← Zurück zum Shop
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#F5F0EB] shadow-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="aspect-square w-full object-cover"
              width={800}
              height={800}
            />
          </div>

          <div>
            <p className="font-glitch-sm mb-2 text-sm tracking-wide text-gray-400">
              {categoryLabel(product.category).toUpperCase()}
            </p>
            <h1 className="font-script mb-4 text-4xl md:text-5xl font-bold text-[#821110]">
              {product.name}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {product.description}
            </p>
            <AddToCartPanel product={product} />
            {!product.stripePaymentLink && (
              <p className="mt-6 text-sm text-gray-500">
                Online-Zahlung via Stripe Payment Link kann später in{" "}
                <code className="text-xs">lib/products.ts</code> hinterlegt
                werden. Die Bestellung geht in jedem Fall per E-Mail an uns.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
