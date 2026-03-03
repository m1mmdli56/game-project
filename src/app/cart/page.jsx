"use client";

import { useCart } from "@/context/CartContext";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  Zap,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Animasiya üçün

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceValue =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^\d.-]/g, ""))
        : item.price;
    return acc + (priceValue || 0) * (item.quantity || 1);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#0b0f1a] min-h-[70vh] flex flex-col items-center justify-center text-white font-sans">
        <ShoppingBag size={50} className="text-slate-800 mb-4 opacity-20" />
        <p className="text-slate-500 font-bold tracking-[5px] uppercase text-xs">
          Səbət boşdur
        </p>
        <Link
          href="/market"
          className="mt-8 border border-red-600 text-red-600 px-10 py-3 font-black rounded-lg hover:bg-red-600 hover:text-white transition-all uppercase italic text-[10px]"
        >
          Mağazaya dön
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f1a] min-h-screen text-white font-sans p-4 md:p-10 uppercase selection:bg-red-600/30">
      <div className="max-w-6xl mx-auto pt-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 border-l-4 border-red-600 pl-4">
          <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase">
            SƏBƏTİM
          </h1>
          <span className="text-slate-500 font-bold text-sm">
            / {cartItems.length} MƏHSUL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                layout // Siyahıdan element silinəndə digərlərinin yuxarı sürüşməsi üçün
                key={item.id}
                className="bg-[#161b2c] border border-white/5 flex items-center p-3 md:p-4 gap-4 group hover:border-red-600/30 transition-all rounded-xl shadow-lg"
              >
                {/* 1. ŞƏKİL */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black border border-white/10 shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={item.img || "/api/placeholder/80/80"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={item.title}
                  />
                </div>

                {/* 2. BAŞLIQ */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[11px] md:text-[14px] font-black tracking-wide truncate mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[8px] md:text-[9px] text-red-500 font-bold italic">
                    <Zap
                      size={10}
                      fill="currentColor"
                      className="animate-pulse"
                    />
                    ANINDA TƏSLİMAT
                  </div>
                </div>

                {/* 3. İDARƏETMƏ PANALİ (Animasiyalı Say) */}
                <div className="flex items-center gap-3 md:gap-8 h-11">
                  <div className="flex items-center bg-[#0b0f1a] border border-white/10 rounded-lg overflow-hidden h-full">
                    <button
                      onClick={() =>
                        item.quantity > 1 && updateQuantity?.(item.id, -1)
                      }
                      className={`px-3 h-full transition-colors flex items-center ${
                        item.quantity > 1
                          ? "hover:bg-red-600/20 text-slate-400 hover:text-white"
                          : "text-slate-700 cursor-not-allowed"
                      }`}
                    >
                      <Minus size={14} />
                    </button>

                    {/* Rəqəm Animasiyası */}
                    <div className="w-8 md:w-10 overflow-hidden relative h-full flex items-center justify-center border-x border-white/5">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={item.quantity}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="text-[13px] md:text-[15px] font-black absolute"
                        >
                          {item.quantity || 1}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    <button
                      onClick={() => updateQuantity?.(item.id, 1)}
                      className="px-3 h-full hover:bg-red-600/20 text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* QİYMƏT */}
                  <div className="flex items-center justify-end min-w-[85px] md:min-w-[120px] h-full">
                    <p className="text-[16px] md:text-[20px] font-black italic tracking-tighter leading-none">
                      {item.price}{" "}
                      <span className="text-[10px] text-red-600 not-italic ml-0.5">
                        AZN
                      </span>
                    </p>
                  </div>

                  {/* SİLMƏ */}
                  <div className="flex items-center justify-center h-full pl-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-600 hover:text-red-500 transition-all transform hover:rotate-12"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SAĞ TƏRƏF */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#161b2c] border-t-4 border-red-600 p-6 shadow-2xl rounded-b-2xl rounded-t-sm">
              <h2 className="text-[11px] font-black tracking-[4px] text-slate-500 mb-8 border-b border-white/5 pb-2">
                SİFARİŞİNİZ
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-400 uppercase">ARA CƏM</span>
                  <span className="tracking-tight text-slate-200">
                    {totalPrice.toFixed(2)} AZN
                  </span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-400 uppercase">XİDMƏT</span>
                  <span className="text-green-500 tracking-widest uppercase">
                    PULSUZ
                  </span>
                </div>
                <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-red-600 uppercase tracking-widest leading-none">
                      YEKUN
                    </span>
                  </div>
                  <motion.span
                    key={totalPrice}
                    initial={{ scale: 1.1, color: "#dc2626" }}
                    animate={{ scale: 1, color: "#fff" }}
                    className="text-3xl font-black italic tracking-tighter leading-none"
                  >
                    {totalPrice.toFixed(2)} <span className="text-sm">AZN</span>
                  </motion.span>
                </div>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 py-4 font-black text-[11px] tracking-[2px] rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-red-900/20">
                ÖDƏNİŞƏ KEÇ <ArrowRight size={18} />
              </button>
              {/* Loqolar */}
              <div className="mt-8 flex flex-col items-center gap-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-6 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    className="h-3 w-auto object-contain"
                    alt="Visa"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    className="h-4 w-auto object-contain"
                    alt="Mastercard"
                  />
                </div>
                <p className="text-[8px] text-slate-600 font-bold tracking-[2px] uppercase">
                  GÜVƏNLİ ÖDƏNİŞ 256-BIT SSL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
