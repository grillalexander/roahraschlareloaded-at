"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { formatPrice } from "@/lib/products";
import {
  ORDER_STORAGE_KEY,
  buildOrderLines,
  createOrderId,
  resolvePayment,
  submitOrderEmail,
  type CheckoutFormData,
  type SavedOrder,
} from "@/lib/shop-order";

const initialForm: CheckoutFormData = {
  name: "",
  email: "",
  phone: "",
  street: "",
  zip: "",
  city: "",
  country: "Österreich",
  note: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getLineProduct, subtotalEuro, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormData>(initialForm);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update =
    (key: keyof CheckoutFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (items.length === 0) {
      setError("Dein Warenkorb ist leer.");
      return;
    }
    if (!consent) {
      setError("Bitte der Verarbeitung deiner Daten zustimmen.");
      return;
    }

    setSubmitting(true);
    const lines = buildOrderLines(items);
    const payment = resolvePayment(lines);
    const order: SavedOrder = {
      id: createOrderId(),
      createdAt: new Date().toISOString(),
      customer: form,
      items: lines.map(
        ({ productId, name, size, color, quantity, unitPriceEuro }) => ({
          productId,
          name,
          size,
          color,
          quantity,
          unitPriceEuro,
        })
      ),
      subtotalEuro,
      paymentMode: payment.mode,
    };

    try {
      await submitOrderEmail(order);

      try {
        sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
      } catch {
        /* ignore */
      }

      clearCart();

      if (payment.mode === "stripe") {
        window.location.href = payment.url;
        return;
      }

      router.push("/shop/success/");
    } catch (err) {
      setSubmitting(false);
      setError(
        err instanceof Error
          ? err.message
          : "Bestellung konnte nicht gesendet werden."
      );
    }
  };

  if (items.length === 0) {
    return (
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h1 className="font-script mb-4 text-5xl font-bold text-[#821110]">
            Checkout
          </h1>
          <p className="mb-8 text-gray-600">Dein Warenkorb ist leer.</p>
          <Link
            href="/shop/"
            className="inline-flex rounded-full bg-[#821110] px-6 py-3 text-sm font-medium text-white hover:bg-[#6a0e0d]"
          >
            Zum Shop
          </Link>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#821110] focus:outline-none focus:ring-1 focus:ring-[#821110]";

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-script text-5xl font-bold text-[#821110] mb-4">
            Checkout
          </h1>
          <div className="mx-auto h-1 w-24 bg-[#821110]" />
        </div>

        <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6 rounded-2xl bg-white p-6 md:p-8 shadow-lg">
            <h2 className="font-glitch-sm text-lg tracking-wide text-gray-900">
              LIEFERDATEN
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-gray-700">
                  Name *
                </label>
                <input
                  required
                  className={inputClass}
                  value={form.name}
                  onChange={update("name")}
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  E-Mail *
                </label>
                <input
                  required
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={update("email")}
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  className={inputClass}
                  value={form.phone}
                  onChange={update("phone")}
                  autoComplete="tel"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-gray-700">
                  Straße & Hausnummer *
                </label>
                <input
                  required
                  className={inputClass}
                  value={form.street}
                  onChange={update("street")}
                  autoComplete="street-address"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">PLZ *</label>
                <input
                  required
                  className={inputClass}
                  value={form.zip}
                  onChange={update("zip")}
                  autoComplete="postal-code"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">Ort *</label>
                <input
                  required
                  className={inputClass}
                  value={form.city}
                  onChange={update("city")}
                  autoComplete="address-level2"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-gray-700">
                  Land *
                </label>
                <input
                  required
                  className={inputClass}
                  value={form.country}
                  onChange={update("country")}
                  autoComplete="country-name"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-gray-700">
                  Anmerkung
                </label>
                <textarea
                  rows={3}
                  className={inputClass}
                  value={form.note}
                  onChange={update("note")}
                  placeholder="z. B. Abholung beim nächsten Gig …"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-1"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>
                Ich stimme zu, dass meine Angaben zur Abwicklung der Bestellung
                verarbeitet werden. Details in der{" "}
                <Link href="/privacy/" className="underline text-[#821110]">
                  Datenschutzerklärung
                </Link>
                .
              </span>
            </label>

            {error && (
              <p className="text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            <p className="text-sm text-gray-500">
              Nach dem Absenden geht die Bestellung automatisch an uns per
              E-Mail. Falls für den Artikel ein Stripe Payment Link hinterlegt
              ist, wirst du danach zur Zahlung weitergeleitet.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-4 rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="font-glitch-sm text-lg tracking-wide text-gray-900">
                BESTELLUNG
              </h2>
              <ul className="space-y-3 text-sm">
                {items.map((item) => {
                  const product = getLineProduct(item);
                  if (!product) return null;
                  return (
                    <li
                      key={`${item.productId}-${item.size}-${item.color}`}
                      className="flex justify-between gap-3"
                    >
                      <span className="text-gray-700">
                        {item.quantity}× {product.name}
                        {[item.size, item.color].filter(Boolean).length > 0 && (
                          <span className="text-gray-400">
                            {" "}
                            (
                            {[item.size, item.color]
                              .filter(Boolean)
                              .join(" · ")}
                            )
                          </span>
                        )}
                      </span>
                      <span className="shrink-0 text-gray-900">
                        {formatPrice(product.priceEuro * item.quantity)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-between border-t border-gray-100 pt-4 text-lg">
                <span>Summe</span>
                <span className="font-medium text-[#821110]">
                  {formatPrice(subtotalEuro)}
                </span>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[#821110] py-3.5 text-sm font-medium text-white hover:bg-[#6a0e0d] disabled:opacity-60"
              >
                {submitting ? "Wird gesendet …" : "Bestellung abschicken"}
              </button>
              <Link
                href="/shop/cart/"
                className="block text-center text-sm text-gray-500 hover:text-gray-800"
              >
                Zurück zum Warenkorb
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
