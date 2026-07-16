/**
 * Merch catalog for RoahRaschlaReloaded.
 *
 * Payment (static GitHub Pages):
 * Paste a Stripe Payment Link URL into `stripePaymentLink` per product
 * (Stripe Dashboard → Payment Links). Single-item carts with a link redirect
 * there at checkout. Multi-item carts or empty links use the mailto fallback.
 */

export type ProductCategory = "caps" | "shirts" | "fischerhuete" | "softshell";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  priceEuro: number;
  images: string[];
  sizes?: string[];
  colors?: string[];
  /** Stripe Payment Link URL – leave empty until configured */
  stripePaymentLink?: string;
  inStock: boolean;
};

export const CATEGORIES: {
  id: ProductCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "Alle" },
  { id: "caps", label: "Caps" },
  { id: "shirts", label: "Shirts" },
  { id: "fischerhuete", label: "Fischerhüte" },
  { id: "softshell", label: "Softshell" },
];

export const products: Product[] = [
  {
    id: "cap-classic-burgundy",
    slug: "cap-classic-burgundy",
    name: "Classic Cap Bordeaux",
    category: "caps",
    description:
      "Unser Klassiker: verstellbare Cap mit gesticktem RoahRaschlaReloaded-Logo in Bordeaux. Ideal für Auftritte und Alltag.",
    priceEuro: 24,
    images: ["/merch/cap-burgundy.svg"],
    sizes: ["One Size"],
    colors: ["Bordeaux"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "cap-logo-gelb",
    slug: "cap-logo-gelb",
    name: "Logo Cap Gelb",
    category: "caps",
    description:
      "Auffällige Cap in Band-Gelb mit dunklem Logo-Stick. Leicht, atmungsaktiv und mit Clip-Verschluss.",
    priceEuro: 24,
    images: ["/merch/cap-yellow.svg"],
    sizes: ["One Size"],
    colors: ["Gelb"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "cap-nachtblau",
    slug: "cap-nachtblau",
    name: "Nachtblau Cap",
    category: "caps",
    description:
      "Gedämpfte Nachtblau-Cap mit Logo – für alle, die es etwas ruhiger mögen.",
    priceEuro: 24,
    images: ["/merch/cap-navy.svg"],
    sizes: ["One Size"],
    colors: ["Nachtblau"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "shirt-logo-weiss",
    slug: "shirt-logo-weiss",
    name: "Logo Shirt Weiß",
    category: "shirts",
    description:
      "Weiches Baumwollshirt mit Frontlogo. Bequemer Schnitt, starker Auftritt – Böhmen meets Nordburgenland.",
    priceEuro: 29,
    images: ["/merch/shirt-white.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Weiß"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "shirt-tour-bordeaux",
    slug: "shirt-tour-bordeaux",
    name: "Tour Shirt Bordeaux",
    category: "shirts",
    description:
      "Bordeaux-Shirt mit großem Rückenprint. Der Look für Fest, Probe und Zelt.",
    priceEuro: 32,
    images: ["/merch/shirt-burgundy.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Bordeaux"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "shirt-polka-navy",
    slug: "shirt-polka-navy",
    name: "Polka Shirt Nachtblau",
    category: "shirts",
    description:
      "Nachtblaues Shirt mit kleinem Brustlogo und dezentem Polka-Print. Alltagstauglich und bandtauglich.",
    priceEuro: 29,
    images: ["/merch/shirt-navy.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Nachtblau"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "fischerhut-khaki",
    slug: "fischerhut-khaki",
    name: "Fischerhut Khaki",
    category: "fischerhuete",
    description:
      "Klassischer Fischerhut in Khaki mit Logo-Label. Schützt vor Sonne beim Kirtag und am See.",
    priceEuro: 27,
    images: ["/merch/fischerhut-khaki.svg"],
    sizes: ["S/M", "L/XL"],
    colors: ["Khaki"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "fischerhut-schwarz",
    slug: "fischerhut-schwarz",
    name: "Fischerhut Schwarz",
    category: "fischerhuete",
    description:
      "Schwarzer Fischerhut mit Kontrast-Stick. Robust und wasserabweisend behandelt.",
    priceEuro: 27,
    images: ["/merch/fischerhut-black.svg"],
    sizes: ["S/M", "L/XL"],
    colors: ["Schwarz"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "softshell-bordeaux",
    slug: "softshell-bordeaux",
    name: "Softshell Bordeaux",
    category: "softshell",
    description:
      "Winddichte Softshell-Jacke in Bordeaux mit Logo. Warm genug für Frühschoppen und späte Festnächte.",
    priceEuro: 79,
    images: ["/merch/softshell-burgundy.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Bordeaux"],
    stripePaymentLink: "",
    inStock: true,
  },
  {
    id: "softshell-navy",
    slug: "softshell-navy",
    name: "Softshell Nachtblau",
    category: "softshell",
    description:
      "Nachtblaue Softshell mit durchgehendem Reißverschluss und Logo. Outdoor-ready, band-stolz.",
    priceEuro: 79,
    images: ["/merch/softshell-navy.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Nachtblau"],
    stripePaymentLink: "",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(euro: number): string {
  return new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
  }).format(euro);
}

export function categoryLabel(category: ProductCategory): string {
  return CATEGORIES.find((c) => c.id === category)?.label ?? category;
}
