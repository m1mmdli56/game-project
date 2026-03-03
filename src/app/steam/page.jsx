"use client";
import { useState } from "react";
import {
  Wallet,
  PlusCircle,
  History,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

const WalletPage = () => {
  // Real layihədə bu məlumatlar backend-dən və ya context-dən gələcək
  const [balance, setBalance] = useState(150.5);

  const transactions = [
    {
      id: 1,
      title: "Valorant Points",
      amount: -12.0,
      date: "02.03.2024",
      type: "purchase",
    },
    {
      id: 2,
      title: "Balans Artımı (MilliÖN)",
      amount: 50.0,
      date: "01.03.2024",
      type: "deposit",
    },
    {
      id: 3,
      title: "Steam Gift Card",
      amount: -20.0,
      date: "28.02.2024",
      type: "purchase",
    },
    {
      id: 4,
      title: "PUBG Mobile UC",
      amount: -5.5,
      date: "25.02.2024",
      type: "purchase",
    },
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Başlıq Hissəsi */}
      <div className="bg-[#1e293b] py-16 border-b border-red-500/20">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Mənim <span className="text-red-500">Cüzdanım</span>
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            Balansınızı idarə edin və əməliyyatlara nəzarət edin.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sol: Balans Kartı */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-linear-to-br from-red-600 to-red-800 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <Wallet className="mb-4 opacity-50" size={32} />
                <p className="text-red-100 text-sm font-bold uppercase tracking-wider">
                  Cari Balans
                </p>
                <h2 className="text-4xl font-black mt-2">
                  {balance.toFixed(2)} AZN
                </h2>
              </div>
              {/* Dekorativ dairə */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <button className="w-full bg-white text-black hover:bg-red-600 hover:text-white transition-all py-4 rounded-2xl font-bold flex items-center justify-center gap-2 uppercase text-sm tracking-wider">
              <PlusCircle size={20} /> Balansı Artır
            </button>
          </div>

          {/* Sağ: Əməliyyat Tarixçəsi */}
          <div className="md:col-span-2">
            <div className="bg-[#1e293b] rounded-3xl border border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-800 flex items-center gap-3">
                <History className="text-red-500" size={20} />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Son Əməliyyatlar
                </h3>
              </div>

              <div className="divide-y divide-gray-800">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl ${tx.amount > 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
                      >
                        {tx.amount > 0 ? (
                          <ArrowDownLeft size={20} />
                        ) : (
                          <ArrowUpRight size={20} />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-gray-200">{tx.title}</p>
                        <p className="text-xs text-gray-500">{tx.date}</p>
                      </div>
                    </div>
                    <div
                      className={`font-black ${tx.amount > 0 ? "text-green-500" : "text-white"}`}
                    >
                      {tx.amount > 0
                        ? `+${tx.amount.toFixed(2)}`
                        : tx.amount.toFixed(2)}{" "}
                      AZN
                    </div>
                  </div>
                ))}
              </div>

              {transactions.length === 0 && (
                <div className="p-10 text-center text-gray-500">
                  Hələ ki, heç bir əməliyyat yoxdur.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
