"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Instagram,
  Twitter,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form göndərildi:", formData);
    alert("Mesajınız qəbul edildi! Tezliklə sizinlə əlaqə saxlayacağıq.");
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20 font-sans">
      {/* Üst Başlıq - Mərkəzlənmiş Versiya */}
      <div className="bg-[#1e293b] py-20 border-b border-red-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-none">
            Bizimlə <span className="text-red-500">Əlaqə</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto border-t md:border-t-0 md:border-l-2 border-red-500 pt-4 md:pt-0 md:pl-4 transition-all">
            Sualın var və ya dəstəyə ehtiyacın var? Bizə yaz, komandamız 24/7
            xidmətindədir.
          </p>
        </div>
        {/* Dekorativ element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] -mr-20 -mt-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sol Tərəf: Əlaqə Məlumatları */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
                <MessageSquare className="text-red-500" /> Əlaqə Vasitələri
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-[#1e293b] border border-gray-800 rounded-[2.5rem] hover:border-red-500/50 transition-all group">
                  <div className="p-4 bg-red-600/10 rounded-2xl text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-black tracking-widest">
                      E-poçt
                    </p>
                    <p className="text-lg font-bold">support@oyunmagazasi.az</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-[#1e293b] border border-gray-800 rounded-[2.5rem] hover:border-red-500/50 transition-all group">
                  <div className="p-4 bg-red-600/10 rounded-2xl text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-black tracking-widest">
                      Telefon
                    </p>
                    <p className="text-lg font-bold">+994 (55) 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-[#1e293b] border border-gray-800 rounded-[2.5rem] hover:border-red-500/50 transition-all group">
                  <div className="p-4 bg-red-600/10 rounded-2xl text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-black tracking-widest">
                      Ünvan
                    </p>
                    <p className="text-lg font-bold">
                      Bakı şəhəri, Nizami küç. 42
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosial Media */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500 mb-4">
                Bizi İzləyin
              </h4>
              <div className="flex gap-4">
                {[Instagram, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-[#1e293b] border border-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-gray-400 hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Tərəf: Əlaqə Formu */}
          <div className="bg-[#1e293b] p-8 md:p-12 rounded-[3rem] border border-gray-800 shadow-2xl">
            <h3 className="text-2xl font-black uppercase italic mb-8">
              Mesaj Göndər
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">
                  Adınız
                </label>
                <input
                  type="text"
                  placeholder="Məs: Əli Məmmədov"
                  className="w-full bg-[#0f172a] border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-white placeholder:text-gray-600"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">
                  E-poçt Ünvanınız
                </label>
                <input
                  type="email"
                  placeholder="ali@example.com"
                  className="w-full bg-[#0f172a] border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-white placeholder:text-gray-600"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">
                  Mesajınız
                </label>
                <textarea
                  rows="4"
                  placeholder="Sualınızı bura yazın..."
                  className="w-full bg-[#0f172a] border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600 transition-all resize-none text-white placeholder:text-gray-600"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-900/20 active:scale-95"
              >
                <Send size={18} /> Mesajı Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
