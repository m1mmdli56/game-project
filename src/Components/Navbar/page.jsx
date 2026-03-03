"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCart();

  const isActive = (path) =>
    pathname === path ? "text-red-500" : "hover:text-red-400 text-gray-300";

  return (
    <nav className="bg-[#0f172a] text-white sticky top-0 z-50 border-b border-red-500/30 shadow-lg shadow-red-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter italic uppercase"
            >
              GAME<span className="text-red-500 text-3xl not-italic">X</span>
              STORE
            </Link>
          </div>

          {/* Desktop Menyu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-medium">
              <Link
                href="/market"
                className={`${isActive("/market")} transition-colors duration-200`}
              >
                Mağaza
              </Link>
              <Link
                href="/accounts"
                className={`${isActive("/accounts")} transition-colors duration-200`}
              >
                Hesablar
              </Link>
              {/* Game Card Əlavəsi */}
              <Link
                href="/GameCard"
                className={`${isActive("/GameCard")} transition-colors duration-200`}
              >
                Game Cards
              </Link>
              <Link
                href="/balance"
                className={`${isActive("/balance")} transition-colors duration-200`}
              >
                Balans
              </Link>
              <Link
                href="/support"
                className={`${isActive("/support")} transition-colors duration-200`}
              >
                Dəstək
              </Link>
            </div>
          </div>

          {/* Sağ tərəf: Səbət və Auth */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/cart" className="relative group p-2">
              <ShoppingCart className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors" />

              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce shadow-[0_0_10px_rgba(239,68,68,0.5)] z-10">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <div className="flex items-center space-x-3">
              <Link href="/auth">
                <button className="px-5 py-2 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all text-sm font-bold">
                  Giriş
                </button>
              </Link>
            </div>
          </div>

          {/* Mobil Menyu Düyməsi */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-red-400" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-red-400">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menyu Açılışı */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-red-500/20 text-center py-4 space-y-2">
          <Link
            href="/market"
            className="block py-3 hover:bg-red-500/10"
            onClick={() => setIsOpen(false)}
          >
            Mağaza
          </Link>
          <Link
            href="/accounts"
            className="block py-3 hover:bg-red-500/10"
            onClick={() => setIsOpen(false)}
          >
            Hesablar
          </Link>
          {/* Mobil Game Card Əlavəsi */}
          <Link
            href="/GameCard"
            className="block py-3 hover:bg-red-500/10"
            onClick={() => setIsOpen(false)}
          >
            Game Cards
          </Link>
          <Link
            href="/balance"
            className="block py-3 hover:bg-red-500/10"
            onClick={() => setIsOpen(false)}
          >
            Balans
          </Link>
          <Link
            href="/auth"
            className="block py-3 text-red-400 font-bold uppercase"
            onClick={() => setIsOpen(false)}
          >
            Giriş / Qeydiyyat
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
