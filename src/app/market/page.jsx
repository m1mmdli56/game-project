"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";

const gamesData = [
  {
    id: 1,
    title: "Valorant Points",
    price: "12.00 AZN",
    cat: "PC",
    img: "/Valorant.webp",
  },
  {
    id: 2,
    title: "PUBG Mobile UC",
    price: "5.50 AZN",
    cat: "Mobile",
    img: "/Pubg.webp",
  },
  {
    id: 3,
    title: "Steam Gift Card",
    price: "20.00 AZN",
    cat: "PC",
    img: "/Steam.webp",
  },
  {
    id: 4,
    title: "Free Fire Diamonds",
    price: "3.20 AZN",
    cat: "Mobile",
    img: "/Fire.webp",
  },
  {
    id: 5,
    title: "PS Plus 1 Month",
    price: "18.00 AZN",
    cat: "Console",
    img: "/PSPlus.webp",
  },
  {
    id: 6,
    title: "Minecraft Java Ed.",
    price: "45.00 AZN",
    cat: "PC",
    img: "/Minecraft.webp",
  },
];

const Market = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart, cartItems } = useCart();

  const filteredGames =
    filter === "All"
      ? gamesData
      : gamesData.filter((game) => game.cat === filter);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Başlıq sahəsi */}
      <div className="bg-[#1e293b] py-16 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Oyun <span className="text-red-500">Mağazası</span>
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            Sürətli çatdırılma və rəsmi lisenziyalı rəqəmsal kodlar.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtrlər */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-[#1e293b] p-6 rounded-3xl border border-gray-800 sticky top-24">
              <h3 className="font-bold text-lg mb-6 border-l-4 border-red-500 pl-3 uppercase tracking-wider">
                Platforma
              </h3>
              <div className="space-y-3">
                {["All", "PC", "Mobile", "Console"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all font-bold ${
                      filter === cat
                        ? "bg-red-600 text-white shadow-lg"
                        : "bg-[#0f172a] hover:bg-gray-800 text-gray-400 border border-gray-800"
                    }`}
                  >
                    {cat === "All" ? "Bütün Oyunlar" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Oyun Kartları Paneli */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-[#1e293b] border border-gray-800 rounded-3xl overflow-hidden group hover:border-red-500/50 transition-all flex flex-col h-full"
                >
                  {/* Şəkil */}
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={game.img}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      {game.cat}
                    </div>
                  </div>

                  {/* Detallar */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-4 truncate italic">
                      {game.title}
                    </h3>

                    {/* Bu hissə qiymət və düyməni aşağı bərkidir */}
                    <div className="mt-auto pt-4 border-t border-gray-800">
                      <div className="flex flex-col mb-4">
                        <span className="text-[10px] text-gray-500 uppercase font-bold">
                          Qiymət
                        </span>
                        <span className="text-2xl font-black text-white">
                          {game.price}
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart(game)}
                        disabled={isInCart(game.id)}
                        className={`w-full h-12 flex items-center justify-center gap-2 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all ${
                          isInCart(game.id)
                            ? "bg-gray-800 text-green-500 cursor-default"
                            : "bg-white text-black hover:bg-red-600 hover:text-white"
                        }`}
                      >
                        {isInCart(game.id) ? (
                          <>
                            <Check size={16} /> Əlavə Edildi
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={16} /> Sifariş Et
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
      </div>
    </div>
  );
};

export default Market;
