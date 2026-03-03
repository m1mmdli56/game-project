"use client";
import { useState } from "react";

const topUpOptions = [
  {
    id: 1,
    game: "PUBG Mobile",
    amounts: [
      { uc: "60 UC", price: "1.80 AZN" },
      { uc: "325 UC", price: "8.50 AZN" },
      { uc: "660 UC", price: "16.50 AZN" },
      { uc: "1800 UC", price: "42.00 AZN" },
    ],
    img: "pubg.logo.jpg", // Oyunun logosu
    inputPlaceholder: "Player ID daxil edin",
  },
  {
    id: 2,
    game: "Free Fire",
    amounts: [
      { uc: "100 Diamonds", price: "2.10 AZN" },
      { uc: "310 Diamonds", price: "6.20 AZN" },
      { uc: "520 Diamonds", price: "10.40 AZN" },
    ],
    img: "FreeFire.logo.webp", // Oyunun logosu
    inputPlaceholder: "Player ID daxil edin",
  },
];

const TopUp = () => {
  const [selectedGame, setSelectedGame] = useState(topUpOptions[0]);
  const [selectedAmount, setSelectedAmount] = useState(null);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Başlıq */}
      <div className="bg-[#1e293b] py-16 border-b border-red-500/20 text-center">
        <h1 className="text-4xl font-black italic uppercase">
          Sürətli <span className="text-red-500">Balans</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Oyun daxili valyutanı seç və saniyələr içində yüklə.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* 1. Oyun Seçimi */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-red-500 pl-3 mb-6">
            1. Oyun Seçin
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {topUpOptions.map((game) => (
              <button
                key={game.id}
                onClick={() => {
                  setSelectedGame(game);
                  setSelectedAmount(null);
                }}
                className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-3 ${
                  selectedGame.id === game.id
                    ? "border-red-500 bg-red-500/10"
                    : "border-gray-800 bg-[#1e293b] hover:border-gray-600"
                }`}
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <img
                    src={game.img}
                    alt={game.game}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-bold">{game.game}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Məbləğ Seçimi */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-red-500 pl-3 mb-6">
            2. Paket Seçin
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {selectedGame.amounts.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedAmount(item)}
                className={`p-4 rounded-xl border flex justify-between items-center transition-all ${
                  selectedAmount?.uc === item.uc
                    ? "border-red-500 bg-red-500/20"
                    : "border-gray-800 bg-[#1e293b] hover:bg-gray-800"
                }`}
              >
                <span className="font-bold">{item.uc}</span>
                <span className="text-red-400 font-black">{item.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Ödəniş və Təsdiq */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-red-500 pl-3 mb-6">
            3. Məlumatlar
          </h2>
          <div className="bg-[#1e293b] p-6 rounded-3xl border border-gray-800 space-y-6">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">
                İstifadəçi ID
              </label>
              <input
                type="text"
                placeholder={selectedGame.inputPlaceholder}
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-all text-white"
              />
            </div>

            <div className="border-t border-gray-800 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Seçilən:</span>
                <span className="font-bold text-white">
                  {selectedAmount ? selectedAmount.uc : "---"}
                </span>
              </div>
              <div className="flex justify-between text-xl font-black">
                <span>Cəmi:</span>
                <span className="text-red-500">
                  {selectedAmount ? selectedAmount.price : "0.00 AZN"}
                </span>
              </div>
            </div>

            <button
              disabled={!selectedAmount}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all ${
                selectedAmount
                  ? "bg-red-600 hover:bg-red-700 shadow-[0_5px_20px_rgba(239,68,68,0.4)]"
                  : "bg-gray-700 cursor-not-allowed text-gray-500"
              }`}
            >
              İndi Yüklə
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopUp;
