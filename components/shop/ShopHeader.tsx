"use client";

import { useState } from "react";
import Link from "next/link";
import { Disc3, Facebook, Instagram, Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/shop/CartProvider";

const navLinkClass =
  "text-gray-600 hover:text-red-800 transition-colors duration-200 font-medium";
const mobileLinkClass =
  "block text-gray-600 hover:text-red-800 transition-colors duration-200 font-medium";

export function ShopHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, itemCount } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo-full.webp"
              alt="RoahRaschlaReloadedLogo"
              className="h-12 w-auto"
              width={200}
              height={48}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="hidden md:block">
            <nav aria-label="Hauptnavigation">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/#home"
                  className={navLinkClass}
                  aria-label="Zur Startseite navigieren"
                >
                  Home
                </Link>
                <Link
                  href="/#ueber-uns"
                  className={navLinkClass}
                  aria-label="Zu Über uns navigieren"
                >
                  Über uns
                </Link>
                <Link
                  href="/#events"
                  className="text-gray-600 hover:text-yellow-800 transition-colors duration-200 font-medium"
                  aria-label="Zu Events navigieren"
                >
                  Events
                </Link>
                <Link
                  href="/#galerie"
                  className="text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                  aria-label="Zur Galerie navigieren"
                >
                  Galerie
                </Link>
                <Link
                  href="/shop/"
                  className="text-red-800 transition-colors duration-200 font-medium"
                  aria-label="Zum Merch-Shop navigieren"
                  aria-current="page"
                >
                  Shop
                </Link>
                <Link
                  href="/#kontakt"
                  className={navLinkClass}
                  aria-label="Zum Kontakt navigieren"
                >
                  Kontakt
                </Link>
              </div>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61578069538211"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
              title="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/roahraschla_reloaded/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-800 hover:text-white transition-all duration-300"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@roahraschlareloaded?_t=ZN-8xmMiL4rDGA&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-800 hover:text-white transition-all duration-300"
              title="TikTok"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
              title="Spotify"
            >
              <Disc3 className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={openCart}
              className="relative w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
              aria-label={`Warenkorb, ${itemCount} Artikel`}
              title="Warenkorb"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-[#FFDE00] px-1 text-[10px] font-bold text-[#2D245F]">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={openCart}
              className="relative text-gray-600 hover:text-red-800"
              aria-label={`Warenkorb, ${itemCount} Artikel`}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-[#FFDE00] px-1 text-[10px] font-bold text-[#2D245F]">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-red-800"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileMenuOpen}
              aria-controls="shop-mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="shop-mobile-menu"
          className="md:hidden bg-white border-t border-gray-100"
          aria-label="Mobile Navigation"
        >
          <div className="px-6 py-4 space-y-2">
            <Link
              href="/#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-900 hover:text-red-800 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/#ueber-uns"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass}
            >
              Über uns
            </Link>
            <Link
              href="/#events"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-yellow-800 transition-colors duration-200 font-medium"
            >
              Events
            </Link>
            <Link
              href="/#galerie"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Galerie
            </Link>
            <Link
              href="/shop/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-red-800 transition-colors duration-200 font-medium"
              aria-current="page"
            >
              Shop
            </Link>
            <Link
              href="/#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass}
            >
              Kontakt
            </Link>

            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578069538211"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                title="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/roahraschla_reloaded/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-800 hover:text-white transition-all duration-300"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@roahraschlareloaded?_t=ZN-8xmMiL4rDGA&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-800 hover:text-white transition-all duration-300"
                title="TikTok"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                title="Spotify"
              >
                <Disc3 className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </nav>
  );
}
