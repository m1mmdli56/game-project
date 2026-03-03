"use client";
import {
  FileText,
  ShieldAlert,
  CreditCard,
  RefreshCcw,
  UserCheck,
} from "lucide-react";

const TermsPage = () => {
  const sections = [
    {
      id: "general",
      title: "1. Ümumi Qaydalar",
      icon: <FileText className="text-red-500" />,
      content:
        "Bu saytdan istifadə edərək siz bizim bütün şərtlərimizi qəbul etmiş hesab olunursunuz. Sayt rəqəmsal oyun kodlarının satışı üçün nəzərdə tutulub və bütün xidmətlər onlayn həyata keçirilir.",
    },
    {
      id: "accounts",
      title: "2. İstifadəçi Hesabı",
      icon: <UserCheck className="text-red-500" />,
      content:
        "Qeydiyyat zamanı təqdim olunan məlumatların doğruluğuna istifadəçi özü məsuliyyət daşıyır. Hesabın təhlükəsizliyini təmin etmək və şifrəni gizli saxlamaq istifadəçinin öhdəliyindədir.",
    },
    {
      id: "payments",
      title: "3. Ödəniş və Qiymətləndirmə",
      icon: <CreditCard className="text-red-500" />,
      content:
        "Saytda göstərilən bütün qiymətlər AZN ilədir. Sayt rəhbərliyi qiymətləri öncədən xəbərdarlıq etmədən dəyişmək hüququnu özündə saxlayır. Səhvən edilən artıq ödənişlər istifadəçinin daxili balansına geri qaytarıla bilər.",
    },
    {
      id: "refunds",
      title: "4. Geri Qaytarılma Siyasəti",
      icon: <RefreshCcw className="text-red-500" />,
      content:
        "Rəqəmsal kodlar (CD-Key, E-pin və s.) çatdırıldıqdan sonra geri qaytarılmır və dəyişdirilmir. Kodun işləməməsi halında müştəri qəbz və ekran görüntüsü ilə 24 saat ərzində müraciət etməlidir.",
    },
    {
      id: "prohibitions",
      title: "5. Qadağalar",
      icon: <ShieldAlert className="text-red-500" />,
      content:
        "Saytın fəaliyyətinə mane olacaq hər hansı kiberhücum, saxta ödəniş cəhdləri və ya digər qanunsuz hərəkətlər istifadəçinin hesabının qalıcı olaraq bloklanmasına və hüquqi addımların atılmasına səbəb olacaqdır.",
    },
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen text-white pb-20">
      {/* Üst Başlıq */}
      <div className="bg-[#1e293b] py-16 border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-center md:text-left">
            İstifadəçi <span className="text-red-500">Şərtləri</span>
          </h1>
          <p className="text-gray-400 mt-4 text-center md:text-left">
            Son yenilənmə: 4 Mart 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-[#1e293b] border border-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 space-y-12">
            {sections.map((section) => (
              <div key={section.id} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold italic uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed pl-16 text-lg">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Qeyd Bölməsi */}
            <div className="mt-16 p-6 bg-[#0f172a] rounded-2xl border-l-4 border-red-500">
              <p className="text-sm text-gray-400 italic">
                * Bu şərtlərlə bağlı hər hansı sualınız yaranarsa, bizimlə{" "}
                <strong>info@oyunmagazasi.az</strong> ünvanı vasitəsilə əlaqə
                saxlaya bilərsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2026 Oyun Mağazası. Bütün hüquqlar qorunur.
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
