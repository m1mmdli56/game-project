"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check, Timer, TrendingDown } from "lucide-react";

const dealsData = [
  {
    id: 101,
    title: "Valorant 2850 VP",
    oldPrice: "45.00 AZN",
    newPrice: "35.00 AZN",
    discount: "22%",
    img: "/Valorant.webp",
    timeLeft: "05:42:10",
  },
  {
    id: 102,
    title: "PUBG 660 UC",
    oldPrice: "18.50 AZN",
    newPrice: "14.90 AZN",
    discount: "19%",
    img: "/Pubg.webp",
    timeLeft: "02:15:00",
  },
  {
    id: 103,
    title: "Playstation Network 50$",
    oldPrice: "95.00 AZN",
    newPrice: "82.00 AZN",
    discount: "13%",
    img: "/PSPlus.webp",
    timeLeft: "12:00:00",
  },
];

const DealsPage = () => {
  const { addToCart, cartItems } = useCart();
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-900/30 to-[#0f172a] py-20 border-b border-red-500/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
            <Timer size={14} /> Məhdud Zaman
          </div>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter">
            Günün <span className="text-red-500">Endirimləri</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Ən populyar oyun kodları və hədiyyə kartları üçün qaçırılmaz
            qiymətlər. Vaxt bitmədən sifariş et!
          </p>
        </div>
        {/* Arxa fon işığı */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e293b] border-2 border-red-500/20 rounded-[2.5rem] overflow-hidden group hover:border-red-500 transition-all duration-500 flex flex-col relative"
            >
              {/* Endirim Etiketi */}
              <div className="absolute top-5 right-5 z-20 bg-red-600 text-white font-black px-4 py-2 rounded-2xl shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                -{item.discount}
              </div>

              {/* Şəkil */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md py-2 px-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-red-400 uppercase flex items-center gap-2">
                    <Timer size={12} /> Bitiş:
                  </span>
                  <span className="text-sm font-mono font-bold text-white">
                    {item.timeLeft}
                  </span>
                </div>
              </div>

              {/* Detallar */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black mb-6 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 line-through font-bold">
                        {item.oldPrice}
                      </span>
                      <span className="text-3xl font-black text-white flex items-center gap-2">
                        {item.newPrice}
                        <TrendingDown size={24} className="text-green-500" />
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    disabled={isInCart(item.id)}
                    className={`w-full py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                      isInCart(item.id)
                        ? "bg-gray-800 text-green-500"
                        : "bg-white text-black hover:bg-red-600 hover:text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                    }`}
                  >
                    {isInCart(item.id) ? (
                      <>
                        <Check size={18} strokeWidth={3} /> Səbətdədir
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={18} /> İndi Al
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
