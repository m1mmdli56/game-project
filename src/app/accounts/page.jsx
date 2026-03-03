"use client";
import { useState } from "react";

const accountsData = [
  {
    id: 1,
    game: "PUBG Mobile",
    rank: "Conqueror",
    skins: "M416 Glacier (Max), X-Suit",
    level: "78",
    price: "450.00 AZN",
    img: "PUBGMobile.jpg",
    region: "Global",
    status: "Premium",
  },
  {
    id: 2,
    game: "Valorant",
    rank: "Ascendant 3",
    skins: "25+ Premium Skins",
    level: "142",
    price: "120.00 AZN",
    img: "Valorant_Reyna.jpg",
    region: "EU",
    status: "Satılır",
  },
  {
    id: 3,
    game: "League of Legends",
    rank: "Diamond 1",
    skins: "110 Skins",
    level: "320",
    price: "250.00 AZN",
    img: "League.png",
    region: "TR",
    status: "Yeni",
  },
  {
    id: 4,
    game: "Brawl Stars",
    rank: "45K Trophies",
    skins: "Legendary Skins",
    level: "210",
    price: "85.00 AZN",
    img: "BrawlStars.webp",
    region: "Global",
    status: "Satılır",
  },
];

const Accounts = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Üst Header */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden border-b border-red-500/20">
        <div className="absolute inset-0 bg-linear-to-r from-red-900/20 to-blue-900/20 z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            VIP <span className="text-red-500">Hesablar</span>
          </h1>
          <p className="text-gray-400 mt-3 tracking-widest text-sm uppercase">
            Yüksək rütbəli və nadir əşyalı profillər
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accountsData.map((acc) => (
            <div
              key={acc.id}
              className="bg-[#1e293b] rounded-3xl border border-gray-800 overflow-hidden hover:border-red-600/50 transition-all duration-300 group"
            >
              {/* Kartın üst hissəsi (Şəkil və Status) */}
              <div className="relative h-44 bg-gray-700">
                <img
                  src={acc.img}
                  alt={acc.game}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x200?text=Hesab+Sekli")
                  }
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase italic">
                  {acc.status}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-[#1e293b] to-transparent">
                  <span className="bg-blue-600 text-[10px] px-2 py-1 rounded font-bold uppercase">
                    {acc.region}
                  </span>
                </div>
              </div>

              {/* Detallar */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-red-500 transition-colors">
                  {acc.game} Account
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0f172a] p-3 rounded-2xl border border-gray-800">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">
                      Rütbə
                    </p>
                    <p className="text-sm font-bold text-red-400">{acc.rank}</p>
                  </div>
                  <div className="bg-[#0f172a] p-3 rounded-2xl border border-gray-800">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">
                      Səviyyə
                    </p>
                    <p className="text-sm font-bold text-white">
                      {acc.level} LVL
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm italic">
                  <span className="text-red-500">★</span> {acc.skins}
                </div>

                <div className="flex items-center justify-between border-t border-gray-800 pt-5">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Qiymət
                    </p>
                    <p className="text-2xl font-black text-white">
                      {acc.price}
                    </p>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-2xl transition-all shadow-[0_5px_15px_rgba(239,68,68,0.3)]">
                    Detallar
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
export default Accounts;
