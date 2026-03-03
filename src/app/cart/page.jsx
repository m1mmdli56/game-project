"use client";
import { useCart } from "@/context/CartContext";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace(" AZN", ""));
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#0f172a] min-h-screen flex flex-col items-center justify-center text-white p-4">
        <ShoppingBag size={80} className="text-gray-700 mb-6" />
        <h2 className="text-2xl font-bold mb-2">Səbətiniz boşdur</h2>
        <p className="text-gray-500 mb-8">Mağazaya qayıdıb nəsə əlavə edin.</p>
        <Link
          href="/market"
          className="bg-red-600 px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all"
        >
          Mağazaya Get
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0f172a] min-h-screen text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black italic mb-10 uppercase tracking-tight">
          SƏNİN <span className="text-red-500">SƏBƏTİN</span>
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e293b] p-4 rounded-2xl border border-gray-800 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0f172a] rounded-xl overflow-hidden border border-gray-700">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-red-400 font-black">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Ödəniş Hissəsi */}
        <div className="mt-12 bg-[#1e293b] p-8 rounded-3xl border border-red-500/20 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              Ümumi Məbləğ:
            </span>
            <span className="text-3xl font-black text-white">
              {totalPrice.toFixed(2)} AZN
            </span>
          </div>
          <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_5px_20px_rgba(239,68,68,0.3)]">
            Sifarişi Tamamla <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
