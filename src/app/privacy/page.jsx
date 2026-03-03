"use client";
import { ShieldCheck, Eye, Lock, Share2, Bell } from "lucide-react";

const PrivacyPage = () => {
  const policies = [
    {
      title: "Məlumatların Toplanması",
      icon: <Eye className="text-red-500" />,
      description:
        "Biz sizin adınız, e-poçt ünvanınız və əməliyyat tarixçəniz kimi məlumatları toplayırıq. Bu məlumatlar yalnız sizə daha yaxşı xidmət göstərmək və sifarişlərinizi çatdırmaq üçün istifadə olunur.",
    },
    {
      title: "Məlumatların Təhlükəsizliyi",
      icon: <Lock className="text-red-500" />,
      description:
        "Sizin şəxsi məlumatlarınız yüksək səviyyəli SSL şifrələmə sistemləri ilə qorunur. Kart məlumatlarınız heç bir halda bizim serverlərdə saxlanılmır və birbaşa bank sistemlərinə ötürülür.",
    },
    {
      title: "Üçüncü Tərəflərlə Paylaşım",
      icon: <Share2 className="text-red-500" />,
      description:
        "Biz sizin şəxsi məlumatlarınızı heç bir üçüncü tərəfə satmırıq və ya reklam məqsədilə paylaşmırıq. Məlumatlar yalnız hüquqi tələblər və ya xidmət təminatçıları (məsələn, banklar) ilə zəruri hallarda paylaşıla bilər.",
    },
    {
      title: "Kuki (Cookie) Siyasəti",
      icon: <ShieldCheck className="text-red-500" />,
      description:
        "Saytımızın performansını artırmaq və sizə uyğun oyun təklifləri göstərmək üçün kuki fayllarından istifadə edirik. Siz brauzer ayarlarınızdan kukiləri söndürə bilərsiniz.",
    },
    {
      title: "Bildirişlər və Yeniliklər",
      icon: <Bell className="text-red-500" />,
      description:
        "Yalnız sizin razılığınızla biz sizə yeni endirimlər və kampaniyalar barədə e-poçt bildirişləri göndərə bilərik. İstədiyiniz an bu xidmətdən imtina etmək hüququnuz var.",
    },
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Header Bölməsi */}
      <div className="bg-[#1e293b] py-20 border-b border-red-500/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-red-500">
            <ShieldCheck size={32} />
            <span className="font-black uppercase tracking-widest text-sm">
              Təhlükəsizlik Mərkəzi
            </span>
          </div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Məxfilik <span className="text-red-500">Siyasəti</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            Sizin məlumatlarınızın məxfiliyi bizim üçün prioritetdir.
            Məlumatlarınızı necə qoruduğumuzla tanış olun.
          </p>
        </div>
        {/* Arxa fon dekorasiyası */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 gap-12">
          {policies.map((policy, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 group">
              <div className="shrink-0">
                <div className="w-14 h-14 bg-[#1e293b] border border-gray-800 rounded-2xl flex items-center justify-center group-hover:border-red-500/50 transition-colors shadow-xl">
                  {policy.icon}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-black italic uppercase tracking-tight text-white group-hover:text-red-500 transition-colors">
                  {policy.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg italic">
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-20 p-8 bg-[#1e293b] border border-gray-800 rounded-[2.5rem] text-center">
          <p className="text-gray-400">
            Məxfilik siyasəti ilə bağlı suallarınız üçün{" "}
            <span className="text-white font-bold">
              privacy@oyunmagazasi.az
            </span>{" "}
            ünvanına müraciət edə bilərsiniz.
          </p>
          <p className="text-gray-600 text-xs mt-4 uppercase tracking-widest">
            Son Yenilənmə: 2026-cı il, Mart
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
