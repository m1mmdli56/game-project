"use client";
import { useState } from "react";

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

  const filteredGames =
    filter === "All"
      ? gamesData
      : gamesData.filter((game) => game.cat === filter);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Üst Başlıq */}
      <div className="bg-[#1e293b] py-12 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            Oyun <span className="text-red-500">Mağazası</span>
          </h1>
          <p className="text-gray-400 mt-2">
            İstədiyiniz platforma üzrə məhsulları tapın.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol Tərəf: Filtrlər */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800 sticky top-24">
              <h3 className="font-bold text-lg mb-4 border-l-4 border-red-500 pl-3 uppercase">
                Kateqoriya
              </h3>
              <div className="space-y-2">
                {["All", "PC", "Mobile", "Console"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      filter === cat
                        ? "bg-red-600 text-white font-bold"
                        : "bg-gray-800/50 hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    {cat === "All" ? "Hamısı" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Tərəf: Oyunlar */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-[#1e293b] border border-gray-800 rounded-2xl overflow-hidden group hover:border-red-500/50 transition-all shadow-xl"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={game.img}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold border border-white/10">
                      {game.cat}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors truncate">
                      {game.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-black text-red-400">
                        {game.price}
                      </span>
                      <button className="bg-white text-black font-bold px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white transition-all text-sm">
                        Sifariş Et
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
