"use client";
import { useState } from "react";
// WhatsApp yerinə MessageCircle, Discord üçün daxili ikon olmadığı üçün MessageSquare istifadə edirik
import { MessageCircle, MessageSquare, Send, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Aldığım oyun kodu nə vaxt çatdırılır?",
    answer:
      "Rəqəmsal kodlar və balans yükləmələri adətən 1-5 dəqiqə ərzində avtomatik olaraq tamamlanır.",
  },
  {
    question: "Ödəniş üsullarınız hansılardır?",
    answer:
      "MilliÖN, eManat, m10 və bütün yerli bank kartları (Visa/Mastercard) ilə ödəniş edə bilərsiniz.",
  },
  {
    question: "Səhv ID daxil etsəm nə olur?",
    answer:
      "Təəssüf ki, balans yükləmələri anında baş verdiyi üçün geri qaytarılmır. Zəhmət olmasa ID-ni iki dəfə yoxlayın.",
  },
  {
    question: "Hesab alarkən zəmanət verirsinizmi?",
    answer:
      "Bəli, satdığımız bütün VIP hesablar 24 saatlıq yoxlama zəmanəti ilə təmin olunur.",
  },
];

const Support = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Üst Header */}
      <div className="bg-linear-to-b from-red-900/20 to-[#0f172a] py-20 text-center border-b border-red-500/10">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Sənə Necə <span className="text-red-500">Kömək</span> Edək?
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Suallarınızın cavabını aşağıda tapa bilərsiniz və ya birbaşa bizimlə
          əlaqə saxlaya bilərsiniz.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Sol Tərəf: FAQ (Sual-Cavab) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-red-500 pl-4 mb-8">
            Tez-tez Verilən Suallar
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-gray-600"
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <div className="p-5 flex justify-between items-center">
                <span className="font-bold text-gray-200">{faq.question}</span>
                <ChevronDown
                  className={`text-red-500 transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`}
                />
              </div>
              {activeFaq === index && (
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4 animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sağ Tərəf: Əlaqə Formu */}
        <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-800 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Bizə Mesaj Yaz</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase text-gray-500 font-bold mb-2 block">
                  Adınız
                </label>
                <input
                  type="text"
                  placeholder="Məs: Əli"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 focus:border-red-500 outline-none text-sm transition-all"
                />
              </div>
              <div>
                <label className="text-xs uppercase text-gray-500 font-bold mb-2 block">
                  E-poçt
                </label>
                <input
                  type="email"
                  placeholder="ali@mail.com"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 focus:border-red-500 outline-none text-sm transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase text-gray-500 font-bold mb-2 block">
                Mövzu
              </label>
              <select className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 focus:border-red-500 outline-none text-sm transition-all appearance-none">
                <option>Sifariş problemi</option>
                <option>Ödəniş haqqında</option>
                <option>Hesab şikayəti</option>
                <option>Digər</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase text-gray-500 font-bold mb-2 block">
                Mesajınız
              </label>
              <textarea
                rows="4"
                placeholder="Probleminizi qısa izah edin..."
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 focus:border-red-500 outline-none text-sm transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_5px_20px_rgba(239,68,68,0.3)]">
              Mesajı Göndər
            </button>
          </form>

          {/* Sosial Dəstək Linkləri */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex justify-around">
            {/* WhatsApp */}
            <a
              href="https://wa.me/numaran"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <MessageCircle className="w-8 h-8 mb-1 text-gray-400 group-hover:text-green-500 group-hover:scale-110 transition-all" />
              <span className="text-[10px] text-gray-500 font-bold uppercase group-hover:text-red-500">
                WhatsApp
              </span>
            </a>

            {/* Discord */}
            <a href="#" className="flex flex-col items-center group">
              <MessageSquare className="w-8 h-8 mb-1 text-gray-400 group-hover:text-indigo-500 group-hover:scale-110 transition-all" />
              <span className="text-[10px] text-gray-500 font-bold uppercase group-hover:text-red-500">
                Discord
              </span>
            </a>

            {/* Telegram */}
            <a href="#" className="flex flex-col items-center group">
              <Send className="w-8 h-8 mb-1 text-gray-400 group-hover:text-blue-500 group-hover:scale-110 transition-all" />
              <span className="text-[10px] text-gray-500 font-bold uppercase group-hover:text-red-500">
                Telegram
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
