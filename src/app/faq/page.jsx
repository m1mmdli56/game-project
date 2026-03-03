"use client";
import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

const faqData = [
  {
    question: "Sifariş etdiyim kod nə vaxt gəlir?",
    answer:
      "Sifarişləriniz sistem tərəfindən avtomatik işlənilir və ən geci 5-15 dəqiqə ərzində qeydiyyatdan keçdiyiniz e-poçt ünvanına və ya şəxsi kabinetinizə göndərilir.",
    icon: <Zap size={20} className="text-yellow-500" />,
  },
  {
    question: "Ödəniş üsulları hansılardır?",
    answer:
      "Hazırda MilliÖN, eManat terminalları, həmçinin bütün yerli bank kartları (Visa/Mastercard) vasitəsilə balansınızı artıra bilərsiniz.",
    icon: <ShieldCheck size={20} className="text-green-500" />,
  },
  {
    question: "Aldığım kodu qaytara bilərəmmi?",
    answer:
      "Rəqəmsal məhsullar (kodlar) təkistifadəlik olduğu üçün aktivasiya edildikdən və ya çatdırıldıqdan sonra geri qaytarılma mümkün deyil. Lakin kodda problem yaranarsa, dəstək komandamız dərhal kömək edir.",
    icon: <MessageCircle size={20} className="text-blue-500" />,
  },
  {
    question: "Balansımı artırdım, amma görünmür, nə etməliyəm?",
    answer:
      "Bəzən bank əməliyyatları səbəbindən 1-2 dəqiqə ləngimə ola bilər. Əgər 10 dəqiqə ərzində balans yenilənməzsə, lütfən ödəniş qəbzini saxlayaraq canlı dəstək ilə əlaqə saxlayın.",
    icon: <HelpCircle size={20} className="text-red-500" />,
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Header */}
      <div className="bg-[#1e293b] py-20 border-b border-red-500/20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Sualın <span className="text-red-500">Var?</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Ən çox verilən suallara buradan cavab tapa bilərsiniz.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-12">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span className="font-bold text-lg">{item.question}</span>
                </div>
                <ChevronDown
                  className={`text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-red-500" : ""}`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Canlı Dəstək Bölməsi */}
        <div className="mt-16 p-8 bg-linear-to-r from-red-600/10 to-transparent border border-red-500/20 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black uppercase italic">
              Cavab tapa bilmədiniz?
            </h3>
            <p className="text-gray-400 mt-1">
              Canlı dəstək komandamız 24/7 xidmətinizdədir.
            </p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-red-900/20">
            Dəstəyə Yaz
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
