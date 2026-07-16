import type { CartItem } from "@/components/shop/CartProvider";
import { getProductById, formatPrice } from "@/lib/products";

export const ORDER_STORAGE_KEY = "rrr-merch-last-order-v1";
export const ORDER_EMAIL = "roahraschlareloaded@gmail.com";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type CheckoutFormData = {
  name: string;
  email: string;
  phone: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  note: string;
};

export type SavedOrder = {
  id: string;
  createdAt: string;
  customer: CheckoutFormData;
  items: {
    productId: string;
    name: string;
    size?: string;
    color?: string;
    quantity: number;
    unitPriceEuro: number;
  }[];
  subtotalEuro: number;
  paymentMode: "stripe" | "email";
};

export function buildOrderLines(items: CartItem[]) {
  return items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return {
        productId: item.productId,
        name: product.name,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        unitPriceEuro: product.priceEuro,
        stripePaymentLink: product.stripePaymentLink?.trim() || "",
      };
    })
    .filter(Boolean) as {
    productId: string;
    name: string;
    size?: string;
    color?: string;
    quantity: number;
    unitPriceEuro: number;
    stripePaymentLink: string;
  }[];
}

/** Single line with Stripe link → optional payment redirect after email */
export function resolvePayment(
  lines: ReturnType<typeof buildOrderLines>
): { mode: "stripe"; url: string } | { mode: "email" } {
  const totalQty = lines.reduce((s, l) => s + l.quantity, 0);
  if (
    lines.length === 1 &&
    totalQty === 1 &&
    lines[0].stripePaymentLink.startsWith("http")
  ) {
    return { mode: "stripe", url: lines[0].stripePaymentLink };
  }
  return { mode: "email" };
}

export function formatOrderMessage(order: SavedOrder): string {
  const articles = order.items
    .map((i) => {
      const variant = [i.size, i.color].filter(Boolean).join(" / ");
      return `- ${i.quantity}× ${i.name}${variant ? ` (${variant})` : ""} – ${formatPrice(i.unitPriceEuro * i.quantity)}`;
    })
    .join("\n");

  return [
    `Neue Merch-Bestellung ${order.id}`,
    `Zeitpunkt: ${new Date(order.createdAt).toLocaleString("de-AT")}`,
    "",
    "Kunde:",
    order.customer.name,
    order.customer.email,
    order.customer.phone || "(kein Telefon)",
    "",
    "Lieferadresse:",
    order.customer.street,
    `${order.customer.zip} ${order.customer.city}`,
    order.customer.country,
    "",
    "Artikel:",
    articles,
    "",
    `Zwischensumme: ${formatPrice(order.subtotalEuro)}`,
    `Zahlungsweg: ${order.paymentMode === "stripe" ? "Stripe Payment Link (Kunde wird weitergeleitet)" : "Überweisung / Absprache per Mail"}`,
    order.customer.note ? `\nNotiz: ${order.customer.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Sends the order to Web3Forms, which emails ORDER_EMAIL.
 * Requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY at build/runtime.
 */
export async function submitOrderEmail(order: SavedOrder): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    throw new Error(
      "Web3Forms ist noch nicht eingerichtet. Bitte NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY setzen."
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Merch-Bestellung ${order.id}`,
      from_name: "RoahRaschlaReloaded Shop",
      name: order.customer.name,
      email: order.customer.email,
      phone: order.customer.phone,
      replyto: order.customer.email,
      order_id: order.id,
      address: `${order.customer.street}, ${order.customer.zip} ${order.customer.city}, ${order.customer.country}`,
      subtotal: formatPrice(order.subtotalEuro),
      payment_mode: order.paymentMode,
      message: formatOrderMessage(order),
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message ||
        "Bestellung konnte nicht übermittelt werden. Bitte später erneut versuchen."
    );
  }
}

export function createOrderId() {
  const stamp = Date.now().toString(36).toUpperCase();
  return `RRR-${stamp}`;
}
