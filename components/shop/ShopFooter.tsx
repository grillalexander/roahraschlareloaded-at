import Link from "next/link";

export function ShopFooter() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-gray-600 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} RoahRaschlaReloaded – Merch Shop</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/legal/" className="hover:text-[#821110]">
            Impressum
          </Link>
          <Link href="/privacy/" className="hover:text-[#821110]">
            Datenschutz
          </Link>
          <Link href="/shop/" className="hover:text-[#821110]">
            Shop
          </Link>
          <a
            href="mailto:roahraschlareloaded@gmail.com"
            className="hover:text-[#821110]"
          >
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
