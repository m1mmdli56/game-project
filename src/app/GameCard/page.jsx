"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check, ShieldCheck, Zap, Star } from "lucide-react";

const cardsData = [
  {
    id: 201,
    title: "Steam 10 USD",
    price: "18.00 AZN",
    value: "10$",
    color: "from-slate-700 to-slate-900",
  },
  {
    id: 202,
    title: "Steam 20 USD",
    price: "35.50 AZN",
    value: "20$",
    color: "from-blue-700 to-blue-900",
  },
  {
    id: 203,
    title: "Steam 50 USD",
    price: "88.00 AZN",
    value: "50$",
    color: "from-indigo-700 to-indigo-900",
  },
  {
    id: 204,
    title: "Steam 100 USD",
    price: "175.00 AZN",
    value: "100$",
    color: "from-purple-700 to-purple-900",
  },
];

const GameCardsPage = () => {
  const { addToCart, cartItems } = useCart();
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Üst Başlıq */}
      <div className="bg-[#1e293b] py-20 border-b border-red-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-none">
            Steam{" "}
            <span className="text-red-500 font-outline-2">Gift Cards</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Dünyanın ən böyük oyun platformasında minlərlə oyuna dərhal sahib
            ol. Rəqəmsal kodunuz anında çatdırılır.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-[#0f172a] px-4 py-2 rounded-full border border-gray-800">
              <Zap size={14} className="text-yellow-500" /> Anında Çatdırılma
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-[#0f172a] px-4 py-2 rounded-full border border-gray-800">
              <ShieldCheck size={14} className="text-green-500" /> Rəsmi
              Lisenziya
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="group bg-[#1e293b] border border-gray-800 rounded-[2.5rem] p-4 hover:border-red-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl"
            >
              {/* Kart Vizuallıq */}
              <div
                className={`h-48 rounded-4xl bg-linear-to-br ${card.color} relative overflow-hidden p-6 flex flex-col justify-between shadow-inner`}
              >
                <div className="flex justify-between items-start">
                  <Star className="text-white/20 fill-white/20" />
                  <span className="text-white/10 font-black text-4xl italic">
                    STEAM
                  </span>
                </div>
                <div className="relative z-10">
                  <p className="text-xs uppercase font-black tracking-widest text-white/60">
                    Gift Card
                  </p>
                  <h4 className="text-4xl font-black italic text-white drop-shadow-lg">
                    {card.value}
                  </h4>
                </div>
                {/* Dekorativ dairələr */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              </div>

              {/* Məzmun */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold truncate mb-6">
                  {card.title}
                </h3>

                <div className="mt-auto space-y-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
                      Qiymət
                    </span>
                    <span className="text-2xl font-black text-white">
                      {card.price}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(card)}
                    disabled={isInCart(card.id)}
                    className={`w-full py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all ${
                      isInCart(card.id)
                        ? "bg-green-600/10 text-green-500 border border-green-500/20"
                        : "bg-white text-black hover:bg-red-600 hover:text-white"
                    }`}
                  >
                    {isInCart(card.id) ? (
                      <span className="flex items-center justify-center gap-2">
                        <Check size={16} strokeWidth={3} /> Səbətdədir
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingCart size={16} /> Sifariş Et
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Təlimat Bölməsi */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-[#1e293b]/50 border border-gray-800 p-8 rounded-[2.5rem]">
          <h3 className="text-2xl font-black uppercase italic mb-6 text-center">
            Necə <span className="text-red-500">Aktiv Edilir?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-red-500 font-black text-3xl mb-2">01</div>
              <p className="text-sm text-gray-400">
                Kodu səbətə atın və ödənişi tamamlayın.
              </p>
            </div>
            <div>
              <div className="text-red-500 font-black text-3xl mb-2">02</div>
              <p className="text-sm text-gray-400">
                Kodunuz dərhal profilinizə göndəriləcək.
              </p>
            </div>
            <div>
              <div className="text-red-500 font-black text-3xl mb-2">03</div>
              <p className="text-sm text-gray-400">
                Steam tətbiqinə daxil olub kodu daxil edin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardsPage;
