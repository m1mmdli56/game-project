"use client";
import { useState } from "react";
import { User, Mail, Lock, LogIn, UserPlus } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center p-4">
      {/* Arxa fon işıq effekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full"></div>

      <div className="bg-[#1e293b] w-full max-w-md rounded-3xl border border-gray-800 shadow-2xl overflow-hidden relative z-10">
        {/* Seçim Düymələri (Tabs) */}
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-5 font-bold transition-all flex items-center justify-center gap-2 ${
              isLogin
                ? "text-red-500 bg-red-500/5"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <LogIn size={18} /> Giriş
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-5 font-bold transition-all flex items-center justify-center gap-2 ${
              !isLogin
                ? "text-red-500 bg-red-500/5"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <UserPlus size={18} /> Qeydiyyat
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black italic uppercase tracking-tight">
              {isLogin ? "XOŞ" : "YENİ"}{" "}
              <span className="text-red-500">
                {isLogin ? "GƏLDİN" : "HESAB"}
              </span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              {isLogin
                ? "Oyun dünyasına daxil olmaq üçün məlumatlarını yaz."
                : "Bizə qoşul və üstünlüklərdən yararlan."}
            </p>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Tam adınız"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl py-3 pl-12 pr-4 focus:border-red-500 outline-none text-sm transition-all text-white"
                />
              </div>
            )}

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="email"
                placeholder="E-poçt ünvanınız"
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl py-3 pl-12 pr-4 focus:border-red-500 outline-none text-sm transition-all text-white"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="password"
                placeholder="Şifrəniz"
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl py-3 pl-12 pr-4 focus:border-red-500 outline-none text-sm transition-all text-white"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-red-500 transition-colors"
                >
                  Şifrəni unutmusan?
                </a>
              </div>
            )}

            <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_5px_20px_rgba(239,68,68,0.3)] mt-4">
              {isLogin ? "Daxil Ol" : "Qeydiyyatı Tamamla"}
            </button>
          </form>

          {/* Sosial Giriş */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-800 w-full"></div>
              <span className="bg-[#1e293b] px-4 text-xs text-gray-500 uppercase font-bold absolute">
                və ya
              </span>
            </div>

            <button className="w-full py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="w-5 h-5"
                alt="Google"
              />
              Google ilə davam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
