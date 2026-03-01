import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 border-t border-red-500/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Sayt Haqqında və Logo */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter italic text-white"
            >
              GAME<span className="text-red-500 text-3xl not-italic">X</span>
              STORE
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Azərbaycanın ən sürətli və etibarlı oyun hesabı və rəqəmsal məhsul
              platforması. Sizin üçün 7/24 xidmətdəyik.
            </p>
          </div>

          {/* Sürətli Keçidlər */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Mağaza
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/market"
                  className="hover:text-red-500 transition-colors"
                >
                  Bütün Oyunlar
                </Link>
              </li>
              <li>
                <Link
                  href="/accounts"
                  className="hover:text-red-500 transition-colors"
                >
                  UC & Balans
                </Link>
              </li>
              <li>
                <Link
                  href="/steam"
                  className="hover:text-red-500 transition-colors"
                >
                  Steam Cüzdan
                </Link>
              </li>
              <li>
                <Link
                  href="/discounts"
                  className="hover:text-red-500 transition-colors"
                >
                  Endirimlər
                </Link>
              </li>
            </ul>
          </div>

          {/* Dəstək */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Dəstək
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-red-500 transition-colors"
                >
                  FAQ (Sual-Cavab)
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-red-500 transition-colors"
                >
                  İstifadə Şərtləri
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-red-500 transition-colors"
                >
                  Məxfilik Siyasəti
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Bizimlə Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Bülleten Abunəliyi */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Yeniliklərdən Xəbərdar Ol
            </h4>
            <p className="text-xs mb-4">
              Ən yeni endirimlər və kampaniyalar üçün abunə olun.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="E-poçt ünvanınız"
                className="bg-[#1e293b] border border-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-red-500 w-full text-sm"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-colors text-sm font-bold">
                Qoşul
              </button>
            </form>
          </div>
        </div>

        {/* Alt Hissə - Sosial və Müəllif Hüquqları */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">
            © {new Date().getFullYear()}{" "}
            <span className="text-red-500 font-bold">GAMEXSTORE</span>. Bütün
            hüquqlar qorunur.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Buraya real sosial media linklərini əlavə edə bilərsən */}
            <a
              href="#"
              className="hover:text-red-500 transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors text-sm"
            >
              Discord
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors text-sm"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
