"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Aktiv linki tapmaq üçün

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Cari səhifənin yolunu götürür

  // Linklərin aktiv olub olmadığını yoxlayan funksiya
  const isActive = (path) =>
    pathname === path ? "text-red-500" : "hover:text-red-400";

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

          {/* Auth Düymələri */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth">
              <button className="px-5 py-2 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300">
                Giriş
              </button>
            </Link>
            <Link href="/auth">
              <button className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300">
                Qeydiyyat
              </button>
            </Link>
          </div>

          {/* Mobil Menyu Düyməsi */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-red-400 hover:bg-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menyu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-red-500/20 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            <Link
              href="/market"
              className="block px-3 py-4 border-b border-gray-700 hover:bg-red-500/10"
              onClick={() => setIsOpen(false)}
            >
              Mağaza
            </Link>
            <Link
              href="/accounts"
              className="block px-3 py-4 border-b border-gray-700 hover:bg-red-500/10"
              onClick={() => setIsOpen(false)}
            >
              Hesablar
            </Link>
            <Link
              href="/top-up"
              className="block px-3 py-4 border-b border-gray-700 hover:bg-red-500/10"
              onClick={() => setIsOpen(false)}
            >
              Balans
            </Link>
            <Link
              href="/auth"
              className="block px-3 py-4 text-red-400 font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Giriş / Qeydiyyat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
