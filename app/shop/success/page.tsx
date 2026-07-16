"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/products";
import {
  ORDER_STORAGE_KEY,
  type SavedOrder,
} from "@/lib/shop-order";

export default function SuccessPage() {
  const [order, setOrder] = useState<SavedOrder | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(ORDER_STORAGE_KEY);
      if (raw) setOrder(JSON.parse(raw) as SavedOrder);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-script mb-4 text-5xl font-bold text-[#821110]">
          Danke!
        </h1>
        <div className="mx-auto mb-8 h-1 w-24 bg-[#821110]" />

        <div className="rounded-2xl bg-white p-8 shadow-lg text-left space-y-4">
          {order ? (
            <>
              <p className="text-gray-700">
                Bestellung <strong>{order.id}</strong> wurde erfasst.
              </p>
              {order.paymentMode === "stripe" ? (
                <p className="text-gray-600">
                  Deine Bestellung ist bei uns eingegangen. Du wurdest bzw.
                  wirst zur Stripe-Zahlung weitergeleitet. Nach erfolgreicher
                  Zahlung melden wir uns zur Versand- bzw. Abhol-Absprache.
                </p>
              ) : (
                <p className="text-gray-600">
                  Deine Bestellung ist automatisch bei uns per E-Mail
                  eingegangen. Wir melden uns mit Zahlung und Versand bzw.
                  Abholung.
                </p>
              )}
              <ul className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4">
                {order.items.map((i) => (
                  <li
                    key={`${i.productId}-${i.size}-${i.color}`}
                    className="flex justify-between gap-3"
                  >
                    <span>
                      {i.quantity}× {i.name}
                      {[i.size, i.color].filter(Boolean).length > 0 && (
                        <span className="text-gray-400">
                          {" "}
                          ({[i.size, i.color].filter(Boolean).join(" · ")})
                        </span>
                      )}
                    </span>
                    <span>
                      {formatPrice(i.unitPriceEuro * i.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="flex justify-between border-t border-gray-100 pt-4 font-medium">
                <span>Summe</span>
                <span className="text-[#821110]">
                  {formatPrice(order.subtotalEuro)}
                </span>
              </p>
            </>
          ) : (
            <p className="text-gray-600">
              Deine Bestellung wurde übermittelt. Wir melden uns in Kürze.
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/shop/"
            className="rounded-full bg-[#821110] px-6 py-3 text-sm font-medium text-white hover:bg-[#6a0e0d]"
          >
            Weiter shoppen
          </Link>
          <Link
            href="/"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-white"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
