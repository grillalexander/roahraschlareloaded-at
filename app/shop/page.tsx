import type { Metadata } from "next";
import { ProductCatalog } from "@/components/shop/ProductCatalog";

export const metadata: Metadata = {
  title: "Shop | RoahRaschlaReloaded",
  description:
    "Offizielle Merch von RoahRaschlaReloaded – Caps, Shirts, Fischerhüte und Softshell.",
};

export default function ShopPage() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="font-script text-5xl md:text-7xl font-bold text-[#821110] mb-4">
            Shop
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-[#821110]" />
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Caps, Shirts, Fischerhüte und Softshell – Merch für Fest, Probe und
            Alltag. Bestellungen gehen direkt an uns; optional kannst du danach
            per Stripe zahlen.
          </p>
        </div>
        <ProductCatalog />
      </div>
    </section>
  );
}
