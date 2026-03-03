import React from "react";
import Link from "next/link";

const popularGames = [
  {
    id: 1,
    title: "EA Sports FC 24",
    category: "Futbol / İdman",
    price: "79.99 AZN",
    image: "EA.jpg",
    discount: "20%",
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    category: "RPG / Open World",
    price: "45.00 AZN",
    image: "Cyberpunk.jpg",
    discount: null,
  },
  {
    id: 3,
    title: "Elden Ring",
    category: "Souls-like / Action",
    price: "55.50 AZN",
    image: "Elden.jpg",
    discount: "15%",
  },
  {
    id: 4,
    title: "Hogwarts Legacy",
    category: "Məcarə / Sehr",
    price: "65.00 AZN",
    image: "Hogwarts.jpg",
    discount: null,
  },
];

const Home = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      {/* 1. Hero Section (Böyük Banner) */}
      <section className="relative bg-[#1e293b] py-20 md:py-32 border-b border-red-500/10">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-dotted.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic leading-none">
            OYUN DÜNYASININ <span className="text-red-500">MƏRKƏZİ</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Ən yeni oyunlar, rəqəmsal kodlar və oyun hesabları ən sərfəli
            qiymətlərlə. Sürətli çatdırılma və 7/24 dəstək.
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Link
              href="/market"
              className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-lg font-bold shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300"
            >
              Mağazaya Get
            </Link>
            <Link
              href="/accounts"
              className="px-8 py-3 rounded-full border border-gray-600 hover:border-red-500 hover:text-red-400 text-lg font-medium transition-all duration-300"
            >
              Hesablara Bax
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Populyar Oyunlar Bölməsi */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Populyar <span className="text-red-500">Oyunlar</span>
            </h2>
            <Link
              href="/market"
              className="text-red-400 hover:text-red-500 font-medium flex items-center gap-2 transition-colors"
            >
              Hamısına bax
              <span>→</span>
            </Link>
          </div>

          {/* Oyun Kartları Grid-i */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {popularGames.map((game) => (
              <div
                key={game.id}
                className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 group"
              >
                {/* Oyun Şəkli və Endirim Etiketi */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {game.discount && (
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      -{game.discount}
                    </span>
                  )}
                </div>

                {/* Oyun Məlumatları */}
                <div className="p-5">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {game.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white truncate group-hover:text-red-400 transition-colors">
                    {game.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-black text-white">
                      {game.price}
                    </span>
                    <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-red-600 text-sm font-bold transition-colors">
                      Sətın Al
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Kiçik Xüsusiyyətlər Bölməsi */}
      <section className="py-12 bg-[#1e293b] border-y border-red-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-red-500 text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Sürətli Çatdırılma</h4>
              <p className="text-gray-400 text-sm">
                Rəqəmsal kodlar anında e-poçtunuza göndərilir.
              </p>
            </div>
            <div className="p-6">
              <div className="text-red-500 text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold mb-2">Təhlükəsiz Ödəniş</h4>
              <p className="text-gray-400 text-sm">
                Bütün ödənişlər şifrələnmiş şəkildə qorunur.
              </p>
            </div>
            <div className="p-6">
              <div className="text-red-500 text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold mb-2">7/24 Dəstək</h4>
              <p className="text-gray-400 text-sm">
                Hər hansı bir sualınız yaranarsa, biz buradayıq.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
